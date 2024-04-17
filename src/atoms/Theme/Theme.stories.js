// Theme.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Theme from './Theme';
import Typography from '../Typography/Typography';

const theme = {
  primary: 'mediumseagreen',
};

storiesOf('Theme', module).add('default', () => (
  <Theme theme={theme}>
    <Typography color={theme.primary}>Hello World</Typography>
  </Theme>
));
