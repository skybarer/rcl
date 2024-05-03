import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './../atoms/Card/Card';

storiesOf('molecules/CardList', module).add('default', () => {
  return (
    <>
      <Card style={{ border: 0, 'border-radius': 0 }}>divider</Card>
    </>
  );
});
