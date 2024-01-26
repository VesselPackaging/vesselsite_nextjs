"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from 'utils/state/store/Order.js';
import PO from '../../../components/forms/inputs/PO';
import CanSize from '../../../components/forms/inputs/CanSize';
import CansCalculated from '../../../components/forms/formSections/CansCalculated';
import SuppliesSection from '../../../components/forms/formSections/SuppliesSection';
import ShippingDetails from '../../../components/forms/formSections/ShippingDetails';
import AddressInfo from '../../../components/forms/formSections/AddressInfo';
import CopackerEmail from '../../../components/forms/inputs/CopackerEmail';
import Comments from '../../../components/forms/inputs/Comments';

const BlankCans = ({location}) => {
  const router = useRouter();
  const order = useOrderStore(state => state.order);
  const setField = useOrderStore(state => state.setField);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Get form data and add to order
    const newOrder = { /* your form data here */ };
    addOrder(newOrder);
  
    // Send order to Zapier webhook
    const response = await fetch('https://hooks.zapier.com/hooks/catch/1234567/abcde', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    console.log(order);
    router.push('/order/type');
  
    if (!response.ok) {
      // Handle error
    }
  };
  
  

  return (
    <section className="flex-start flex-col w-11/12 max-w-full bg-vp-orchid rounded-lg p-24 my-24 mx-60">
      <h1 className="head_text text-left">
        <span className="text-vp-yellow">Blank Cans</span>
      </h1>
      <form onSubmit={handleSubmit} className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7">
      <div className="flex mb-4">
        <div className='w-1/2'>
        <PO />
        </div>
        <div className='w-1/2'>
        <CanSize onCanSizeChange={handleCanSizeChange} location={location} />
        </div>
      </div>
      <div>
        <CansCalculated onCansCalculatedChange={handleCansCalculatedChange} location={location} orderType={"Blank Cans"} canSize={order.canSize} />
      </div>
      <div>
        <SuppliesSection onSuppliesChange={handleSuppliesChange} location={location} />
      </div>

      <div>
        <ShippingDetails onShippingDetailsChange={handleShippingDetailsChange}/>
      </div>

      <div className="flex">
        <div className="w-1/2 mr-8">
          <AddressInfo onAddressDetailsChange={handleAddressChange} addresses={addresses} />
        </div>
        <div className="w-1/2 ml-8">
          <CopackerEmail onCopackerEmailChange={handleCopackerEmailChange} />
        </div>
      </div>

      <div>
        <Comments onCommentsChange={handleCommentsChange} />
      </div>
        
        
        <div className="flex-end mx-3 mb-5 gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default BlankCans;

