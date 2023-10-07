// Popover.js
import React from 'react';
import styled from 'styled-components';

const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const PopoverContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 4px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const PopoverTrigger = styled.div`
  cursor: pointer;
`;

const Popover = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PopoverWrapper>
      <PopoverTrigger onClick={togglePopover}>{trigger}</PopoverTrigger>
      <PopoverContent isOpen={isOpen}>{content}</PopoverContent>
    </PopoverWrapper>
  );
};

export default Popover;