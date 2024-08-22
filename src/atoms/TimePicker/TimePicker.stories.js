// src/stories/TimePicker.stories.js
import React, { useState } from 'react';
import TimePicker from './TimePicker';

export default {
  title: 'TimePicker',
  component: TimePicker,
};

const Template = (args) => {
  const [time, setTime] = useState(args.value);
  return <TimePicker {...args} value={time} onChange={setTime} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '12:00',
};
