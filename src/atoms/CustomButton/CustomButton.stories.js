import React from 'react';
import CustomButton from './CustomButton';

export default {
  title: 'atoms/CustomButton',
  component: CustomButton,
};

export const Template = (args) => (
  <CustomButton primaryText="Buy Car" secondaryText="Sell Car" />
);

const Basic = Template.bind({});

Basic.parameters = {
  layout: 'fullscreen',
};

Basic.args = {};
