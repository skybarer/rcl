// src/AirbnbInput.js
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.isFocused || props.hasValue ? '14px' : '50%')};
  left: 12px;
  font-size: ${(props) =>
    props.isFocused || props.hasValue ? '0.8rem' : '1rem'};
  color: ${(props) => (props.isFocused ? '#4d536e' : '#6d758d')};
  transform: translateY(
    ${(props) => (props.isFocused || props.hasValue ? '-50%' : '-50%')}
  );
  letter-spacing: 1px;

  transition: all 0.2s ease-out;
  pointer-events: none;
  background: transparent;
  padding: 0 4px;

  line-height: 1.25rem;
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 13px;
`;

const InputField = styled.input`
  padding: ${(props) => (props.hasLabel ? '22px 14px 10px' : '10px')};
  border: 1px solid #6d758d;
  border-radius: 4px;
  font-size: 16px;
  color: #000000;
`;

const AirbnbInput = ({ label, placeholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper>
      {label && (
        <FloatingLabel isFocused={isFocused} hasValue={value}>
          {label}
        </FloatingLabel>
      )}
      <InputField
        hasLabel={!!label}
        type="text"
        placeholder={isFocused || !label ? placeholder : ''}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputWrapper>
  );
};

AirbnbInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AirbnbInput;
