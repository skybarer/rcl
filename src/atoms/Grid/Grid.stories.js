// Grid.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from './Grid';
import Box from './Box';
// import css from '../../electrons/colors.module.css';
import styled from 'styled-components';

const Card = styled.div`
  /* border: 1px solid #ddd; */
  padding: 1rem;
  text-align: center;
  color: var(--primary);
  background: var(--card-bg);
  box-shadow: var(--card_box_shadow);
  width: auto;
  height: 15rem;
  border-radius: 1rem;
`;

storiesOf('Grid', module)
  .add('default', () => (
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
  ))
  .add('6box-2row', () => (
    <Grid columns={3} style={{ background: '#f3eded' }}>
      <Card>Box 1</Card>
      <Card>Box 2</Card>
      <Card>Box 3</Card>
      <Card>Box 4</Card>
      <Card>Box 5</Card>
      <Card>Box 6</Card>
      <Card>Box 7</Card>
      <Card>Box 8</Card>
      <Card>Box 9</Card>
    </Grid>
  ));
