import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const Priority = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherInput, setOtherInput] = useState('');

  const handlenatureOfComplaint = (e) => {
    const value = e.target.value;
    setIsOtherSelected(value === 'Other');
    if (value !== 'Other') {
      setField('natureOfComplaint', value);
      setErrors({ ...errors, natureOfComplaint: null });
      setOtherInput('');
    }
  };

  const handleOtherInput = (e) => {
    const value = e.target.value;
    setErrors({ ...errors, natureOfComplaint: null });
    setOtherInput(value);
    setField('natureOfComplaint', value);
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
    'Customer At Fault',
    'Supplier Fault',
    'Archive',
    'Other',
  ];

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Root of Complaint *
        <select
          value={isOtherSelected ? 'Other' : newcase.natureOfComplaint || ''}
          onChange={handlenatureOfComplaint}
          className={`vessel_input ${error ? 'error' : ''}`}
        >
          <option value="" disabled>
            Select Root of Complaint
          </option>
          {complaint.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </label>
      {isOtherSelected && (
        <input
          type="text"
          placeholder="Please specify"
          value={otherInput}
          onChange={handleOtherInput}
          className={`vessel_input text-sm ${error ? 'error' : ''}`}
        />
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Priority;
