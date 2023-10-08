import React from 'react';
import Skeleton from './Skeleton';
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
    title: 'atoms/Skeleton',
    component: Skeleton,
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
        <Skeleton />
        <br />
        <Skeleton {...args} />
    </>
);

export const Basic = Template.bind({});
Basic.parameters = {
    layout: 'centered'

};

Basic.args = {
    width: '200px',
    height: '85px',
};
