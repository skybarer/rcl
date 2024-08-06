import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorSelectorContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorButton = styled.label`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: ${(props) => (props.selected ? '3px solid #000' : '1px solid #ccc')};
  cursor: pointer;
  transition: transform 0.2s, border 0.3s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
  }
`;

const HiddenRadioButton = styled.input`
  display: none;
`;

const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  return (
    <ColorSelectorContainer>
      {colors.map((color) => (
        <ColorButton
          key={color}
          color={color}
          selected={selectedColor === color}
          onClick={() => onColorChange(color)}
        >
          <HiddenRadioButton
            type="radio"
            name="color"
            value={color}
            checked={selectedColor === color}
            onChange={() => onColorChange(color)}
          />
        </ColorButton>
      ))}
    </ColorSelectorContainer>
  );
};

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedColor: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default ColorSelector;
