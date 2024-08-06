// src/components/HoverCart.stories.js

import React from 'react';
import HoverCart from './HoverCart';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

export default {
  title: 'HoverCart',
  component: HoverCart,
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    align: 'center',
  },
};

const Template = (args) => <HoverCart {...args} />;

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
