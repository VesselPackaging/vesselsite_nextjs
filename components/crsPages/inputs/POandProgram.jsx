import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function POProgramType({
  poNumberError,
  programError,
  orderTypeError,
  setErrors,
  errors,
}) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const handlePONumberChange = (e) => {
    const value = e.target.value;
    setField('PO', value);
    setErrors({ ...errors, PO: null });
  };

  const handleProgramChange = (e) => {
    const value = e.target.value;
    setField('vesselProgram', value);
    setErrors({ ...errors, vesselProgram: null });
  };

  const handleOrderTypeChange = (e) => {
    const value = e.target.value;
    setField('orderType', value);
    setErrors({ ...errors, orderType: null });

    if (value === 'Cans Only') {
      setField('palletsOfEnds', '');
      setField('endIncising', '');
      setField('endTooling', '');
      setField('endLiner', '');
      setField('endNotes', '');
    }

    if (value === 'Ends Only') {
      setField('brand', '');
      setField('varnish', '');
      setField('reorderExpectations', '');
      setField('eoNumber', '');
      setField('canSize', '');
      setField('numberOfPallets', '');
      setField('palletHeight', '');
      setField('liner', '');
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 md:pr-2">
          <label className="vessel_input_label">
            Customer PO Number
            <input
              type="text"
              onChange={handlePONumberChange}
              value={order.PO}
              className={`vessel_input ${poNumberError ? 'error' : ''}`}
            />
          </label>
          {poNumberError && (
            <div className="error-message">{poNumberError}</div>
          )}
        </div>

        <div className="w-full md:w-1/3 md:px-2">
          <label className="vessel_input_label">
            Vessel Program
            <select
              onChange={handleProgramChange}
              value={order.vesselProgram}
              className={`vessel_input ${programError ? 'error' : ''}`}
            >
              <option value="">Select a program</option>
              <option value="Standard FTL">Standard FTL</option>
              <option value="Fulfill from Warehouse">
                Fulfill from Warehouse
              </option>
              <option value="Store & Release Printed Cans">
                Store & Release Printed Cans
              </option>
            </select>
          </label>
          {programError && <div className="error-message">{programError}</div>}
        </div>

        <div className="w-full md:w-1/3 md:pl-2">
          <label className="vessel_input_label">
            Order Type
            <select
              onChange={handleOrderTypeChange}
              value={order.orderType}
              className={`vessel_input ${orderTypeError ? 'error' : ''}`}
            >
              <option value="">Select an order type</option>
              <option value="Cans Only">Cans Only</option>
              <option value="Ends Only">Ends Only</option>
              <option value="Cans & Ends">Cans & Ends</option>
            </select>
          </label>
          {orderTypeError && (
            <div className="error-message">{orderTypeError}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default POProgramType;
