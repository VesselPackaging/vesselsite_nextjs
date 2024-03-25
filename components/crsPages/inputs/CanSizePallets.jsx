import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function CanSizePallets({
  EoNumberError,
  canSizeError,
  numberOfPalletsError,
  setErrors,
  errors,
}) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const handleCanSkuChange = (e) => {
    const value = e.target.value;
    setField('eoNumber', value);
    setErrors({ ...errors, eoNumber: null });
  };

  const handleCanSizeChange = (e) => {
    const value = e.target.value;
    setField('canSize', value);
    setErrors({ ...errors, canSize: null });
  };

  const handleNumberOfPalletsChange = (e) => {
    const value = e.target.value;
    setField('numberOfPallets', value);
    setErrors({ ...errors, numberOfPallets: null });
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 md:pr-2">
          <label className="vessel_input_label">
            Can SKU / EO Number
            <input
              type="text"
              onChange={handleCanSkuChange}
              value={order.eoNumber}
              className={`vessel_input ${EoNumberError ? 'error' : ''}`}
            />
          </label>
          {EoNumberError && (
            <div className="error-message">{EoNumberError}</div>
          )}
        </div>

        <div className="w-full md:w-1/3 md:px-2">
          <label className="vessel_input_label">
            Can Size
            <select
              onChange={handleCanSizeChange}
              value={order.canSize}
              className={`vessel_input ${canSizeError ? 'error' : ''}`}
            >
              <option value="">Select a can size</option>
              <option value="296ml SLEEK">296ml SLEEK</option>
              <option value="355ml SLEEK">355ml SLEEK</option>
              <option value="355ml STD">355ml STD</option>
              <option value="473ml STD">473ml STD</option>
              <option value="568ml / 19.2oz">568ml / 19.2oz</option>
            </select>
          </label>
          {canSizeError && <div className="error-message">{canSizeError}</div>}
        </div>

        <div className="w-full md:w-1/3 md:pl-2">
          <label className="vessel_input_label">
            Number of Pallets
            <input
              type="number"
              min="0"
              onChange={handleNumberOfPalletsChange}
              value={order.numberOfPallets}
              className={`vessel_input ${numberOfPalletsError ? 'error' : ''}`}
            />
          </label>
          {numberOfPalletsError && (
            <div className="error-message">{numberOfPalletsError}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default CanSizePallets;
