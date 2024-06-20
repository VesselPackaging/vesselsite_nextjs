import React, { useEffect, useRef } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const Description = ({ error, setErrors, errors }) => {
  const textareaRef = useRef(null);
  const { setField, newcase } = useCaseStore();

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setField('description', value);
    setErrors({ ...errors, description: null });
    resizeTextarea();
  };

  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset the height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scrollHeight
    }
  };

  useEffect(() => {
    resizeTextarea(); // Call resize on initial render and when newcase.description changes
  }, [newcase.description]);

  return (
    <div className="flex mb-4 bg-grey-below-900">
      <div className="w-full">
        <label className="vessel_input_label">
          Description *
          <textarea
            ref={textareaRef}
            value={newcase.description || ''}
            onChange={handleDescriptionChange}
            className={`vessel_input resize-none ${error ? 'error' : ''}`}
            style={{ overflow: 'hidden', minHeight: '4rem' }} // Set initial min height
            rows="1"
          />
        </label>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Description;
