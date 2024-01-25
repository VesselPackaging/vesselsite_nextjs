import React, { useState, useEffect } from 'react';
import locations from '@data/locationsObject';

const CanSize = ({onCanSizeChange, location}) => {
    const [CanSize, setCanSize] = useState('');
    const [canSizeOptions, setCanSizeOptions] = useState([]);
    const handleCanSizeChange = (e) => {
        const value = e.target.value;
        setCanSize(value);
        onCanSizeChange({ CanSize: value });
    };

    useEffect(() => {
      // Fetch the supplies based on location
      const locationData = locations[location];
      if (locationData && locationData.warehouse) {
        setCanSizeOptions(locationData.warehouse.canFormats);
        console.log('CanSizeOptions:', locationData.warehouse.canFormats);
      }
    }, [location]);
  return (
    <div className="w-full mr-4">
    <label className="vessel_input_label">
      Can Size:
      <select
              value={CanSize}
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
  )
}

export default CanSize