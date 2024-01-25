import React, { useState } from 'react';

const BrandSizeQty = ({ onBrandSizeQtyChange }) => {
  const [brand, setBrand] = useState('');
  const [canSize, setCanSize] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleBrandChange = (e) => {
    const value = e.target.value;
    setBrand(value);
    onBrandSizeQtyChange({ brand: value, canSize, quantity });
  };

  const handleCanSizeChange = (e) => {
    const value = e.target.value;
    setCanSize(value);
    onBrandSizeQtyChange({ brand, canSize: value, quantity });
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
    onBrandSizeQtyChange({ brand, canSize, quantity: value });
  };

  return (
    <div className="flex mb-4">
      <div className="w-1/3 mr-4">
        <label className="block text-black font-roboto">
          Brand Name:
          <input
            type="text"
            value={brand}
            onChange={handleBrandChange}
            className="vessel_input"
          />
        </label>
      </div>
      <div className="w-1/3 mr-4">
      <label className="block text-black font-roboto">
        Can Size:
        <select
          value={canSize}
          onChange={handleCanSizeChange}
          className="vessel_input"
        >
          <option value="">Select Can Size</option>
          <option value="473ml STD">473ml STD</option>
          <option value="355ml STD">355ml STD</option>
          <option value="355ml Sleek">355ml Sleek</option>
          <option value="250ml Slim">250ml Slim</option>
        </select>
      </label>
    </div>
      <div className="w-1/3">
        <label className="block text-black font-roboto">
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="vessel_input"
          />
        </label>
      </div>
    </div>
  );
};

export default BrandSizeQty;
