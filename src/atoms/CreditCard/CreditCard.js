import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardNumber = styled.div`
  font-size: 18px;
  letter-spacing: 2px;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreditCard = ({ number, name, expiry }) => (
  <CardContainer>
    <CardNumber>{number}</CardNumber>
    <CardInfo>
      <div>{name}</div>
      <div>{expiry}</div>
    </CardInfo>
  </CardContainer>
);

CreditCard.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  expiry: PropTypes.string.isRequired,
};

export default CreditCard;
