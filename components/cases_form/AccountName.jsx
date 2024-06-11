import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const AccountName = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const handleaccountName = (e) => {
    const value = e.target.value;
    setField('accountName', value);
    setErrors({ ...errors, accountName: null });
  };

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Account Name *
        <input
          type="text"
          onChange={handleaccountName}
          className={`vessel_input ${error ? 'error' : ''}`}
        />
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default AccountName;
