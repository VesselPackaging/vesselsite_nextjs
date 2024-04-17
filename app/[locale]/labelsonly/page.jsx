'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../../utils/state/store/Order';
import BackButton from '../../../components/parts/BackButton';
import { useTranslations } from 'next-intl';
import UsefulLinks from '../../../components/UsefulLinks';

const LabelsOnly = ({ params: { locale } }) => {
  const router = useRouter();
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const t = useTranslations('Type');

  useEffect(() => {
    setField('canSize', '');
    setField('numberOfCans', '');
    setField('endType', '');
    setField('numberOfSleeves', '');
    setField('pakTechType', '');
    setField('numberOfBoxes', '');
    setField('trayType', '');
    setField('bundlesofTrays', '');
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
  }, []);

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

  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute('data-value');
    setField('newOrReorder', value);
    console.log(value);
    router.push(`/${locale}/${order.orderType}/${value}`);
  };

  return (
    <>
      <BackButton />
      <div className="flex justify-center items-center min-h-screen pb-64">
        <div className="grid md:grid-cols-2 gap-4 justify-items-center items-center px-40 md:px-14">
          <div
            onClick={handleClick}
            data-value="reorder"
            className="w-11/12 h-full rounded-lg px-4 py-4 flex items-center justify-center flex-col text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
          >
            <img
              src="/assets/icons/reorder.svg"
              alt="Reorder Sku"
              className="w-32 h-32"
            />
            <h1 className="font-barlowbold text-2xl text-center mt-2 md:hidden">
              REORDER
            </h1>
            <h1 className="font-barlowbold text-2xl text-center mt-2 hidden md:block">
              {t('REORDER')}
            </h1>
            <div className="vessel_sub_text text-center px-4 py-4 w-3/4 hidden md:block">
              {t('REORDERsubtextLabel')}
            </div>
          </div>
          <div
            onClick={handleClick}
            data-value="new"
            className="w-11/12 h-full rounded-lg px-4 py-4 flex items-center justify-center flex-col text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
          >
            <img
              src="/assets/icons/new.svg"
              alt="new sku"
              className="w-32 h-32"
            />
            <h1 className="font-barlowbold text-2xl text-center w-2/3 md:hidden">
              NEW
            </h1>
            <h1 className="font-barlowbold text-2xl text-center w-2/3 hidden md:block">
              {t('NEW')}
            </h1>
            <div className="vessel_sub_text text-center px-4 py-4 w-3/4 hidden md:block">
              {t('NEWsubtextLabel')}
            </div>
          </div>
        </div>
      </div>
      <UsefulLinks />
    </>
  );
};

export default LabelsOnly;
