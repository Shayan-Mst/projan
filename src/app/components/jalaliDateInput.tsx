'use client';
import React from 'react';
import {
  
  DayValue
} from '@hassanmojab/react-modern-calendar-datepicker';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

type Props = {
  value: DayValue;
  onChange: (date: DayValue) => void;
};

export const JalaliDateInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="my-2">
      <DatePicker
        value={value}
        onChange={onChange}
        calendarPopperPosition="bottom"
        locale="fa"
        shouldHighlightWeekends
        inputPlaceholder="تاریخ را انتخاب کنید"
        inputClassName="w-full text-black border rounded p-2"
      />
    </div>
  );
};
