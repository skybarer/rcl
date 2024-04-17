// Card.stories.js
import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const Filled = () => (
  <Card variant="filled" width="15rem">
    Don’t want to be one of those websites that blinds people when they open it
    on their phone at 2am? Enable dark mode in your configuration file then
    throw dark: in front of any color utility to apply it when dark mode is
    active. Works for background colors, text colors, border colors, and even
    gradients.
  </Card>
);

export const Outlined = () => (
  <Card variant="outlined" width="15rem">
    Don’t want to be one of those websites that blinds people when they open it
    on their phone at 2am? Enable dark mode in your configuration file then
    throw dark: in front of any color utility to apply it when dark mode is
    active. Works for background colors, text colors, border colors, and even
    gradients.
  </Card>
);
