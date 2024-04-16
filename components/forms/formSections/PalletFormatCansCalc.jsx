import React, { useState, useEffect } from 'react';
import getPalletInfo from '../../../data/palletDims';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const PalletFormatCansCalc = ({ error, setErrors, errors }) => {
  const { setField, order } = useOrderStore();
  const t = useTranslations('Forms');
  const [layers, setLayers] = useState(3);
  const [pallets, setPallets] = useState(0);
  const [maxPalletHeight, setMaxPalletHeight] = useState(8);
  const [calculatedCans, setCalculatedCans] = useState(0);
  const [cansPerLayer, setCansPerLayer] = useState(0);
  const [maxAllowedHeight, setMaxAllowedHeight] = useState(8);

  useEffect(() => {
    if (order.location && order.canSize && order.application) {
      const { maxHeight, cansPerLayer } = getPalletInfo(
        order.location,
        order.canSize,
        order.application,
      );
      setMaxAllowedHeight(maxHeight);
      setMaxPalletHeight(maxHeight); // set maxPalletHeight here
      setCansPerLayer(cansPerLayer);
    }
  }, [order.location, order.canSize, order.application]);

  useEffect(() => {
    if (layers && cansPerLayer) {
      const cans = layers * cansPerLayer;
      setCalculatedCans(cans);
      setField('layersPerPallet', maxPalletHeight);
      setField('numberOfCans', cans);
    }
  }, [layers, cansPerLayer, setField, maxPalletHeight]);

  useEffect(() => {
    if (layers && maxPalletHeight) {
      setPallets((layers / maxPalletHeight).toFixed(1));
    }
  }, [layers, maxPalletHeight]);

  useEffect(() => {
    if (layers < maxPalletHeight) {
      setPallets(1);
    } else {
      setPallets((layers / maxPalletHeight).toFixed(1));
    }
  }, [layers, maxPalletHeight]);

  useEffect(() => {
    if (calculatedCans > 0) {
      setErrors((prevErrors) => ({ ...prevErrors, numberOfCans: null }));
    }
  }, [calculatedCans, setErrors]);

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
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      value = 0;
    } else if (value > maxAllowedHeight) {
      value = maxAllowedHeight;
    }
    setMaxPalletHeight(value);
  };
  return (
    <>
      <div className="vessel_suggestion">
        <p>{t('PalletText2')}</p>
      </div>
      <div className="flex mb-4 flex-column-below-900 bg-grey-below-900">
        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Layers
            <input
              type="number"
              value={layers}
              min="3"
              onChange={handleLayersChange}
              className={`vessel_input text-center ${!order.canSize || !order.application ? 'vessel_input_disabled' : ''}`}
              disabled={!order.canSize || !order.application}
            />
          </label>
        </div>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Max Height
            <input
              type="number"
              value={maxPalletHeight}
              min="3"
              max={maxAllowedHeight}
              onChange={handleMaxPalletHeightChange}
              className={`vessel_input text-center ${!order.canSize || !order.application ? 'vessel_input_disabled' : ''}`}
              disabled={!order.canSize || !order.application}
            />
          </label>
        </div>

        <div className="w-1/4 mx-2 width-100-below-900">
          <label className="vessel_input_label">
            Total Pallets
            <input
              type="number"
              value={Number(pallets)}
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
              type="text"
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

      {order.application && order.canSize && (
        <div className="vessel_suggestion">
          <p>
            I would like{' '}
            <span className="font-bold text-vp-yellow">
              {layers} layers of cans
            </span>
            , with a{' '}
            <span className="font-bold text-vp-yellow">
              max pallet height of {maxPalletHeight} layers
            </span>
            . <br></br>This will be{' '}
            <span className="font-bold text-vp-green">
              {calculatedCans.toLocaleString('en-US')} Cans{' '}
            </span>{' '}
            <span className="font-bold text-vp-yellow">
              {' '}
              spread over {Math.ceil(Number(pallets))}{' '}
              {Math.ceil(Number(pallets)) === 1 ? 'Pallet' : 'Pallets'}.
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default PalletFormatCansCalc;
