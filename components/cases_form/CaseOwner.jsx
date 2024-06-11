import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const CaseOwner = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const handlecaseowner = (e) => {
    const value = e.target.value;
    setField('caseOwner', value);
    setField('responsiblePerson', value);
    setErrors({ ...errors, caseOwner: null });
  };

  const caseOwner = [
    'Marlee MacDonald',
    'Louis Shingler',
    'Andres Ramos',
    'Derick Neumeier',
    'Matt Hume',
    'Katrina Dickson',
    'Essaddik Fathallah',
  ];

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Case Owner
        <select
          value={newcase.caseOwner || ''}
          onChange={handlecaseowner}
          className={`vessel_input ${error ? 'error' : ''}`}
        >
          <option value="" disabled>
            Select Case Owner
          </option>
          {caseOwner.map((x) => (
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

export default CaseOwner;
