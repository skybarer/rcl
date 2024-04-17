import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography1 from './Typography1';

storiesOf('Typography1', module)
  .add('Heading 1', () => <Typography1 variant="h1">Heading 1</Typography1>)
  .add('Heading 2', () => <Typography1 variant="h2">Heading 2</Typography1>)
  .add('Heading 3', () => <Typography1 variant="h3">Heading 3</Typography1>)
  .add('Heading 4', () => <Typography1 variant="h4">Heading 4</Typography1>)
  .add('Heading 5', () => <Typography1 variant="h5">Heading 5</Typography1>)
  .add('Heading 6', () => <Typography1 variant="h6">Heading 6</Typography1>)
  .add('Subtitle', () => <Typography1 variant="subtitle">Subtitle</Typography1>)
  .add('Body', () => <Typography1 variant="body">Body Text</Typography1>)
  .add('Caption', () => (
    <Typography1 variant="caption">Caption Text</Typography1>
  ));
