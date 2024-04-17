// Grid.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './Grid';
import Box from './Box';

storiesOf('Grid', module).add('default', () => (
  <Grid columns={3} gap={10}>
    <Box>Box 1</Box>
    <Box>Box 2</Box>
    <Box>Box 3</Box>
    <Box>Box 4</Box>
    <Box>Box 5</Box>
    <Box>Box 6</Box>
  </Grid>
));
