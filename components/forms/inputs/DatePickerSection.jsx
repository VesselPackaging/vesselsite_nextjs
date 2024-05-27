'use client';
import React, { useState, useEffect } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useLeadtimeStore } from '../../../utils/state/store/Leadtime.js';
import DatePicker from 'react-datepicker';
import { addDays, isWeekend, parse, isAfter } from 'date-fns';
import { getLeadtime } from '../../../utils/helpers/getLeadtime.js';
import { useTranslations } from 'next-intl';

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerSection = ({ error, setErrors, errors }) => {
  const t = useTranslations('Forms');
  const [startDate, setStartDate] = useState(null);
  const { setField, order } = useOrderStore();
  const [date, setDate] = useState(null);
  const leadtimes = useLeadtimeStore((state) => state);
  const [leadtime, setLeadtime] = useState(null);

  useEffect(() => {
    if (
      order.orderType === 'canapp' ||
      order.orderType === 'suppliesonly' ||
      order.orderType === 'blankcans' ||
      ((order.orderType === 'labelsonly' || order.orderType === 'allinone') &&
        order.application &&
        order.printingType)
    ) {
      setLeadtime(getLeadtime(order, leadtimes));
      console.log('leadtime', leadtime);
    }
  }, [
    order.orderType,
    order.application,
    order.location,
    order.printingType,
    leadtimes,
  ]);

  const handleDateSelect = (date) => {
    setStartDate(date);
    setDate(date);
    const formattedDate = date.toLocaleDateString('en-GB');
    setField('date', formattedDate);
    setErrors({ ...errors, date: null });
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

  const minDate = addBusinessDays(new Date(), leadtime);
  const maxDate = parse('12/07/2024', 'dd/MM/yyyy', new Date());

  return (
    <div className="flex flex-col">
      <label className="font-roboto text-small mb-1 leading-5 text-black tracking-normal">
        {t('DesiredShippingDate')}
      </label>
      <DatePicker
        minDate={minDate}
        wrapperClassName="leading-4"
        className={`vessel_input text-sm ${leadtime === null ? 'vessel_input_disabled' : ''} ${error ? 'error' : ''}`}
        selected={startDate}
        onSelect={handleDateSelect}
        onChange={(date) => setStartDate(date)}
        filterDate={(date) => {
          if (
            (order.location === 'Vancouver' ||
              order.location === 'Mississauga') &&
            (order.orderType === 'allinone' || order.orderType === 'canapp')
          ) {
            return !isWeekend(date) && !isAfter(date, maxDate);
          } else {
            return !isWeekend(date);
          }
        }}
        dateFormat="dd/MM/yyyy"
        disabled={leadtime === null}
        placeholderText="Select a date"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default DatePickerSection;
