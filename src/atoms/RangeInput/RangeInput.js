import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const RangeWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const RangeSlider = styled.input`
  width: 100%;
  height: 8px;
  background: ${(props) => props.trackColor || '#ddd'};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: ${(props) => props.thumbColor || '#4CAF50'};
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: ${(props) => props.thumbColor || '#4CAF50'};
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;

const ValueLabel = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
`;

// RangeInput Component
export const RangeInput = ({
  min,
  max,
  step,
  value,
  onChange,
  trackColor,
  thumbColor,
  showValue,
}) => {
  return (
    <RangeWrapper>
      <RangeSlider
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        trackColor={trackColor}
        thumbColor={thumbColor}
      />
      {showValue && <ValueLabel>{value}</ValueLabel>}
    </RangeWrapper>
  );
};

// Prop Types
RangeInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  trackColor: PropTypes.string,
  thumbColor: PropTypes.string,
  showValue: PropTypes.bool,
};

RangeInput.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  trackColor: '#ddd',
  thumbColor: '#4CAF50',
  showValue: true,
};
