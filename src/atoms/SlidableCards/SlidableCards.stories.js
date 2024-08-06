// src/components/SlidableCards.stories.js
import React from 'react';
import SlidableCards from './SlidableCards';

export default {
  title: 'SlidableCards',
  component: SlidableCards,
};

const cards = [
  'Card 1',
  'Card 2',
  'Card 3',
  'Card 4',
  'Card 5',
  'Card 6',
  'Card 7',
  'Card 8',
  'Card 9',
  'Card 10',
  'Card 11',
  'Card 12',
];

export const Default = () => <SlidableCards cards={cards} />;
