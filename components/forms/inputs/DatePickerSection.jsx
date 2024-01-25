import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePickerSection = ({handleDate}) => {
    const [startDate, setStartDate] = useState(new Date());
    const handle = (date) => {
      console.log('date' + date);
        setStartDate(date);
        handleDate(date);
    }
    return (
      <label className="vessel_input_label">
         Desired shipping date:
         <DatePicker className="vessel_input" selected={startDate} onSelect={handle} onChange={(date) => setStartDate(date)} />
          </label>
    );
  };
