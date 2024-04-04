import React, { useEffect, useState } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const TermsOfService = ( {error, setErrors, errors} ) => {
  const { setField, order } = useOrderStore();
  const [ticked, setTicked] = useState(false);
  const t = useTranslations('Forms');


  const handleTermsChange = (e) => {
    const value = e.target.value;
    setTicked(true);
    setField('termsOfService', value);
    setErrors({ ...errors, canSize: null });
  };

  return (
    <div className="flex mb-4 bg-grey-below-900">
      <div className="w-full">
      <label className="vessel_input_label flex items-center">
         {t('ByTicking')}{'\u00A0'} <a className='text-vp-yellow' href='http://www.vesselpackaging.com/terms'>{t('TermsOfService')}</a>
          <input
            type='checkbox'
            value={ticked}
            onChange={handleTermsChange}
            className="ml-2 h-4 w-4 "
          />
        </label>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default TermsOfService;
