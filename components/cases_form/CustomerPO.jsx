import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const CustomerPO = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const handleCustomerPO = (e) => {
    const value = e.target.value;
    setField('customerPO', value);
    setErrors({ ...errors, caseOwner: null });
  };

  return (
    <div className="w-9/10 ">
      <label className="vessel_input_label">
        Customer PO #
        <input
          type="text"
          onChange={handleCustomerPO}
          className={`vessel_input ${error ? 'error' : ''}`}
        />
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CustomerPO;
