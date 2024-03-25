import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function PalletHeightLinerType({
  palletHeightError,
  linerTypeError,
  setErrors,
  errors,
}) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const handlePalletHeightChange = (e) => {
    const value = e.target.value;
    setField('palletHeight', value);
    setErrors({ ...errors, palletHeight: null });
  };

  const handleLinerTypeChange = (e) => {
    const value = e.target.value;
    setField('liner', value);
    setErrors({ ...errors, liner: null });
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-2">
          <label className="vessel_input_label">
            Pallet Height
            <input
              type="number"
              min="16"
              max="21"
              onChange={handlePalletHeightChange}
              value={order.palletHeight}
              className={`vessel_input ${palletHeightError ? 'error' : ''}`}
            />
          </label>
          {palletHeightError && (
            <div className="error-message">{palletHeightError}</div>
          )}
        </div>

        <div className="w-full md:w-1/2 md:pl-2">
          <label className="vessel_input_label">
            Liner Type
            <select
              onChange={handleLinerTypeChange}
              value={order.liner}
              className={`vessel_input ${linerTypeError ? 'error' : ''}`}
            >
              <option value="">Select a liner type</option>
              <option value="Legacy Epoxy">Legacy Epoxy</option>
              <option value="BPANI Gen 2">BPANI Gen 2</option>
              <option value="No Preference">No Preference</option>
            </select>
          </label>
          {linerTypeError && (
            <div className="error-message">{linerTypeError}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default PalletHeightLinerType;
