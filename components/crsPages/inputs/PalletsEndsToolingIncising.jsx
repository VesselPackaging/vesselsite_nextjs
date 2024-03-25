import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function PalletsEndsToolingIncising({
  palletsOfEndsError,
  endToolingError,
  endIncisingError,
  setErrors,
  errors,
}) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const handlePalletsOfEndsChange = (e) => {
    const value = e.target.value;
    setField('palletsOfEnds', value);
    setErrors({ ...errors, palletsOfEnds: null });
  };

  const handleEndToolingChange = (e) => {
    const value = e.target.value;
    setField('endTooling', value);
    setErrors({ ...errors, endTooling: null });
  };

  const handleEndIncisingChange = (e) => {
    const value = e.target.value;
    setField('endIncising', value);
    setErrors({ ...errors, endIncising: null });
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 md:pr-2">
          <label className="vessel_input_label">
            Pallets of Ends
            <input
              type="number"
              min="0"
              onChange={handlePalletsOfEndsChange}
              value={order.palletsOfEnds}
              className={`vessel_input ${palletsOfEndsError ? 'error' : ''}`}
            />
          </label>
          {palletsOfEndsError && (
            <div className="error-message">{palletsOfEndsError}</div>
          )}
        </div>

        <div className="w-full md:w-1/3 md:px-2">
          <label className="vessel_input_label">
            End Tooling
            <select
              onChange={handleEndToolingChange}
              value={order.endTooling}
              className={`vessel_input ${endToolingError ? 'error' : ''}`}
            >
              <option value="">Select a tooling type</option>
              <option value="202 LOE">202 LOE</option>
              <option value="202 Superend">202 Superend</option>
            </select>
          </label>
          {endToolingError && (
            <div className="error-message">{endToolingError}</div>
          )}
        </div>

        <div className="w-full md:w-1/3 md:pl-2">
          <label className="vessel_input_label">
            End Incising
            <select
              onChange={handleEndIncisingChange}
              value={order.endIncising}
              className={`vessel_input ${endIncisingError ? 'error' : ''}`}
            >
              <option value="">Select an incising type</option>
              <option value="Blank">Blank</option>
              <option value="RECYCLABLE">RECYCLABLE</option>
              <option value="QC5">QC5</option>
              <option value="QC20">QC20</option>
              <option value="10 STATE USA">10 STATE USA</option>
            </select>
          </label>
          {endIncisingError && (
            <div className="error-message">{endIncisingError}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default PalletsEndsToolingIncising;
