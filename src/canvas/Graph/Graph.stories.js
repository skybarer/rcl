import React from 'react';
import Graph from './Graph';

export default {
  title: 'Canvas/Graph',
  component: Graph,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => <Graph />;

export const Default = Template.bind({});
