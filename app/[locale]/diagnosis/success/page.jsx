'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../../../utils/state/store/Order';

const SuccessOrder = ({ params: {locale} }) => {
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
    router.push(`/${locale}/type`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md">
        <h1 className="head_text text-center">
          <span className="text-vp-green">Your Order has been recieved!</span>
        </h1>
        <p className="text-vp-black text-center">
          Thank you for choosing Vessel, we will be in touch with you shortly.
        </p>
        <button
          className="w-full group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleResetAndRedirect}
        >
          Add Another Order
        </button>
      </div>
    </div>
  );
};

export default SuccessOrder;
