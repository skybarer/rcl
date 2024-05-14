// Card.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  width: ${(props) => props.width || 'min-content'};
  height: ${(props) => props.height || 'min-content'};
  resize: both;
  background-color: ${(props) => props.variant || 'rgb(255 255 255 / 1)'};
  border-radius: ${(props) => props.borderRadius || '0.5rem'};
  border: ${(props) => props.border || '1px solid #d7d7d8'};
  color: ${(props) => props.color || 'black'};
  padding: ${(props) => props.padding || '0.75rem'};
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  box-sizing: border-box;
`;

const Card = ({
  className,
  variant,
  children,
  width,
  height,
  padding,
  border,
  borderRadius,
  style,
}) => (
  <CardWrapper
    className={className}
    variant={variant}
    width={width}
    height={height}
    padding={padding}
    border={border}
    borderRadius={borderRadius}
    style={{ ...style }}
  >
    {children}
  </CardWrapper>
);

Card.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
};

Card.defaultProps = {
  variant: 'white',
  width: 'min-content',
  height: 'min-content',
  padding: 0,
  background: 'white',
  color: 'black',
  border: '1px solid #d7d7d8',
};

export default Card;
