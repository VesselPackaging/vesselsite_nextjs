import React from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';


const Brand = () => {
  const t = useTranslations('Forms');
  const { setField } = useOrderStore(); 
  const handleBrandChange = (e) => {
    const value = e.target.value;
    setField('brand', value); 
  };
  return (
    <div className="flex mb-4">
      <div className="w-full lg:mr-4 md:mr-4">
        <label className="vessel_input_label">
          {t('Brand')}
          <input
            type="text"
            onChange={handleBrandChange}
            className="vessel_input"
          />
        </label>
      </div>
    </div>
  )
}

export default Brand