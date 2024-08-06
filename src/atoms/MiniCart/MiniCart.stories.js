// src/components/MiniCart.stories.js

import React from 'react';
import MiniCart from './MiniCart';

export default {
  title: 'MiniCart',
  component: MiniCart,
};

const Template = (args) => <MiniCart {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 1,
      name: 'Item 1',
      price: 19.99,
      quantity: 2,
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Item 2',
      price: 9.99,
      quantity: 1,
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Item 3',
      price: 4.99,
      quantity: 3,
      image: 'https://via.placeholder.com/50',
    },
  ],
};

export const EmptyCart = Template.bind({});
EmptyCart.args = {
  items: [],
};
