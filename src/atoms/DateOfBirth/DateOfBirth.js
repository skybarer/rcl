// DateOfBirth.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
`;

const Label = styled.label`
  margin-right: 1rem;
  font-weight: bold;
`;

const DateOfBirth = ({
  month,
  day,
  year,
  onMonthChange,
  onDayChange,
  onYearChange,
}) => {
  return (
    <Wrapper>
      <Label>Date of Birth:</Label>
      <Select value={month} onChange={onMonthChange}>
        <option value="">Month</option>
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
        <option value="May">May</option>
        <option value="Jun">Jun</option>
        <option value="Jul">Jul</option>
        <option value="Aug">Aug</option>
        <option value="Sep">Sep</option>
        <option value="Oct">Oct</option>
        <option value="Nov">Nov</option>
        <option value="Dec">Dec</option>
      </Select>
      <Select value={day} onChange={onDayChange}>
        <option value="">Day</option>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </Select>
      <Select value={year} onChange={onYearChange}>
        <option value="">Year</option>
        {Array.from(
          { length: 100 },
          (_, i) => new Date().getFullYear() - i,
        ).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
};

DateOfBirth.propTypes = {
  month: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onDayChange: PropTypes.func.isRequired,
  onYearChange: PropTypes.func.isRequired,
};

export default DateOfBirth;
