'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePrintedStore } from '../../../../../utils/state/store/PrintedAndVcs';
import BackButton from '../../../../../components/parts/BackButton';
import VCSextras from '../../../../../components/crsPages/inputs/VCSextras';

const VCSinbound = ({ params: { locale } }) => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);
  const [errors, setErrors] = useState({});
  const url = process.env.NEXT_PUBLIC_ZAPIER_PRINTED_WEBHOOK_URL;

  const validateForm = () => {
    let formErrors = {};
    if (!order.location) formErrors.location = 'Location missing';
    if (!order.totalPalletCount)
      formErrors.totalPalletCount = 'Total Pallet Count missing';
    if (!order.Shipping) formErrors.Shipping = 'Shipping missing';
    if (!order.description) formErrors.description = 'Description missing';

    return formErrors;
  };

  //   useEffect(() => {
  //     if (!order.businessName || !order.contactName) {
  //       router.push('/en/crs/printed');
  //     }
  //   }, [order, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      router.push(`/${locale}/diagnosis/success`);
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
      router.push(`/${locale}/diagnosis/unsuccessful`);
    }
  };

  return (
    <>
      <BackButton />
      <section className="vessel_form_wrapper">
        <h1 className="head_text">
          <span className="text-sm text-vp-green block">
            additional details
          </span>
          <span className="text-vp-yellow">VCS Inbound</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
        >
          <div className="mb-4 flex-column-below-900 justify-center">
            <VCSextras
              locationError={errors.location}
              totalPalletCountError={errors.totalPalletCount}
              shippingError={errors.Shipping}
              descriptionError={errors.description}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="flex-end mx-3 mb-5 gap-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {submitting ? 'Submitting' : 'Submit'}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default VCSinbound;
