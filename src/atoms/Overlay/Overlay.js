// Overlay.js
import React from 'react';
import styled from 'styled-components';

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure the overlay appears above other elements */
`;

const Overlay = ({ children, onClick }) => {
  return <OverlayWrapper onClick={onClick}>{children}</OverlayWrapper>;
};

export default Overlay;
