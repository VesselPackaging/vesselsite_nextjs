import React, { useState, useEffect } from 'react';
import { useFtlStore } from '../../utils/state/store/Ftl';

const OrderType = ({ error, setErrors, errors }) => {
  const { setField } = useFtlStore();
  const { ftl } = useFtlStore();
  const handleOrderType = (e) => {
    const value = e.target.value;
    setField('orderType', value);
    setErrors({ ...errors, product: null });
  };

  const service = ['Cans Only', 'Ends Only', 'Cans & Ends'];

  return (
    <div className="w-full">
      <label className="vessel_input_label">
        Order Type
        <select
          value={ftl.product || ''}
          onChange={handleOrderType}
          className={`vessel_input ${error ? 'error' : ''}`}
        >
          <option value="" disabled>
            Select Order Type
          </option>
          {service.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default OrderType;
