import React, { useState, useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const PalletFormatCansCalc = ({ error, setErrors, errors }) => {
  const { setField, order } = useOrderStore();
  const t = useTranslations('Forms');
  const [layers, setLayers] = useState(0);
  const [pallets, setPallets] = useState(0);
  const [maxPalletHeight, setMaxPalletHeight] = useState(0);
  const [calculatedCans, setCalculatedCans] = useState(0);

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

  const handleLayersChange = (e) => {
    setLayers(e.target.value);
  };
  const handlePalletsChange = (e) => {
    setPallets(e.target.value);
  };
  const handleMaxPalletHeightChange = (e) => {
    setMaxPalletHeight(e.target.value);
  };

  return (
    <>
      <div className="vessel_suggestion">
        <p>{t('PalletText')}</p>
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
              className="vessel_input text-center"
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

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Total Pallets
            <input
              type="number"
              value={pallets}
              min="0"
              onChange={handlePalletsChange}
              className={`vessel_input vessel_input_disabled text-center no-spin ${error ? 'error' : ''}`}
              disabled
            />
          </label>
        </div>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Total Cans
            <input
              type="number"
              value={calculatedCans.toLocaleString('en-US')}
              onChange={handleCansCalculatedChange}
              min="0"
              className={`vessel_input vessel_input_disabled text-center no-spin ${error ? 'error' : ''}`}
              disabled
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
      <div className="vessel_suggestion">
        <p>
          I would like {layers} layers of cans, with a max pallet height of{' '}
          {maxPalletHeight} . This will be{' '}
          {calculatedCans.toLocaleString('en-US')} Cans.
        </p>
      </div>
    </>
  );
};

export default PalletFormatCansCalc;
