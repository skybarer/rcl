import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Calendar from './../Calendar/Calendar';

const TextFieldWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  display: flex;
  margin-bottom: 5px;
`;

export const TextInput = styled.input`
  padding: 10px;
  padding-right: 40px; // Space for the button
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  letter-spacing: 0.3px;
  font-weight: 400;
  background-color: white;
`;

export const InnerButton = styled.button`
  position: absolute;
  right: 5px; // Adjust position within the input
  top: 50%;
  transform: translateY(-50%);
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  color: white;
  border-radius: 3px;

  &:hover {
    /* background-color: #2980b9; */
  }
`;

const formatDate = (date) => {
  if (!(date instanceof Date)) return ''; // Handle cases where date might be undefined or not a Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');
  // return `${year}-${month}-${day}`; // Format: YYYY-MM-DD
  return `${day}-${month}-${year}`; // Format: DD-MM-YYYY

  // const options = { year: 'numeric', month: 'short', day: '2-digit' };
  // return date.toLocaleDateString('en-US', options); // Format: Sep 27, 2024
};

const DatePicker = ({ selectedDate, handleDateChange }) => {
  const [calendarState, setCalendarState] = useState(false);

  const handleDateSelection = (date) => {
    handleDateChange(date); // Pass the Date object to the parent component
    setCalendarState(false); // Close the calendar after selecting a date
  };

  return (
    <>
      <TextFieldWrapper>
        <TextInput
          type="text"
          placeholder="DD-MM-YYYY"
          name="date picker"
          aria-required="true"
          aria-describedby="date picker"
          value={selectedDate ? formatDate(selectedDate) : ''}
          onChange={handleDateChange}
        />
        <InnerButton onClick={() => setCalendarState(!calendarState)}>
          <svg
            width={20}
            height={20}
            role="graphics-symbol"
            viewBox="0 0 20 20"
          >
            <g>
              <path d="M6.904 10.164c0-.753-.429-1.246-1.104-1.246-.688 0-.896.519-.87 1.337-.584.13-1.025-.26-1.025-1.026 0-1.012.908-1.908 2.778-1.908 1.584 0 2.674.973 2.674 2.22 0 1.298-.7 2.207-2.505 3.842l-.974.883c1.804.04 2.999-.052 3.557-.39.234.221.364.533.364.922 0 .792-.896 1.247-1.792 1.247-.87 0-4.388-.104-4.388-.104l-.195-.74 1.714-2.012c1.168-1.376 1.766-2.116 1.766-3.025zm9.656 2.817c.363.506.272 1.675-1 1.584l.013.22c.065 1.117-.48 1.39-1.26 1.39-.31 0-.674-.078-.973-.234l.04-1.415h-3.065l-.402-1.117c.7-1.765 2.454-4.777 3.48-6.023l2.167.337v5.388c.39 0 .675-.04 1-.13zm-3.129-3.92c-.688.973-1.83 3.063-2.259 4.115h2.259V9.06z"></path>
              <path d="M16.664 0H3.334A3.333 3.333 0 000 3.334v13.332A3.333 3.333 0 003.334 20h13.332A3.333 3.333 0 0020 16.666V3.334A3.333 3.333 0 0016.666 0h-.002zm-.525 17.932H3.861a1.797 1.797 0 01-1.797-1.797V5.485h15.872v10.652c0 .993-.804 1.797-1.797 1.797v-.002z"></path>
            </g>
          </svg>
        </InnerButton>
      </TextFieldWrapper>
      {calendarState && <Calendar onDateSelect={handleDateSelection} />}
    </>
  );
};

DatePicker.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  handleDateChange: PropTypes.func.isRequired,
};

export default DatePicker;
