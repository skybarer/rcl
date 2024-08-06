// src/components/CompareDevices.stories.js
import React from 'react';
import CompareDevices from './CompareDevices';

export default {
  title: 'CompareDevices',
  component: CompareDevices,
};

const devices = [
  {
    name: 'Phone 1',
    image: 'https://via.placeholder.com/150',
    specs: ['Spec 1', 'Spec 2', 'Spec 3'],
  },
  {
    name: 'Phone 2',
    image: 'https://via.placeholder.com/150',
    specs: ['Spec A', 'Spec B', 'Spec C'],
  },
  {
    name: 'Phone 3',
    image: 'https://via.placeholder.com/150',
    specs: ['Spec X', 'Spec Y', 'Spec Z'],
  },
  {
    name: 'Phone 4',
    image: 'https://via.placeholder.com/150',
    specs: ['Spec Alpha', 'Spec Beta', 'Spec Gamma'],
  },
];

export const Default = () => <CompareDevices devices={devices} />;
