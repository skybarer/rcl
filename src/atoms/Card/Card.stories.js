// Card.stories.js
import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const Filled = () => (
  <Card variant="filled">This is a filled card.</Card>
);

export const Outlined = () => (
  <Card variant="outlined">This is an outlined card.</Card>
);
