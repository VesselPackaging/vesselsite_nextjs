import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const Priority = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const handlenatureOfComplaint = (e) => {
    const value = e.target.value;
    setField('natureOfComplaint', value);
    setErrors({ ...errors, caseOwner: null });
  };

  const complaint = [
    'Quality Issue',
    'Customer Service',
    'Ordering',
    'Shipping',
    'Accounting/Billing',
    'GFX/Labels',
    'Inventory',
    'Positive Feedback',
    'Negative Feedback',
    'Other',
    'Customer At Fault',
    'Supplier Fault',
    'Archive',
  ];

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Nature of complaint
        <select
          value={newcase.natureOfComplaint || ''}
          onChange={handlenatureOfComplaint}
          className={`vessel_input ${error ? 'error' : ''}`}
        >
          <option value="" disabled>
            Select Nature of Complaint
          </option>
          {complaint.map((x) => (
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

export default Priority;
