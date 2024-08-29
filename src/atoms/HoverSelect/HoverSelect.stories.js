// src/components/HoverSelect.stories.js
import React, { useState } from 'react';
import HoverSelect from './HoverSelect';

export default {
    title: 'Form/HoverSelect',
    component: HoverSelect,
};

const Template = (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSave = (newValue) => {
        setSelectedValue(newValue);
    };

    return <HoverSelect {...args} initialValue={selectedValue} onSave={handleSave} />;
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
