import React from 'react';
import Tooltip from './Tooltip';
import Button from '../Button/Button';

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
  title: 'atoms/Tooltip',
  component: Tooltip,
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

// const emojiCss = {
//   fontSize: '3rem',
//   margin: '2rem',
//   display: 'flex',
// }

const Template = (args) => (
  <>
    {['left', 'top', 'bottom', 'right'].map((placement, index) => (
      <Tooltip
        key={index}
        direction={`${placement}`}
        content={
          <>
            Tooltip on <strong>{placement}</strong>.<br></br>
          </>
        }
      >
        <Button className={args.className} style={args.style}>
          Tooltip on <strong>{placement}</strong>.
        </Button>
      </Tooltip>
    ))}
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',
};

Basic.args = {
  label: 'Tooltip',
  backgroundColor: 'aliceblue',
  color: '#000000',
  className: 'rcl-button',
  style: {
    color: '#000000',
    backgroundColor: 'aliceblue',
    padding: '1rem 2rem',
    border: 0,
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px',
  },
};
