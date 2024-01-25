import React, { useState } from 'react';

const Brand = ({onBrandChange}) => {
    const [Brand, setBrand] = useState('');
    const handleBrandChange = (e) => {
        const value = e.target.value;
        setBrand(value);
        onBrandChange({ brand: value });
    };
  return (
    <div className="flex mb-4">
    <div className="w-full mr-4">
      <label className="vessel_input_label">
        Brand:
        <input
          type="text"
          value={Brand}
          onChange={handleBrandChange}
          className="vessel_input"
        />
      </label>
    </div>
  </div>
  )
}

export default Brand