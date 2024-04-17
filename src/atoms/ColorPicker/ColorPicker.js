// ColorPicker.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  margin: 5px;
  cursor: pointer;
  border-radius: 0.125rem;
`;

const ColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColorPicker = ({ colors, onColorSelect }) => (
  <ColorPickerWrapper>
    {colors.map((color) => (
      <ColorBox
        key={color}
        color={color}
        onClick={() => onColorSelect(color)}
      />
    ))}
  </ColorPickerWrapper>
);

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onColorSelect: PropTypes.func.isRequired,
};

export default ColorPicker;
