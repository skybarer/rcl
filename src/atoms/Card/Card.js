// Card.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  resize: both;
  background-color: ${(props) =>
    props.variant === 'filled' ? 'rgb(255 255 255 / 1)' : 'transparent'};
  border-radius: 0.5rem;
  border: ${(props) =>
    props.variant === 'outlined' ? '1px solid #d7d7d8' : '0 solid #e5e7eb;'};
  color: ${(props) => (props.variant === 'filled' ? 'black' : 'black')};
  padding: 0.75rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  box-sizing: border-box;
`;

const Card = ({ variant, children, width, height }) => (
  <CardWrapper variant={variant} width={width} height={height}>
    {children}
  </CardWrapper>
);

Card.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outlined']),
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Card.defaultProps = {
  variant: 'filled',
  width: 'auto',
  height: 'auto',
};

export default Card;
