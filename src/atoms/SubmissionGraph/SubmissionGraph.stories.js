import React from 'react';
import { storiesOf } from '@storybook/react';
import SubmissionGraph from './SubmissionGraph';

// Sample data for the past year
const sampleData = [
  { monthName: 'May', days: Array(31).fill('noSubmission') }, // May
  { monthName: 'June', days: Array(30).fill('active') }, // June
  { monthName: 'July', days: Array(31).fill('maxStreak') }, // July
  { monthName: 'August', days: Array(31).fill('currentStreak') }, // August
  { monthName: 'September', days: Array(30).fill('noSubmission') }, // September
  { monthName: 'October', days: Array(31).fill('active') }, // October
  { monthName: 'November', days: Array(30).fill('maxStreak') }, // November
  { monthName: 'December', days: Array(31).fill('currentStreak') }, // December
  { monthName: 'January', days: Array(31).fill('noSubmission') }, // January
  { monthName: 'February', days: Array(28).fill('active') }, // February
  { monthName: 'March', days: Array(31).fill('maxStreak') }, // March
  { monthName: 'April', days: Array(30).fill('currentStreak') }, // April
];

storiesOf('SubmissionGraph', module).add('default', () => (
  <SubmissionGraph data={sampleData} />
));
