import React from 'react';
import PricingComparison from './PricingComparison';

export default {
  title: 'PricingComparison',
  component: PricingComparison,
};

const Template = (args) => <PricingComparison {...args} />;

export const Default = Template.bind({});
Default.args = {
  plans: [
    {
      name: 'Basic Plan',
      price: 9.99,
      features: ['1 User', '10GB Storage', 'Email Support'],
    },
    {
      name: 'Pro Plan',
      price: 19.99,
      features: ['5 Users', '50GB Storage', 'Priority Email Support'],
    },
    {
      name: 'Enterprise Plan',
      price: 49.99,
      features: ['Unlimited Users', '500GB Storage', 'Phone Support'],
    },
  ],
};
