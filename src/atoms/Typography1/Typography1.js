// Typography.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTypography = styled.div`
  font-family: ${(props) => props.fontFamily || 'Arial'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  color: ${(props) => props.color || 'inherit'};
`;

const Typography1 = ({ variant, children, ...rest }) => {
  // Mapping variant to styles, you can extend this as needed
  let styles = {};
  switch (variant) {
    case 'h1':
      styles = { fontSize: '2.5em', fontWeight: 'bold' };
      break;
    case 'h2':
      styles = { fontSize: '2em', fontWeight: 'bold' };
      break;
    case 'h3':
      styles = { fontSize: '1.5em', fontWeight: 'bold' };
      break;
    case 'h4':
      styles = { fontSize: '1.2em', fontWeight: 'bold' };
      break;
    case 'h5':
      styles = { fontSize: '1em', fontWeight: 'bold' };
      break;
    case 'h6':
      styles = { fontSize: '0.8em', fontWeight: 'bold' };
      break;
    case 'subtitle':
      styles = { fontSize: '1.2em', fontWeight: 'normal' };
      break;
    case 'body':
      styles = { fontSize: '1em', fontWeight: 'normal' };
      break;
    case 'caption':
      styles = { fontSize: '0.8em', fontWeight: 'normal' };
      break;
    default:
      styles = { fontSize: '1em', fontWeight: 'normal' };
  }

  return (
    <StyledTypography as={variant} {...styles} {...rest}>
      {children}
    </StyledTypography>
  );
};

Typography1.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle',
    'body',
    'caption',
  ]),
  children: PropTypes.node.isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

Typography1.defaultProps = {
  variant: 'body',
};

export default Typography1;
