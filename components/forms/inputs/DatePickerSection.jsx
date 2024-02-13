import React, { useState } from "react";
import { useOrderStore } from '@utils/state/store/Order.js';
import DatePicker from "react-datepicker";
import { addDays, isWeekend } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

const DatePickerSection = () => {
    const [startDate, setStartDate] = useState(null);
    const { setField, order } = useOrderStore(); 
    const [date, setDate] = useState(null); 
    
    const handleDateSelect = (date) => {
      setStartDate(date);
      setDate(date);
        const formattedDate = date.toLocaleDateString('en-GB'); 
        setField('date', formattedDate); 
    };
    function addBusinessDays(date, days) {
      let newDate = date;
      while (days > 0) {
        newDate = addDays(newDate, 1);
        if (!isWeekend(newDate)) {
          days--;
        }
      }
      return newDate;
    }
    const leadtime = 4;
    const minDate = addBusinessDays(new Date(), leadtime);


    return (
      <div className="flex flex-col">
        <label className="font-roboto text-small mb-1 leading-5 text-black tracking-normal">Desired shipping date:</label>
        <DatePicker minDate={minDate} 
                    wrapperClassName="leading-4" 
                    className="vessel_input" 
                    selected={startDate} 
                    onSelect={handleDateSelect} 
                    onChange={(date) => setStartDate(date)}
                    filterDate={(date) => !isWeekend(date)}
                    dateFormat="dd/MM/yyyy"
                    />
      </div>
    );
  };

export default DatePickerSection;
