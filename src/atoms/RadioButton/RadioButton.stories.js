import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
};

export const ColorRadioButtons = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <RadioButton
        label="Red"
        value="red"
        checked={selectedColor === 'red'}
        onChange={handleChange}
        color="red"
      />
      <RadioButton
        label="Green"
        value="green"
        checked={selectedColor === 'green'}
        onChange={handleChange}
        color="green"
      />
      <RadioButton
        label="Blue"
        value="blue"
        checked={selectedColor === 'blue'}
        onChange={handleChange}
        color="blue"
      />
    </div>
  );
};
