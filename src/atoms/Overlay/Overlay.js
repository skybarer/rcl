// Overlay.js
import React from 'react';
import styled from 'styled-components';

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15); /* semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure the overlay appears above other elements */
  /* background: #7b7b7b; */
`;

const OverlayContent = styled.div`
  padding: '20px';
  background: '#fff';
  width: 100% !important;
  border-radius: 12px !important;
  animation-duration: 400ms, 75ms !important;
  animation-iteration-count: 1 !important;
  animation-fill-mode: both !important;
  animation-name: keyframe_vo023e !important;
  --slide-down_amount: unset !important;
  --slide-up_amount: unset !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: vertical !important;
  background: #ffffff !important;
  width: 100vw !important;
  max-width: 100vw !important;
  max-height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  max-width: 480px !important;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);
`;

const Overlay = ({ children, onClick }) => {
  return (
    <OverlayWrapper onClick={onClick}>
      <OverlayContent style={{ padding: '20px', background: '#fff' }}>
        {children}
      </OverlayContent>
    </OverlayWrapper>
  );
};

export default Overlay;
