import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  width: 25rem;
  margin: 10px 0;
  height: 20px;
`;

const SliderTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 5px;
  background: #f1f1f1;
  border-radius: 3px;
  transform: translateY(-50%);
`;

const SliderRange = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => `${props.minValue}%`};
  width: ${(props) => `${props.rangeWidth}%`};
  height: 5px;
  background: rgb(99, 0, 163);
  border-radius: 3px;
  transform: translateY(-50%);
`;

const SliderThumb = styled.input.attrs({ type: 'range' })`
  position: absolute;
  top: -10px;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  cursor: pointer;
  background: transparent;
  left: ${(props) => `${props.position}%`};
  transform: translateX(-50%);

  width: 20px;
  height: 20px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(99, 0, 163);
    cursor: pointer;
    z-index: 2;
  }

  &::-webkit-slider-runnable-track {
    height: 0;
    background: transparent;
  }
`;

const PriceSlider = ({ min, max, minValue, maxValue, onChange }) => {
  const handleMinChange = (e) => {
    const newMin = Math.min(parseInt(e.target.value, 10), maxValue - 1);
    onChange(newMin, maxValue);
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(parseInt(e.target.value, 10), minValue + 1);
    onChange(minValue, newMax);
  };

  const rangeWidth = ((maxValue - minValue) / (max - min)) * 100;
  const minPosition = ((minValue - min) / (max - min)) * 100;
  const maxPosition = ((maxValue - min) / (max - min)) * 100;

  return (
    <SliderWrapper>
      <SliderTrack />
      <SliderRange minValue={minPosition} rangeWidth={rangeWidth} />
      <SliderThumb
        position={minPosition}
        min={min}
        max={max}
        value={minValue}
        onChange={handleMinChange}
      />
      <SliderThumb
        position={maxPosition}
        min={min}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
      />
    </SliderWrapper>
  );
};

PriceSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PriceSlider;
