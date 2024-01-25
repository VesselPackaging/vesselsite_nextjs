import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Hero1 = () => {
  return (
<div className="min-h-screen flex items-center justify-center text-white mt-[-100px]">
  <div className="flex flex-col md:flex-row h-96 w-4/5 mt-16">
    {/* Text and title on top of each other on smaller screens*/}
    <div className="w-full md:w-1/3">
      <div className="vessel_title">
        <p>THE POWER OF CAN</p>
      </div>
      <div className="vessel_sub_text">
        <p>Whatever your size and ambitions, Vessel's integrated suite of beverage packaging services will take your business to the next level.</p>
      </div>
      <div>
        <Link href="/" className='flex gap-2'>
          <span className='vessel_main_link'>SERVICES</span>
        </Link>
      </div>
    </div>
    {/* Smaller Screens*/}
    <div className="md:hidden mt-4">
      <Image 
        src="/assets/hero1.png"
        width={900}
        height={600}
        alt="Profile"
      />
    </div>
    {/* Med/Large Screens*/}
    <div className="hidden md:block md:w-2/3">
      <Image 
        src="/assets/hero1.png"
        width={900}
        height={600}
        alt="Profile"
      />
    </div>
  </div>
</div>


  )
}

export default Hero1