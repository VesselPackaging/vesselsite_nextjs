import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="vessel_footer">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <div className="vessel_addresses">
              <div>
                <p className="font-robotobold">Vessel BC Head Office</p>
                <p>8250 Borden Street</p>
                <p>Vancouver, BC V5P 3E7</p>
              </div>
              <div>
                <p className="font-robotobold">Vessel Ontario</p>
                <p>5665 Kennedy Rd</p>
                <p>Mississauga, ON, L4Z 3E1</p>
              </div>
              <div>
                <p className="font-robotobold">Vessel Alberta</p>
                <p>Bay 21, 10099 – 15th Street NE</p>
                <p>Calgary, AB, T3J 0T7</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col md:flex-row md:justify-end">
            <div className="flex flex-col mb-4 md:mb-0 font-roboto">
              <Link
                href="https://www.vesselpackaging.com/en/about-us"
                className="text-tb-violet hover:text-vp-yellow"
              >
                ABOUT US
              </Link>
              <Link
                href="https://tricorbraun.wd1.myworkdayjobs.com/Careers?q=vessel+packaging"
                className="text-tb-violet hover:text-vp-yellow"
              >
                CAREERS
              </Link>
            </div>
            <div className="flex flex-col md:ml-4 font-roboto">
              <Link
                href="https://www.vesselpackaging.com/en/locations"
                className="text-tb-violet hover:text-vp-yellow"
              >
                LOCATIONS
              </Link>
              <Link
                href="https://www.instagram.com/vesselpackagingco/"
                className="text-tb-violet hover:text-vp-yellow"
              >
                INSTAGRAM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
