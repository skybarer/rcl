// Importing necessary libraries and components
import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineAction from './InlineAction';

// Stories
storiesOf('InlineAction', module).add('Default', () => (
  <InlineAction
    action={(inputValue) => alert(`Input Value: ${inputValue}`)}
    buttonLabel="Submit"
  />
));
