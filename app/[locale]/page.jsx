'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../utils/state/store/Order';
import { useLeadtimeStore } from '../../utils/state/store/Leadtime';
import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, useCdn } from '../../sanity/env';
import { VesselUpdate } from '../../components/VesselUpdate';
import { FrVesselUpdate } from '../../components/FrVesselUpdate';
import { useTranslations } from 'next-intl';
import UsefulLinks from '../../components/UsefulLinks';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const LoginPage = ({ params: { locale } }) => {
  const router = useRouter();
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const setLeadtimeField = useLeadtimeStore((state) => state.setField);
  const [isFormValid, setIsFormValid] = useState(true);
  const [showVesselUpdate, setShowVesselUpdate] = useState(true);
  const [hiddenField, setHiddenField] = useState('');
  const t = useTranslations('Index');

  useEffect(() => {
    client
      .fetch('*[_type == "leadtimes"]')
      .then((data) => {
        data.forEach((item) => {
          Object.keys(item).forEach((key) => {
            if (key !== '_id' && key !== '_type' && key !== 'location') {
              setLeadtimeField(item.location.toLowerCase(), key, item[key]);
            }
          });
        });
      })
      .catch(console.error);
  }, []);

  const handleClose = () => {
    setShowVesselUpdate(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (hiddenField) {
      return;
    }

    if (
      !order.companyName ||
      !order.contactName ||
      !order.contactEmail ||
      !order.contactPhone ||
      !order.location
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      console.log(order);
      router.push(`/${locale}/type`);
    }
  };

  return (
    <>
      {showVesselUpdate ? (
        locale === 'fr' ? (
          <FrVesselUpdate onClose={handleClose} />
        ) : (
          <VesselUpdate onClose={handleClose} />
        )
      ) : (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          {' '}
          <div className="max-w-md w-full space-y-8 p-6  border-solid border-2 border-black bg-vp-orchid rounded-xl shadow-md mt-third mb-third">
            <h1 className="text-3xl font-bold text-center mb-6 font-barlowbold text-tb-violet">
              {t('companyInformation')}
            </h1>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                style={{ display: 'none' }}
                value={hiddenField}
                onChange={(e) => setHiddenField(e.target.value)}
              />
              <input type="hidden" name="remember" value="true" />
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    type="text"
                    placeholder={t('companyName')}
                    value={order.companyName}
                    onChange={(e) => setField('companyName', e.target.value)}
                    className="vessel_login_input"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    type="text"
                    placeholder={t('contactName')}
                    value={order.contactName}
                    onChange={(e) => setField('contactName', e.target.value)}
                    className="vessel_login_input"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    type="email"
                    placeholder={t('contactEmail')}
                    value={order.contactEmail}
                    onChange={(e) => setField('contactEmail', e.target.value)}
                    className="vessel_login_input"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    type="tel"
                    placeholder={t('contactPhone')}
                    value={order.contactPhone}
                    onChange={(e) => setField('contactPhone', e.target.value)}
                    className="vessel_login_input"
                  />
                </div>
              </div>
              <div className="w-full">
                <select
                  value={order.location}
                  onChange={(e) => setField('location', e.target.value)}
                  className="vessel_login_input"
                >
                  <option value="">{t('selectLocation')}</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Calgary">Calgary</option>
                  <option value="Mississauga">Mississauga</option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-yellow hover:bg-tb-turq focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {t('nextOrderType')}
                </button>
                {!isFormValid && (
                  <p className="text-red-500 text-xs mt-2">{t('pleaseFill')}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      <UsefulLinks />
    </>
  );
};

export default LoginPage;
