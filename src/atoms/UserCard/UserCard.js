// Importing necessary libraries and components
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled-components
const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  width: 300px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

// React component
class UserCard extends React.Component {
  render() {
    const { name, email, phone, website, avatar } = this.props.user;
    return (
      <Card>
        <Avatar src={avatar} alt={name} />
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </Card>
    );
  }
}

// PropTypes
UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default UserCard;
