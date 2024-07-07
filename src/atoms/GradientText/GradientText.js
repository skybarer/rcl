// src/components/GradientText.js
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  to {
    background-position: 400%;
  }
`;

const animate1 = keyframes`
  to {
    background-position: 300%;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 150px;
  font-weight: 800;
  outline: none;
  padding-left: var(--padding);
  padding-right: var(--padding);
  background: linear-gradient(
    135deg,
    #5335cf 0%,
    #de005e 25%,
    #f66e48 50%,
    #de005e 75%,
    #5335cf 100%
  );
  background-size: 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${animate} 10s linear infinite;
`;

const Text1 = styled(Text)`
  /* background: linear-gradient(
    135deg,
    #5335cf 0%,
    #de005e 25%,
    #f66e48 50%,
    #de005e 75%,
    #000 100%
  ) !important; */
  animation: ${animate1} 8s linear infinite;
  animation-delay: 2s;
`;

const Text2 = styled(Text)`
  animation-delay: 4s;
`;

const GradientText = ({ variant }) => {
  switch (variant) {
    case 'text1':
      return <Text1>Preview.</Text1>;
    case 'text2':
      return <Text2>Ship.</Text2>;
    default:
      return <Text>Develop.</Text>;
  }
};

GradientText.propTypes = {
  variant: PropTypes.oneOf(['text', 'text1', 'text2']),
};

GradientText.defaultProps = {
  variant: 'text',
};

export default GradientText;
