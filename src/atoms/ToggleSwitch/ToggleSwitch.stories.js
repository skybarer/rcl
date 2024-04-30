import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';

storiesOf('ToggleSwitch', module)
  .add('default', () => {
    const [value, setValue] = useState('Public');

    return (
      <ToggleSwitch
        options={['Public', 'Private']}
        value={value}
        onChange={setValue}
      />
    );
  })
  .add('triplet', () => {
    const [value, setValue] = useState('Public');

    return (
      <ToggleSwitch
        options={['Public', 'Private', 'Default']}
        value={value}
        onChange={setValue}
      />
    );
  })
  .add('triplet-vertical', () => {
    const [value, setValue] = useState('Public');

    return (
      <ToggleSwitch
        orientation="vertical"
        options={['Public', 'Private', 'Default']}
        value={value}
        onChange={setValue}
      />
    );
  })
  .add('multiple', () => {
    const [value, setValue] = useState('Public');

    return (
      <ToggleSwitch
        options={[
          'Public',
          'Private',
          'Default',
          'mango',
          'apple',
          'papaya',
          'tamato',
        ]}
        value={value}
        onChange={setValue}
      />
    );
  });
