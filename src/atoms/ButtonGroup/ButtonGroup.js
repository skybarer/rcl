// src/components/ButtonGroup.js

import React from "react";
import styled from "styled-components";

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  gap: ${({ gap }) => gap || "0px"};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-color: #1565c0;
`;

const Button = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? "rgb(225, 225, 225)" : "#000000"};
  color: #fff;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:not(:first-child):not(:last-child) {
    border-left: none;
    border-right: none;
  }
  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "rgb(225, 225, 225)" : "#000000"};
    border: 1px dotted green;
  }
`;

const ButtonGroup = ({ children, justifyContent, gap }) => {
  return (
    <ButtonGroupWrapper justifyContent={justifyContent} gap={gap}>
      {children}
    </ButtonGroupWrapper>
  );
};

export { ButtonGroup, Button };
