import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function ShippingDetails({
  deliveryNameError,
  deliveryPhoneError,
  setErrors,
  errors,
}) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const handleDeliveryEmailChange = (e) => {
    const value = e.target.value;
    setField('deliveryEmail', value);
  };

  const handleDeliveryNameChange = (e) => {
    const value = e.target.value;
    setField('deliveryName', value);
    setErrors({ ...errors, deliveryName: null });
  };

  const handleDeliveryPhoneChange = (e) => {
    const value = e.target.value;
    setField('deliveryPhone', value);
    setErrors({ ...errors, deliveryPhone: null });
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 md:pr-2">
          <label className="vessel_input_label">
            Delivery Email
            <input
              type="email"
              onChange={handleDeliveryEmailChange}
              value={order.deliveryEmail}
              className="vessel_input"
            />
          </label>
        </div>

        <div className="w-full md:w-1/3 md:px-2">
          <label className="vessel_input_label">
            Delivery Name
            <input
              type="text"
              onChange={handleDeliveryNameChange}
              value={order.deliveryName}
              className={`vessel_input ${deliveryNameError ? 'error' : ''}`}
            />
          </label>
          {deliveryNameError && (
            <div className="error-message">{deliveryNameError}</div>
          )}
        </div>

        <div className="w-full md:w-1/3 md:pl-2">
          <label className="vessel_input_label">
            Delivery Phone Number
            <input
              type="tel"
              onChange={handleDeliveryPhoneChange}
              value={order.deliveryPhone}
              className={`vessel_input ${deliveryPhoneError ? 'error' : ''}`}
            />
          </label>
          {deliveryPhoneError && (
            <div className="error-message">{deliveryPhoneError}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShippingDetails;
