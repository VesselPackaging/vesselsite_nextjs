'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';
import { useMessages } from 'next-intl';
import UsefulLinks from '../../../components/UsefulLinks';

const Type = ({ params: { locale } }) => {
  const router = useRouter();
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const messages = useMessages();
  const t = useTranslations('Type');

  useEffect(() => {
    if (
      !order.companyName ||
      !order.contactName ||
      !order.contactEmail ||
      !order.contactPhone ||
      !order.location
    ) {
      router.push('/');
    }
  }, [order, router]);

  const handleClick = (value) => {
    const formattedValue = value.toLowerCase().replace(/\s+/g, '');
    router.push(`/${locale}/${formattedValue}`);
    setField('orderType', formattedValue);
    if (value === 'Blank Cans') {
      setField('application', 'Blank Cans');
      setField('brand', 'Blank Cans');
    } else {
      setField('application', '');
      setField('brand', '');
    }
    if (value === 'All In One') {
      setField('allinone', true);
    } else {
      setField('allinone', false);
    }
    setField('newOrReorder', '');
    setField('canSize', '');
    setField('numberOfCans', '');
    setField('endType', '');
    setField('numberOfSleeves', '');
    setField('pakTechType', '');
    setField('numberOfBoxes', '');
    setField('trayType', '');
    setField('bundlesofTrays', '');
    setField('layersPerPallet', '');
    setField('address', '');
    setField('PO', '');
    setField('deliveryMethod', '');
    setField('dunnageType', '');
    setField('date', '');
    setField('copackerEmail', '');
    setField('comments', '');
    setField('PSLfinish', '');
    setField('PSLlength', '');
    setField('filename', '');
    setField('printingType', '');
    setField('termsOfService', false);
    setField('file', null);
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid md:grid-cols-3 gap-4 justify-items-center items-center px-40 md:px-14">
          <div
            onClick={() => handleClick('All In One')}
            value="allinone"
            className="type_container"
          >
            <img
              src="/assets/icons/allinonelogo.svg"
              alt="All In One Icon"
              className="w-24 h-24"
            />
            <h1 className="font-barlowbold text-tb-violet text-center text-2xl">
              {t('ALLINONE')}
            </h1>
            <div className="vessel_sub_text text-tb-violet text-center px-4 py-4">
              {t('AI1Subtext')}
            </div>
          </div>
          <div
            onClick={() => handleClick('Labels Only')}
            value="labelsonly"
            className="type_container"
          >
            <img
              src="/assets/icons/labelsIcon.svg"
              alt="Labels only Icon"
              className="w-28 h-28"
            />
            <h1 className="font-barlowbold text-tb-violet text-center text-2xl">
              {t('LABELSONLY')}
            </h1>
            <div className="vessel_sub_text text-center text-tb-violet px-6 py-4 pb-10">
              {t('LABELSubtext')}
            </div>
          </div>
          <div
            onClick={() => handleClick('Can App')}
            value="canapp"
            className="type_container"
          >
            <img
              src="/assets/icons/canapplogo.png"
              alt="Can App Icon"
              className="w-20 h-20"
            />
            <h1 className="font-barlowbold text-tb-violet text-center text-2xl">
              {t('CANAPP')}
            </h1>
            <div className="vessel_sub_text text-tb-violet text-center px-4 py-4">
              {t('CANAPPSubtext')}
            </div>
          </div>
          <div
            onClick={() => handleClick('Blank Cans')}
            value="blankcans"
            className="type_container"
          >
            <img
              src="/assets/icons/blankcanslogo.png"
              alt="Blank Cans Icon"
              className="w-24 h-24"
            />
            <h1 className="font-barlowbold text-tb-violet text-center text-2xl">
              {t('BLANKCANS')}
            </h1>
            <div className="vessel_sub_text text-tb-violet text-center px-4 py-4">
              {t('BLANKCANSsubtext')}
            </div>
          </div>
          <div
            onClick={() => handleClick('Supplies Only')}
            value="supplies"
            className="type_container"
          >
            <img
              src="/assets/icons/supplieslogo.svg"
              alt="Supplies Icon"
              className="w-24 h-24"
            />
            <h1 className="font-barlowbold text-tb-violet text-center text-2xl">
              {t('SUPPLIES')}
            </h1>
            <div className="vessel_sub_text text-tb-violet text-center px-4 py-4">
              {t('SUPPLIESsubtext')}
            </div>
          </div>
        </div>
      </div>
      <UsefulLinks />
    </div>
  );
};

export default Type;
