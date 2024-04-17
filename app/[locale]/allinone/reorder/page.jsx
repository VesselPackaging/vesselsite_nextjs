'use client';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../../../utils/state/store/Order';
import PslDetails from '../../../../components/forms/formSections/PslDetails';
import PO from '../../../../components/forms/inputs/PO';
import BackButton from '../../../../components/parts/BackButton';
import ApplicationType from '../../../../components/forms/inputs/ApplicationType';
import CanSize from '../../../../components/forms/inputs/CanSize';
import Brand from '../../../../components/forms/inputs/Brand';
import PalletFormatCansCalc from '../../../../components/forms/formSections/PalletFormatCansCalc';
import SuppliesSection from '../../../../components/forms/formSections/SuppliesSection';
import ShippingDetails from '../../../../components/forms/formSections/ShippingDetails';
import AddressInfo from '../../../../components/forms/formSections/AddressInfo';
import CopackerEmail from '../../../../components/forms/inputs/CopackerEmail';
import Comments from '../../../../components/forms/inputs/Comments';
import PrintingType from '../../../../components/forms/inputs/PrintingType';
import TermsOfService from '../../../../components/forms/inputs/TermsOfService';
import UsefulLinks from '../../../../components/UsefulLinks';

const AllInOneReorder = ({ params: { locale } }) => {
  const t = useTranslations('Forms');
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const url = process.env.NEXT_PUBLIC_ZAPIER_AI1REORDER_WEBHOOK_URL;
  const [errors, setErrors] = useState({});
  const [hiddenField, setHiddenField] = useState('');

  const validateForm = () => {
    let formErrors = {};
    if (!order.brand) formErrors.brand = 'Brand missing';
    if (!order.application) formErrors.application = 'Application Type missing';
    if (!order.canSize) formErrors.canSize = 'Can Size missing';
    if (!order.numberOfCans) formErrors.numberOfCans = 'Number of cans missing';
    if (!order.deliveryMethod)
      formErrors.deliveryMethod = 'Delivery Method missing';
    if (!order.address) formErrors.address = 'Address missing';
    if (!order.dunnageType) formErrors.dunnageType = 'Dunnage type missing';
    if (!order.date) formErrors.date = 'Delivery date missing';
    if (!order.termsOfService)
      formErrors.termsOfService = 'Please accept terms of service';
    if (!order.printingType) formErrors.printing = 'Printing type missing';

    if (order.application === 'PSL') {
      if (!order.PSLfinish) formErrors.PSLfinish = 'PSL Finish missing';
      if (!order.PSLfinish) formErrors.materialError = 'PSL Material missing';
      if (!order.PSLlength) formErrors.PSLlength = 'PSL Length missing';
    }

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
    if (hiddenField) {
      return;
    }

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
      <div className="">
        <BackButton />
      </div>
      <section className="vessel_form_wrapper">
        <h1 className="head_text text-center w-full">
          <span className="text-lg font-light text-vp-green block">
            {t('Reorder')}
          </span>
          <span className="text-vp-yellow">{t('AllInOne')}</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
        >
          <input
            type="text"
            style={{ display: 'none' }}
            value={hiddenField}
            onChange={(e) => setHiddenField(e.target.value)}
          />
          <div className="flex mb-4 flex-column-below-900">
            <div className="w-1/2 width-100-below-900">
              <PO />
            </div>
            <div className="w-1/2 width-100-below-900">
              <CanSize
                error={errors.canSize}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
          </div>

          <div className="flex mb-4 flex-column-below-900">
            <div className="w-1/3 width-100-below-900">
              <Brand
                error={errors.brand}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
            <div className="w-1/3 width-100-below-900">
              <ApplicationType
                error={errors.application}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
            <div className="w-1/3 width-100-below-900">
              <PrintingType
                error={errors.printing}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
          </div>

          {order.application === 'PSL' && (
            <div>
              <PslDetails
                finishError={errors.PSLfinish}
                lengthError={errors.PSLlength}
                materialError={errors.PSLfinish}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
          )}
          <div>
            <PalletFormatCansCalc
              error={errors.numberOfCans}
              setErrors={setErrors}
              errors={errors}
            />
          </div>
          <div>
            <SuppliesSection soleSupply={false} />
          </div>

          <div>
            <ShippingDetails
              deliveryMethodError={errors.deliveryMethod}
              dunnageTypeError={errors.dunnageType}
              dateError={errors.date}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="flex mb-4 flex-column-below-900 bg-grey-below-900 md:space-x-3 lg:space-x-3">
            <div className="w-1/2 width-100-below-900">
              <AddressInfo
                error={errors.address}
                dateError={errors.date}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
            <div className="w-1/2 width-100-below-900">
              <CopackerEmail />
            </div>
          </div>

          <div>
            <Comments />
          </div>

          <div>
            <TermsOfService
              error={errors.termsOfService}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="flex-end mx-3 mb-5 gap-4">
            <button
              type="submit"
              className="vessel_submit_button"
              disabled={submitting}
            >
              {submitting ? t('Submitting') : t('Submit')}
            </button>
          </div>
        </form>
      </section>
      <UsefulLinks />
    </>
  );
};

export default AllInOneReorder;
