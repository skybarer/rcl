import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  width: 40px;
  height: 40px;
`;

const AvatarGroupContainer = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: -10px;
  }
`;

const AvatarGroup = ({ avatars }) => (
  <AvatarGroupContainer>
    {avatars.map((avatar, index) => (
      <Avatar key={index} src={avatar} alt="avatar" />
    ))}
  </AvatarGroupContainer>
);

AvatarGroup.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AvatarGroup;
