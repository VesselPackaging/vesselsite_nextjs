import React, { useState } from 'react';

const CopackerEmail = ({ onCopackerEmailChange }) => {
  const [copackerEmail, setCopackerEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleCopackerEmailChange = (e) => {
    const value = e.target.value;
    setCopackerEmail(value);

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    setIsValidEmail(isValid || value === ''); // Allow empty input

    // Pass the email value only if it's valid
    if (isValid || value === '') {
      onCopackerEmailChange({ CopackerEmail: value });
    }
  };

  return (
    <div className="flex mb-4">
      <div className="w-full mr-4">
        <label className="vessel_input_label">
          Copacker Email (if applicable)
          <input
            type="text"
            value={copackerEmail}
            onChange={handleCopackerEmailChange}
            className={`vessel_input ${isValidEmail ? '' : 'border-red-500'}`}
          />
          {!isValidEmail && copackerEmail.trim() !== '' && (
            <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
          )}
        </label>
      </div>
    </div>
  );
};

export default CopackerEmail;