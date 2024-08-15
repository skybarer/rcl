// DateOfBirth.stories.js
import React, { useState } from 'react';
import DateOfBirth from './DateOfBirth';

export default {
  title: 'DateOfBirth',
  component: DateOfBirth,
};

export const Default = () => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  return (
    <DateOfBirth
      month={month}
      day={day}
      year={year}
      onMonthChange={(e) => setMonth(e.target.value)}
      onDayChange={(e) => setDay(e.target.value)}
      onYearChange={(e) => setYear(e.target.value)}
    />
  );
};
