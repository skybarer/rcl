// src/components/YouTubeShort.stories.js
import React from 'react';
import YouTubeShort from './YouTubeShort';

export default {
  title: 'YouTubeShort',
  component: YouTubeShort,
};

const Template = (args) => <YouTubeShort {...args} />;

export const Default = Template.bind({});
Default.args = {
  videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
  title: 'Sample Video',
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
  title: 'Custom Video Title',
};
