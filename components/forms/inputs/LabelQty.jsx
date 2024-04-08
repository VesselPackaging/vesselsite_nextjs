import React, { useState, useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const LabelQty = ({ error, setErrors, errors }) => {
  const t = useTranslations('Forms');
  const setField = useOrderStore((state) => state.setField);
  const order = useOrderStore((state) => state.order);

  const [inputValue, setInputValue] = useState('');
  const [min, setMin] = useState(0);

  useEffect(() => {
    if (order.printingType === 'Flexo') {
      setMin(15000);
    } else if (order.printingType === 'Digital') {
      setMin(1200);
    }
  }, [order.printingType]);

  const handleQtyChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setField('numberOfCans', value);
    setErrors({ ...errors, numberOfCans: null });
  };

  return (
    <>
      <div className="flex mb-4">
        <div className="w-full">
          <label className="vessel_input_label">
            {t('Quantity')}
            <input
              type="number"
              min={min}
              value={inputValue}
              onChange={handleQtyChange}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              className={`vessel_input ${error ? 'error' : ''} ${!order.application ? 'vessel_input_disabled' : ''}`}
              disabled={!order.application}
            />
          </label>
          {inputValue && inputValue < min && (
            <p className="text-red-500 text-xs mt-1">
              {t('MinimimFor')} {order.printingType} {t('Is')} {min.toLocaleString('en-US')}
            </p>
          )}
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default LabelQty;
