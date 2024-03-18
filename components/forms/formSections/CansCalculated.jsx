import React, { useState, useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import locations from '../../../data/locationsObject.js';
import { useTranslations } from 'next-intl';

const CansCalculated = () => {
  const { setField, order } = useOrderStore();
  const t = useTranslations('Forms');
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

      if (orderTypeData && orderTypeData.labelType && order.application) {
        const labelTypeData = orderTypeData.labelType[order.application];
        const palletOptions = labelTypeData.palletOptions;
        const canLayerFactor = orderTypeData.layerFactor;
        setPalletFormats(
          palletOptions.map(
            ([format, layers]) => `${format} (${layers} layers)`,
          ),
        );
        setCansPerLayer(canLayerFactor);
      }
    }
  }, [order.location, order.orderType, order.canSize, order.application]);

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
      const selectedPalletFormatData = palletFormats.find(
        (format) => format === selectedPalletFormat,
      );
      const [, layerFactor] =
        selectedPalletFormatData.match(/\((\d+) layers\)/);

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
      const selectedPalletFormatData = palletFormats.find(
        (format) => format === selectedPalletFormat,
      );
      const [, layerFactor] =
        selectedPalletFormatData.match(/\((\d+) layers\)/);

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
        <p>{t('PalletText')}</p>
      </div>
      <div className="flex mb-4 flex-column-below-900 bg-grey-below-900">
        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            {t('PalletFormat')}
            <select
              value={selectedPalletFormat}
              onChange={(e) => setSelectedPalletFormat(e.target.value)}
              className="vessel_input text-center"
              disabled={
                !order.canSize
              } /* Disable the select if canSize is not present */
            >
              <option value="" disabled>
                {t('SelectPalletFormat')}
              </option>
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
            {t('Pallets')}
            <input
              type="number"
              value={pallets}
              min="0"
              onChange={handlePalletsChange}
              className="vessel_input text-center"
              disabled={!selectedPalletFormat}
            />
          </label>
        </div>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            {t('Layers')}
            <input
              type="number"
              value={layers}
              min="0"
              onChange={handleLayersChange}
              className="vessel_input text-center"
              disabled={!selectedPalletFormat}
            />
          </label>
        </div>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            {t('TotalCans')}
            <input
              type="number"
              value={calculatedCans}
              onChange={handleCansCalculatedChange}
              className="vessel_input vessel_input_disabled text-center no-spin"
              readOnly
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default CansCalculated;
