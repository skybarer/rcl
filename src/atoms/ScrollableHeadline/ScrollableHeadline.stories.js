// src/components/ScrollableHeadline.stories.js

import React from 'react';
import ScrollableHeadline from './ScrollableHeadline';

export default {
  title: 'ScrollableHeadline',
  component: ScrollableHeadline,
};

const Template = (args) => <ScrollableHeadline {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a scrolling headline. Stay tuned for more updates!',
  duration: 10,
};

export const FastScroll = Template.bind({});
FastScroll.args = {
  text: 'Fast scrolling headline. Get ready for rapid news updates!',
  duration: 5,
};

export const SlowScroll = Template.bind({});
SlowScroll.args = {
  text: 'Slow scrolling headline. Take your time to read the news.',
  duration: 20,
};
