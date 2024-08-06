import React from 'react';
import PricingTable from './PricingTable';

export default {
  title: 'PricingTable',
  component: PricingTable,
};

const Template = (args) => <PricingTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  plans: [
    {
      name: 'Basic',
      price: '$19.99',
      featureName: 'feature1',
      features: [true, false, true],
    },
    {
      name: 'Standard',
      price: '$29.99',
      featureName: 'feature2',
      features: [true, true, true],
    },
    {
      name: 'Premium',
      price: '$49.99',
      featureName: 'feature3',
      features: [true, true, true, true],
    },
  ],
};
