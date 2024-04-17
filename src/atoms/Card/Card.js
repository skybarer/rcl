// Card.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  width: min-content;

  /* width: 300px;
  padding: 20px; */
  resize: both;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.variant === 'filled' ? 'rgb(255 255 255 / 1)' : 'transparent'};
  border: ${(props) =>
    props.variant === 'outlined' ? '1px solid #d7d7d8' : '0 solid #e5e7eb;'};
  color: ${(props) => (props.variant === 'filled' ? 'black' : '#3b82f6')};
  padding: 0.375rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  box-sizing: border-box;
  /* border: 0 solid #e5e7eb; */
`;

const Card = ({ variant, children }) => (
  <CardWrapper variant={variant}>{children}</CardWrapper>
);

Card.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outlined']),
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  variant: 'filled',
};

export default Card;
