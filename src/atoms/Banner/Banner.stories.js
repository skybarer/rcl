import React from 'react';
import Banner from './Banner';
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
    title: 'atoms/Banner',
    component: Banner,
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

    return (
        <>
            <Banner text="This is a banner!" />
            <Banner text="Custom Banner with Colors" backgroundColor="#ff9900" textColor="#333333" />

        </>
    );
};

export const Circular = Template.bind({});
Circular.parameters = {
    layout: 'centered'

};

Circular.args = {

};
