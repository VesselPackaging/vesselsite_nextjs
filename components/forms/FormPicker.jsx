
'use client';
import React, { useState } from 'react';
import AllInOne from '@app/[locale]/allinone/page';
import BlankCans from '@app/[locale]/blankcans/page';
import CanApp from '@app/[locale]/canapp/page';
import LabelsOnly from '@app/order/labelsonly/LabelsOnly';
import Supplies from '@app/order/suppliesonly/Supplies';

const FormPicker = ({location}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderComponent = () => {
    switch (selectedOption) {
      case 'All In One':
        return <AllInOne location={location}/>;
      case 'Blank Cans':
        return <BlankCans location={location} />;
      case 'Can App':
        return <CanApp location={location}/>;
      case 'Labels Only':
        return <LabelsOnly location={location}/>;
      case 'Supplies':
        return <Supplies location={location}/>;
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <h1 className="vessel_title flex justify-center mb-5">{location}</h1>
      {selectedOption ? (
        <div>
          <button
            onClick={() => setSelectedOption(null)}
            className="rounded-full px-4 py-2 bg-gray-500 text-white hover:text-yellow-500 hover:bg-gray-700"
          >
            Back
          </button>
          <div className="mt-8">
            {renderComponent()}
          </div>
        </div>
      ) : (
        <div className="space-x-4">
          <button
            onClick={() => setSelectedOption('All In One')}
            className="rounded-full px-4 py-2 bg-blue-500 text-white hover:text-yellow-500 hover:bg-blue-700"
          >
            All In One
          </button>
          <button
            onClick={() => setSelectedOption('Blank Cans')}
            className="rounded-full px-4 py-2 bg-green-500 text-white hover:text-yellow-500 hover:bg-green-700"
          >
            Blank Cans
          </button>
          <button
            onClick={() => setSelectedOption('Can App')}
            className="rounded-full px-4 py-2 bg-red-500 text-white hover:text-yellow-500 hover:bg-red-700"
          >
            Can App
          </button>
          <button
            onClick={() => setSelectedOption('Labels Only')}
            className="rounded-full px-4 py-2 bg-purple-500 text-white hover:text-yellow-500 hover:bg-purple-700"
          >
            Labels Only
          </button>
          <button
            onClick={() => setSelectedOption('Supplies')}
            className="rounded-full px-4 py-2 bg-yellow-500 text-white hover:text-yellow-500 hover:bg-yellow-700"
          >
            Supplies
          </button>
        </div>
      )}
    </div>
  );
};

export default FormPicker;
