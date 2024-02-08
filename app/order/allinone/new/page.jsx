'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from 'utils/state/store/Order.js';
import PO from '../../../../components/forms/inputs/PO';
import ApplicationType from '../../../../components/forms/inputs/ApplicationType';
import CanSize from '../../../../components/forms/inputs/CanSize';
import Brand from '../../../../components/forms/inputs/Brand';
import CansCalculated from '../../../../components/forms/formSections/CansCalculated';
import SuppliesSection from '../../../../components/forms/formSections/SuppliesSection';
import ShippingDetails from '../../../../components/forms/formSections/ShippingDetails';
import AddressInfo from '../../../../components/forms/formSections/AddressInfo';
import CopackerEmail from '../../../../components/forms/inputs/CopackerEmail';
import Comments from '../../../../components/forms/inputs/Comments';

const AllInOneNew = () => {
  const router = useRouter();
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);

  useEffect(() => {
    if (!order.companyName || !order.contactName || !order.contactEmail || !order.contactPhone || !order.location) {
        router.push('/order');
    }
}, [order, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/order/allinone/new/fileupload');
  };

  return (
    <section className="flex-start flex-col w-11/12 max-w-full bg-vp-orchid rounded-lg p-12 small_scrn_less_padding my-24 mx-60">
      <h1 className="head_text text-left">
        <span className="text-vp-yellow">All In One</span>
      </h1>
      <div
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
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next: File Upload
            </button>
        </div>
      </div>
    </section>
  );
};

export default AllInOneNew;
