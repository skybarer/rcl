// src/components/TimePicker.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const TimePickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 14px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 4px;
`;

const ColumnGroup = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Column = styled.div`
  max-height: 224px;
  overflow-y: auto;
  margin-inline: 4px;
  line-height: 1.7rem;
  &:not(:last-child) {
    border-right: 1px solid #eee;
  }

  /* Custom Scrollbar Styling */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: transparent transparent; /* Firefox - hidden by default */

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent; /* Chrome/Safari */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }

  /* Show scrollbar on hover */
  &:hover {
    scrollbar-color: #ccc transparent; /* Firefox */
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #888; /* Chrome/Safari */
  }

  /* Hide scrollbar if not hovering */
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const Item = styled.div`
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? '#e6f7ff' : 'transparent')};
  &:hover {
    background: #e6f7ff;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
  padding-block: 4px;
`;

const FooterButton = styled.button`
  padding: 1px 5px;
  font-size: 12px;
  border: none;
  background: #1890ff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const TimePicker = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState({ hour: '12', minute: '00', second: '00' });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (type, value) => {
    const updatedTime = { ...time, [type]: value };
    setTime(updatedTime);
    onChange(updatedTime);
  };

  const formatTime = () => `${time.hour}:${time.minute}:${time.second}`;

  return (
    <TimePickerContainer>
      <Input
        readOnly
        value={formatTime()}
        onClick={toggleDropdown}
        placeholder="Select time"
      />
      {isOpen && (
        <Dropdown>
          <ColumnGroup>
            <Column>
              {Array.from({ length: 24 }, (_, i) => {
                const hour = i.toString().padStart(2, '0');
                return (
                  <Item
                    key={hour}
                    selected={time.hour === hour}
                    onClick={() => handleSelect('hour', hour)}
                  >
                    {hour}
                  </Item>
                );
              })}
            </Column>
            <Column>
              {Array.from({ length: 60 }, (_, i) => {
                const minute = i.toString().padStart(2, '0');
                return (
                  <Item
                    key={minute}
                    selected={time.minute === minute}
                    onClick={() => handleSelect('minute', minute)}
                  >
                    {minute}
                  </Item>
                );
              })}
            </Column>
            <Column>
              {Array.from({ length: 60 }, (_, i) => {
                const second = i.toString().padStart(2, '0');
                return (
                  <Item
                    key={second}
                    selected={time.second === second}
                    onClick={() => handleSelect('second', second)}
                  >
                    {second}
                  </Item>
                );
              })}
            </Column>
          </ColumnGroup>
          {isOpen && (
            <Footer>
              <FooterButton
                onClick={() =>
                  setTime({ hour: '00', minute: '00', second: '00' })
                }
              >
                Now
              </FooterButton>
              <FooterButton onClick={toggleDropdown}>OK</FooterButton>
            </Footer>
          )}
        </Dropdown>
      )}
    </TimePickerContainer>
  );
};

TimePicker.propTypes = {
  onChange: PropTypes.func,
};

TimePicker.defaultProps = {
  onChange: () => {},
};

export default TimePicker;
