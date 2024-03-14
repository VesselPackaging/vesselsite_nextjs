'use client';
import React, { useState, useEffect } from 'react';
import {useTranslations} from 'next-intl';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../../utils/state/store/Order';
import PO from '../../../components/forms/inputs/PO';
import BackButton from '../../../components/parts/BackButton';
import SuppliesSection from '../../../components/forms/formSections/SuppliesSection';
import ShippingDetails from '../../../components/forms/formSections/ShippingDetails';
import AddressInfo from '../../../components/forms/formSections/AddressInfo';
import CopackerEmail from '../../../components/forms/inputs/CopackerEmail';
import Comments from '../../../components/forms/inputs/Comments';

const Supplies = ({ params: {locale} }) => {
  const [submitting, setSubmitting] = useState(false);
  const t = useTranslations('Forms');
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_ZAPIER_BLANKS_WEBHOOK_URL;
  const [errors, setErrors] = useState({});


  const validateForm = () => {
    let formErrors = {};
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

    const updatedOrder = {
      ...order,
      brand: 'Supplies',
      orderType: 'Supplies Only',
      application: 'Supplies',
    };

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(updatedOrder),
      });
      setSubmitting(false);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      router.push(`/${locale}/diagnosis//success`);
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
      router.push(`/${locale}/diagnosis/unsuccessful`);
    }
  };

  return (
    <>
      <div className="">
        <BackButton />
      </div>
      <section className="vessel_form_wrapper">
      <h1 className="head_text text-center w-full">
          <span className="text-vp-yellow">{t('Supplies')}</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
        >
          <div className="flex mb-4">
            <div className="w-full">
              <PO />
            </div>
          </div>
          <div>
            <SuppliesSection soleSupply={true} />
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
              {submitting ? t('Submitting') : t('Submit')}
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

export default Supplies;
