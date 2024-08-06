import React from 'react';
import Sticky from './Sticky';

export default {
  title: 'Sticky',
  component: Sticky,
};

const Template = (args) => (
  <div style={{ height: '200vh', padding: '20px' }}>
    <Sticky {...args}>
      <div
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '4px',
          textAlign: 'center',
        }}
      >
        Sticky Header
      </div>
    </Sticky>
    <div style={{ marginTop: '60px' }}>
      <p>Scroll down to see the sticky effect in action!</p>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  offset: 0,
};
