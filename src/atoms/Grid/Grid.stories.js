// Grid.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './Grid';
import Box from './Box';

storiesOf('Grid', module).add('default', () => (
  <Grid columns={3} gap={20}>
    <Box>Box 1</Box>
    <Box>Box 2</Box>
    <Box>Box 3</Box>
    <Box>Box 4</Box>
    <Box>Box 5</Box>
    <Box>Box 6</Box>
    <Box>Box 1</Box>
    <Box>Box 2</Box>
    <Box>Box 3</Box>
    <Box colSpan={2}>This box spans 2 columns</Box>
    <Box colSpan={1}>Box 3</Box>
  </Grid>
));
