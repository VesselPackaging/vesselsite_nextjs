import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const ContactName = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const handlcontactName = (e) => {
    const value = e.target.value;
    setField('contactName', value);
    setErrors({ ...errors, contactName: null });
  };

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Contact Name *
        <input
          type="text"
          onChange={handlcontactName}
          className={`vessel_input ${error ? 'error' : ''}`}
        />
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ContactName;
