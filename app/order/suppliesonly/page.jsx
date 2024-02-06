'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from 'utils/state/store/Order.js';
import PO from '../../../components/forms/inputs/PO';
import SuppliesSection from '../../../components/forms/formSections/SuppliesSection'
import ShippingDetails from '../../../components/forms/formSections/ShippingDetails';
import AddressInfo from '../../../components/forms/formSections/AddressInfo';
import CopackerEmail from '../../../components/forms/inputs/CopackerEmail';
import Comments from '../../../components/forms/inputs/Comments';

const Supplies = ({location}) => {
  const [submitting, setSubmitting] = useState(false);
  const order = useOrderStore(state => state.order);
  const router = useRouter();

  useEffect(() => {
    if (!order.companyName || !order.contactName || !order.contactEmail || !order.contactPhone || !order.location) {
        router.push('/order');
    }
}, [order, router]);

  const handleShippingDetailsChange = (data) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      deliveryMethod: data.deliveryMethod,
      dunnageType: data.dunnageType,
      date: data.date,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const url = process.env.zapier_URL;
    setSubmitting(true);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Do something with the response if needed
  
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <section className="flex-start flex-col w-11/12 max-w-full bg-vp-orchid rounded-lg p-24 small_scrn_less_padding my-24 mx-60">
      <h1 className="head_text text-left">
        <span className="text-vp-yellow">Supplies</span>
      </h1>
      <form onSubmit={handleSubmit} className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7">
      <div className="flex mb-4">
       <div className='w-full'>
        <PO />
        </div>
      </div>
      <div>
        <SuppliesSection soleSupply={true} />
      </div>
      <div>
        <ShippingDetails onShippingDetailsChange={handleShippingDetailsChange}/>
      </div>

      <div className="flex mb-4 flex-column-below-900 bg-grey-below-900">
        <div className="w-1/2 mr-8 width-100-below-900">
          <AddressInfo />
        </div>
        <div className="w-1/2 width-100-below-900">
          <CopackerEmail />
        </div>
      </div>

      <div>
        <Comments />
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
    </>
  )
}

export default Supplies