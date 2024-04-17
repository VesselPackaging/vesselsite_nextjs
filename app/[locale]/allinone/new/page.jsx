'use client';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../../../utils/state/store/Order';
import PO from '../../../../components/forms/inputs/PO';
import ApplicationType from '../../../../components/forms/inputs/ApplicationType';
import BackButton from '../../../../components/parts/BackButton';
import CanSize from '../../../../components/forms/inputs/CanSize';
import Brand from '../../../../components/forms/inputs/Brand';
import PslDetails from '../../../../components/forms/formSections/PslDetails';
import PalletFormatCansCalc from '../../../../components/forms/formSections/PalletFormatCansCalc';
import SuppliesSection from '../../../../components/forms/formSections/SuppliesSection';
import ShippingDetails from '../../../../components/forms/formSections/ShippingDetails';
import AddressInfo from '../../../../components/forms/formSections/AddressInfo';
import CopackerEmail from '../../../../components/forms/inputs/CopackerEmail';
import Comments from '../../../../components/forms/inputs/Comments';
import PrintingType from '../../../../components/forms/inputs/PrintingType';
import TermsOfService from '../../../../components/forms/inputs/TermsOfService';
import UsefulLinks from '../../../../components/UsefulLinks';

const AllInOneNew = ({ params: { locale } }) => {
  const t = useTranslations('Forms');
  const router = useRouter();
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    } else {
      router.push(`/${locale}/allinone/new/fileupload`);
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
            {t('New')}
          </span>
          <span className="text-vp-yellow">{t('AllInOne')}</span>
        </h1>
        <div className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7">
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
            <PslDetails
              finishError={errors.PSLfinish}
              lengthError={errors.PSLlength}
              materialError={errors.PSLfinish}
              setErrors={setErrors}
              errors={errors}
            />
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
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t('NextFileUpload')}
            </button>
          </div>
        </div>
      </section>
      <UsefulLinks />
    </>
  );
};

export default AllInOneNew;
