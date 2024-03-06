'use client';
import { useOrderStore } from '../../../utils/state/store/Order';

const PO = () => {
  const { setField } = useOrderStore(); // get setField function
  const handlePoChange = (e) => {
    const value = e.target.value;
    setField('PO', value); // update PO state in useOrderStore
  };
  return (
    <div className="flex mb-4">
      <div className="w-full lg:mr-4 md:mr-4">
        <label className="vessel_input_label">
          PO:
          <input
            type="text"
            onChange={handlePoChange}
            className="vessel_input"
          />
        </label>
      </div>
    </div>
  )
}

export default PO