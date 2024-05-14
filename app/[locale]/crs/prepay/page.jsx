'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const PrePay = () => {
  const router = useRouter();
  const t = useTranslations('Forms');
  const [order, setOrder] = useState({
    name: '',
    companyName: '',
    email: '',
    cc: '',
    crs: '',
    overdue: '',
    comments: '',
    bankDetails: '',
    file: null,
    filename: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [hiddenField, setHiddenField] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const url = process.env.NEXT_PUBLIC_ZAPIER_CRS_PREPAY;

  const crsList = {
    'Marlee MacDonald': 'marlee.macdonald@vesselpackaging.com',
    'Louis Shingler': 'louis.Shingler@vesselpackaging.com',
    'Derick Neumeier': 'derick.neumeier@vesselpackaging.com',
    'Katrina Dickson': 'katrina.dickson@vesselpackaging.com',
    'Matt Hume': 'matthew.hume@vesselpackaging.com',
    'Andres Ramos': 'andres.ramos@vesselpackaging.com',
    'Essaddik Fathallah': 'essaddik.fathallah@vesselpackaging.com',
    'Isabelle Seguin': 'isabelle.seguin@tricorbraun.com',
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if bank details, sales order, and contact email are provided
    if (!order.bankDetails || !order.file || !order.email) {
      alert(
        'Please provide bank details attachment, sales order attachment, and contact email.',
      );
      return;
    }

    setIsLoading(true);
    try {
      // create FormData instance for the order
      const data = new FormData();
      data.append('file', order.file);
      data.append('filename', order.filename);
      // append other order info to data
      for (let key in order) {
        if (key !== 'file') {
          data.append(key, order[key]);
        }
      }

      // send data to the Zapier webhook
      const response = await fetch(url, {
        method: 'POST',
        body: data,
      });

      // check if the request was successful
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // if the request was successful, redirect to the success page
      router.push('/en/diagnosis/success');
    } catch (e) {
      console.error(e);
      router.push('/en/diagnosis/unsuccessful');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="vessel_form_wrapper">
        <h1 className="head_text text-center w-full">
          <span className="text-vp-yellow">Pre-Pay Email</span>
        </h1>
        <form
          onSubmit={onSubmit}
          className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
        >
          <input
            type="text"
            style={{ display: 'none' }}
            value={hiddenField}
            onChange={(e) => setHiddenField(e.target.value)}
          />

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="vessel_login_label">Company Name</label>
              <input
                type="text"
                placeholder={'Company Name'}
                value={order.companyName}
                onChange={(e) =>
                  setOrder({ ...order, companyName: e.target.value })
                }
                className="vessel_login_input "
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="vessel_login_label">Contact Name</label>
              <input
                type="text"
                placeholder={'Contact Name'}
                value={order.name}
                onChange={(e) => setOrder({ ...order, name: e.target.value })}
                className="vessel_login_input"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="vessel_login_label">Contact Email</label>
              <input
                type="email"
                placeholder={'Email'}
                value={order.email}
                onChange={(e) => setOrder({ ...order, email: e.target.value })}
                className="vessel_login_input"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3">
              <label className="vessel_login_label">cc email (optional)</label>
              <input
                type="text"
                placeholder={'cc email'}
                value={order.cc}
                onChange={(e) => setOrder({ ...order, cc: e.target.value })}
                className="vessel_login_input"
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="vessel_login_label">CRS</label>
              <select
                value={order.crs}
                onChange={(e) => setOrder({ ...order, crs: e.target.value })}
                className="vessel_login_input"
              >
                <option value="">Select CRS</option>
                {Object.entries(crsList).map(([key, value]) => (
                  <option key={key} value={value}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="vessel_login_label">
                Overdue Balance(if any)
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  pattern="^\d*(\.\d{0,2})?$"
                  placeholder={'Overdue Balance'}
                  value={order.overdue}
                  onChange={(e) => {
                    // Check if input is a valid decimal number
                    if (e.target.validity.valid) {
                      setOrder({ ...order, overdue: e.target.value });
                    }
                  }}
                  className="vessel_login_input"
                  style={{ paddingLeft: '20px' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                >
                  $
                </span>
              </div>
            </div>
          </div>

          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="vessel_login_label">Comments</label>
            <textarea
              type="text"
              className="vessel_login_input h-24"
              onChange={(e) => setOrder({ ...order, comments: e.target.value })}
            ></textarea>
          </div>

          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="vessel_login_label">
              Bank Details Attachment
            </label>
            <div>
              <label>
                <input
                  type="radio"
                  name="bankDetails"
                  className="mr-4"
                  checked={order.bankDetails === 'CAD'}
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      bankDetails: 'CAD',
                    })
                  }
                />
                CAD
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="bankDetails"
                  checked={order.bankDetails === 'USD_CAD_Customer'}
                  className="mr-4"
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      bankDetails: 'USD_CAD_Customer',
                    })
                  }
                />
                USD (Cad Customer)
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="bankDetails"
                  checked={order.bankDetails === 'USD_US_Customer'}
                  className="mr-4"
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      bankDetails: 'USD_US_Customer',
                    })
                  }
                />
                USD (US Customers)
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <label
              htmlFor="file"
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-black hover:bg-vp-copper focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
            >
              {'Select Sales Order'}
            </label>
            <input
              id="file"
              type="file"
              name="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files.length === 0) {
                  setOrder({ ...order, file: null, filename: '' });
                  return;
                }

                const file = e.target.files[0];
                const sizeInMB = file.size / (1024 * 1024);
                const extension = file.name.split('.').pop().toLowerCase();
                const acceptableExtensions = ['ai', 'pdf', 'zip', 'eps'];

                if (sizeInMB > 5) {
                  alert('File size exceeds 5MB. Please select a smaller file.');
                  setOrder({ ...order, file: null, filename: '' });
                } else if (!acceptableExtensions.includes(extension)) {
                  alert(
                    'Invalid file type. Please select an .ai, .zip, .eps or .pdf file.',
                  );
                  setOrder({ ...order, file: null, filename: '' });
                } else {
                  setOrder({ ...order, file: file, filename: file.name });
                }
              }}
            />
            {order.filename && (
              <p className="mt-2 text-center">{order.filename}</p>
            )}
          </div>

          <div className="flex-end mx-3 mb-5 gap-4">
            <button
              type="submit"
              className="vessel_submit_button"
              disabled={submitting || !order.file}
            >
              {submitting ? 'Sending' : 'Send Email'}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default PrePay;
