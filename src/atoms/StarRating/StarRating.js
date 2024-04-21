import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Star from './Star';

const StarContainer = styled.div`
  display: flex;
  gap: 4px; // Add spacing between stars
`;

const StarRating = ({ initialRating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(null);
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handleMouseOver = (rating) => {
    setHoveredRating(rating);
  };

  const handleMouseOut = () => {
    setHoveredRating(null);
  };

  const handleClick = (rating) => {
    setCurrentRating(rating);
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  const displayedRating =
    hoveredRating !== null ? hoveredRating : currentRating;

  return (
    <StarContainer>
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        const ratingDifference = displayedRating - index;

        const type =
          ratingDifference >= 1
            ? 'full'
            : ratingDifference > 0
            ? 'half'
            : 'empty';

        return (
          <Star
            key={index}
            type={type}
            onMouseOver={() => handleMouseOver(starIndex)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(starIndex)}
          />
        );
      })}
    </StarContainer>
  );
};

StarRating.propTypes = {
  initialRating: PropTypes.number,
  onRatingChange: PropTypes.func,
};

StarRating.defaultProps = {
  initialRating: 0,
};

export default StarRating;
