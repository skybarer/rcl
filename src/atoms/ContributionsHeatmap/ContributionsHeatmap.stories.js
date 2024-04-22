import React from 'react';
import ContributionsHeatmap from './ContributionsHeatmap';

// Function to generate 365 days of contributions
const generateYearContributions = () => {
  const contributions = [];
  for (let i = 0; i < 365; i++) {
    // Randomly generate a number of contributions between 0 and 50 for each day
    contributions.push({ count: Math.floor(Math.random() * 51) });
  }
  return contributions;
};

export default {
  title: 'Atoms/ContributionsHeatmap',
  component: ContributionsHeatmap,
};

const Template = (args) => <ContributionsHeatmap {...args} />;

export const FullYearWithWeekAndMonthLabels = Template.bind({});
FullYearWithWeekAndMonthLabels.args = {
  contributions: generateYearContributions(),
  startDate: '2023-01-01', // Start from January 1st
};
