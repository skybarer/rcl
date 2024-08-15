// src/stories/Insights.stories.js
import React from 'react';
import Insights from './Insights';

export default {
  title: 'Insights',
  component: Insights,
};

const Template = (args) => <Insights {...args} />;

export const Default = Template.bind({});
Default.args = {
  stats: [
    {
      id: 1,
      icon: '⭐️',
      percentage: '4.8/5',
      description: 'Our average rating on Google.com and Social platforms.',
      bgColor: '#6f42c1',
    },
    {
      id: 2,
      icon: '😍',
      percentage: '35%',
      description: 'The number of Spotify customers that are members.',
      bgColor: '#28a745',
    },
    {
      id: 3,
      icon: '🔔',
      percentage: '70%',
      description: 'People who become customers after their first demo.',
      bgColor: '#dc3545',
    },
    {
      id: 4,
      icon: '👩',
      percentage: '32%',
      description: 'Our women customer quotient.',
      bgColor: '#007bff',
    },
  ],
};
