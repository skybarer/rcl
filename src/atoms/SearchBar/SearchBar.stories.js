import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Form/SearchBar',
  component: SearchBar,
};

const Template = (args) => (
  <>
    <SearchBar placeholder="Search..." />
  </>
);

export const Circular = Template.bind({});
Circular.parameters = {
  // layout: 'centered',
};

Circular.args = {
  label: 'Spinners',
  backgroundColor: 'aliceblue',
  color: '#000000',
};
