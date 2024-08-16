import React from 'react';
import WeeklyHighlights from './WeeklyHighlights';

export default {
  title: 'WeeklyHighlights',
  component: WeeklyHighlights,
};

const dummyData = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Galaxy Watch Ultra',
    discount: 'Save ₹ 6000* with bank discount',
    sale: true,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: '650 L Convertible French Door',
    discount: 'Save ₹ 8500* with bank discount',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Galaxy Buds3',
    discount: 'Save ₹ 3000* with bank discount',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Neo QLED 8K',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Get free Soundbar or The Serif TV*',
  },
];

export const Default = () => <WeeklyHighlights highlights={dummyData} />;
