// DeliveryAddress.jsx
import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function DeliveryAddress({ shipToAddressError, setErrors, errors }) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const handleDeliveryAddressChange = (e) => {
    const value = e.target.value;
    setField('shipToAddress', value);
    setErrors({ ...errors, shipToAddress: null });
  };

  return (
    <div className="w-full">
      <label className="vessel_input_label">
        Delivery Address
        <textarea
          onChange={handleDeliveryAddressChange}
          className={`vessel_input ${shipToAddressError ? 'error' : ''}`}
        />
      </label>
      {shipToAddressError && (
        <div className="error-message">{shipToAddressError}</div>
      )}
    </div>
  );
}

export default DeliveryAddress;
