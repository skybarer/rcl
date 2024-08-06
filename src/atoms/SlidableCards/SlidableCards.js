// src/components/SlidableCards.js
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
  z-index: 1;
`;

const CardContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  transition: transform 0.3s ease-in-out;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`;

const Card = styled.div`
  min-width: 400px;
  min-height: 400px;
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-align: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
`;

const SlidableCards = ({ cards }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <Arrow onClick={scrollLeft}>&#9664;</Arrow>
      <CardContainer ref={containerRef}>
        {cards.map((card, index) => (
          <Card key={index}>{card}</Card>
        ))}
      </CardContainer>
      <Arrow onClick={scrollRight}>&#9654;</Arrow>
    </Container>
  );
};

SlidableCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SlidableCards;
