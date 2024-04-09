import React, { useState, useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const PalletFormatCansCalc = () => {
  const { setField, order } = useOrderStore();
  const t = useTranslations('Forms');
  const [selectedPalletFormat, setSelectedPalletFormat] = useState('');
  const [layers, setLayers] = useState('');
  const [pallets, setPallets] = useState('');
  const [maxPalletHeight, setMaxPalletHeight] = useState('');
  const [calculatedCans, setCalculatedCans] = useState('');
  const [error, setError] = useState('');

  const handleCansCalculatedChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (
      (order.orderType === 'allinone' || order.orderType === 'labelsonly') &&
      order.printingType === 'Flexo'
    ) {
      value = Math.max(value, 15000);
    }
    setCalculatedCans(value);
  };

  const handleLayersChange = (e) => {};
  const handlePalletsChange = (e) => {};
  const handleMaxPalletHeightChange = (e) => {};

  return (
    <>
      <div className="vessel_suggestion">
        <p>
          (`I would like ${layers} layers of cans, with a max pallet height of $
          {maxPalletHeight}. This will be $
          {calculatedCans.toLocaleString('en-US')} Cans.`)
        </p>
      </div>
      <div className="flex mb-4 flex-column-below-900 bg-grey-below-900">
        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Layers
            <input
              type="number"
              value={layers}
              min="0"
              onChange={handleLayersChange}
            />
          </label>
        </div>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Max Height
            <input
              type="number"
              value={maxPalletHeight}
              min="0"
              onChange={handleMaxPalletHeightChange}
              className="vessel_input text-center"
            />
          </label>
        </div>

        <label className="vessel_input_label">
          Total Pallets
          <input
            type="number"
            value={pallets}
            min="0"
            onChange={handlePalletsChange}
            className="vessel_input text-center"
          />
        </label>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Total Cans
            <input
              type="number"
              value={calculatedCans.toLocaleString('en-US')}
              onChange={handleCansCalculatedChange}
              min="0"
              className="vessel_input text-center"
            />
          </label>
          {(order.orderType === 'allinone' ||
            order.orderType === 'labelsonly') &&
            order.printingType === 'Flexo' &&
            calculatedCans < 15000 && (
              <div className="error-message">Flexo minimum 15,000</div>
            )}
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default PalletFormatCansCalc;
