import React, { useState, useEffect } from 'react';
import { useFtlStore } from '../../utils/state/store/Ftl';

const CustomerPO = () => {
  const { setField } = useFtlStore();
  const handleCustomerPO = (e) => {
    const value = e.target.value;
    setField('customerPO', value);
  };

  return (
    <div className="w-full">
      <label className="vessel_input_label">
        Customer PO #
        <input
          type="text"
          onChange={handleCustomerPO}
          className="vessel_input"
        />
      </label>
    </div>
  );
};

export default CustomerPO;
