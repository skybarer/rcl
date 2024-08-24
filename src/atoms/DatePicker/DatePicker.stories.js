import React, { useState } from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Form/DatePicker',
  component: DatePicker,
};

export const Default = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Selected date:', date); // This will be in YYYY-MM-DD format
  };

  return (
    <>
      <DatePicker
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
    </>
  );
};
