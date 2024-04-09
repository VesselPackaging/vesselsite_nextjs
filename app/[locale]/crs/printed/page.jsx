'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePrintedStore } from '../../../../utils/state/store/PrintedAndVcs';
import Contact from '../../../../components/crsPages/inputs/Contact';
import POProgramType from '../../../../components/crsPages/inputs/POandProgram';
import ProductVarnishReorder from '../../../../components/crsPages/inputs/ProductVarnishReorder';
import CanSizePallets from '../../../../components/crsPages/inputs/CanSizePallets';
import PalletHeightLinerType from '../../../../components/crsPages/inputs/PalletHeightLinerType';
import PalletsEndsToolingIncising from '../../../../components/crsPages/inputs/PalletsEndsToolingIncising';
import EndLinerEndNotes from '../../../../components/crsPages/inputs/EndLinerEndNotes';
import ShippingDetails from '../../../../components/crsPages/inputs/ShippingDetails';
import DeliveryDetails from '../../../../components/crsPages/inputs/DeliveryDetails';
import AdditionalDetails from '../../../../components/crsPages/inputs/AdditionalDetails';
import DeliveryAddress from '../../../../components/crsPages/inputs/DeliveryAddress';

const CrsPrinted = ({ params: { locale } }) => {
  const router = useRouter();
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);
  const [submitting, setSubmitting] = useState(false);
  const url = process.env.NEXT_PUBLIC_ZAPIER_PRINTED_WEBHOOK_URL;
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    order.location = '';
    order.totalPalletCount = '';
    order.Shipping = '';
    order.description = '';

    if (!order.businessName) formErrors.businessName = 'Business Name missing';
    if (!order.contactName) formErrors.contactName = 'Contact Name missing';
    if (!order.contactEmail) formErrors.contactEmail = 'Email missing';
    if (!order.PO) formErrors.PO = 'PO Number missing';
    if (!order.vesselProgram)
      formErrors.vesselProgram = 'Vessel Program missing';
    if (!order.orderType) formErrors.orderType = 'Order Type missing';

    if (order.orderType !== 'Ends Only') {
      if (!order.brand) formErrors.brand = 'Product Name missing';
      if (!order.varnish) formErrors.varnish = 'Varnish missing';
      if (!order.reorderExpectations)
        formErrors.reorderExpectations = 'Reorder Expectations missing';
      if (!order.eoNumber) formErrors.eoNumber = 'EO Number missing';
      if (!order.canSize) formErrors.canSize = 'Can Size missing';
      if (!order.numberOfPallets)
        formErrors.numberOfPallets = 'Pallets missing';
      if (!order.palletHeight)
        formErrors.palletHeight = 'Pallet Height missing';
    }

    if (order.orderType !== 'Cans Only') {
      if (!order.palletsOfEnds)
        formErrors.palletsOfEnds = 'Pallets of Ends missing';
      if (!order.endTooling) formErrors.endTooling = 'End Tooling missing';
      if (!order.endIncising) formErrors.endIncising = 'End Incising missing';
      if (!order.endLiner) formErrors.endLiner = 'End Liner missing';
    }

    if (!order.shipToAddress)
      formErrors.shipToAddress = 'Ship To Address missing';
    if (!order.deliveryName) formErrors.deliveryName = 'Delivery Name missing';
    if (!order.deliveryPhone)
      formErrors.deliveryPhone = 'Delivery Phone missing';
    if (!order.shipDate) formErrors.shipDate = 'Ship Date missing';
    if (!order.submittedBy) formErrors.submittedBy = 'Submitted By missing';

    return formErrors;
  };

  const handleAddVCSInbound = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    router.push(`/${locale}/crs/printed/inbound`);
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
          <span className="text-vp-yellow">Printed Cans</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
        >
          <div className="mb-4 flex-column-below-900 justify-center">
            <Contact
              businessError={errors.businessName}
              nameError={errors.contactName}
              emailError={errors.contactEmail}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="mb-4 justify-center">
            <POProgramType
              poNumberError={errors.PO}
              programError={errors.vesselProgram}
              orderTypeError={errors.orderType}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          {order.orderType && order.orderType !== 'Ends Only' && (
            <div className="mb-4 justify-center">
              <ProductVarnishReorder
                productNameError={errors.brand}
                varnishError={errors.varnish}
                reorderExpectationsError={errors.reorderExpectations}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
          )}

          {order.orderType && order.orderType !== 'Ends Only' && (
            <div className="mb-4 justify-center">
              <CanSizePallets
                EoNumberError={errors.eoNumber}
                canSizeError={errors.canSize}
                numberOfPalletsError={errors.numberOfPallets}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
          )}

          {order.orderType && order.orderType !== 'Ends Only' && (
            <div className="mb-4 justify-center">
              <PalletHeightLinerType
                palletHeightError={errors.palletHeight}
                linerTypeError={errors.linerType}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
          )}

          {order.orderType && order.orderType !== 'Cans Only' && (
            <div className="mb-4 justify-center">
              <PalletsEndsToolingIncising
                palletsOfEndsError={errors.palletsOfEnds}
                endToolingError={errors.endTooling}
                endIncisingError={errors.endIncising}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
          )}

          {order.orderType && order.orderType !== 'Cans Only' && (
            <div className="mb-4 justify-center">
              <EndLinerEndNotes
                endLinerError={errors.endLiner}
                setErrors={setErrors}
                errors={errors}
              />
            </div>
          )}

          <div className="mb-4 justify-center">
            <ShippingDetails
              deliveryNameError={errors.deliveryName}
              deliveryPhoneError={errors.deliveryPhone}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="mb-4 justify-center">
            <DeliveryAddress
              shipToAddressError={errors.shipToAddress}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="mb-4 justify-center">
            <DeliveryDetails
              shipDateError={errors.shipDate}
              submittedByErrors={errors.submittedBy}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="mb-4 justify-center">
            <AdditionalDetails />
          </div>
          <div className="flex-end mx-3 mb-5 gap-4">
            <button
              type="button"
              className={`font-bold py-2 px-4 rounded ${!order.orderType || submitting ? 'bg-gray-200' : 'bg-green-500 hover:bg-green-700'} text-white`}
              onClick={handleAddVCSInbound}
              disabled={!order.orderType || submitting}
            >
              Add VCS inbound
            </button>
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

export default CrsPrinted;
