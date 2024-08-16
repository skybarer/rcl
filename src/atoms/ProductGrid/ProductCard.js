import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  margin: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 16px;
  font-size: 1.2em;
`;

const Description = styled.p`
  margin: 0 16px 16px;
  color: #555;
`;

const ProductCard = ({ image, title, description }) => (
  <Card>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Card>
);

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
