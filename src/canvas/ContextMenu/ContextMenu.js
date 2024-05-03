import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled-component for the context menu
const ContextMenuWrapper = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  z-index: 10; // Ensure the context menu appears above other elements
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ContextMenu = ({ x, y, onOptionClick }) => (
  <ContextMenuWrapper style={{ left: x, top: y }}>
    <div onClick={() => onOptionClick('Add Node')}>Add Node</div>
  </ContextMenuWrapper>
);

ContextMenu.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};

export default ContextMenu;
