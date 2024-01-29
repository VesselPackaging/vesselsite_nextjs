import React, { useState, useEffect } from 'react';
import { useOrderStore } from 'utils/state/store/Order.js';
import locations from '@data/locationsObject';

const CansCalculated = () => {
  const { setField, order } = useOrderStore(); 
  const [palletFormats, setPalletFormats] = useState([]);
  const [selectedPalletFormat, setSelectedPalletFormat] = useState('');
  const [layers, setLayers] = useState('');
  const [pallets, setPallets] = useState('');
  const [CansPerLayer, setCansPerLayer] = useState(''); 
  const [calculatedCans, setCalculatedCans] = useState('');

  useEffect(() => {
    // Fetch the pallet formats based on location and orderType
    const locationData = locations[order.location];
    if (locationData && locationData.warehouse && locationData.warehouse.cans) {
      const canFormats = locationData.warehouse.cans;
      const orderTypeData = canFormats[order.canSize];

      if (orderTypeData && orderTypeData.labelType) {
        const labelTypeData = orderTypeData.labelType[order.orderType];
        const palletOptions = labelTypeData.palletOptions;
        const canLayerFactor = orderTypeData.layerFactor;
        setPalletFormats(palletOptions.map(([format, layers]) => `${format} (${layers} layers)`));
        setCansPerLayer(canLayerFactor);

      }
    }
  }, [order.location, order.orderType, order.canSize]);

  useEffect(() => {
    setField('numberOfCans', calculatedCans);
  }, [calculatedCans]);

  const handleCansCalculatedChange = (e) => {
    const value = e.target.value;
    console.log('CansCalculated:', value);
    setCalculatedCans(value);
    console.log('CansCalculated:', value);
  };

 // Handle changes to the Layers input
 const handleLayersChange = (e) => {
    const value = parseInt(e.target.value, 10);
  
    if (!isNaN(value)) {
      // Find the layer factor for the selected pallet format
      const selectedPalletFormatData = palletFormats.find((format) => format === selectedPalletFormat);
      const [, layerFactor] = selectedPalletFormatData.match(/\((\d+) layers\)/);
  
      // Calculate the nearest multiple of layerFactor
      const nearestMultiple = Math.ceil(value / layerFactor) * layerFactor;
  
      setLayers(nearestMultiple);
  
      // Calculate the total pallets based on layers and layerFactor
      const totalPallets = nearestMultiple / layerFactor;
      setPallets(totalPallets);

      // Calculate the cans based on layers and layerFactor
      const calculatedCans = nearestMultiple * CansPerLayer;
      setCalculatedCans(calculatedCans);
    } else {
      // Set layers to a default value (you can choose what makes sense in your context)
      setLayers('');
      setPallets(1);
    }
  };
  
// Handle changes to the Pallets input
const handlePalletsChange = (e) => {
    const value = parseInt(e.target.value, 10);
  
    if (!isNaN(value)) {
      setPallets(value);
  
      // Find the layer factor for the selected pallet format
      const selectedPalletFormatData = palletFormats.find((format) => format === selectedPalletFormat);
      const [, layerFactor] = selectedPalletFormatData.match(/\((\d+) layers\)/);
  
      // Calculate the total layers based on pallets and layerFactor
      const totalLayers = value * layerFactor;
      setLayers(totalLayers);
  
      // Calculate the cans based on layers and CansPerLayer
      const calculatedCans = totalLayers * CansPerLayer;
      setCalculatedCans(calculatedCans);
    } else {
      // Set pallets to a default value (you can choose what makes sense in your context)
      setPallets('');
      setLayers('');
      setCalculatedCans('');
    }
  };
  

  return (
    <>
      <div className="vessel_suggestion">
        <p>
          Please enter the desired number of pallets or the desired number of layers of cans. The can total field will automatically update.
          Layer counts for blank and printed cans will be rounded up to the nearest whole pallet in your selected format.
        </p>
      </div>
      <div className="flex mb-4 flex-column-below-900 bg-grey-below-900">
        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Pallet Format:
            <select
              value={selectedPalletFormat}
              onChange={(e) => setSelectedPalletFormat(e.target.value)}
              className="vessel_input"
              disabled={!order.canSize} /* Disable the select if canSize is not present */
            >
              <option value="" disabled>Select Pallet Format</option>
              {palletFormats.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Pallets:
            <input
              type="number"
              value={pallets}
              onChange={handlePalletsChange}
              className="vessel_input"
              disabled={!selectedPalletFormat}
            />
          </label>
        </div>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Layers:
            <input
              type="number"
              value={layers}
              onChange={handleLayersChange}
              className="vessel_input"
              disabled={!selectedPalletFormat}
            />
          </label>
        </div>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Cans (Calculated):
            <input
              type="number"
              value={calculatedCans}
              onChange={handleCansCalculatedChange}
              className="vessel_input"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default CansCalculated;
