// src/components/FloatButton.stories.js
import React from 'react';
import FloatButton from './FloatButton';

// Inline SVG as a React component
const PlusIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default {
  title: 'Components/FloatButton',
  component: FloatButton,
  argTypes: {
    bgColor: { control: 'color' },
    color: { control: 'color' },
    size: { control: 'text' },
    bottom: { control: 'text' },
    right: { control: 'text' },
  },
};

const Template = (args) => <FloatButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: PlusIcon,
  onClick: () => alert('Button clicked!'),
  bgColor: '#007bff',
  color: '#fff',
  size: '50px',
  bottom: '20px',
  right: '20px',
};
