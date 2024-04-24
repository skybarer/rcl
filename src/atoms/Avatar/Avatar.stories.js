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
  status: 'online', // Example with online status
  showStatus: true, // Status indicator should be visible
};

export const Square = Template.bind({});
Square.args = {
  src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  alt: 'Square Avatar',
  size: '50px',
  variant: 'square',
  status: 'offline', // Example with offline status
  showStatus: true, // Status indicator should be visible
};

export const RoundedSquare = Template.bind({});
RoundedSquare.args = {
  src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  alt: 'Rounded Square Avatar',
  size: '50px',
  variant: 'rounded-square',
  status: 'offline',
  showStatus: true,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  alt: 'Custom Size Avatar',
  size: '100px', // Larger avatar
  variant: 'circle',
  status: 'online', // Online status should be visible
  showStatus: true,
};

export const NoStatus = Template.bind({});
NoStatus.args = {
  src: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  alt: 'No Status Avatar',
  size: '50px',
  variant: 'circle',
  status: 'offline', // Status not displayed
  showStatus: false, // Status indicator should be hidden
};
