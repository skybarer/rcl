import React from 'react';
import { storiesOf } from '@storybook/react';
import SubmissionGraph from './SubmissionGraph';

// Sample data for the past year
const sampleData = [
  { monthName: 'May', days: Array(31).fill('noSubmission') }, // May
  { monthName: 'Jun', days: Array(30).fill('active') }, // June
  { monthName: 'Jul', days: Array(31).fill('maxStreak') }, // July
  { monthName: 'Aug', days: Array(31).fill('currentStreak') }, // August
  { monthName: 'Sep', days: Array(30).fill('noSubmission') }, // September
  { monthName: 'Oct', days: Array(31).fill('active') }, // October
  { monthName: 'Nov', days: Array(30).fill('maxStreak') }, // November
  { monthName: 'Dec', days: Array(31).fill('currentStreak') }, // December
  { monthName: 'Jan', days: Array(31).fill('noSubmission') }, // January
  { monthName: 'Feb', days: Array(28).fill('active') }, // February
  { monthName: 'Mar', days: Array(31).fill('maxStreak') }, // March
  { monthName: 'Apr', days: Array(30).fill('currentStreak') }, // April
];

storiesOf('SubmissionGraph', module).add('default', () => (
  <SubmissionGraph data={sampleData} />
));
