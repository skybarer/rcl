import React from 'react';
import CircularProgress from './CircularProgress';

export default {
  title: 'CircularProgress',
  component: CircularProgress,
};

const Template = (args) => <CircularProgress {...args} />;

export const ZeroProgress = Template.bind({});
ZeroProgress.args = {
  progress: 0,
};

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  progress: 50,
};

export const FullProgress = Template.bind({});
FullProgress.args = {
  progress: 100,
};
