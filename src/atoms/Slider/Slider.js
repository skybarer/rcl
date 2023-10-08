import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderWrapper = styled.input.attrs({ type: 'range' })`
  width: 100%;
  margin: 10px 0;
`;

const Slider = ({ value, onChange, min, max }) => {
    return <SliderWrapper value={value} onChange={onChange} min={min} max={max} />;
};

Slider.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
};

export default Slider;
