'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Ftl = ({ params: { locale } }) => {
  const router = useRouter();
  const order = {};
  const t = useTranslations('Forms');
  const [submitting, setSubmitting] = useState(false);
  const url = process.env.NEXT_PUBLIC_ZAPIER_PRINTED_WEBHOOK_URL;
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    return formErrors;
  };

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
      <section className="vessel_form_wrapper">
        <h1 className="head_text">
          <span className="text-vp-yellow">{t('FTL')}</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
        >
          <div className="flex-end mx-3 mb-5 gap-4">
            <button
              type="submit"
              className={`font-bold py-2 px-4 rounded ${!order.orderType || submitting ? 'bg-gray-200' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
              disabled={!order.orderType || submitting}
            >
              {submitting ? 'Submitting' : 'Submit'}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Ftl;
