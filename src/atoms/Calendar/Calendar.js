// Calendar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #fff;
  box-shadow: none;
  min-width: 240px;
  max-width: 240px;
  border-radius: 0.5rem;
  border: 1px solid #d7d7d8;
  color: black;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  box-sizing: border-box;
  z-index: -1;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000000;
  padding: 10px;
  padding-bottom: 0px;
`;

const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  margin-top: 10px;
  padding: 10px;
  padding-top: 0px;
`;

const Day = styled.div`
  text-align: center;
  padding: 1px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? '#007bff' : 'transparent'};
  color: ${(props) => (props.isSelected ? '#fff' : 'inherit')};
  border-radius: 5px;
  border-collapse: collapse;
`;

const Arrow = styled.span`
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const singleLeftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const singleRightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const doubleLeftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="13 17 8 12 13 7"></polyline>
    <polyline points="21 17 16 12 21 7"></polyline>
  </svg>
);

const doubleRightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="11 7 16 12 11 17"></polyline>
    <polyline points="3 7 8 12 3 17"></polyline>
  </svg>
);

const Calendar = () => {
  //   const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    // return new Date(year, month, 1).getDay();
    return (new Date(year, month, 1).getDay() + 6) % 7;
  };

  const generateDays = () => {
    const totalDays = daysInMonth(
      currentMonth.getMonth(),
      currentMonth.getFullYear(),
    );
    const firstDay = getFirstDayOfMonth(
      currentMonth.getMonth(),
      currentMonth.getFullYear(),
    );
    const days = [];

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    for (let i = 0; i < firstDay; i++) {
      days.unshift(null);
    }
    return days;
  };

  const handleDayClick = (day) => {
    if (day) {
      setSelectedDate(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day),
      );
    }
  };

  const changeMonth = (diff) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(prevMonth.getMonth() + diff);
      return newMonth;
    });
  };

  const changeYear = (diff) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setFullYear(prevMonth.getFullYear() + diff);
      return newMonth;
    });
  };

  const days = generateDays();

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <strong>
          {currentMonth.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </strong>
        <Arrow onClick={() => changeYear(-1)}>{doubleLeftArrow}</Arrow>
        <Arrow onClick={() => changeMonth(-1)}>{singleLeftArrow}</Arrow>
        <Arrow onClick={() => changeMonth(1)}>{singleRightArrow}</Arrow>
        <Arrow onClick={() => changeYear(1)}>{doubleRightArrow}</Arrow>
        {/* <button onClick={() => changeMonth(-1)}>&lt;</button>
                <span>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                <button onClick={() => changeMonth(1)}>&gt;</button> */}
      </CalendarHeader>
      <CalendarBody>
        {weekDays.map((day, index) => (
          <div key={index}>{day}</div>
        ))}

        {days.map((day, index) => (
          <Day
            key={index}
            onClick={() => handleDayClick(day)}
            isSelected={day === selectedDate?.getDate()}
          >
            {day}
          </Day>
        ))}
      </CalendarBody>
    </CalendarWrapper>
  );
};

export default Calendar;
