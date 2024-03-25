import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function Contact({ businessError, nameError, emailError, setErrors, errors }) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const handleBusinessNameChange = (e) => {
    const value = e.target.value;
    setField('businessName', value);
    setErrors({ ...errors, businessName: null });
  };
  const handleContactNameChange = (e) => {
    const value = e.target.value;
    setField('contactName', value);
    setErrors({ ...errors, contactName: null });
  };
  const handleContactEmailChange = (e) => {
    const value = e.target.value;
    setField('contactEmail', value);
    setErrors({ ...errors, contactEmail: null });
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 md:pr-2">
          <label className="vessel_input_label">
            Business Name
            <input
              type="text"
              onChange={handleBusinessNameChange}
              value={order.businessName}
              className={`vessel_input ${businessError ? 'error' : ''}`}
            />
          </label>
          {businessError && (
            <div className="error-message">{businessError}</div>
          )}
        </div>

        <div className="w-full md:w-1/3 md:px-2">
          <label className="vessel_input_label">
            Contact Name
            <input
              type="text"
              onChange={handleContactNameChange}
              value={order.contactName}
              className={`vessel_input ${nameError ? 'error' : ''}`}
            />
          </label>
          {nameError && <div className="error-message">{nameError}</div>}
        </div>

        <div className="w-full md:w-1/3 md:pl-2">
          <label className="vessel_input_label">
            Contact Email
            <input
              type="email"
              onChange={handleContactEmailChange}
              value={order.contactEmail}
              className={`vessel_input ${emailError ? 'error' : ''}`}
            />
          </label>
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
      </div>
    </>
  );
}

export default Contact;
