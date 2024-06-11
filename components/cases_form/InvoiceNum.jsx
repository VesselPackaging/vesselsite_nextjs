import React, { useState, useEffect } from 'react';
import { useCaseStore } from '../../utils/state/store/NewCase';

const InvoiceNum = () => {
  const { setField, newcase } = useCaseStore();
  const handleInvoiceNum = (e) => {
    const value = e.target.value;
    setField('invoice', value);
  };

  return (
    <div className="w-9/10 ">
      <label className="vessel_input_label">
        Invoice #
        <input
          type="text"
          onChange={handleInvoiceNum}
          className="vessel_input"
        />
      </label>
    </div>
  );
};

export default InvoiceNum;
