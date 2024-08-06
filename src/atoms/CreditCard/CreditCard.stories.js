import React from 'react';
import CreditCard from './CreditCard';

export default {
  title: 'CreditCard',
  component: CreditCard,
};

const Template = (args) => <CreditCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: '1234 5678 9012 3456',
  name: 'John Doe',
  expiry: '12/24',
};
