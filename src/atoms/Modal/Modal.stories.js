import React from 'react';
import Modal from './Modal';
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
  title: 'atoms/Modal',
  component: Modal,
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

var showFlag = true;

const toggleModal = () => {
  showFlag = !showFlag;
  alert(showFlag)

}

const Template = (args) => (
  <>
    <button onClick={toggleModal}>click me : {showFlag}</button>
    <Modal show={showFlag} >
      <p>Some Model Content</p>
    </Modal>
  </>
);

export const Basic = Template.bind({});
Basic.parameters = {
  // layout: 'fullscreen'

};

Basic.args = {
  label: 'Modal',
  backgroundColor: 'aliceblue',
  color: '#000000'
};
