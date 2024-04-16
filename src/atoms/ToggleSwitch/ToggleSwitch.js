// ToggleSwitch.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SwitchButton from './SwitchButton';

// Styled component for the container
const ButtonContainer = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f8ff;
  border-radius: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  height: auto;
  margin-inline: auto;
  position: relative;
  width: 240px;
  z-index: 1;
  border: 1px solid #eae7e7;
  opacity: 1;
`;

const ToggleSwitch = () => {
  const [activeButton, setActiveButton] = useState('Preview');

  return (
    <ButtonContainer>
      <SwitchButton
        active={activeButton === 'Preview'}
        onClick={() => setActiveButton('Preview')}
      >
        Preview
      </SwitchButton>
      <SwitchButton
        active={activeButton === 'Code'}
        onClick={() => setActiveButton('Code')}
      >
        Code
      </SwitchButton>
    </ButtonContainer>
  );
};

export default ToggleSwitch;
