import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Container for the OTP input fields
const OTPContainer = styled.div`
  display: flex;
  gap: 8px;
`;

// Styled input field for OTP digits
const OTPInput = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;

const OTPChecker = ({ length, onOTPChange }) => {
  const [otpValues, setOtpValues] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;

    // Only allow numeric input
    if (/\D/.test(value)) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    setOtpValues(newOtpValues);
    onOTPChange(newOtpValues.join(''));

    // Focus next input if not the last one
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <OTPContainer>
      {otpValues.map((digit, index) => (
        <OTPInput
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </OTPContainer>
  );
};

OTPChecker.propTypes = {
  length: PropTypes.number.isRequired, // Number of OTP digits
  onOTPChange: PropTypes.func.isRequired, // Callback to handle OTP changes
};

export default OTPChecker;
