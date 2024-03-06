import React, { useEffect, useState } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';

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
    <div className="flex mb-4 bg-grey-below-900">
      <div className="w-full">
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
