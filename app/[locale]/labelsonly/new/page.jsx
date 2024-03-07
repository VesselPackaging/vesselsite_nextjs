'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useOrderStore } from '../../../../utils/state/store/Order';
import PslDetails from '../../../../components/forms/formSections/PslDetails';
import DatePickerSection from '../../../../components/forms/inputs/DatePickerSection';
import BackButton from '../../../../components/parts/BackButton';
import PO from '../../../../components/forms/inputs/PO';
import ApplicationType from '../../../../components/forms/inputs/ApplicationType';
import CanSize from '../../../../components/forms/inputs/CanSize';
import Brand from '../../../../components/forms/inputs/Brand';
import LabelQty from '../../../../components/forms/inputs/LabelQty';
import Comments from '../../../../components/forms/inputs/Comments';

const LabelsOnlyNew = ({ params: {locale} }) => {
  const router = useRouter();
  const t = useTranslations('Forms');
  const [submitting, setSubmitting] = useState(false);
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!order.brand) formErrors.brand = 'Brand missing';
    if (!order.canSize) formErrors.canSize = 'Can Size missing';
    if (!order.numberOfCans) formErrors.numberOfCans = 'Number of cans missing';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    router.push(`/${locale}/labelsonly/new/fileupload`);
  };

  return (
    <>
      <div className="">
        <BackButton />
      </div>
      <section className="flex-start flex-col w-10/12 bg-vp-orchid rounded-lg p-12 small_scrn_less_padding mb-24 mt-12 mx-60">
      <h1 className="head_text text-center w-full">
          <span className="text-sm text-vp-green block">{t('New')}</span>
          <span className="text-vp-yellow">{t('LabelsOnly')}</span>
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
            onClick={handleSubmit}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t('NextFileUpload')}
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

export default LabelsOnlyNew;
