"use client";
import React, { useState, useEffect } from 'react';
import PO from './inputs/PO';
import CanSize from './inputs/CanSize';
import Brand from './inputs/brand';
import CansCalculated from './formSections/CansCalculated';
import SuppliesSection from './formSections/SuppliesSection';
import ShippingDetails from './formSections/ShippingDetails';
import AddressInfo from './formSections/AddressInfo';
import CopackerEmail from './inputs/CopackerEmail';
import Comments from './inputs/Comments';
import { useSession } from 'next-auth/react';

const CanApp = ({location}) => {
  // const userId = session?.user.id;
  const [submitting, setSubmitting] = useState(false);
  const [order, setOrder] = useState({
    location: location,
    orderType: 'CanApp',
    brand: '',
    canSize: '',
    numberOfCans: 0,
    endType: '',
    numberOfSleeves: 0,
    pakTechType: '',
    numberOfBoxes: 0,
    trayType: '',
    bundlesofTrays: 0,
    address: {},
    PO: '',
    deliveryMethod: '',
    dunnageType: '',
    date: '',
    copackerEmail: '',
    comments: '',
});

const [addresses, setAddresses] = useState([]);
  const [loadingAddresses, setLoadingAddresses] = useState(true);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch(`/api/address/${userId}`); 
        const data = await response.json();
        setAddresses(data);
        setLoadingAddresses(false);
      } catch (error) {
        console.error('Error fetching addresses:', error);
        setLoadingAddresses(false);
      }
    };

    fetchAddresses();
  }, []);


  const handlePoChange = (data) => {
    setOrder((prevOrder) => ({ ...prevOrder, PO: data.PO }));
  };

  const handleBrandChange = (data) => {
    setOrder((prevOrder) => ({ ...prevOrder, brand: data.brand }));
  };
  
  const handleCanSizeChange = (data) => {
    setOrder((prevOrder) => ({ ...prevOrder, canSize: data.CanSize }));
  };
  
  const handleCansCalculatedChange = (data) => {
    setOrder((prevOrder) => ({ ...prevOrder, numberOfCans: data.numberOfCans }));
  };
  
  const handleSuppliesChange = (data) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      numberOfSleeves: data.numberOfSleeves,
      endType: data.endType,
      pakTechType: data.pakTechType,
      numberOfBoxes: data.numberOfBoxes,
      trayType: data.trayType,
      bundlesofTrays: data.bundlesofTrays,
    }));
  };
  
  const handleShippingDetailsChange = (data) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      deliveryMethod: data.deliveryMethod,
      dunnageType: data.dunnageType,
      date: data.date,
    }));
  };
  
  const handleAddressChange = (data) => {
    const { addressLine1, addressLine2, city, country, stateProvince, zipCode } = data;
    const addressData = { addressLine1, addressLine2, city, country, stateProvince, zipCode };
      setOrder((prevOrder) => ({ ...prevOrder, address: addressData }));
  };
  
  const handleCopackerEmailChange = (data) => {
    setOrder((prevOrder) => ({ ...prevOrder, copackerEmail: data.CopackerEmail }));
  };
  
  const handleCommentsChange = (data) => {
    setOrder((prevOrder) => {
      console.log(prevOrder);
      return { ...prevOrder, comments: data.Comments };
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/ordersubmit/canapp/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: order.location,
          orderType: order.orderType,
          brand: order.brand,
          canSize: order.canSize,
          numberOfCans: order.numberOfCans,
          endType: order.endType,
          numberOfSleeves: order.numberOfSleeves,
          pakTechType: order.pakTechType,
          numberOfBoxes: order.numberOfBoxes,
          trayType: order.trayType,
          bundlesofTrays: order.bundlesofTrays,
          address: order.address,
          PO: order.PO,
          deliveryMethod: order.deliveryMethod,
          dunnageType: order.dunnageType,
          date: order.date,
          copackerEmail: order.copackerEmail,
          comments: order.comments,
          userId: session?.user.id,
        }),
      });
  
      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Form submitted successfully');
      } else {
        // Handle failure (e.g., show an error message)
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    } finally {
      setSubmitting(false);
    }
  };
  
  

  return (
    <section className="flex-start flex-col w-full max-w-full bg-vp-orchid rounded p-4">
      <h1 className="head_text text-left">
        <span className="text-vp-yellow">Blank Cans</span>
      </h1>
      <form onSubmit={handleSubmit} className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7">
      <div className="flex mb-4">
        <div className='w-1/3'>
        <PO onPoChange={handlePoChange} />
        </div>
        <div className='w-1/3'>
        <Brand onBrandChange={handleBrandChange} />
        </div>
        <div className='w-1/3'>
        <CanSize onCanSizeChange={handleCanSizeChange} location={location} />
        </div>
      </div>
      <div>
        <CansCalculated onCansCalculatedChange={handleCansCalculatedChange} location={location} orderType={"Blank Cans"} canSize={order.canSize} />
      </div>
      <div>
        <SuppliesSection onSuppliesChange={handleSuppliesChange} location={location} />
      </div>

      <div>
        <ShippingDetails onShippingDetailsChange={handleShippingDetailsChange}/>
      </div>

      <div className="flex">
        <div className="w-1/2 mr-8">
          <AddressInfo onAddressDetailsChange={handleAddressChange} addresses={addresses} />
        </div>
        <div className="w-1/2 ml-8">
          <CopackerEmail onCopackerEmailChange={handleCopackerEmailChange} />
        </div>
      </div>

      <div>
        <Comments onCommentsChange={handleCommentsChange} />
      </div>
        
        
        <div className="flex-end mx-3 mb-5 gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CanApp;

