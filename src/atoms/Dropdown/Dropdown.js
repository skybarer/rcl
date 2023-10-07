// Dropdown.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 10px;
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
            <Button onClick={() => setIsOpen(!isOpen)}>Select an Option</Button>
            {isOpen && (
                <DropdownList>
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