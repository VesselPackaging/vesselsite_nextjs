'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCaseStore } from '../../../../utils/state/store/NewCase';
import CaseOwner from '../../../../components/cases_form/CaseOwner';
import AccountName from '../../../../components/cases_form/AccountName';
import ContactName from '../../../../components/cases_form/ContactName';
import InvoiceNum from '../../../../components/cases_form/InvoiceNum';
import SalesOrderNum from '../../../../components/cases_form/SalesOrderNum';
import CustomerPO from '../../../../components/cases_form/CustomerPO';
import NatureOfComplaint from '../../../../components/cases_form/NatureOfComplaint';
import Priority from '../../../../components/cases_form/Priority';

const Cases = ({ params: { locale } }) => {
  const router = useRouter();
  const { setField, newcase } = useCaseStore();
  const [submitting, setSubmitting] = useState(false);
  const url = process.env.NEXT_PUBLIC_ZAPIER_PRINTED_WEBHOOK_URL;
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!newcase.caseOwner) formErrors.canSize = 'Case Owner Missing';

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
        body: JSON.stringify(newcase),
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
          <span className="text-vp-yellow">New Case</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
        >
          <div className="bg-vp-green p-6 rounded-md">
            <h1 className="text-xl mb-6">General Info</h1>
            <div className="flex mb-4 flex-column-below-900 ">
              <div className="w-1/2 width-100-below-900">
                <CaseOwner
                  error={errors.canSize}
                  setErrors={setErrors}
                  errors={errors}
                />
              </div>
            </div>

            <div className="flex mb-4 flex-column-below-900 ">
              <div className="w-1/3 width-100-below-900">
                <AccountName
                  error={errors.canSize}
                  setErrors={setErrors}
                  errors={errors}
                />
              </div>
              <div className="w-1/3 width-100-below-900">
                <ContactName
                  error={errors.canSize}
                  setErrors={setErrors}
                  errors={errors}
                />
              </div>
              <div className="w-1/3 width-100-below-900">
                <InvoiceNum
                  error={errors.canSize}
                  setErrors={setErrors}
                  errors={errors}
                />
              </div>
            </div>

            <div className="flex mb-4 flex-column-below-900 ">
              <div className="w-1/2 width-100-below-900">
                <SalesOrderNum
                  error={errors.canSize}
                  setErrors={setErrors}
                  errors={errors}
                />
              </div>
              <div className="w-1/2 width-100-below-900">
                <CustomerPO
                  error={errors.canSize}
                  setErrors={setErrors}
                  errors={errors}
                />
              </div>
            </div>
          </div>

          <div className="bg-vp-yellow p-6 rounded-md">
            <h1 className="text-xl mb-6">Case Info</h1>
            <div className="flex mb-4 flex-column-below-900 ">
              <div className="w-1/2 width-100-below-900">
                <NatureOfComplaint
                  error={errors.canSize}
                  setErrors={setErrors}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex mb-4 flex-column-below-900 ">
              <div className="w-1/3 width-100-below-900">
                <Priority
                  error={errors.canSize}
                  setErrors={setErrors}
                  errors={errors}
                />
              </div>
            </div>
          </div>

          <div className="flex-end mx-3 mb-5 gap-4">
            <button
              type="submit"
              className={`font-bold py-2 px-4 rounded ${!newcase.caseOwner || submitting ? 'bg-gray-200' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
              disabled={!newcase.caseOwner || submitting}
            >
              {submitting ? 'Submitting' : 'Submit'}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Cases;
