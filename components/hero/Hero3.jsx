import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero3 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white mt-[-100px]">
      <div className="flex flex-col md:flex-row w-4/5">
        {/* Smaller Screens */}
        <div className="md:hidden relative">
          <Image 
            src="/assets/hero3.png"
            width={900}
            height={600}
            alt="Profile"
          />
          <div className="vessel_title absolute top-4 left-4">
            <p>CANADA</p>
          </div>
          <div className="vessel_title absolute bottom-4 right-4">
            <p>WIDE</p>
          </div>
        </div>
        {/* Med/Large Screens */}
        <div className="hidden md:block md:w-2/3 relative">
          <Image 
            src="/assets/hero3.png"
            width={900}
            height={600}
            alt="Profile"
          />
          <div className="vessel_title absolute top-4 left-4">
            <p>CANADA</p>
          </div>
          <div className="vessel_title absolute bottom-4 right-4">
            <p>WIDE</p>
          </div>
        </div>
        {/* Text and title on top of each other on smaller screens */}
        <div className="w-full md:w-1/3 pl-4 flex flex-col justify-center">
          <div className="vessel_sub_text w-3/4">
            <p>From Vancouver to Halifax, our services stretch across the whole of Canada and beyond the border.</p>
          </div>
          <div>
            <Link href="/" className='flex gap-2'>
              <span className='vessel_main_link'>LOCATIONS</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;

