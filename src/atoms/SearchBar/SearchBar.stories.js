import React from 'react';
import SearchBar from './SearchBar';
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
    title: 'atoms/SearchBar',
    component: SearchBar,
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

const Template = (args) => (
    <>
        <SearchBar placeholder="Search..." />
    </>
);

export const Circular = Template.bind({});
Circular.parameters = {
    layout: 'centered'

};

Circular.args = {
    label: 'Spinners',
    backgroundColor: 'aliceblue',
    color: '#000000'
};
