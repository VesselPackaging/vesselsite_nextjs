import React, { useState, useEffect } from 'react';
import { projectId, apiVersion, dataset, useCdn } from '../sanity/env';
import { createClient } from 'next-sanity';
import { PortableText } from '@portabletext/react';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

export const FrVesselUpdate = ({ onClose }) => {
  const [vesselUpdates, setVesselUpdates] = useState([]);

  // Fetch vessel updates from Sanity
  useEffect(() => {
    const fetchVesselUpdates = async () => {
      try {
        const data =
          await client.fetch(`*[_type == "vesselNewsFr"] | order(_createdAt desc) [0..1] {
            _id,
            title,
            subTitle1,
            content1,
            subTitle2,
            content2
          }`);
        setVesselUpdates(data);
      } catch (error) {
        console.error('Error fetching vessel updates:', error);
      }
    };

    // Call fetchVesselUpdates function when component mounts
    fetchVesselUpdates();
  }, []);

  return (
    <div className="my-12 flex justify-center items-center mb-quart mt-quart">
      <div className="max-w-md w-full space-y-8 p-6 bg-vp-orchid  border-solid border-2 border-black rounded-xl shadow-md">
        <ul>
          {vesselUpdates.map((update) => (
            <li key={update._id}>
              <h1 className="text-3xl font-bold font-barlowbold text-center mb-6 text-tb-violet">
                {update.title}
              </h1>
              <h2 className="text-2xl text-tb-brown font-bold robotobold text-center mb-3">
                {update.subTitle1}
              </h2>
              <div className="portable-text robotobold mb-8">
                <PortableText value={update.content1} />
              </div>
              <h2 className="text-xl text-tb-brown font-bold robotobold text-center mb-3">
                {update.subTitle2}
              </h2>
              <div className="portable-text robotobold mb-8">
                <PortableText value={update.content2} />
              </div>
            </li>
          ))}
        </ul>
        <button
          type="submit"
          onClick={onClose}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-yellow hover:bg-tb-turq focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};
