import React, { useEffect, useState } from 'react';
import { useOrderStore } from 'utils/state/store/Order.js';

const Comments = () => {
  const { setField, order } = useOrderStore(); 
  const [comments, setComments] = useState('');

  useEffect(() => {
    console.log(order);
  }, [comments]);

  const handleCommentsChange = (e) => {
    const value = e.target.value;
    setComments(value);
    setField('comments', value); 
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
