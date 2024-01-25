import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Hero4 = () => {
  return (
<div className="min-h-screen flex items-center justify-center text-white mt-[-100px]">
  <div className="flex flex-col md:flex-row h-96 w-4/5">
    {/* Text and title on top of each other on smaller screens*/}
    <div className="w-full md:w-1/3">
      <div className="vessel_title absolute">
        <p>ALL ABOARD.</p>
      </div>
      <div className='mt-40 w-full'>
      <div className="vessel_sub_text">
        <p>Want to work for all your favourite brands at once?</p>
      </div>
      <div>
        <Link href="/" className='flex gap-2'>
          <span className='vessel_main_link'>JOIN THE VESSEL PACKAGING TEAM</span>
        </Link>
      </div>
      </div>
    </div>
    {/* Smaller Screens*/}
    <div className="md:hidden mt-4">
      <Image 
        src="/assets/hero4.jpg"
        width={810}
        height={540}
        alt="Profile"
      />
    </div>
    {/* Med/Large Screens*/}
    <div className="hidden md:block md:w-2/3">
      <Image 
        src="/assets/hero4.jpg"
        width={810}
        height={540}
        alt="Profile"
      />
    </div>
  </div>
</div>


  )
}

export default Hero4