// Typography.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './Typography';

storiesOf('Typography', module)
  .add('default', () => <Typography>Hello World</Typography>)
  .add('large', () => <Typography size={24}>Hello World</Typography>)
  .add('heading', () => <Typography size={48}>Hello World</Typography>)
  .add('colored', () => <Typography color="red">Hello World</Typography>);
