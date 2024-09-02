// CountdownTimer.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  gap: 10px;
  margin-top: 20px;
`;

const TimeBlock = styled.div`
  background: ${(props) => props.bgColor || '#ddd'};
  color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 2rem;
  text-align: center;
  min-width: 70px;
`;

const Label = styled.span`
  display: block;
  font-size: 0.7rem;
  margin-top: 5px;
  color: #000;
`;

const CountdownTimer = ({ initialTime, onComplete }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1000); // Decrease time by 1 second
      }, 1000);
      return () => clearInterval(interval);
    } else if (time <= 0) {
      setTime(0);
      if (onComplete) onComplete();
    }
  }, [time, onComplete]);

  // Convert time to days, hours, minutes, and seconds
  const days = Math.floor(time / (24 * 3600000));
  const hours = Math.floor((time % (24 * 3600000)) / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  return (
    <TimerContainer>
      <TimeBlock bgColor="#ff8c00">
        {String(days).padStart(2, '0')}
        <Label>Days</Label>
      </TimeBlock>
      <TimeBlock bgColor="#32cd32">
        {String(hours).padStart(2, '0')}
        <Label>Hours</Label>
      </TimeBlock>
      <TimeBlock bgColor="#ff6347">
        {String(minutes).padStart(2, '0')}
        <Label>Minutes</Label>
      </TimeBlock>
      <TimeBlock bgColor="#9370db">
        {String(seconds).padStart(2, '0')}
        <Label>Seconds</Label>
      </TimeBlock>
    </TimerContainer>
  );
};

CountdownTimer.propTypes = {
  initialTime: PropTypes.number.isRequired, // Time in milliseconds
  onComplete: PropTypes.func,
};

CountdownTimer.defaultProps = {
  onComplete: () => alert('Time is up!'),
};

export default CountdownTimer;
