import React from 'react';
import { useOrderStore } from 'utils/state/store/Order.js';

const Brand = () => {
  const { setField } = useOrderStore(); 
  const handleBrandChange = (e) => {
    const value = e.target.value;
    setField('brand', value); 
  };
  return (
    <div className="flex mb-4">
      <div className="w-full lg:mr-4 md:mr-4">
        <label className="vessel_input_label">
          Brand Name:
          <input
            type="text"
            onChange={handleBrandChange}
            className="vessel_input"
          />
        </label>
      </div>
    </div>
  )
}

export default Brand