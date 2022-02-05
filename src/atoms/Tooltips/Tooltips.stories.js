import React from 'react';
import Tooltips from './Tooltips';
import Button from './../Button/Button';

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
  title: 'atoms/Tooltips',
  component: Tooltips,
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

const emojiCss = {
  fontSize: '3rem',
  margin: '2rem',
  display: 'flex',
}

const Template = (args) => (
  <>
    {['left', 'top', 'bottom', 'right'].map((placement, index) => (


      <Tooltips
        key={index}
        direction={`${placement}`}
        content={
          <>
            Tooltip on <strong>{placement}</strong>.
          </>
        }
      >
        <Button style={{ margin: '1rem' }}>
          Tooltip on <strong>{placement}</strong>.
        </Button>
      </Tooltips>

    ))}
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',

};

Basic.args = {
  label: 'Tooltips',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
