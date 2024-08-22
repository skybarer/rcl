// src/components/TimePicker.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TimeInput = styled.input`
  width: 50px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;

  /* Remove the spinner/arrows */
  -moz-appearance: textfield;
  appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Separator = styled.span`
  font-size: 16px;
`;

const TimePicker = ({ value, onChange }) => {
  const [hours, setHours] = useState(value.split(':')[0]);
  const [minutes, setMinutes] = useState(value.split(':')[1]);

  const handleHoursChange = (e) => {
    const newHours = e.target.value.padStart(2, '0');
    setHours(newHours);
    onChange(`${newHours}:${minutes}`);
  };

  const handleMinutesChange = (e) => {
    const newMinutes = e.target.value.padStart(2, '0');
    setMinutes(newMinutes);
    onChange(`${hours}:${newMinutes}`);
  };

  return (
    <TimePickerWrapper>
      <TimeInput
        type="number"
        value={hours}
        onChange={handleHoursChange}
        min="00"
        max="23"
      />
      <Separator>:</Separator>
      <TimeInput
        type="number"
        value={minutes}
        onChange={handleMinutesChange}
        min="00"
        max="59"
      />
    </TimePickerWrapper>
  );
};

TimePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TimePicker.defaultProps = {
  value: '00:00',
};

export default TimePicker;
