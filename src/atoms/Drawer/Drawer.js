import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Styled Components
const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  ${(props) => (props.position === 'left' ? 'left: 0;' : 'right: 0;')}
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: ${(props) =>
    props.position === 'left'
      ? '2px 0 5px rgba(0,0,0,0.1)'
      : '-2px 0 5px rgba(0,0,0,0.1)'};
  transform: translateX(
    ${(props) =>
      props.isOpen ? '0' : props.position === 'left' ? '-100%' : '100%'}
  );
  transition: transform 0.3s ease-in-out;
  z-index: 1100;
  padding: 20px;
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  ${(props) =>
    props.position === 'left'
      ? css`
          position: absolute;
          top: 10px;
          right: 10px;
        `
      : css`
          position: absolute;
          top: 10px;
          left: 10px;
        `}
`;

// Drawer Component
export const Drawer = ({ isOpen, onClose, children, position }) => {
  return (
    <>
      <DrawerOverlay isOpen={isOpen} onClick={onClose} />
      <DrawerContainer isOpen={isOpen} position={position}>
        <CloseButton position={position} onClick={onClose}>
          &times;
        </CloseButton>
        {children}
      </DrawerContainer>
    </>
  );
};

// Prop Types
Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right']),
};

Drawer.defaultProps = {
  children: null,
  position: 'left',
};
