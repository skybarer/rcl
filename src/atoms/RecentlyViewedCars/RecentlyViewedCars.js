import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  padding: 20px;
  background-color: #f6f4f8;
  background-color: #f6f4f8 !important;
  background-position: 50% !important;
  background-repeat: no-repeat !important;
  border-radius: 6px 6px 0 0;
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 200px;
  margin-right: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 0 48px hsla(0, 0%, 53%, 0.12);
  height: 100%;
  max-width: 18em;
  min-width: 18em;
  margin: 0 16px 0 0;
  border: none !important;
  color: #2e054e;
  /* transition: all 0.15s ease; */
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.04);
    /* transition: all 0.15s ease; */
    transition: transform 0.2s ease-out;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;

  /* border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  height: 100%;
  left: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%; */
`;

const Content = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  color: #000;
  margin: 0 0 5px 0;
  color: #2e054e;
`;

const Details = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 10px 0;
`;

const Price = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin: 0;
`;

// const HeartIcon = styled.span`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   color: pink;
//   font-size: 24px;
//   cursor: pointer;
// `;

// CarCard component
function CarCard({ imageUrl, title, details, price }) {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <Content>
        {/* <HeartIcon>❤️</HeartIcon> */}
        <Title>{title}</Title>
        <Details>{details}</Details>
        <Price>{price}</Price>
      </Content>
    </Card>
  );
}

CarCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

// RecentlyViewedCars component
function RecentlyViewedCars({ cars }) {
  return (
    <Container>
      {cars.map((car) => (
        <CarCard key={car.id} {...car} />
      ))}
    </Container>
  );
}

RecentlyViewedCars.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RecentlyViewedCars;
