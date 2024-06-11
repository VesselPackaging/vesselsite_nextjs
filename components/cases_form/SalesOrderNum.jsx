import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const SalesOrderNum = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const handleSalesOrderNum = (e) => {
    const value = e.target.value;
    setField('salesOrder', value);
    setErrors({ ...errors, salesOrder: null });
  };

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Sales Order # *
        <input
          type="text"
          onChange={handleSalesOrderNum}
          className={`vessel_input ${error ? 'error' : ''}`}
        />
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default SalesOrderNum;
