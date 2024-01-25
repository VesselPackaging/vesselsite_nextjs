import React, { useState } from 'react';

const MaterialFinishSize = ({ onMaterialFinishSizeChange }) => {
  const [material, setMaterial] = useState('');
  const [laminateFinish, setLaminateFinish] = useState('');
  const [labelSize, setLabelSize] = useState('');

  const handleMaterialChange = (e) => {
    const value = e.target.value;
    setMaterial(value);
    onMaterialFinishSizeChange({ material: value, laminateFinish, labelSize });
  };

  const handleLaminateFinishChange = (e) => {
    const value = e.target.value;
    setLaminateFinish(value);
    onMaterialFinishSizeChange({ material, laminateFinish: value, labelSize });
  };

  const handleLabelSizeChange = (e) => {
    const value = e.target.value;
    setLabelSize(value);
    onMaterialFinishSizeChange({ material, laminateFinish, labelSize: value });
  };

  return (
    <div className="flex mb-4">
      <div className="w-1/3 mr-4">
        <label className="block text-black font-roboto">
          Material:
          <select
            value={material}
            onChange={handleMaterialChange}
            className="vessel_input"
          >
            <option value="">Select Material</option>
            <option value="White Bopp">White Bopp</option>
            <option value="Metallic Bopp">Metallic Bopp</option>
            <option value="EauTex">EauTex</option>
          </select>
        </label>
      </div>
      <div className="w-1/3 mr-4">
        <label className="block text-black font-roboto">
          Laminate/Finish:
          <select
            value={laminateFinish}
            onChange={handleLaminateFinishChange}
            className="vessel_input"
          >
            <option value="">Select Laminate/Finish</option>
            <option value="Gloss">Gloss</option>
            <option value="Matte">Matte</option>
          </select>
        </label>
      </div>
      <div className="w-1/3">
        <label className="block text-black font-roboto">
          Label Size:
          <select
            value={labelSize}
            onChange={handleLabelSizeChange}
            className="block w-full bg-white text-black border-solid border-2 border-black rounded p-2 mt-1"
          >
            <option value="">Select Label Size</option>
            <option value="3.5x8">3.5” x 8” (355ml STD)</option>
            <option value="5x8">5” x 8” (473ml STD)</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default MaterialFinishSize;
