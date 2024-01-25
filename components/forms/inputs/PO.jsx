import React, { useState } from 'react';

const PO = ({onPoChange}) => {
    const [Po, setPo] = useState('');
    const handlePoChange = (e) => {
        const value = e.target.value;
        setPo(value);
        onPoChange({ PO: value });
    };
  return (
    <div className="flex mb-4">
    <div className="w-full mr-4">
      <label className="vessel_input_label">
        PO:
        <input
          type="text"
          value={Po}
          onChange={handlePoChange}
          className="vessel_input"
        />
      </label>
    </div>
  </div>
  )
}

export default PO