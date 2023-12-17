// src/components/ButtonGroup.js

import React from "react";
import styled from "styled-components";

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  gap: ${({ gap }) => gap || "0px"};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid #bdbdbd;
  border-color: #1565c0;
`;

const Button = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? "rgb(225, 225, 225)" : "#000000"};
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? "4px 0 0 4px" : isLast ? "0 4px 4px 0" : "0"};
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
