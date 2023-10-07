// Calendar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #fff;
  border: 1px solid #dee2e6;
  box-shadow: none;
  min-width: 240px;
  max-width: 240px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
//   background-color: #007bff;
  color: #00000;
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
  background-color: ${(props) => (props.isSelected ? '#007bff' : 'transparent')};
  color: ${(props) => (props.isSelected ? '#fff' : 'inherit')};
  border-radius: 5px;
  border-collapse: collapse;
`;

const Calendar = () => {

    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const generateDays = () => {
        const totalDays = daysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());
        const firstDay = getFirstDayOfMonth(currentMonth.getMonth(), currentMonth.getFullYear());
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
            setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
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
                <strong>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</strong>
                <button onClick={() => changeYear(-1)}>&lt;&lt;</button>
                <button onClick={() => changeMonth(-1)}>&lt;</button>
                <button onClick={() => changeMonth(1)}>&gt;</button>
                <button onClick={() => changeYear(1)}>&gt;&gt;</button>
                {/* <button onClick={() => changeMonth(-1)}>&lt;</button>
                <span>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                <button onClick={() => changeMonth(1)}>&gt;</button> */}
            </CalendarHeader>
            <CalendarBody>
                {weekDays.map((day, index) => (
                    <div key={index}>{day}</div>
                ))}

                {days.map((day, index) => (
                    <Day key={index} onClick={() => handleDayClick(day)} isSelected={day === selectedDate?.getDate()}>
                        {day}
                    </Day>
                ))}

            </CalendarBody>
        </CalendarWrapper>
    );
};

export default Calendar;
