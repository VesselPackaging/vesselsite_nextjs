import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useTranslations } from 'next-intl';


const AddressInput = ({ onAddressChange }) => {
  const t = useTranslations('Forms');
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
    { value: 'WY', label: 'Wyoming' },
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
    { value: 'YT', label: 'Yukon' },
  ];

  const handleAddressChange = (field, value) => {
    const newAddress = { ...address, [field]: value };
    setAddress(newAddress);
  };

  // Call onAddressChange whenever address changes
  useEffect(() => {
    const formattedAddress = `${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.country}, ${address.stateProvince}, ${address.zipCode}`;
    onAddressChange(formattedAddress);
  }, [address]);
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold">{t('AddressInformation')}</h2>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">
          {t('AddressLine1')}
        </label>
        <input
          type="text"
          value={address.addressLine1}
          onChange={(e) => handleAddressChange('addressLine1', e.target.value)}
          className="form-input p-2 text-sm"
        />
      </div>

      <div className="w-full">
        <label className="block text-xs font-medium text-gray-600">
          {t('AddressLine2')}
        </label>
        <input
          type="text"
          value={address.addressLine2}
          onChange={(e) => handleAddressChange('addressLine2', e.target.value)}
          className="form-input p-2 text-sm"
        />
      </div>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">{t('City')}</label>
        <input
          type="text"
          value={address.city}
          onChange={(e) => handleAddressChange('city', e.target.value)}
          className="form-input p-2 text-sm"
        />
      </div>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">
          {t('Country')}
        </label>
        <Select
          options={countries}
          value={countries.find((country) => country.value === address.country)}
          onChange={(option) => handleAddressChange('country', option.value)}
          className="form-select text-sm"
        />
      </div>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">
          {address.country === 'USA' ? 'State' : 'Province'}
        </label>
        <Select
          options={address.country === 'USA' ? states : provinces}
          value={(address.country === 'USA' ? states : provinces).find(
            (state) => state.value === address.stateProvince,
          )}
          onChange={(option) =>
            handleAddressChange('stateProvince', option.value)
          }
          className="form-select text-sm"
        />
      </div>

      <div className="">
        <label className="block text-xs font-medium text-gray-600">
          {t('ZipCode')}
        </label>
        <input
          type="text"
          value={address.zipCode}
          onChange={(e) => handleAddressChange('zipCode', e.target.value)}
          className="form-input p-2 text-sm"
        />
      </div>
    </div>
  );
};

export default AddressInput;
