import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import './Input.css'
// https://github.com/iiison/react-form
// https://academind.com/tutorials/reactjs-a-custom-useform-hook
// https://react-hook-form.com/

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
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

const Input = ({
  id = 'input-1',
  type = 'text',
  value = 'akash',
  placeholder = 'Your username or email',
  className,
  style,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    if (event && event.target) setInputValue(event.target.value);
  };

  return (
    <InputContainer>
      <TextInput
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        onInput={handleInputChange}
        onChange={onChange}
        aria-label="Your username or email"
        aria-invalid="false"
        value={inputValue}
        name="username"
        aria-required="true"
        aria-describedby="tooltip-input-1"
        style={style}
      />
    </InputContainer>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  onChange: undefined,
};

export default Input;
