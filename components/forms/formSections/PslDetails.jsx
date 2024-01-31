import React from 'react'

const PslDetails = () => {
  return (
    <div className="flex mb-4">
        <div className="w-1/3 mr-4">
            <label className="block text-black font-roboto">
            Label Material:
                <select
                value={material}
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
                value={finish}
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
            Label Size (H x M):
                <select
                value={labelSize}
                onChange={handleLabelSizeChange}
                className="vessel_input"
                >
                    <option value="">Select Size</option>
                    <option value="Matte">Matte</option>
                    <option value="Gloss">Gloss</option>
                </select>
            </label>
        </div>

    </div>
  )
}

export default PslDetails