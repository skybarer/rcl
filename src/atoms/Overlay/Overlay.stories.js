import React from 'react';
import Overlay from './Overlay';
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
  title: 'atoms/Overlay',
  component: Overlay,
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
  },
};

const Template = (args) => (
  <>
    <Overlay onClick={() => console.log('Overlay clicked')}>
      <div>Overlay Content</div>
    </Overlay>
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'fullscreen',
};

Basic.args = {
  label: 'Overlays',
  backgroundColor: 'aliceblue',
  color: '#000000',
};
