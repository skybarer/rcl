import React from 'react';
import ButtonGroup from './ButtonGroup';
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
    title: 'atoms/ButtonGroup',
    component: ButtonGroup,
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

const buttons = [
    { label: 'Button 1', primary: true },
    { label: 'Button 2', primary: false },
    { label: 'Button 3', primary: true },
  ];

const Template = (args) => {
    return (
        <>
            <ButtonGroup buttons={buttons} onButtonClick={(label) => console.log(label)} />;
        </>
    )
}

export const Basic = Template.bind({});
Basic.parameters = {
    layout: 'fullscreen'

};

Basic.args = {
    label: 'Buttons',
    backgroundColor: 'aliceblue',
    color: '#000000'
};
