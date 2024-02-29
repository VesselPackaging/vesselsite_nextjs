import React, { useState, useEffect } from 'react';
import { projectId, apiVersion, dataset, useCdn } from '../sanity/env';
import { createClient } from 'next-sanity';
import {PortableText} from '@portabletext/react'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});


export const VesselUpdate = () => {
  // Define state to store vessel updates
  const [vesselUpdates, setVesselUpdates] = useState([]);

  // Fetch vessel updates from Sanity
  useEffect(() => {
    const fetchVesselUpdates = async () => {
      try {
        const data =
          await client.fetch(`*[_type == "vesselNews"] | order(_createdAt desc) [0..1] {
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
    <div>
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md">
        <ul>
          {vesselUpdates.map((update) => (
            <li key={update._id}>
              <h1 className="text-2xl font-bold text-center mb-6">
                {update.title}
              </h1>
              <h2 className="text-xl text-vp-green font-bold text-center mb-6">
                {update.subTitle1}
              </h2>
              <div>
              <PortableText value={update.content1} />
              </div>
              <h2 className="text-xl text-vp-green font-bold text-center mb-6">
                {update.subTitle2}
              </h2>
              <PortableText value={update.content2} />
            </li>
          ))}
        </ul>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vp-yellow hover:bg-vp-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};
