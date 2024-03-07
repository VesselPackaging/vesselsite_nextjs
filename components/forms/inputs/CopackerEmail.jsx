import React, { useState } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const CopackerEmail = () => {
  const { setField, order } = useOrderStore(); 
  const [copackerEmail, setCopackerEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const t = useTranslations('Forms');

  const handleCopackerEmailChange = (e) => {
    const value = e.target.value;
    setCopackerEmail(value);

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    setIsValidEmail(isValid || value === ''); // Allow empty input

    // Pass the email value only if it's valid
    if (isValid || value === '') {
      setField('copackerEmail', value); 
    }
  };

  return (
    <div className="flex">
      <div className="w-full">
        <label className="vessel_input_label">
          {t('CopackerEmail')}
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
