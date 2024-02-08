import React, { useState, useEffect } from 'react';
import { useOrderStore } from 'utils/state/store/Order.js';
import locations from '@data/locationsObject';

const CanSize = () => {
  const { setField, order } = useOrderStore(); 
  const [canSizeOptions, setCanSizeOptions] = useState([]);
  const handleCanSizeChange = (e) => {
    const value = e.target.value;
    setField('canSize', value); 
  };

  useEffect(() => {
    console.log(order);
  }, [order.canSize]);

  useEffect(() => {
    const locationData = locations[order.location];
    if (locationData && locationData.warehouse) {
      setCanSizeOptions(locationData.warehouse.canFormats);
      console.log('CanSizeOptions:', locationData.warehouse.canFormats);
    }
  }, [order.location]);

  return (
    <div className="w-full mr-6">
      <label className="vessel_input_label">
        Can Size:
        <select
          value={order.canSize || ""}
          onChange={handleCanSizeChange}
          className="vessel_input"
        >
          <option value="" disabled>Select Can Size</option>
          {canSizeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CanSize;