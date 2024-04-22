import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Define some SVG emojis for different ratings
const emojis = [
  { id: 1, icon: '😡', label: 'Angry' },
  { id: 2, icon: '😟', label: 'Sad' },
  { id: 3, icon: '😐', label: 'Neutral' },
  { id: 4, icon: '🙂', label: 'Happy' },
  { id: 5, icon: '😀', label: 'Very Happy' },
];

// Create a styled wrapper for the emoji ratings
const EmojiWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 300px;
`;

const Emoji = styled.span`
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const EmojiRating = ({ rating, onRatingChange }) => {
  return (
    <EmojiWrapper>
      {emojis.map((emoji) => (
        <Emoji
          key={emoji.id}
          onClick={() => onRatingChange(emoji.id)}
          style={{
            opacity: emoji.id === rating ? 1 : 0.5,
          }}
          title={emoji.label}
        >
          {emoji.icon}
        </Emoji>
      ))}
    </EmojiWrapper>
  );
};

EmojiRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default EmojiRating;
