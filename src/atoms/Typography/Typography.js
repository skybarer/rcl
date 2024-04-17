// Typography.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTypography = styled.p`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
`;

const Typography = ({ size, color, children }) => (
  <StyledTypography size={size} color={color}>
    {children}
  </StyledTypography>
);

Typography.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Typography.defaultProps = {
  size: 14,
  color: '#000',
};

export default Typography;
