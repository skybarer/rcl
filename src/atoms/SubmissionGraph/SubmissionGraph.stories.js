import React from 'react';
import { storiesOf } from '@storybook/react';
import SubmissionGraph from './SubmissionGraph';

// Sample data for the past year
const sampleData = [
  { days: Array(31).fill('noSubmission') }, // May
  { days: Array(30).fill('active') }, // June
  { days: Array(31).fill('maxStreak') }, // July
  { days: Array(31).fill('currentStreak') }, // August
  { days: Array(30).fill('noSubmission') }, // September
  { days: Array(31).fill('active') }, // October
  { days: Array(30).fill('maxStreak') }, // November
  { days: Array(31).fill('currentStreak') }, // December
  { days: Array(31).fill('noSubmission') }, // January
  { days: Array(28).fill('active') }, // February
  { days: Array(31).fill('maxStreak') }, // March
  { days: Array(30).fill('currentStreak') }, // April
];

storiesOf('SubmissionGraph', module).add('default', () => (
  <SubmissionGraph data={sampleData} />
));
