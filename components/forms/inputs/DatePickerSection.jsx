import React, { useState } from "react";
import { useOrderStore } from 'utils/state/store/Order.js';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerSection = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { setField, order } = useOrderStore(); 
    const [date, setDate] = useState(new Date()); 
    const handleDateSelect = (date) => {
      setStartDate(date);
      setDate(date);
        const formattedDate = date.toLocaleDateString('en-GB'); 
        setField('date', formattedDate); 
    };
    return (
      <div className="flex flex-col width-100-below-900">
        <label className="font-roboto text-small mb-1 leading-5 text-black tracking-normal">Desired shipping date:</label>
        <DatePicker wrapperClassName="leading-4" className="vessel_input" selected={startDate} onSelect={handleDateSelect} onChange={(date) => setStartDate(date)} />
      </div>
    );
  };

export default DatePickerSection;
