import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Container for the contact information
const ContactInfoContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

// Header for the contact info (name)
const ContactName = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
`;

// Styled paragraph for each piece of contact information
const ContactDetail = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #555;
`;

// The ContactInfo component displays contact information in a structured format
const ContactInfo = ({ name, email, phone, address }) => {
  return (
    <ContactInfoContainer>
      <ContactName>{name}</ContactName>
      {email && <ContactDetail>Email: {email}</ContactDetail>}
      {phone && <ContactDetail>Phone: {phone}</ContactDetail>}
      {address && <ContactDetail>Address: {address}</ContactDetail>}
    </ContactInfoContainer>
  );
};

// PropTypes for validation
ContactInfo.propTypes = {
  name: PropTypes.string.isRequired, // Contact name
  email: PropTypes.string, // Contact email
  phone: PropTypes.string, // Contact phone
  address: PropTypes.string, // Contact address
};

// Default props if not provided
ContactInfo.defaultProps = {
  email: '',
  phone: '',
  address: '',
};

export default ContactInfo;
