// Avatar.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAvatar = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;

export const Avatar = ({ src, size, alt }) => (
  <StyledAvatar src={src} size={size} alt={alt} />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  size: 50,
  alt: 'Avatar',
};
