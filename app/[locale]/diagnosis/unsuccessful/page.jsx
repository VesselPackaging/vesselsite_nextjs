'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../../../utils/state/store/Order';

const SuccessOrder = ({ params: { locale } }) => {
  const router = useRouter();
  const { setField } = useOrderStore();

  const handleResetAndRedirect = () => {
    setField('newOrReorder', '');
    setField('canSize', '');
    setField('brand', '');
    setField('application', '');
    setField('numberOfCans', '');
    setField('endType', '');
    setField('numberOfSleeves', '');
    setField('pakTechType', '');
    setField('numberOfBoxes', '');
    setField('trayType', '');
    setField('bundlesofTrays', '');
    setField('address', '');
    setField('deliveryMethod', '');
    setField('dunnageType', '');
    setField('date', '');
    setField('copackerEmail', '');
    setField('comments', '');
    setField('file', '');
    router.push(`/${locale}/type`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md">
        <h1 className="head_text text-center">
          <span className="text-vp-red">Something went wrong</span>
        </h1>
        <p className="text-vp-black text-center">
          Sorry about that, please try again. If the problem persists, please
          contact your Vessel Rep.
        </p>
        <button
          className="w-full group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-black hover:bg-vp-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleResetAndRedirect}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default SuccessOrder;
