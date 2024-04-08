import React from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const PrintingType = ({ error, setErrors, errors }) => {
  const t = useTranslations('Forms');
  const { setField } = useOrderStore();
  const handlePrintingChange = (e) => {
    const value = e.target.value;
    setField('printingType', value);
    setErrors({ ...errors, printing: null });
  };
  return (
    <>
      <div className={`flex ${error ? 'mb-0' : 'mb-4'} 760:mb-0`}>
        <div className="w-full lg:ml-4 md:ml-4">
          <label className="vessel_input_label">
            {t('PrintingType')}
            <select
              className={`vessel_input ${error ? 'error' : ''}`}
              onChange={handlePrintingChange}
            >
              <option value="">{t('SelectPrintType')}</option>
              <option value="Flexo">{t('Flexo')}</option>
              <option value="Digital">{t('Digital')}</option>
              <option value="Unsure">{t('Unsure')}</option>
            </select>
          </label>
        </div>
      </div>
      {error && <div className="error-message ml-4">{error}</div>}
    </>
  );
};

export default PrintingType;
