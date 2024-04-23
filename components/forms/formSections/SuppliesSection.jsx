import React, { useState, useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import locations from '../../../data/locationsObject.js';
import { useTranslations } from 'next-intl';

const SuppliesSection = ({ soleSupply }) => {
  const t = useTranslations('Forms');
  const { setField, order } = useOrderStore();
  const [endType, setEndType] = useState('');
  const [EndOptions, setEndOptions] = useState([]);
  const [numberOfSleeves, setNumberOfSleeves] = useState(0);
  const [totalNumberOfEnds, setTotalNumberOfEnds] = useState(0);
  const isMississauga = order.location === 'Mississauga';

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

  const handleWheel = (e) => {
    e.preventDefault();
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
    const newSelectedPakTech = pakTechOptions.find(
      (option) => option[0] === pakTechType,
    );
    setSelectedPakTech(newSelectedPakTech);
  }, [pakTechType, pakTechOptions]);

  useEffect(() => {
    const validNumberOfBoxes = isNaN(numberOfBoxes)
      ? 0
      : parseFloat(numberOfBoxes);
    setTotalPackagedCans(
      selectedPakTech
        ? validNumberOfBoxes * selectedPakTech[1] * selectedPakTech[2]
        : 0,
    );
  }, [numberOfBoxes, selectedPakTech]);

  useEffect(() => {
    const validNumberOfSleeves = isNaN(numberOfSleeves)
      ? 0
      : parseFloat(numberOfSleeves);
    const selectedEnd = EndOptions.find((option) => option[0] === endType);
    const calculatedTotalNumberOfEnds = selectedEnd
      ? validNumberOfSleeves * selectedEnd[1]
      : 0;
    setTotalNumberOfEnds(calculatedTotalNumberOfEnds);
  }, [endType, numberOfSleeves, EndOptions]);

  useEffect(() => {
    const validNumberOfTrays = isNaN(bundlesofTrays)
      ? 0
      : parseInt(bundlesofTrays, 10);
    const perBundle = isMississauga ? 1 : 50;
    const calculatedTotalTrayedCans = validNumberOfTrays * perBundle;
    setTotalTrayedCans(calculatedTotalTrayedCans);
  }, [bundlesofTrays, isMississauga]);

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
            {showOptions ? t('HideSupplies') : t('AddSupplies')}
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
              {t('EndType')}
              <select
                value={endType}
                onChange={handleEndTypeChange}
                className="vessel_input text-center"
              >
                <option value="">Select End Type</option>
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
              {t('NumberOfSleeves')}
              <input
                type="number"
                min="0"
                value={numberOfSleeves}
                onWheel={handleWheel}
                onChange={handleNumberOfSleevesChange}
                className={`vessel_input text-center ${!order.endType ? 'vessel_input_disabled' : ''}`}
                disabled={!endType}
              />
            </label>
          </div>

          <div className="w-1/3 mx-2 width-100-below-900">
            <label className="vessel_input_label">
              {t('TotalNumberOfEnds')}
              <span className="vessel_input_disabled text-center">
                {totalNumberOfEnds}
              </span>
            </label>
          </div>
        </div>

        <div className="flex flex-column-below-900 mb-2 bg-grey-below-900">
          <div className="w-1/3 mx-2 width-100-below-900">
            <label className="vessel_input_label">
              {t('PakTechType')}
              <select
                value={pakTechType}
                onChange={handlePakTechTypeChange}
                className="vessel_input text-center"
              >
                <option value="">Select PakTech Type</option>
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
              {t('NumberOfBoxes')}
              <input
                type="number"
                value={numberOfBoxes}
                onChange={handleNumberOfBoxesChange}
                min="0"
                onWheel={handleWheel}
                disabled={!pakTechType}
                className={`vessel_input text-center ${!pakTechType ? 'vessel_input_disabled' : ''}`}
              />
            </label>
          </div>
          <div className="w-1/3 mx-2 width-100-below-900">
            <label className="vessel_input_label">
              {t('TotalPackagedCans')}
              <span className="vessel_input_disabled text-center">
                {totalPackagedCans}
              </span>
            </label>
          </div>
        </div>

        <div className="flex flex-column-below-900 mb-2 bg-grey-below-900">
          <div className="w-1/3 mx-2 width-100-below-900">
            <label className="vessel_input_label">
              {t('TrayType')}
              <select
                value={trayType}
                onChange={handleTrayTypeChange}
                className="vessel_input text-center"
              >
                <option value="">Select Tray Type</option>
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
              {isMississauga ? t('NumberOfTrays') : t('BundlesOfTrays')}
              <input
                type="number"
                value={bundlesofTrays}
                min="0"
                onChange={handleBundlesChange}
                className={`vessel_input text-center ${!order.trayType ? 'vessel_input_disabled' : ''}`}
                disabled={!trayType}
              />
            </label>
          </div>

          <div className="w-1/3 mx-2 width-100-below-900">
            <label className="vessel_input_label">
              {t('TotalTrayedCans')}
              <span className="vessel_input_disabled text-center">
                {totalTrayedCans}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuppliesSection;
