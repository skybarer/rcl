import React from 'react';
import Tooltips from './Tooltips';
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

  <React.Fragment>
    <div>
      <Tooltips content="Yee-haw!" direction="right">
        <span style={emojiCss} role="img" aria-label="cowboy emoji">
          🤠
        </span>
      </Tooltips>
    </div>
    <div>
      <Tooltips content="Quack!" direction="top">
        <span style={emojiCss} role="img" aria-label="duck emoji">
          🦆
        </span>
      </Tooltips>
    </div>

    <div>
      <Tooltips content="Quack!" direction="botom">
        <span style={emojiCss} role="img" aria-label="duck emoji">
          🦆
        </span>
      </Tooltips>
    </div>
    <div>
      <Tooltips content="Quack!" direction="top">
        <span style={emojiCss} role="img" aria-label="duck emoji">
          🦆
        </span>
      </Tooltips>
    </div>

    <div>
      <Tooltips
        content={
          <>
            Bring me
            <br />
            to your leader
          </>
        }
        direction="left"
        delay="0"
      >
        <span style={emojiCss} role="img" aria-label="alien emoji">
          👽
        </span>
      </Tooltips>
    </div>

  </React.Fragment>
)

export const Basic = Template.bind({});
Basic.parameters = {
  layout: 'centered',

};

Basic.args = {
  label: 'Tooltips',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
