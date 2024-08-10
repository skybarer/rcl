import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${(props) => props.bgColor || '#4CAF50'};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => props.hoverColor || '#45a049'};
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ValueDisplay = styled.span`
  margin: 0 15px;
  font-size: 18px;
  min-width: 40px;
  text-align: center;
  display: inline-block;
`;

// QuantitySelector Component
export const QuantitySelector = ({
  value,
  min,
  max,
  step,
  onIncrease,
  onDecrease,
  disableIncrease,
  disableDecrease,
  bgColor,
  hoverColor,
}) => {
  return (
    <QuantityWrapper>
      <Button
        onClick={onDecrease}
        disabled={value <= min || disableDecrease}
        bgColor={bgColor}
        hoverColor={hoverColor}
      >
        -
      </Button>
      <ValueDisplay>{value}</ValueDisplay>
      <Button
        onClick={onIncrease}
        disabled={value >= max || disableIncrease}
        bgColor={bgColor}
        hoverColor={hoverColor}
      >
        +
      </Button>
    </QuantityWrapper>
  );
};

// Prop Types
QuantitySelector.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  disableIncrease: PropTypes.bool,
  disableDecrease: PropTypes.bool,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
};

QuantitySelector.defaultProps = {
  min: 1,
  max: 10,
  step: 1,
  disableIncrease: false,
  disableDecrease: false,
  bgColor: '#4CAF50',
  hoverColor: '#45a049',
};
