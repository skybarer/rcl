import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  max-width: 1600px;
`;
const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $translateXValue }) => `translateX(${$translateXValue}px)`};
`;

const Card = styled.div`
  min-width: 25%;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
`;

const CardImage = styled.div`
  background-color: transparent;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CardDetails = styled.div`
  text-align: center;
  padding: 10px 0;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const CardPrice = styled.p`
  font-size: 16px;
  color: green;
  margin: 5px 0;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #888;
  margin-right: 5px;
`;

const DiscountPrice = styled.span`
  font-weight: bold;
  color: #000;
`;

const LowestPrice = styled.p`
  color: green;
  font-size: 14px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  border-radius: 50%;
  z-index: 50;
  ${({ direction }) =>
    direction === 'left' ? 'left: 10px;' : 'right: 10px;'}/* width: 40px;
    height: 40px;
    border-radius: 60px;
    background: rgba(255, 255, 255, .6);
    box-shadow: 0 4px 4px rgba(36, 47, 102, .15);
    backdrop-filter: blur(4px); */
`;
const leftArrow = (
  <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.242 3.054 C 16.584 3.147,16.840 3.395,16.939 3.729 C 17.015 3.987,17.015 4.053,16.937 4.323 C 16.875 4.534,16.775 4.638,13.147 8.270 L 9.421 12.000 13.129 15.710 C 16.006 18.589,16.855 19.460,16.917 19.600 C 17.016 19.819,17.025 20.182,16.938 20.391 C 16.856 20.587,16.619 20.831,16.420 20.924 C 16.182 21.034,15.825 21.025,15.578 20.901 C 15.424 20.824,14.455 19.876,11.255 16.671 C 7.474 12.885,7.124 12.524,7.065 12.343 C 6.983 12.094,6.983 11.906,7.065 11.657 C 7.124 11.476,7.472 11.117,11.232 7.353 C 14.049 4.532,15.391 3.214,15.517 3.147 C 15.748 3.024,16.008 2.990,16.242 3.054"
      fill="white"
      stroke="none"
    ></path>
  </svg>
);

const rightArrow = (
  <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.758 3.054 C 7.416 3.147,7.160 3.395,7.061 3.729 C 6.985 3.987,6.985 4.053,7.063 4.323 C 7.125 4.534,7.225 4.638,10.853 8.270 L 14.579 12.000 10.871 15.710 C 7.994 18.589,7.145 19.460,7.083 19.600 C 6.984 19.819,6.975 20.182,7.062 20.391 C 7.144 20.587,7.381 20.831,7.580 20.924 C 7.818 21.034,8.175 21.025,8.422 20.901 C 8.576 20.824,9.545 19.876,12.745 16.671 C 16.526 12.885,16.876 12.524,16.935 12.343 C 17.017 12.094,17.017 11.906,16.935 11.657 C 16.876 11.476,16.528 11.117,12.768 7.353 C 9.951 4.532,8.609 3.214,8.483 3.147 C 8.252 3.024,7.992 2.990,7.758 3.054"
      fill="white"
      stroke="none"
    ></path>
  </svg>
);

// Card Component
function ProductCard({
  image,
  title,
  price,
  originalPrice,
  discountPrice,
  lowestPrice,
}) {
  return (
    <Card>
      <CardImage>
        <img src={image} alt={title} />
      </CardImage>
      <CardDetails>
        <CardTitle>{title}</CardTitle>
        <CardPrice>
          <OriginalPrice>₹{originalPrice}</OriginalPrice>
          <DiscountPrice>₹{discountPrice}</DiscountPrice> OFF
        </CardPrice>
        <LowestPrice>{lowestPrice}</LowestPrice>
      </CardDetails>
    </Card>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  originalPrice: PropTypes.string.isRequired,
  discountPrice: PropTypes.string.isRequired,
  lowestPrice: PropTypes.string.isRequired,
};

// Carousel Component
function ProductCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.floor(products.length / itemsPerView);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < products.length / itemsPerView - 1) {
      setCurrentIndex(currentIndex + itemsPerView);
    }
  };

  const translateXValue = -(currentIndex * itemsPerView * 100); // 100% per view

  return (
    <CarouselContainer>
      translateXValue: {translateXValue}
      {currentIndex > 0 && (
        <NavButton direction="left" onClick={handlePrevClick}>
          {leftArrow}
        </NavButton>
      )}
      <CarouselTrack $translateXValue={translateXValue}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </CarouselTrack>
      {currentIndex < maxIndex && (
        <NavButton direction="right" onClick={handleNextClick}>
          {rightArrow}
        </NavButton>
      )}
    </CarouselContainer>
  );
}

ProductCarousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      originalPrice: PropTypes.string.isRequired,
      discountPrice: PropTypes.string.isRequired,
      lowestPrice: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductCarousel;
