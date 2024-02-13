'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from 'utils/state/store/Order.js';
import PslDetails from '../../../components/forms/formSections/PslDetails';
import PO from '../../../components/forms/inputs/PO';
import BackButton from '../../../components/parts/BackButton';
import ApplicationType from '../../../components/forms/inputs/ApplicationType';
import CanSize from '../../../components/forms/inputs/CanSize';
import Brand from '../../../components/forms/inputs/Brand';
import CansCalculated from '../../../components/forms/formSections/CansCalculated';
import SuppliesSection from '../../../components/forms/formSections/SuppliesSection';
import ShippingDetails from '../../../components/forms/formSections/ShippingDetails';
import AddressInfo from '../../../components/forms/formSections/AddressInfo';
import CopackerEmail from '../../../components/forms/inputs/CopackerEmail';
import Comments from '../../../components/forms/inputs/Comments';

const AllInOneReorder = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const url = process.env.NEXT_PUBLIC_ZAPIER_AI1REORDER_WEBHOOK_URL;
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!order.brand) formErrors.brand = 'Brand missing';
    if (!order.canSize) formErrors.canSize = 'Can Size missing';
    if (!order.numberOfCans) formErrors.numberOfCans = 'Number of cans missing';
    if (!order.deliveryMethod)
      formErrors.deliveryMethod = 'Delivery Method missing';
    if (!order.address) formErrors.address = 'Address missing';
    if (!order.dunnageType) formErrors.dunnageType = 'Dunnage type missing';
    if (!order.date) formErrors.date = 'Delivery date missing';

    return formErrors;
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

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
      router.push('/diagnosis/success');
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
      router.push('/diagnosis/unsuccessful');
    }
  };

  return (
    <>
      <div className="">
        <BackButton />
      </div>
      <section className="flex-start flex-col w-10/12 bg-vp-orchid rounded-lg p-12 small_scrn_less_padding mb-24 mt-12 mx-60">
        <h1 className="head_text text-center w-full">
        <h3 className="text-sm text-vp-green">reorder</h3>
          <span className="text-vp-yellow">All In One</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
        >
          <div className="flex mb-4 flex-column-below-900">
            <div className="w-1/2 width-100-below-900">
              <PO />
            </div>
            <div className="w-1/2 width-100-below-900">
              <CanSize />
            </div>
          </div>

          <div className="flex mb-4 flex-column-below-900">
            <div className="w-1/2 width-100-below-900">
              <Brand />
            </div>
            <div className="w-1/2 width-100-below-900">
              <ApplicationType />
            </div>
          </div>

          {order.application === 'PSL' && (
            <div>
              <PslDetails />
            </div>
          )}
          <div>
            <CansCalculated />
          </div>
          <div>
            <SuppliesSection soleSupply={false} />
          </div>

          <div>
            <ShippingDetails />
          </div>

          <div className="flex mb-4 flex-column-below-900 bg-grey-below-900 md:space-x-3 lg:space-x-3">
            <div className="w-1/2 width-100-below-900">
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
          {Object.values(errors).map((error, index) => (
            <span key={index} className="error-message">
              {error}
            </span>
          ))}
        </form>
      </section>
    </>
  );
};

export default AllInOneReorder;