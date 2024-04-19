import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DatePickerInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 16px;
`;

const DatePicker = ({ selectedDate, handleDateChange }) => (
  <DatePickerInput
    type="date"
    value={selectedDate}
    onChange={handleDateChange}
  />
);

DatePicker.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  handleDateChange: PropTypes.func.isRequired,
};

export default DatePicker;
