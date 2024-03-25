import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function EndLinerEndNotes({ endLinerError, setErrors, errors }) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const handleEndLinerChange = (e) => {
    const value = e.target.value;
    setField('endLiner', value);
    setErrors({ ...errors, endLiner: null });
  };

  const handleEndNotesChange = (e) => {
    const value = e.target.value;
    setField('endNotes', value);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-2">
          <label className="vessel_input_label">
            End Liner
            <select
              onChange={handleEndLinerChange}
              value={order.endLiner}
              className={`vessel_input ${endLinerError ? 'error' : ''}`}
            >
              <option value="">Select a liner type</option>
              <option value="Legacy Epoxy">Legacy Epoxy</option>
              <option value="BPANI Gen 2">BPANI Gen 2</option>
              <option value="No Preference">No Preference</option>
            </select>
          </label>
          {endLinerError && (
            <div className="error-message">{endLinerError}</div>
          )}
        </div>

        <div className="w-full md:w-1/2 md:pl-2">
          <label className="vessel_input_label">
            End Notes
            <textarea
              onChange={handleEndNotesChange}
              value={order.endNotes}
              className="vessel_input"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default EndLinerEndNotes;
