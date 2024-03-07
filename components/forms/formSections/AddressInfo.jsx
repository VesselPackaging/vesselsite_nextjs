import React, { useState } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import AddressInput from '../inputs/AddressInput';
import { useTranslations } from 'next-intl';

function AddressInfo() {
  const [address, setAddress] = useState('');
  const [addressOption, setAddressOption] = useState('');
  const { setField, order } = useOrderStore(); 
  const t = useTranslations('Forms');

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
    setField('address', newAddress);
  };

  const handleAddressOptionChange = (e) => {
    setAddressOption(e.target.value);
    if (e.target.value === 'default') {
      const defaultAddress = 'Use My Default Address';
      setAddress(defaultAddress);
      setField('address', defaultAddress);
    } else {
      setAddress('');
      setField('address', '');
    }
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <div>
        <label className="vessel_input_label">Select Address: </label>
        <select value={addressOption} onChange={handleAddressOptionChange} className="vessel_input">
          <option value="">{t('SelectAnOption')}</option>
          <option value="default">{t('UseDefaultAddress')}</option>
          <option value="custom">{t('EnterAddress')}</option>
        </select>
      </div>
      {addressOption === 'custom' && (
        <div className="flex mb-2">
          <div className="w-full mx-2">
            <AddressInput onAddressChange={handleAddressChange} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddressInfo;