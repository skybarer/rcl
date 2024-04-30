import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderWrapper = styled.input.attrs({ type: 'range' })`
  width: 25rem;
  margin: 10px 0;
  height: 4px !important;
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  background: #f1f1f1;
  border-radius: 3px;
  cursor: pointer;
  height: 5px;
  outline: 0;
  position: relative;
  background: ${(props) =>
    `linear-gradient(90deg, rgb(99, 0, 163) ${props.percentage}%, rgb(247, 244, 248) ${props.percentage}%)`};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => `rgb(99, 0, 163, 1)`};
    cursor: pointer;
  }
`;

const Slider = ({ value, onChange, min = 0, max = 100 }) => {
  // Convert the value to a percentage
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <SliderWrapper
      percentage={percentage}
      onChange={onChange}
      min={min}
      max={max}
    />
  );
};

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Slider;
