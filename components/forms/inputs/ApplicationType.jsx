import React from 'react';
import { useOrderStore } from 'utils/state/store/Order.js';

const ApplicationType = () => {
  const { setField } = useOrderStore(); 
  const handleApplicationChange = (e) => {
    const value = e.target.value;
    setField('application', value); 
  };
  return (
    <div className="flex mb-4">
      <div className="w-full">
      <label className="vessel_input_label">
          Application Type:
            <select className="vessel_input" onChange={handleApplicationChange}>
            <option value="">Select Application Type</option>
            <option value="PSL">PSL</option>
            <option value="Shrink Sleeve">Shrink Sleeve</option>
            </select>
        </label>
      </div>
    </div>
  )
}

export default ApplicationType
