"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from 'utils/state/store/Order.js';
import DatePickerSection from '@components/forms/inputs/DatePickerSection';
import PO from '../../../../components/forms/inputs/PO';
import ApplicationType from '../../../../components/forms/inputs/ApplicationType';
import CanSize from '../../../../components/forms/inputs/CanSize';
import Brand from '../../../../components/forms/inputs/Brand';
import LabelQty from '@components/forms/inputs/LabelQty';
import Comments from '../../../../components/forms/inputs/Comments';

const LabelsOnlyReorder = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const order = useOrderStore(state => state.order);
  const setField = useOrderStore(state => state.setField);

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
  <section className="flex-start flex-col w-11/12 max-w-full bg-vp-orchid rounded-lg p-12 small_scrn_less_padding my-24 mx-60">
    <h1 className="head_text text-left">
      <span className="text-vp-yellow">Labels Only</span>
    </h1>
    <form onSubmit={handleSubmit} className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7">
    <div className="flex mb-4 flex-column-below-900">
      <div className='w-1/2 width-100-below-900'>
      <PO />
      </div>
      <div className='w-1/2 width-100-below-900'>
      <CanSize/>
      </div>
    </div>

    <div className="flex mb-4 flex-column-below-900">
    <div className='w-1/2 width-100-below-900'>
      <Brand />
      </div>
      <div className='w-1/2 width-100-below-900'>
      <ApplicationType />
      </div>
    </div>
    <div>
      <LabelQty />
    </div>

    <div>
        <DatePickerSection />
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
);
};

export default LabelsOnlyReorder;

