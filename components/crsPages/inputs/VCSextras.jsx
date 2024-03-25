'use client';
import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function VCSextras({
  locationError,
  totalPalletCountError,
  shippingError,
  descriptionError,
  setErrors,
  errors,
}) {
  const setField = usePrintedStore((state) => state.setField);
  const order = usePrintedStore((state) => state.printedvcs);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setField('location', value);
    setErrors({ ...errors, location: null });
  };

  const handleTotalPalletCountChange = (e) => {
    const value = e.target.value;
    setField('totalPalletCount', value);
    setErrors({ ...errors, totalPalletCount: null });
  };

  const handleShippingChange = (e) => {
    const value = e.target.value;
    setField('Shipping', value);
    setErrors({ ...errors, Shipping: null });
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setField('description', value);
    setErrors({ ...errors, description: null });
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 md:pr-2">
        <label className="vessel_input_label">
          Location
          <select
            name="location"
            onChange={handleLocationChange}
            value={order.location}
            className={`vessel_input ${locationError ? 'error' : ''}`}
          >
            <option value="">Select location</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Calgary">Calgary</option>
            <option value="Mississauga">Mississauga</option>
          </select>
        </label>
        {locationError && <div className="error-message">{locationError}</div>}
      </div>
      <div className="w-full md:w-1/2 md:pr-2">
        <label className="vessel_input_label">
          Total Pallet Count
          <input
            type="number"
            name="totalPalletCount"
            onChange={handleTotalPalletCountChange}
            value={order.totalPalletCount}
            className={`vessel_input ${totalPalletCountError ? 'error' : ''}`}
          />
        </label>
        {totalPalletCountError && (
          <div className="error-message">{totalPalletCountError}</div>
        )}
      </div>
      <div className="w-full md:w-1/2 md:pr-2">
        <label className="vessel_input_label">
          Shipping
          <select
            name="Shipping"
            onChange={handleShippingChange}
            value={order.Shipping}
            className={`vessel_input ${shippingError ? 'error' : ''}`}
          >
            <option value="">Select shipping option</option>
            <option value="Customer Arranged">Customer Arranged</option>
            <option value="Vessel to Arrange">Vessel to Arrange</option>
          </select>
        </label>
        {shippingError && <div className="error-message">{shippingError}</div>}
      </div>
      <div className="w-full md:w-1/2 md:pr-2">
        <label className="vessel_input_label">
          Description
          <textarea
            name="description"
            onChange={handleDescriptionChange}
            value={order.description}
            className={`vessel_input ${descriptionError ? 'error' : ''}`}
          />
        </label>
        {descriptionError && (
          <div className="error-message">{descriptionError}</div>
        )}
      </div>
    </div>
  );
}

export default VCSextras;
