// Dropdown.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Divider from './../Divider/Divider';
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border: none;
  cursor: pointer;
  border: 1px solid #bbbbbc;
  border-radius: 0.375rem;
  font-weight: bold;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #ffffff;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 0.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 0.375rem;
  border: 1px solid #d7d7d8;
  width: 14rem;
`;

const DropdownItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <Wrapper>
      <Button onClick={() => setIsOpen(!isOpen)}>
        Options
        <span style={{ verticalAlign: 'middle', marginRight: '-0.25rem' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25rem"
            height="1.25rem"
            viewBox="0 0 20 20"
            fill="rgb(156 163 175)"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </Button>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleItemClick(option)}>
              {option}
            </DropdownItem>
          ))}
          <Divider />
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleItemClick(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Wrapper>
  );
};

export default Dropdown;
