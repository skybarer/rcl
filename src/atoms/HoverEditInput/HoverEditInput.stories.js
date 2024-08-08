import React, { useState } from 'react';
import HoverEditInput from './HoverEditInput';

export default {
  title: 'HoverEditInput',
  component: HoverEditInput,
};

export const Default = () => {
  const [text, setText] = useState('Edit me');

  const handleSave = (newValue) => {
    setText(newValue);
  };

  return <HoverEditInput text={text} onSave={handleSave} />;
};
