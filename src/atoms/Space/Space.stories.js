// Card.stories.js
import React from 'react';
import Space from './Space';

export default {
  title: 'Space',
  component: Space,
};

const customScale = {
  1: '10px',
  2: '20px',
  // ... add the rest of your scale here
};

export const Default = () => (
  <>
    <Space marginSize={1}>
      <p>Your content here</p>
    </Space>

    <Space marginSize={1} customScale={customScale}>
      <p>Your content here</p>
    </Space>
  </>
);
