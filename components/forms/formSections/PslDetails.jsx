'use client';
import React, { useState, useEffect } from 'react';
import { useOrderStore } from '@utils/state/store/Order.js';

const PslDetails = () => {
    const order = useOrderStore((state) => state.order);
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
    }

  return (
    <div className="flex mb-4">
        <div className="w-1/3 mr-4">
            <label className="block text-black font-roboto">
            Label Material:
                <select
                onChange={handleMaterialChange}
                className="vessel_input"
                >
                    <option value="">Select Material</option>
                    <option value="White Bopp">White Bopp</option>
                    <option value="Metalic Bopp">Metallic Bopp</option>
                    <option value="EauTex">EauTex</option>
                </select>
            </label>
        </div>

        <div className="w-1/3 mr-4">
            <label className="block text-black font-roboto">
            Laminate Finish:
                <select
                onChange={handleFinishChange}
                className="vessel_input"
                >
                    <option value="">Select Finish</option>
                    <option value="Matte">Matte</option>
                    <option value="Gloss">Gloss</option>
                </select>
            </label>
        </div>

        <div className="w-1/3 mr-4">
        <label className="block text-black font-roboto">
          Label Size:
          <select
            onChange={handleLabelSizeChange}
            className="block w-full bg-white text-black border-solid border-2 border-black rounded p-2 mt-1"
          >
            <option value="">Select Label Size</option>
            <option value="3.5x8">3.5” x 8” (355ml STD)</option>
            <option value="3.5x7.5">3.5” x 7.5” (355ml STD)</option>
            <option value="5x8">5” x 8” (473ml STD)</option>
            <option value="5x8">5” x 7.5” (473ml STD)</option>
            <option value="5.437x7">5” x 7” (355ml SLK)</option>
          </select>
        </label>
        </div>

    </div>
  )
}

export default PslDetails