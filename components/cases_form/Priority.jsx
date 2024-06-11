import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const Priority = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const handlePriority = (e) => {
    const value = e.target.value;
    setField('priority', value);
    setErrors({ ...errors, priority: null });
  };

  const severety = ['High', 'Medium', 'Low'];

  return (
    <div className="w-9/10 mr-6">
      <label className="vessel_input_label">
        Priority *
        <select
          value={newcase.priority || ''}
          onChange={handlePriority}
          className={`vessel_input ${error ? 'error' : ''}`}
        >
          <option value="" disabled>
            Select Priority
          </option>
          {severety.map((x) => (
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
