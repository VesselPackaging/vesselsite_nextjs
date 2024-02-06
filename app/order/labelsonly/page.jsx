'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from 'utils/state/store/Order.js';


const LabelsOnly = () => {
  const router = useRouter();
  const order = useOrderStore(state => state.order);
  const setField = useOrderStore(state => state.setField);

  useEffect(() => {
    if (!order.companyName || !order.contactName || !order.contactEmail || !order.contactPhone || !order.location) {
        router.push('/order');
    }
}, [order, router]);

  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute('data-value');
    setField('newOrReorder', value);
    console.log(value);
    router.push(`/order/${order.orderType}/${value}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen pb-64">
      <div className="grid md:grid-cols-2 gap-4 justify-items-center items-center px-40 md:px-14">
        <div
          onClick={handleClick}
          data-value="reorder"
          className="w-11/12 h-full rounded-lg px-4 py-4 flex items-center justify-center flex-col text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
        >
          <img src="/assets/icons/reorder.svg" alt="Reorder Sku" className="w-32 h-32" />
          <h1 className='font-barlowbold text-2xl text-center mt-2 md:hidden'>REORDER</h1>
          <h1 className='font-barlowbold text-2xl text-center mt-2 hidden md:block'>REORDER AN EXISTING SKU</h1>
          <div className="vessel_sub_text text-center px-4 py-4 w-3/4 hidden md:block">Order decorated cans for an existing SKU with no modifications to label artwork</div>
        </div>
        <div
          onClick={handleClick}
          data-value="new"
          className="w-11/12 h-full rounded-lg px-4 py-4 flex items-center justify-center flex-col text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
        >
          <img src="/assets/icons/new.svg" alt="new sku" className="w-32 h-32" />
          <h1 className='font-barlowbold text-2xl text-center w-2/3 md:hidden'>NEW</h1>
          <h1 className='font-barlowbold text-2xl text-center w-2/3 hidden md:block'>ORDER A NEW OR UPDATED SKU</h1>
          <div className="vessel_sub_text text-center px-4 py-4 w-3/4 hidden md:block">Order decorated cans and submit artwork for a new or modified SKU</div>
        </div>
      </div>
    </div>
  )
}

export default LabelsOnly