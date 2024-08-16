import React from 'react';
import ProductCard from './ProductCard';

export default {
  title: 'ProductCard',
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://via.placeholder.com/150',
  title: 'Sample Product',
  description: 'This is a sample product description.',
};
