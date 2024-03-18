'use client';
import React, { useState, useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';

const PslDetails = () => {
  const order = useOrderStore((state) => state.order);
  const t = useTranslations('Forms');
  const setField = useOrderStore((state) => state.setField);
  const [material, setMaterial] = useState('');
  const [finish, setFinish] = useState('');

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };

  const handleFinishChange = (e) => {
    setFinish(e.target.value);
  };

  useEffect(() => {
    if (material && finish) {
      setField('PSLfinish', `${material} ${finish}`);
    }
  }, [material, finish, setField]);

  const handleLabelSizeChange = (e) => {
    const value = e.target.value;
    setField('PSLlength', value);
  };

  return (
    <div className="flex mb-4">
      <div className="w-1/3 mr-4">
        <label className="vessel_input_label">
          {t('LabelMaterial')}
          <select onChange={handleMaterialChange} className="vessel_input">
            <option value="">{t('SelectMaterial')}</option>
            <option value="White Bopp">{t('WhiteBopp')}</option>
            <option value="Metalic Bopp">{t('MetalicBopp')}</option>
            <option value="EauTex">{t('EauTex')}</option>
          </select>
        </label>
      </div>

      <div className="w-1/3 mr-4">
        <label className="vessel_input_label">
          {t('LaminateFinish')}
          <select onChange={handleFinishChange} className="vessel_input">
            <option value="">{t('SelectFinish')}</option>
            <option value="Matte">{t('Matte')}</option>
            <option value="Gloss">{t('Gloss')}</option>
          </select>
        </label>
      </div>

      <div className="w-1/3 mr-4">
        <label className="vessel_input_label">
          {t('LabelSize')}
          <select onChange={handleLabelSizeChange} className="vessel_input">
            <option value="">{t('SelectLabelSize')}</option>
            <option value="3.5x8">3.5” x 8” (355ml STD)</option>
            <option value="3.5x7.5">3.5” x 7.5” (355ml STD)</option>
            <option value="5x8">5” x 8” (473ml STD)</option>
            <option value="5x8">5” x 7.5” (473ml STD)</option>
            <option value="5.437x7">5” x 7” (355ml SLK)</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default PslDetails;
