// src/AirbnbInput.stories.js
import React, { useState } from 'react';
import AirbnbInput from './AirbnbInput';

export default {
  title: 'Form/AirbnbInput',
  component: AirbnbInput,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <AirbnbInput
      label="Name"
      placeholder=""
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
