import React, { useState, useEffect } from 'react';
import { useOrderStore } from '@utils/state/store/Order.js';
import locations from '@data/locationsObject';

const SuppliesSection = ({ soleSupply }) => {
  const { setField, order } = useOrderStore(); 
  const [endType, setEndType] = useState('');
  const [EndOptions, setEndOptions] = useState([]);
  const [numberOfSleeves, setNumberOfSleeves] = useState(0);
  const [totalNumberOfEnds, setTotalNumberOfEnds] = useState(0);

  const [pakTechType, setPakTechType] = useState('');
  const [numberOfBoxes, setNumberOfBoxes] = useState(0);
  const [pakTechOptions, setPakTechOptions] = useState([]);
  const [selectedPakTech, setSelectedPakTech] = useState(null);

  const [trayType, setTrayType] = useState('');
  const [TrayOptions, setTrayOptions] = useState([]);
  const [bundlesofTrays, setBundlesofTrays] = useState(0);
  const [totalTrayedCans, setTotalTrayedCans] = useState(0);

  const [totalPackagedCans, setTotalPackagedCans] = useState(0);

  const [showOptions, setShowOptions] = useState(soleSupply);

  const toggleOptions = (e) => {
    e.preventDefault(); // Prevents the form from submitting
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    // Fetch the supplies based on location
    const locationData = locations[order.location];
    if (locationData && locationData.warehouse) {
      setPakTechOptions(locationData.warehouse.paktechTypes);
      setTrayOptions(locationData.warehouse.tray.types);
      setEndOptions(locationData.warehouse.end.types);
    }
  }, [order.location]);

  useEffect(() => {
    const newSelectedPakTech = pakTechOptions.find(option => option[0] === pakTechType);
    setSelectedPakTech(newSelectedPakTech);
  }, [pakTechType, pakTechOptions]);

  useEffect(() => {
    const validNumberOfBoxes = isNaN(numberOfBoxes) ? 0 : parseFloat(numberOfBoxes);
    setTotalPackagedCans(selectedPakTech ? validNumberOfBoxes * selectedPakTech[1] * selectedPakTech[2] : 0);
  }, [numberOfBoxes, selectedPakTech]);

  useEffect(() => {
    const validNumberOfSleeves = isNaN(numberOfSleeves) ? 0 : parseFloat(numberOfSleeves);
    const selectedEnd = EndOptions.find(option => option[0] === endType);
    const calculatedTotalNumberOfEnds = selectedEnd ? validNumberOfSleeves * selectedEnd[1] : 0;
    setTotalNumberOfEnds(calculatedTotalNumberOfEnds);
  }, [endType, numberOfSleeves, EndOptions]);

  useEffect(() => {
    const validNumberOfTrays = isNaN(bundlesofTrays) ? 0 : parseInt(bundlesofTrays, 10);
    const perBundle = 50; 
    const calculatedTotalTrayedCans = validNumberOfTrays * perBundle;
    setTotalTrayedCans(calculatedTotalTrayedCans);
  }, [bundlesofTrays]);

  const handleEndTypeChange = (e) => {
    const value = e.target.value;
    setEndType(value);
    setField('endType', value); 
  };

  const handleNumberOfSleevesChange = (e) => {
    let value = e.target.value;
    const intValue = value === '' || isNaN(value) ? 0 : parseInt(value, 10);
    setNumberOfSleeves(intValue);
    if (value.length > 1 && value.charAt(0) === '0') {
      value = value.slice(1);
    }
    setField('numberOfSleeves', value); 
  };

  const handlePakTechTypeChange = (e) => {
    const value = e.target.value;
    setPakTechType(value);
    setField('pakTechType', value); 
  };


  const handleNumberOfBoxesChange = (e) => {
    const value = e.target.value;
    setNumberOfBoxes(value === '' || isNaN(value) ? 0 : parseInt(value, 10));
    if (value.length > 1 && value.charAt(0) === '0') {
      e.target.value = value.slice(1);
    }
    setField('numberOfBoxes', value); 
  };

  const handleTrayTypeChange = (e) => {
    const value = e.target.value;
    setTrayType(value);
    setField('trayType', value); 
  };

  const handleBundlesChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setBundlesofTrays(value);
    if (value.length > 1 && value.charAt(0) === '0') {
      e.target.value = value.slice(1);
    }
    setField('bundlesofTrays', value); 
  };


  return (
    <div className="max-w-screen-md mx-auto">
      <div className="flex justify-center mb-4">
        {!soleSupply && (
          <button
            className="vessel_btn transition-all duration-300 ease-in-out"
            onClick={(e) => toggleOptions(e)}
          >
            {showOptions ? 'Hide Supplies' : 'Add Supplies'}
          </button>
        )}
      </div>

    <div
      className={`transition-all duration-300 ease-in-out ${
        showOptions ? 'h-auto opacity-100' : 'h-0 opacity-0'
      } overflow-hidden`}
    >
      <div className="flex flex-column-below-900 mb-2 bg-grey-below-900">
        <div className="w-1/3 mx-2 width-100-below-900">
        <label className="vessel_input_label">
            End Type:
            <select
              value={endType}
              onChange={handleEndTypeChange}
              className="vessel_input"
            >
              <option value="" disabled>Select End Type</option>
              {EndOptions.map((option, index) => (
                <option key={index} value={option[0]}>
                  {option[0]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="w-1/3 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Number of Sleeves:
            <input
              type="number"
              value={numberOfSleeves}
              onChange={handleNumberOfSleevesChange}
              className="vessel_input"
              disabled={!endType}
            />
          </label>
        </div>

        <div className="w-1/3 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Total Number of Ends:
            <span className="vessel_input">{totalNumberOfEnds}</span>
          </label>
        </div>
      </div>

      <div className="flex flex-column-below-900 mb-2 bg-grey-below-900">
      <div className="w-1/3 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            PakTech type:
            <select
              value={pakTechType}
              onChange={handlePakTechTypeChange}
              className="vessel_input"
            >
              <option value="" disabled>Select PakTech Type</option>
              {pakTechOptions.map((option, index) => (
                <option key={index} value={option[0]}>
                  {option[0]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="w-1/3 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Number of boxes:
            <input
              type="number"
              value={numberOfBoxes}
              onChange={handleNumberOfBoxesChange}
              disabled={!pakTechType}
              className="vessel_input"
            />
          </label>
        </div>
        <div className="w-1/3 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Total Packaged Cans:
            <span className="vessel_input">{totalPackagedCans}</span>
          </label>
        </div>
      </div>

      <div className="flex flex-column-below-900 mb-2 bg-grey-below-900">
      <div className="w-1/3 mx-2 width-100-below-900">
        <label className="vessel_input_label">
            Tray type:
            <select
              value={trayType}
              onChange={handleTrayTypeChange}
              className="vessel_input"
            >
              <option value="" disabled>Select Tray Type</option>
              {TrayOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="w-1/3 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Bundles / Paquets (50):
            <input
              type="number"
              value={bundlesofTrays}
              onChange={handleBundlesChange}
              className="vessel_input"
            />
          </label>
        </div>

        <div className="w-1/3 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Total Trayed Cans:
            <span className="vessel_input">{totalTrayedCans}</span>
          </label>
        </div>

        </div>
      </div>
    </div>
  );
};

export default SuppliesSection;
