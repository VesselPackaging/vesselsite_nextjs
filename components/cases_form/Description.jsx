import React, { useEffect, useState } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const Description = ({ error, setErrors, errors }) => {
  const { setField, newcase } = useCaseStore();
  const HandleDescriptionChange = (e) => {
    const value = e.target.value;
    setField('description', value);
    setErrors({ ...errors, description: null });
  };

  return (
    <div className="flex mb-4 bg-grey-below-900">
      <div className="w-full">
        <label className="vessel_input_label">
          Description *
          <textarea
            value={newcase.description || ''}
            onChange={HandleDescriptionChange}
            className={`vessel_input !h-20 resize-none ${error ? 'error' : ''}`}
          />
        </label>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Description;
