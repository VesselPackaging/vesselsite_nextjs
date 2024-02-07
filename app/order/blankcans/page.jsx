'use client';
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

const BlankCans = ({ location }) => {
  const router = useRouter();
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const [submitting, setSubmitting] = useState(false);
  const url = process.env.NEXT_PUBLIC_ZAPIER_BLANKS_WEBHOOK_URL;

  useEffect(() => {
    if (
      !order.companyName ||
      !order.contactName ||
      !order.contactEmail ||
      !order.contactPhone ||
      !order.location
    ) {
      router.push('/order');
    }
  }, [order, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(order),
      });
      setSubmitting(false);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      router.push('/order/diagnosis/success');
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
      router.push('/order/diagnosis/unsuccessful');
    }
  };

  return (
    <section className="flex-start flex-col w-11/12 max-w-full bg-vp-orchid rounded-lg p-24 small_scrn_less_padding my-24 mx-60">
      <h1 className="head_text text-left">
        <span className="text-vp-yellow">Blank Cans</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
      >
        <div className="flex mb-4 flex-column-below-900">
          <div className="w-1/2 width-100-below-900">
            <PO />
          </div>
          <div className="w-1/2">
            <CanSize />
          </div>
        </div>
        <div>
          <CansCalculated />
        </div>
        <div>
          <SuppliesSection soleSupply={false} />
        </div>
        <div>
          <ShippingDetails />
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
  );
};

export default BlankCans;
