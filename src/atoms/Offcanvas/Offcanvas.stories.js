import React from 'react';
import Offcanvas from './Offcanvas';
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
  title: 'atoms/Offcanvas',
  component: Offcanvas,
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
    <Offcanvas isOpen={true} onClose={() => console.log('Close button clicked')}>
      Content goes here
    </Offcanvas>
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen'

};

Basic.args = {
  label: 'Offcanvas',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
