import React from 'react';
import Link from 'next/link';

const UsefulLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-12">
      <h1 className="font-barlowbold text-tb-violet text-center text-2xl">
        HELPFUL LABEL LINKS
      </h1>
      <div className="flex justify-center w-full flex-column-below-900 items-center">
        <Link
          href="https://www.vesselpackaging.com/en/faqs"
          rel="noopener noreferrer"
          target="_blank"
          className="text-vp-yellow hover:text-tb-turq font-robotobold text-xl mr-6"
        >
          Artwork FAQs
        </Link>
        <Link
          href="https://www.vesselpackaging.com/en/artwork-resources"
          rel="noopener noreferrer"
          target="_blank"
          className="text-vp-yellow hover:text-tb-turq  font-robotobold text-xl ml-6"
        >
          Artwork Resources
        </Link>
      </div>
    </div>
  );
};

export default UsefulLinks;
