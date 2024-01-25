import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const AddressInput = ({ onAddressChange }) => {
  const [address, setAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    stateProvince: '',
    zipCode: '',
  });

  const countries = [
    { value: 'USA', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
  ];

  const states = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' }
  ];
  

  const provinces = [
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador' },
    { value: 'NS', label: 'Nova Scotia' },
    { value: 'NT', label: 'Northwest Territories' },
    { value: 'NU', label: 'Nunavut' },
    { value: 'ON', label: 'Ontario' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'QC', label: 'Quebec' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'YT', label: 'Yukon' }
  ];
  

  const handleCountryChange = (selectedOption) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      country: selectedOption.value,
      stateProvince: '', // Reset stateProvince when the country changes
    }));
  };

  const handleStateProvinceChange = (selectedOption) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      stateProvince: selectedOption.value,
    }));
  };

  // Call onAddressChange whenever address changes
  useEffect(() => {
    onAddressChange(address);
  }, [address]);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold">Address Information</h2>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">Address Line 1</label>
        <input
          type="text"
          value={address.addressLine1}
          onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, addressLine1: e.target.value }))}
          className="form-input p-2 text-sm"
        />
      </div>

      <div className="w-full">
        <label className="block text-xs font-medium text-gray-600">Address Line 2</label>
        <input
          type="text"
          value={address.addressLine2}
          onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, addressLine2: e.target.value }))}
          className="form-input p-2 text-sm"
        />
      </div>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">City</label>
        <input
          type="text"
          value={address.city}
          onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, city: e.target.value }))}
          className="form-input p-2 text-sm"
        />
      </div>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">Country</label>
        <Select
          options={countries}
          value={countries.find((option) => option.value === address.country)}
          onChange={handleCountryChange}
          className="form-select text-sm"
        />
      </div>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">{address.country === 'USA' ? 'State' : 'Province'}</label>
        <Select
          options={address.country === 'USA' ? states : provinces}
          value={address.country === 'USA' ? states.find((option) => option.value === address.stateProvince) : provinces.find((option) => option.value === address.stateProvince)}
          onChange={handleStateProvinceChange}
          className="form-select text-sm"
        />
      </div>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">ZIP Code</label>
        <input
          type="text"
          value={address.zipCode}
          onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, zipCode: e.target.value }))}
          className="form-input p-2 text-sm"
        />
      </div>
    </div>
  );
};

export default AddressInput;
