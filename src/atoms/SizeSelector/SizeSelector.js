import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SizeSelectorContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeButton = styled.label`
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.selected ? '#007bff' : '#f8f9fa')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.selected ? '#0056b3' : '#e2e6ea')};
  }
`;

const HiddenRadioButton = styled.input`
  display: none;
`;

const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <SizeSelectorContainer>
      {sizes.map((size) => (
        <SizeButton key={size} selected={selectedSize === size}>
          <HiddenRadioButton
            type="radio"
            name="size"
            value={size}
            checked={selectedSize === size}
            onChange={() => onSizeChange(size)}
          />
          {size}
        </SizeButton>
      ))}
    </SizeSelectorContainer>
  );
};

SizeSelector.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedSize: PropTypes.string.isRequired,
  onSizeChange: PropTypes.func.isRequired,
};

export default SizeSelector;
