// src/TeamMember.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  text-align: center;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Name = styled.h3`
  margin: 10px 0 5px;
  font-size: 18px;
  color: #333;
`;

const Role = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;
`;

const TeamMember = ({ name, role, image }) => (
  <Card>
    <Image src={image} alt={name} />
    <Name>{name}</Name>
    <Role>{role}</Role>
  </Card>
);

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TeamMember;
