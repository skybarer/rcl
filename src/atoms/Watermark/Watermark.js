import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const WatermarkContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const WatermarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const WatermarkItem = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  opacity: ${(props) => props.opacity};
  transform: rotate(${(props) => props.rotate}deg);
  margin: ${(props) => props.spacing}px;
  white-space: nowrap;
  ${(props) => props.text && 'user-select: none;'}
`;

// Watermark Component
export const Watermark = ({
  children,
  text,
  image,
  color,
  fontSize,
  opacity,
  rotate,
  spacing,
}) => {
  return (
    <WatermarkContainer>
      {children}
      <WatermarkOverlay>
        {[...Array(10)].map((_, index) => (
          <WatermarkItem
            key={index}
            color={color}
            fontSize={fontSize}
            opacity={opacity}
            rotate={rotate}
            spacing={spacing}
            text={text}
          >
            {text || <img src={image} alt="watermark" />}
          </WatermarkItem>
        ))}
      </WatermarkOverlay>
    </WatermarkContainer>
  );
};

// Prop Types
Watermark.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  opacity: PropTypes.number,
  rotate: PropTypes.number,
  spacing: PropTypes.number,
};

Watermark.defaultProps = {
  text: '',
  image: '',
  color: 'rgba(0, 0, 0, 0.1)',
  fontSize: '24px',
  opacity: 0.3,
  rotate: -30,
  spacing: 100,
};
