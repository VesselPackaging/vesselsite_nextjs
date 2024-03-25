import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function ProductVarnishReorder({
  productNameError,
  varnishError,
  reorderExpectationsError,
  setErrors,
  errors,
}) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    setField('brand', value);
    setErrors({ ...errors, brand: null });
  };

  const handleVarnishChange = (e) => {
    const value = e.target.value;
    setField('varnish', value);
    setErrors({ ...errors, varnish: null });
  };

  const handleReorderExpectationsChange = (e) => {
    const value = e.target.value;
    setField('reorderExpectations', value);
    setErrors({ ...errors, reorderExpectations: null });
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 md:pr-2">
          <label className="vessel_input_label">
            Product / Brand Name
            <input
              type="text"
              onChange={handleProductNameChange}
              value={order.brand}
              className={`vessel_input ${productNameError ? 'error' : ''}`}
            />
          </label>
          {productNameError && (
            <div className="error-message">{productNameError}</div>
          )}
        </div>

        <div className="w-full md:w-1/3 md:px-2">
          <label className="vessel_input_label">
            Varnish
            <select
              onChange={handleVarnishChange}
              value={order.varnish}
              className={`vessel_input ${varnishError ? 'error' : ''}`}
            >
              <option value="">Select a varnish</option>
              <option value="Glossy">Glossy</option>
              <option value="Matte">Matte</option>
            </select>
          </label>
          {varnishError && <div className="error-message">{varnishError}</div>}
        </div>

        <div className="w-full md:w-1/3 md:pl-2">
          <label className="vessel_input_label">
            Reorder Expectations
            <select
              onChange={handleReorderExpectationsChange}
              value={order.reorderExpectations}
              className={`vessel_input ${reorderExpectationsError ? 'error' : ''}`}
            >
              <option value="">Select an expectation</option>
              <option value="First Run">First Run</option>
              <option value="Re-Order">Re-Order</option>
              <option value="Last Run">Last Run</option>
            </select>
          </label>
          {reorderExpectationsError && (
            <div className="error-message">{reorderExpectationsError}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductVarnishReorder;
