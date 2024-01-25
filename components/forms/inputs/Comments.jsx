import React, { useState } from 'react';

const Comments = ({ onCommentsChange }) => {
  const [comments, setComments] = useState('');

  const handleCommentsChange = (e) => {
    const value = e.target.value;
    setComments(value);
    onCommentsChange({ Comments: value });
  };

  return (
    <div className="flex mb-4">
      <div className="w-full mr-4">
        <label className="vessel_input_label">
          Comments:
          <textarea
            value={comments}
            onChange={handleCommentsChange}
            className="vessel_input h-20 resize-none"
          />
        </label>
      </div>
    </div>
  );
};

export default Comments;
