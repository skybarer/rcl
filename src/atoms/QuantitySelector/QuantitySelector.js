import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const QuantityWrapper = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: rgb(242 244 245 /1);
  /* height: 32px; */
`;

const Button = styled.button`
  width: auto;
  /* background-color: ${(props) => props.bgColor || 'rgb(242 244 245 /1)'}; */
  color: black;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-sizing: border-box;
  &:hover {
    /* background-color: ${(props) =>
      props.hoverColor || 'rgb(242 244 245 /1)'}; */
  }
  &:disabled {
    /* background-color: #ccc; */
    /* cursor: not-allowed; */
    color: #d0d2d3;
    cursor: default;
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="transition"
          data-testid="icon-minus-sign"
          stroke="none"
        >
          <path
            d="M7 12H12H17"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </Button>
      <ValueDisplay>{value}</ValueDisplay>
      <Button
        onClick={onIncrease}
        disabled={value >= max || disableIncrease}
        bgColor={bgColor}
        hoverColor={hoverColor}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="transition"
          data-testid="icon-plus-sign"
          stroke="none"
        >
          <path
            d="M12 7V12M12 12V17M12 12H7M12 12H17"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
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
