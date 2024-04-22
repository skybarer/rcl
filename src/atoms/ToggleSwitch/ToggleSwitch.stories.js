import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';

storiesOf('ToggleSwitch', module).add('default', () => {
  const [value, setValue] = useState('Public');

  return (
    <ToggleSwitch
      options={['Public', 'Private']}
      value={value}
      onChange={setValue}
    />
  );
});
