// src/stories/TextAvatar.stories.js
import React from 'react';
import TextAvatar from './TextAvatar';

export default {
  title: 'Atoms/TextAvatar',
  component: TextAvatar,
};

const Template = (args) => <TextAvatar {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  initials: 'JD',
  size: '40px',
  variant: 'circle',
  bgColor: '#3498db',
  textColor: '#ffffff',
};

export const Square = Template.bind({});
Square.args = {
  initials: 'AB',
  size: '40px',
  variant: 'square',
  bgColor: '#e74c3c',
  textColor: '#ffffff',
};

export const RoundedSquare = Template.bind({});
RoundedSquare.args = {
  initials: 'CD',
  size: '40px',
  variant: 'rounded-square',
  bgColor: '#2ecc71',
  textColor: '#ffffff',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  initials: 'XY',
  size: '60px',
  variant: 'circle',
  bgColor: '#f39c12',
  textColor: '#ffffff',
};
