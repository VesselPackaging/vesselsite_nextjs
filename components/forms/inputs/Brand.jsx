import React from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const Brand = ({ error, setErrors, errors }) => {
  const t = useTranslations('Forms');
  const { setField } = useOrderStore();
  const handleBrandChange = (e) => {
    const value = e.target.value;
    setField('brand', value);
    setErrors({ ...errors, brand: null });
  };
  return (
    <>
      <div className={`flex ${error ? 'mb-0' : 'mb-4'} 760:mb-0`}>
        <div className="w-full lg:mr-4 md:mr-4">
          <label className="vessel_input_label">
            {t('Brand')}
            <input
              type="text"
              onChange={handleBrandChange}
              className={`vessel_input ${error ? 'error' : ''}`}
            />
          </label>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default Brand;
