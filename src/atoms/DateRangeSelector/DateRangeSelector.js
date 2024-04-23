// Import necessary libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from './../Calendar/Calendar';

// RangeCalendar Component
const DateRangeSelector = () => {
  const [range, setRange] = useState({ start: null, end: null });
  const [isStart, setIsStart] = useState(true);

  const handleDateClick = (date) => {
    if (isStart) {
      setRange({ start: date, end: null });
      setIsStart(false);
    } else {
      setRange((prevRange) => ({ ...prevRange, end: date }));
      setIsStart(true);
    }
  };

  return (
    <div>
      <h3>Select Date Range</h3>
      <Calendar selectedDate={range.start} setSelectedDate={handleDateClick} />
    </div>
  );
};

// PropTypes
DateRangeSelector.propTypes = {
  range: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }),
};

export default DateRangeSelector;
