// src/components/Select.stories.js
import React, { useState } from 'react';
import Select from './Select';

export default {
    title: 'Form/Select',
    component: Select,
};

const Template = (args) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return <Select {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
};
