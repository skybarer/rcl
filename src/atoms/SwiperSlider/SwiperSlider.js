import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  overflow: hidden;
  margin: auto;
`;

const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${(props) => `translateX(-${props.activeIndex * 100}%)`};
`;

const SlideImage = styled.img`
  width: 100%;
  flex-shrink: 0;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 5px;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
  border: ${(props) => (props.isActive ? '2px solid black' : 'none')};
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === 'left' ? 'left: 10px' : 'right: 10px')};
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  cursor: pointer;
  z-index: 1;
`;

const SwiperSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const selectSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <SliderWrapper>
      <Arrow direction="left" onClick={prevSlide}>
        &#9664;
      </Arrow>
      <Slide activeIndex={activeIndex}>
        {images.map((image, index) => (
          <SlideImage src={image} alt={`Slide ${index + 1}`} key={index} />
        ))}
      </Slide>
      <Arrow direction="right" onClick={nextSlide}>
        &#9654;
      </Arrow>
      <ThumbnailWrapper>
        {images.map((image, index) => (
          <Thumbnail
            src={image}
            alt={`Thumbnail ${index + 1}`}
            key={index}
            isActive={index === activeIndex}
            onClick={() => selectSlide(index)}
          />
        ))}
      </ThumbnailWrapper>
    </SliderWrapper>
  );
};

SwiperSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SwiperSlider;
