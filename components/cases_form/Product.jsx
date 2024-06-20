import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const Product = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const handleproduct = (e) => {
    const value = e.target.value;
    setField('product', value);
    setErrors({ ...errors, product: null });
  };

  const prod = [
    '250ml Slim',
    '355ml Sleek',
    '355ml STD',
    '473ml STD',
    '296ml Sleek',
    '375ml STD',
    '473ml Matte Black',
    '8.4oz Slim',
    '200 Ends',
    '202 Ends',
    'Paktech 4pk',
    'Paktech 6pk',
    'Sleek/Slim Trays',
    'Standard Trays',
    'Dunnage',
    'Service',
  ];

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Product *
        <select
          value={newcase.product || ''}
          onChange={handleproduct}
          className={`vessel_input ${error ? 'error' : ''}`}
        >
          <option value="" disabled>
            Select Product
          </option>
          {prod.map((x) => (
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

export default Product;
