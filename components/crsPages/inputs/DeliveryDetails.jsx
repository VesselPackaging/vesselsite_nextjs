import React, { useState } from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';
import DatePicker from 'react-datepicker';
import { isWeekend, isPast } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

function DeliveryDetails({
  shipDateError,
  submittedByErrors,
  setErrors,
  errors,
}) {
  const { setField } = usePrintedStore();
  const [submittedBy, setSubmittedBy] = useState('');
  const [requestedShipDate, setRequestedShipDate] = useState(null);

  const handleSubmittedByChange = (e) => {
    setSubmittedBy(e.target.value);
    setField('submittedBy', e.target.value);
  };

  const handleRequestedShipDateChange = (date) => {
    setRequestedShipDate(date);
    const formattedDate = date.toLocaleDateString('en-GB');
    setField('shipDate', formattedDate);
    setErrors({ ...errors, shipDate: null });
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 md:pr-2 flex flex-col">
        <label className="vessel_input_label">Submitted by</label>
        <select
          value={submittedBy}
          onChange={handleSubmittedByChange}
          className={`vessel_input ${submittedByErrors ? 'error' : ''}`}
        >
          <option value="">Select...</option>
          <option value="Derick Neumeier">Derick Neumeier</option>
          <option value="Rachel Forbes">Rachel Forbes</option>
          <option value="Katrina Dickson">Katrina Dickson</option>
          <option value="Zander Reed">Zander Reed</option>
          <option value="Andres Ramos">Andres Ramos</option>
          <option value="Marlee MacDonald">Marlee MacDonald</option>
          <option value="Adrienne Cafe">Adrienne Cafe</option>
          <option value="Essaddik Fathallah">Essaddik Fathallah</option>
          <option value="Matt Hume">Matt Hume</option>
        </select>
        {submittedByErrors && (
          <div className="error-message">{submittedByErrors}</div>
        )}
      </div>

      <div className="w-full md:w-1/2 md:pl-2 flex flex-col">
        <label className="vessel_input_label">Requested Ship Date</label>
        <DatePicker
          selected={requestedShipDate}
          onChange={handleRequestedShipDateChange}
          className={`vessel_input ${shipDateError ? 'error' : ''}`}
          filterDate={(date) => !isWeekend(date) && !isPast(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
        />
        {shipDateError && <div className="error-message">{shipDateError}</div>}
      </div>
    </div>
  );
}

export default DeliveryDetails;
