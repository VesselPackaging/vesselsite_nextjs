import React, { useState } from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function AdditionalDetails() {
  const order = usePrintedStore((state) => state.printedvcs);
  const { setField } = usePrintedStore();
  const [deliveryAptRequired, setDeliveryAptRequired] = useState(false);
  const [landedCost, setLandedCost] = useState(false);
  const [customerComments, setCustomerComments] = useState('');

  const handleDeliveryAptRequiredChange = (e) => {
    setDeliveryAptRequired(e.target.checked);
    setField('aptRequired', e.target.checked);
  };

  const handleLandedCostChange = (e) => {
    setLandedCost(e.target.checked);
    setField('landedCost', e.target.checked);
  };

  const handleCustomerCommentsChange = (e) => {
    setCustomerComments(e.target.value);
    setField('customerComments', e.target.value);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 md:pr-2 flex flex-col items-center">
        <label className="vessel_input_label">Delivery apt required</label>
        <input
          type="checkbox"
          checked={deliveryAptRequired}
          onChange={handleDeliveryAptRequiredChange}
          value={order.aptRequired}
          className="vessel_input"
        />
      </div>

      <div className="w-full md:w-1/2 md:pl-2 flex flex-col items-center">
        <label className="vessel_input_label">Landed Cost</label>
        <input
          type="checkbox"
          checked={landedCost}
          onChange={handleLandedCostChange}
          value={order.landedCost}
          className="vessel_input"
        />
      </div>

      <div className="w-full flex flex-col">
        <label className="vessel_input_label">Customer Comments</label>
        <textarea
          value={customerComments}
          onChange={handleCustomerCommentsChange}
          className="vessel_input"
        />
      </div>
    </div>
  );
}

export default AdditionalDetails;
