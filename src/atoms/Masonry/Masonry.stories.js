// src/stories/Masonry.stories.js
import React from 'react';
import Masonry from './Masonry';

export default {
  title: 'Masonry',
  component: Masonry,
};

const Template = (args) => <Masonry {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};
