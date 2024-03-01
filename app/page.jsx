'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '@utils/state/store/Order.js';
import { useLeadtimeStore } from '@utils/state/store/Leadtime.js';
import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, useCdn } from '@sanity/env';
import { VesselUpdate } from '@components/VesselUpdate';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const LoginPage = () => {
  const router = useRouter();
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const setLeadtimeField = useLeadtimeStore((state) => state.setField);
  const [isFormValid, setIsFormValid] = useState(true);
  const [showVesselUpdate, setShowVesselUpdate] = useState(true);

  useEffect(() => {
    client
      .fetch('*[_type == "leadtimes"]')
      .then((data) => {
        data.forEach((item) => {
          Object.keys(item).forEach((key) => {
            if (key !== '_id' && key !== '_type' && key !== 'location') {
              setLeadtimeField(item.location.toLowerCase(), key, item[key]);
            }
          });
        });
      })
      .catch(console.error);
  }, []);

  const handleClose = () => {
    setShowVesselUpdate(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !order.companyName ||
      !order.contactName ||
      !order.contactEmail ||
      !order.contactPhone ||
      !order.location
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      console.log(order);
      router.push('/type');
    }
  };

  return (
    <>
      {showVesselUpdate ? (
        <VesselUpdate onClose={handleClose} />
      ) : (
        <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">
              Company Information
            </h1>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="company-name"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={order.companyName}
                    onChange={(e) => setField('companyName', e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="contact-name"
                  >
                    Contact Name
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Name"
                    value={order.contactName}
                    onChange={(e) => setField('contactName', e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="contact-email"
                  >
                    Contact Email
                  </label>
                  <input
                    type="email"
                    placeholder="Contact Email"
                    value={order.contactEmail}
                    onChange={(e) => setField('contactEmail', e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="contact-phone"
                  >
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Contact Phone"
                    value={order.contactPhone}
                    onChange={(e) => setField('contactPhone', e.target.value)}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <select
                  value={order.location}
                  onChange={(e) => setField('location', e.target.value)}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                >
                  <option value="">Select a location</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Calgary">Calgary</option>
                  <option value="Mississauga">Mississauga</option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Next: Order Type
                </button>
                {!isFormValid && (
                  <p className="text-red-500 text-xs mt-2">
                    Please fill in all fields
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
