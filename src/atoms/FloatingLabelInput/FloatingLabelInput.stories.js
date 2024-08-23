import React, { useState } from 'react';
import FloatingLabelInput from './FloatingLabelInput';

export default {
  title: 'Form/FloatingLabelInput',
  component: FloatingLabelInput,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <FloatingLabelInput
      label="Name"
      placeholder=""
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
