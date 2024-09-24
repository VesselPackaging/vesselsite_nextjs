import React, { useState } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import DatePickerSection from '../inputs/DatePickerSection';
import { useTranslations } from 'next-intl';

const ShippingDetails = ({
  deliveryMethodError,
  dunnageTypeError,
  dateError,
  setErrors,
  errors,
}) => {
  const t = useTranslations('Forms');
  const { setField, order } = useOrderStore();
  const [dunnageType, setDunnageType] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  const handleDunnageTypeChange = (e) => {
    const value = e.target.value;
    setDunnageType(value);
    setField('dunnageType', value);
    setErrors({ ...errors, dunnageType: null });
  };

  const handleDeliveryMethodChange = (e) => {
    const value = e.target.value;
    setDeliveryMethod(value);
    setField('deliveryMethod', value);
    setErrors({ ...errors, deliveryMethod: null });
  };

  return (
    <>
      <div className="max-w-screen-md mx-auto bg-grey-below-900">
        <h2 className="text-left text-vp-blue mb-4">{t('ShippingDetails')}</h2>
        <div className="flex flex-column-below-900">
          <div className="w-1/3 mr-4 width-100-below-900">
            <DatePickerSection
              error={dateError}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="w-1/3 mr-4 width-100-below-900">
            <label className="vessel_input_label">
              {t('DeliveryMethod')}
              <select
                value={deliveryMethod}
                onChange={handleDeliveryMethodChange}
                className={`vessel_input ${deliveryMethodError ? 'error' : ''}`}
              >
                <option value="" disabled>
                  {t('SelectDeliveryMethod')}
                </option>
                <option value="vesselToArrange">{t('VesselToArrange')}</option>
                <option value="customerToPickup">
                  {t('CustomerToPickup')}
                </option>
                <option value="customerToArrange">
                  {t('CustomerToArrange')}
                </option>
              </select>
            </label>
            {deliveryMethodError && (
              <div className="error-message">{deliveryMethodError}</div>
            )}
          </div>

          <div className="w-1/3 mr-4 width-100-below-900">
            <label className="vessel_input_label">
              {t('DunnageType')}
              <select
                value={dunnageType}
                onChange={handleDunnageTypeChange}
                className={`vessel_input ${dunnageTypeError ? 'error' : ''}`}
              >
                <option value="" disabled>
                  {t('SelectDunnageType')}
                </option>
                {order.orderType === 'blankcans' ? (
                  <option value="2-Way (Plastic)">{t('2way')}</option>
                ) : order.orderType === 'suppliesonly' ? (
                  <>
                    <option value="none">{t('NoDunnage')}</option>
                    <option value="2-Way (Plastic)">{t('2way')}</option>
                    {order.location === 'Calgary' && (
                      <option value="1-Way (Wooden)">{t('1way')}</option>
                    )}
                  </>
                ) : (
                  <>
                    <option value="2-Way (Plastic)">{t('2way')}</option>
                    <option value="1-Way (Wooden)">{t('1way')}</option>
                  </>
                )}
              </select>
            </label>
            <p className="text-sm text-vp-yellow">
              <a
                href="https://uploads-ssl.webflow.com/5cf6ee7465fae562145a7a17/6531af8fe5afb00b2f1d09d7_Vessel%202023%20Dunnage%20Program%20-%20FINAL%20-%20October%2019%202023%20Update.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('PolicyGuide')}
              </a>
            </p>
            {dunnageTypeError && (
              <div className="error-message">{dunnageTypeError}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
