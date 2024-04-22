import React from 'react';
import Timeline from './Timeline';

export default {
  title: 'Atoms/Timeline',
  component: Timeline,
};

const sampleItems = [
  {
    title: 'Project Start',
    description: 'Project kickoff and planning.',
    completed: true,
  },
  {
    title: 'Design Phase',
    description: 'Design and mockups.',
    completed: true,
  },
  {
    title: 'Development Phase',
    description: 'Development and testing.',
    completed: false,
  },
  {
    title: 'Project Launch',
    description: 'Product launch and delivery.',
    completed: false,
  },
];

const Template = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: sampleItems,
};

export const AllCompleted = Template.bind({});
AllCompleted.args = {
  items: sampleItems.map((item) => ({ ...item, completed: true })),
};
