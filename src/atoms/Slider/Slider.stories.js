import React from 'react';
import Slider from './Slider';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
} from '@storybook/addon-docs';

export default {
    title: 'atoms/Slider',
    component: Slider,
    parameters: {
        options: { selectedPanel: 'storybook/a11y/panel' },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            ),
        },
    },
    argTypes: {
        backgroundColor: { control: 'color' },

    }
};

const Template = (args) => {
    const [value, setValue] = React.useState(50);

    const handleSliderChange = (event) => {
        setValue(parseInt(event.target.value, 10));
    };

    return (
        <>
            <Slider value={value} onChange={handleSliderChange} min={0} max={100} /> {value}
        </>
    );
};

export const Circular = Template.bind({});
Circular.parameters = {
    layout: 'centered'

};

Circular.args = {
    label: 'Spinners',
    backgroundColor: 'aliceblue',
    color: '#000000'
};
