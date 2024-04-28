import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSvg = styled.svg`
  width: 100px;
  height: 100px;
`;

const StyledCircle = styled.circle`
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 4;
`;

const StyledProgressCircle = styled.circle`
  fill: none;
  stroke: #049aff;
  stroke-width: 8;
  stroke-dasharray: ${({ circumference }) =>
    `${circumference} ${circumference}`};
  stroke-dashoffset: ${({ offset }) => offset};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const StyledText = styled.text`
  font-size: 18px;
  font-weight: bold;
  fill: #000;
  text-anchor: middle;
  dominant-baseline: middle;
`;

const CircularProgress = ({ progress }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <StyledSvg viewBox="0 0 100 100">
      <StyledCircle cx="50" cy="50" r="45" />
      <StyledProgressCircle
        cx="50"
        cy="50"
        r="45"
        circumference={circumference}
        offset={offset}
      />
      <StyledText x="50" y="50">
        {progress}%
      </StyledText>
    </StyledSvg>
  );
};

CircularProgress.propTypes = {
  progress: PropTypes.number.isRequired, // Expecting a number between 0 and 100
};

export default CircularProgress;
