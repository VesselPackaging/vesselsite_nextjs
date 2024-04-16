import React, { useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const ApplicationType = ({ error, setErrors, errors }) => {
  const t = useTranslations('Forms');
  const { setField, order } = useOrderStore();

  useEffect(() => {
    if (order.application === 'Shrink Sleeve') {
      setField('PSLfinish', '');
      setField('PSLlength', '');
    }
  }, [order.application, setField]);

  const handleApplicationChange = (e) => {
    const value = e.target.value;
    setField('application', value);
    setErrors({ ...errors, application: null });
  };
  return (
    <>
      <div className={`flex ${error ? 'mb-0' : 'mb-4'} 760:mb-0`}>
        <div className="w-full">
          <label className="vessel_input_label">
            {t('ApplicationType')}
            <select
              className={`vessel_input ${error ? 'error' : ''}`}
              onChange={handleApplicationChange}
            >
              <option value="">{t('SelectApplicationType')}</option>
              <option value="PSL">{t('PSL')}</option>
              <option value="Shrink Sleeve">{t('ShrinkSleeve')}</option>
            </select>
          </label>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default ApplicationType;
