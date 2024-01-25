import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Hero2 = () => {
  return (
<div className="min-h-screen flex items-center justify-center text-white mt-[-100px]">
  <div className="flex flex-col md:flex-row h-96 w-4/5">
    {/* Med/Large Screens*/}
    <div className="hidden md:block md:w-2/3">
      <Image 
        src="/assets/hero2.png"
        width={400}
        height={300}
        alt="Profile"
      />
    </div>
    {/* Text and title on top of each other on smaller screens*/}
    <div className="w-full md:w-1/2 mt-10">
      <div className="vessel_title">
        <p>CBD TO XYZ</p>
      </div>
      <div className="vessel_sub_text">
        <p>We work with drinks companies of all sizes, from all different sectors. From craft breweries to experimental CBD sodas, we're experienced in providing beverage packaging services across the spectrum.</p>
      </div>
      <div>
        <Link href="/" className='flex gap-2'>
          <span className='vessel_main_link'>VIEW CASE STUDIES</span>
        </Link>
      </div>
    </div>
    {/* Smaller Screens*/}
    <div className="md:hidden mt-4">
      <Image 
        src="/assets/hero2.png"
        width={400}
        height={300}
        alt="Profile"
      />
    </div>
  </div>
</div>


  )
}

export default Hero2