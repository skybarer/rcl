import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SizeSelectorContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeButton = styled.label`
  display: inline-block;
  padding: 4px 16px;
  /* border: 1px solid #e5e7eb; */
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? 'black' : '#f2f2f2')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  /* font-family: 'Roboto', 'Arial', sans-serif; */
  /* font-size: 1.4rem; */
  /* line-height: 2rem; */
  /* font-weight: 500; */
  &:hover {
    background-color: ${(props) => (props.selected ? 'black' : '#e2e6ea')};
    transition: background-color 0.5s cubic-bezier(0.05, 0, 0, 1);
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
