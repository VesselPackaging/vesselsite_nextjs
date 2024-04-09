'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, useCdn } from '../../../sanity/env';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const LeadTimes = ({ params: { locale } }) => {
  const [location, setLocation] = useState('');
  const [leadTimes, setLeadTimes] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "leadtimes"]')
      .then((data) => {
        setLeadTimes(data);
      })
      .catch(console.error);
  }, []);

  const selectedLocation = leadTimes?.find(
    (item) => item.location === location,
  );

  const getColorClass = (days) => {
    if (days <= 6) {
      return 'text-green-500';
    } else if (days <= 10) {
      return 'text-yellow-500';
    } else {
      return 'text-red-500';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-screen pb-64">
      <div className="w-full px-3 items-center">
        <label
          className="uppercase tracking-wide text-white text-xs font-bold mb-2 flex justify-center"
          htmlFor="location"
        >
          Select Location
        </label>
        <div className="flex justify-center">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="appearance-none block w-1/2 bg-gray-200 text-vp-yellow border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white text-center"
          >
            <option value="">Select a location</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Calgary">Calgary</option>
            <option value="Mississauga">Mississauga</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-3 gap-4 justify-items-center items-center px-40 md:px-14">
          <div className="max-w-md w-full space-y-4 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-l font-bold text-center">Brites & Supplies</h1>
            <h1
              className={`text-xl font-bold text-center ${getColorClass(selectedLocation?.britesSupplies)}`}
            >
              <div>
                {location ? `${selectedLocation?.britesSupplies} days` : '-'}
              </div>
            </h1>
          </div>

          <div className="max-w-md w-full space-y-4 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-l font-bold text-center">PSL Application</h1>
            <h1
              className={`text-xl font-bold text-center ${getColorClass(selectedLocation?.pslApp)}`}
            >
              <div>{location ? `${selectedLocation?.pslApp} days` : '-'}</div>
            </h1>
          </div>

          <div className="max-w-md w-full space-y-4 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-l font-bold text-center">Shrink Sleeve</h1>
            <h1
              className={`text-xl font-bold text-center ${getColorClass(selectedLocation?.ss)}`}
            >
              <div>{location ? `${selectedLocation?.ss} days` : '-'}</div>
            </h1>
          </div>
        </div>
      </div>
      <div className="self-center text-white">** Business Days</div>
    </div>
  );
};

export default LeadTimes;
