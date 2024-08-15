import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 320px;
  margin: 10px;
  text-align: left;
  border-radius: 12px;
  box-shadow: rgba(135, 135, 135, 0.12) 0px 0px 48px;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  background-color: #f6f4f8;
  background-color: #f6f4f8 !important;
  background-position: 50% !important;
  background-repeat: no-repeat !important;
  border-radius: 6px 6px 0 0;
  position: relative;
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const InfoContainer = styled.div`
  padding: 16px;
`;

const CarName = styled.h4`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`;

const Details = styled.p`
  margin: 8px 0;
  color: #777;
  font-size: 0.9em;
`;

const Price = styled.div`
  font-size: 1.1em;
  color: #000;
  margin: 8px 0;
`;

const EMI = styled.div`
  font-size: 0.9em;
  color: #666;
  margin: 4px 0;
`;

const Shortlist = styled.div`
  font-size: 0.8em;
  color: #ff4d4f;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 4px 0;
`;

const HeartIcon = styled.span`
  margin-right: 4px;
  font-size: 1.2em;
`;

const CarCard = ({
  imageUrl,
  name,
  kmDriven,
  fuelType,
  transmission,
  price,
  emi,
  shortlistedCount,
}) => (
  <Card>
    <Image src={imageUrl} alt={name} />
    <InfoContainer>
      <CarName>{name}</CarName>
      <Details>
        {kmDriven} km • {fuelType} • {transmission}
      </Details>
      <Price>₹{price} Lakh</Price>
      <EMI>EMI from ₹{emi}/m</EMI>
      <Shortlist>
        <HeartIcon>❤️</HeartIcon>
        {shortlistedCount} shortlisted this car
      </Shortlist>
    </InfoContainer>
  </Card>
);

CarCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  kmDriven: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  emi: PropTypes.string.isRequired,
  shortlistedCount: PropTypes.number.isRequired,
};

export default CarCard;
