import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const Cost = () => {
  const { setField, newcase } = useCaseStore();
  const handlecost = (e) => {
    const value = e.target.value;
    setField('cost', value);
  };

  return (
    <div className="w-full mr-6">
      <label className="vessel_input_label">
        Cost ($)
        <input
          type="number"
          onChange={handlecost}
          step="0.01"
          className="vessel_input"
        />
      </label>
    </div>
  );
};

export default Cost;
