// src/stories/StarRating.stories.js
import React, { useState } from 'react';
import StarRating from './StarRating';

export default {
  title: 'StarRating',
  component: StarRating,
};

const Template = (args) => {
  const [rating, setRating] = useState(args.initialRating);

  return (
    <div>
      <StarRating {...args} onRatingChange={setRating} />
      <p>Current Rating: {rating}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  initialRating: 2.5,
};
