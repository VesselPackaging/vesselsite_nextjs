'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from 'utils/state/store/Order.js';

const SuccessOrder = () => {
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
    router.push('/order/type');
  };

  return (
    <div>
      <h1>Your order was a success!</h1>
      <button onClick={handleResetAndRedirect}>New Order</button>
    </div>
  );
};

export default SuccessOrder;
