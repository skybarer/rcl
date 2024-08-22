import React, { useState } from 'react';
import EmojiRating from './EmojiRating';

export default {
  title: 'Form/EmojiRating',
  component: EmojiRating,
};

export const Default = () => {
  const [rating, setRating] = useState(3); // Default to 'Neutral'
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return <EmojiRating rating={rating} onRatingChange={handleRatingChange} />;
};
