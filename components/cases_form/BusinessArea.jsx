import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const Product = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const handlebusinessArea = (e) => {
    const value = e.target.value;
    setField('businessArea', value);
    setErrors({ ...errors, businessArea: null });
  };

  const area = [
    'Shrink Sleeving',
    'Blank Cans LTL',
    'Blank Cans FTL',
    'PSL',
    'Printed Cans',
    'Digital Printed Cans',
    'Ends',
    'Supplies',
    'Dunnage',
    'Other/General Feedback',
  ];

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Functional Area *
        <select
          value={newcase.businessArea || ''}
          onChange={handlebusinessArea}
          className={`vessel_input ${error ? 'error' : ''}`}
        >
          <option value="" disabled>
            Select Functional Area
          </option>
          {area.map((x) => (
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
