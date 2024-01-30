import React, { useState } from 'react';
import { useOrderStore } from 'utils/state/store/Order.js';
import DatePickerSection from '../inputs/DatePickerSection';

const ShippingDetails = () => {
  const { setField, order } = useOrderStore(); 
  const [dunnageType, setDunnageType] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  const handleDunnageTypeChange = (e) => {
    const value = e.target.value;
    setDunnageType(value);
    setField('dunnageType', value); 
  };

  const handleDeliveryMethodChange = (e) => {
    const value = e.target.value;
    setDeliveryMethod(value);
    setField('deliveryMethod', value); 
  };

  return (
    <>
      <div className="max-w-screen-md mx-auto bg-grey-below-900">
        <h2 className="text-left text-vp-blue mb-4">Shipping Details</h2>
        <div className="flex flex-column-below-900">
          <div className="w-1/3 width-100-below-900">
            <DatePickerSection />
          </div>

          <div className="w-1/3 mx-2 width-100-below-900">
            <label className="vessel_input_label">
              Delivery method:
              <select
                value={deliveryMethod}
                onChange={handleDeliveryMethodChange}
                className="vessel_input"
              >
                <option value="" disabled>Select Delivery method</option>
                <option value="vesselToArrange">Vessel to arrange</option>
                <option value="customerToPickup">Customer to pickup</option>
                <option value="customerToArrange">Customer to arrange</option>
              </select>
            </label>
          </div>

          <div className="w-1/3 mx-2 width-100-below-900">
            <label className="vessel_input_label">
              Dunnage type:
              <select
                value={dunnageType}
                onChange={handleDunnageTypeChange}
                className="vessel_input"
              >
                <option value="" disabled>Select Dunnage type</option>
                <option value="2-Way (Plastic)">2-Way (Plastic)</option>
                <option value="1-Way (Wooden)">1-Way (Wooden)</option>
              </select>
            </label>
            <p className='text-sm text-vp-yellow'><a href='https://uploads-ssl.webflow.com/5cf6ee7465fae562145a7a17/6531af8fe5afb00b2f1d09d7_Vessel%202023%20Dunnage%20Program%20-%20FINAL%20-%20October%2019%202023%20Update.pdf'>Policy guide</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
