// src/OfferCard.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 250px;
  margin: 10px;
  position: relative;
  background-color: ${({ highlighted }) => (highlighted ? '#fff5f5' : '#fff')};
  border: ${({ highlighted }) => (highlighted ? '2px solid #e40000' : 'none')};
  height: 486px !important;
  width: 304px !important;
  -webkit-box-shadow: 0 6px 48px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 6px 48px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease;
  &:hover {
    transform: scale(1.04);
    /* transition: all 0.15s ease; */
    cursor: pointer;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  position: relative;
  /* filter: brightness(0.75); */
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px !important;
  color: black; /* Set text color to white for contrast */
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 1 !important;
  /* color: ${({ highlighted }) => (highlighted ? '#e40000' : '#fff')}; */
  color: black;
  margin: 0 0 5px;
  margin-bottom: 12px !important;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0 0 10px;
`;

const FinePrint = styled.p`
  font-size: 12px;
  color: #6f7171 !important;
`;

const Border = styled.div`
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.15s ease;
`;

const OfferCard = ({ title, description, image, finePrint, highlighted }) => (
  <Card highlighted={highlighted}>
    <BackgroundImage src={image} />
    <Content>
      <Border>
        <Title highlighted={highlighted}>{title}</Title>
        <Description>{description}</Description>
      </Border>
      <FinePrint>{finePrint}</FinePrint>
    </Content>
  </Card>
);

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  finePrint: PropTypes.string,
  highlighted: PropTypes.bool,
};

OfferCard.defaultProps = {
  finePrint: '',
  highlighted: false,
};

export default OfferCard;
