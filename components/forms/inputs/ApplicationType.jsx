import React from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const ApplicationType = () => {
  const t = useTranslations('Forms');
  const { setField } = useOrderStore(); 
  const handleApplicationChange = (e) => {
    const value = e.target.value;
    setField('application', value); 
  };
  return (
    <div className="flex mb-4">
      <div className="w-full">
      <label className="vessel_input_label">
          {t('ApplicationType')}
            <select className="vessel_input" onChange={handleApplicationChange}>
            <option value="">{t('SelectApplicationType')}</option>
            <option value="PSL">{t('PSL')}</option>
            <option value="Shrink Sleeve">{t('ShrinkSleeve')}</option>
            </select>
        </label>
      </div>
    </div>
  )
}

export default ApplicationType
