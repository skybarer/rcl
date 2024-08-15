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
  transition: transform 1.2s ease-in-out;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  /* opacity: 1;
  width: 45000px;
  transform: translate3d(0px, 0px, 0px);
  transform: translateY(0px);
  transition-duration: 0.8s;
  transition-delay: 0.45s;
  transition-property: transform, opacity;
  transition-timing-function: ease-in-out; */
  /* transition: transform 1s; */
`;

const Card = styled.div`
  min-width: 360px;
  min-height: 360px;
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

  const arrowLeft = (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.242 3.054 C 16.584 3.147,16.840 3.395,16.939 3.729 C 17.015 3.987,17.015 4.053,16.937 4.323 C 16.875 4.534,16.775 4.638,13.147 8.270 L 9.421 12.000 13.129 15.710 C 16.006 18.589,16.855 19.460,16.917 19.600 C 17.016 19.819,17.025 20.182,16.938 20.391 C 16.856 20.587,16.619 20.831,16.420 20.924 C 16.182 21.034,15.825 21.025,15.578 20.901 C 15.424 20.824,14.455 19.876,11.255 16.671 C 7.474 12.885,7.124 12.524,7.065 12.343 C 6.983 12.094,6.983 11.906,7.065 11.657 C 7.124 11.476,7.472 11.117,11.232 7.353 C 14.049 4.532,15.391 3.214,15.517 3.147 C 15.748 3.024,16.008 2.990,16.242 3.054 "
        fill="currentColor"
        stroke="none"
        fill-rule="evenodd"
      ></path>
    </svg>
  );

  const arrowRight = (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.758 3.054 C 7.416 3.147,7.160 3.395,7.061 3.729 C 6.985 3.987,6.985 4.053,7.063 4.323 C 7.125 4.534,7.225 4.638,10.853 8.270 L 14.579 12.000 10.871 15.710 C 7.994 18.589,7.145 19.460,7.083 19.600 C 6.984 19.819,6.975 20.182,7.062 20.391 C 7.144 20.587,7.381 20.831,7.580 20.924 C 7.818 21.034,8.175 21.025,8.422 20.901 C 8.576 20.824,9.545 19.876,12.745 16.671 C 16.526 12.885,16.876 12.524,16.935 12.343 C 17.017 12.094,17.017 11.906,16.935 11.657 C 16.876 11.476,16.528 11.117,12.768 7.353 C 9.951 4.532,8.609 3.214,8.483 3.147 C 8.252 3.024,7.992 2.990,7.758 3.054 "
        fill="currentColor"
        stroke="none"
        fill-rule="evenodd"
      ></path>
    </svg>
  );

  return (
    <Container>
      <Arrow onClick={scrollLeft}>{arrowLeft}</Arrow>
      <CardContainer ref={containerRef}>
        {cards.map((card, index) => (
          <Card key={index}>{card}</Card>
        ))}
      </CardContainer>
      <Arrow onClick={scrollRight}>{arrowRight}</Arrow>
    </Container>
  );
};

SlidableCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SlidableCards;
