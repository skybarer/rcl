// src/components/TextField.js

import React, { useState } from 'react';
import styled, { css } from 'styled-components';

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

const TextField = ({ multiline, icon, adornment, error, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <TextFieldWrapper>
      {icon && <Icon>{icon}</Icon>}
      {multiline ? (
        <TextArea
          {...props}
          value={inputValue}
          onChange={handleChange}
          hasError={!!error}
          icon={!!icon}
        />
      ) : (
        <Input
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

export default TextField;
