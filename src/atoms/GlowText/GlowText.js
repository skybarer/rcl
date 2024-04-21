// src/components/GlowText.js
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const glow = css`
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080,
    0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
`;

const GlowTextWrapper = styled.div`
  font-size: ${(props) => (props.isButton ? '48px' : '60px')};
  font-family: 'Futura';
  color: #fff;
  text-align: center;
  ${glow}
  ${(props) =>
    props.isButton &&
    css`
      display: inline-block;
      box-sizing: border-box;
      padding: 10px;
      border: none;
      text-decoration: none;
      white-space: pre;
      transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
      &:hover {
        text-shadow: 0 0 10px rgba(255, 255, 255, 1),
          0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1),
          0 0 40px #00ffff, 0 0 70px #00ffff, 0 0 80px #00ffff,
          0 0 100px #00ffff;
      }
    `}
`;

const GlowText = ({ isButton, children }) => {
  return <GlowTextWrapper isButton={isButton}>{children}</GlowTextWrapper>;
};

GlowText.propTypes = {
  isButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default GlowText;
