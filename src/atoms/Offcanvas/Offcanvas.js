// Offcanvas.js
import React from 'react';
import styled from 'styled-components';

const OffcanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  left: -250px; /* Adjust the initial position based on your design */
  height: 100%;
  width: 250px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: left 0.3s ease;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Offcanvas = ({ isOpen, onClose, children }) => {
  return (
    <OffcanvasWrapper style={{ left: isOpen ? '0' : '-250px' }}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      {children}
    </OffcanvasWrapper>
  );
};

export default Offcanvas;
