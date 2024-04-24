// src/stories/Avatar.stories.js
import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  alt: 'Circle Avatar',
  size: '50px',
  variant: 'circle',
};

export const Square = Template.bind({});
Square.args = {
  src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  alt: 'Square Avatar',
  size: '50px',
  variant: 'square',
};

export const RoundedSquare = Template.bind({});
RoundedSquare.args = {
  src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  alt: 'Rounded Square Avatar',
  size: '50px',
  variant: 'rounded-square',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  alt: 'Custom Size Avatar',
  size: '100px',
  variant: 'circle',
};
