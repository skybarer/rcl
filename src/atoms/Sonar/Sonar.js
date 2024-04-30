// src/components/Sonar.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const sonarWave = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    transform: scale(3);
    opacity: 0;
  }
`;

const SonarWrapper = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

const SonarEmitter = styled.div`
  position: relative;
  margin: 32px auto;
  width: 5rem;
  height: 5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.color};
`;

const SonarWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-color: ${(props) => props.color};
  opacity: 0;
  z-index: -1;
  pointer-events: none;
  animation: ${sonarWave} 2s linear infinite;
`;

const Sonar = () => {
  const [color, setColor] = useState('HSL(45,100%,50%)');

  useEffect(() => {
    const interval = setInterval(() => {
      const hue = Math.random() * 360;
      setColor(`HSL(${hue},100%,50%)`);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SonarWrapper>
      <SonarEmitter color={color}>
        <SonarWave color={color} />
      </SonarEmitter>
    </SonarWrapper>
  );
};

export default Sonar;
