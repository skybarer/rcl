import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// https://staxmanade.com/CssToReact/

const StyledBadge = styled.span`
  display: inline-block;
  padding: 0.5em 0.5em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Badge = ({ children, color }) => (
  <StyledBadge color={color}>{children}</StyledBadge>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Badge.defaultProps = {
  color: '#007bff', // Default to bootstrap primary color
};
