// src/components/TextField.js

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';

const TextFieldWrapper = styled.div`
  position: relative;
  width: 300px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #ff0000;
    `}

  ${(props) =>
    props.icon &&
    css`
      padding-left: 30px;
    `}
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #ff0000;
    `}

  ${(props) =>
    props.icon &&
    css`
      padding-left: 30px;
    `}
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  color: #333;
  display: block;
`;

const Adornment = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  color: #333;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin-top: 4px;
`;

// Add these styles to your styled-components
const OutlinedInput = styled(Input)`
  border: none;
  border-bottom: 1px solid #ccc;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3f51b5;
  }
`;

const FilledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #f5f5f5;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3f51b5;
  }
`;

const StandardInput = styled(Input)`
  border: none;
  border-bottom: 1px solid #ccc;
  &:focus {
    outline: none;
    border-bottom: 2px solid #3f51b5;
  }
`;
// Modify your TextField component
const TextField = ({
  variant,
  multiline,
  icon,
  adornment,
  error,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  let InputComponent;
  switch (variant) {
    case 'outlined':
      InputComponent = OutlinedInput;
      break;
    case 'filled':
      InputComponent = FilledInput;
      break;
    default:
      InputComponent = StandardInput;
  }

  return (
    <TextFieldWrapper>
      {icon && <Icon>{icon}</Icon>}
      {multiline ? (
        <TextArea
          as={InputComponent}
          {...props}
          value={inputValue}
          onChange={handleChange}
          hasError={!!error}
          icon={!!icon}
        />
      ) : (
        <InputComponent
          {...props}
          value={inputValue}
          onChange={handleChange}
          hasError={!!error}
          icon={!!icon}
        />
      )}
      {adornment && <Adornment>{adornment}</Adornment>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </TextFieldWrapper>
  );
};

// Don't forget to add the new prop to PropTypes
TextField.propTypes = {
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  // other PropTypes...
};

TextField.defaultProps = {
  variant: 'standard',
  // other default props...
};

export default TextField;
