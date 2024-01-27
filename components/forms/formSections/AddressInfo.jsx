import React, { useState } from 'react';
import AddressInput from '../inputs/AddressInput';
#TODO update addressInfo to global state

const AddressInfo = ({ onAddressDetailsChange, addresses }) => {
  const [selectedOption, setSelectedOption] = useState('selectAddress');
  const [address, setAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    stateProvince: '',
    zipCode: '',
  });

  const handleOptionChange = (e) => {
    const newSelectedOption = e.target.value;
    setSelectedOption(newSelectedOption);
  
    // Set the address state based on the selected option
    if (newSelectedOption !== 'enterNew') {
      const selectedAddress = addresses.find((addr) => addr._id === newSelectedOption);
      setAddress((prevAddress) => ({ ...prevAddress, ...selectedAddress }));
      onAddressDetailsChange(selectedAddress || {});
    } else {
      // Reset the address state if 'Enter New' is selected
      setAddress({
        addressLine1: '',
        addressLine2: '',
        city: '',
        country: '',
        stateProvince: '',
        zipCode: '',
      });
      onAddressDetailsChange({});
    }
  };

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
    onAddressDetailsChange({ address: newAddress }); 
  };

  return (
    <div className="max-w-screen-md mx-auto">

      <div className="mb-4">
        <label className="vessel_input_label">Select Address: </label>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="vessel_input"
        >
          <option value="selectAddress" disabled>Select Address</option>
          {addresses.map((addr) => (
            <option key={addr._id} value={addr._id}>
              {`${addr.addressLine1}, ${addr.city}, ${addr.zipCode}`}
            </option>
          ))}
          <option value="enterNew">Enter New</option>
        </select>
      </div>

      {selectedOption === 'enterNew' && (
        <div className="flex mb-2">
          <div className="w-full mx-2">
            <AddressInput onAddressChange={handleAddressChange} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressInfo;
