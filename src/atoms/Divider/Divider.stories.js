import React from 'react';
import Divider from './Divider';

export default {
  title: 'atoms/Divider',
  component: Divider
};

export const Template = (args) => (
  <Divider>
    divider
  </Divider>
);

const Basic = Template.bind({});

Basic.parameters = {
  layout: 'fullscreen'
};

Basic.args = {};
