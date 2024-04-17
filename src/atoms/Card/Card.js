// Card.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.variant === 'filled' ? 'rgb(255 255 255 / 1)' : 'transparent'};
  border: ${(props) =>
    props.variant === 'outlined' ? '1px solid #3b82f6' : 'none'};
  color: ${(props) => (props.variant === 'filled' ? 'black' : '#3b82f6')};
  box-shadow: var(0 0 #0000, 0 0 #0000),
    var(0 0 #0000, 0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a),
    var(0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a);
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
