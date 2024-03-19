import React, { useState, useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import locations from '../../../data/locationsObject';
import { useTranslations } from 'next-intl';

const CanSize = ({ error, setErrors, errors }) => {
  const { setField, order } = useOrderStore();
  const t = useTranslations('Forms');
  const [canSizeOptions, setCanSizeOptions] = useState([]);
  const handleCanSizeChange = (e) => {
    const value = e.target.value;
    setField('canSize', value);
    setErrors({ ...errors, canSize: null });
  };

  useEffect(() => {
    const locationData = locations[order.location];
    if (locationData && locationData.warehouse) {
      setCanSizeOptions(locationData.warehouse.canFormats);
      console.log('CanSizeOptions:', locationData.warehouse.canFormats);
    }
  }, [order.location]);

  return (
    <div className="w-full mr-6">
      <label className="vessel_input_label">
        {t('CanSize')}
        <select
          value={order.canSize || ''}
          onChange={handleCanSizeChange}
          className={`vessel_input ${error ? 'error' : ''}`}
        >
          <option value="" disabled>
            {t('SelectCanSize')}
          </option>
          {canSizeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CanSize;
