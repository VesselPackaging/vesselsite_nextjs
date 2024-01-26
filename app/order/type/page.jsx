'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from 'utils/state/store/Order.js';

const Type = () => {
    const router = useRouter();
    const order = useOrderStore(state => state.order);
    const setField = useOrderStore(state => state.setField);
    useEffect(() => {
        console.log(order);
    }, [order]);

    const handleClick = (value) => {
        setField('orderType', value);
        const formattedValue = value.toLowerCase().replace(/\s+/g, '');
        router.push(`/order/${formattedValue}`);
    }
    return (
        <div className="flex justify-center items-center min-h-screen pb-64">
            <div className="grid md:grid-cols-3 gap-4 justify-items-center items-center px-40 md:px-14">
                <div
                    onClick={() => handleClick("All In One")}
                    value="All In One"
                    className="w-full h-62 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <img src="/assets/icons/allinonelogo.svg" alt="All In One Icon" className="w-24 h-24 mb-2" />
                    <h1 className='font-barlowbold text-2xl'>ALL IN ONE</h1>
                    <div className="vessel_sub_text text-center px-4 py-4">Order your label, can and application in one</div>
                </div>
                <div
                    onClick={() => handleClick("Labels Only")}
                    value="Labels Only"
                    className="w-full h-62 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col  text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <img src="/assets/icons/labelsicon.svg" alt="Labels only Icon" className="w-32 h-32" />
                    <h1 className='font-barlowbold text-2xl'>LABELS ONLY</h1>
                    <div className="vessel_sub_text text-center px-6 py-4 pb-10">Order flexographic Shrink Sleeves only</div>
                </div>
                <div
                    onClick={() => handleClick("Can App")}
                    value="Can App"
                    className="w-full h-62 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col  text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <img src="/assets/icons/canapplogo.png" alt="Can App Icon" className="w-24 h-24 mb-2" />
                    <h1 className='font-barlowbold text-2xl'>CAN + APPLICATION</h1>
                    <div className="vessel_sub_text text-center px-4 py-4">Book application of customer-owned labels</div>
                </div>
                <div
                    onClick={() => handleClick("Blank Cans")}
                    value="Blank Cans"
                    className="w-full h-62 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <img src="/assets/icons/blankcanslogo.png" alt="Blank Cans Icon" className="w-24 h-24 mb-2" />
                    <h1 className='font-barlowbold text-2xl'>BLANK CANS</h1>
                    <div className="vessel_sub_text text-center px-4 py-4">Order LTL Bite Cans</div>
                </div>
                <div
                    onClick={() => handleClick("Supplies Only")}
                    value="Supplies"
                    className="w-full h-62 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col  text-white hover:text-yellow-500 hover:bg-white cursor-pointer hover:bg-opacity-50"
                >
                    <img src="/assets/icons/supplieslogo.svg" alt="Supplies Icon" className="w-24 h-24 mb-2" />
                    <h1 className='font-barlowbold text-2xl'>SUPPLIES</h1>
                    <div className="vessel_sub_text text-center px-4 py-4">Order Supplies Only</div>
                </div>
            </div>
        </div>
    );
    
    
    
}

export default Type