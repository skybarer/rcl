import React, { useState } from 'react';
import { Drawer } from './Drawer';
import styled from 'styled-components';

export default {
  title: 'Drawer',
  component: Drawer,
};

const Content = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  height: 100%;
`;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <Drawer {...args} isOpen={isOpen} onClose={toggleDrawer}>
        <Content>
          <h2>Drawer Content</h2>
          <p>This is an example of a drawer content area.</p>
        </Content>
      </Drawer>
    </>
  );
};

export const Left = Template.bind({});
Left.args = {
  position: 'left',
};

export const Right = Template.bind({});
Right.args = {
  position: 'right',
};
