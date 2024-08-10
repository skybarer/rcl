import React from 'react';
import InfoLabel from './InfoLabel';

// Example SVG icon (you can use any other SVG or icon library)
const ExampleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1.5rem"
    height="1.5rem"
  >
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17h-2v-2h2v2zm1.07-7.75l-.9.92c-.2.2-.37.39-.5.61-.12.22-.19.47-.19.76v.5h-2v-.5c0-.45.08-.84.23-1.17.16-.33.38-.63.65-.89l1.12-1.13c.19-.18.34-.39.45-.61.12-.22.18-.46.18-.72 0-.4-.15-.73-.46-1.01-.3-.27-.7-.41-1.2-.41-.45 0-.83.13-1.13.39-.3.26-.45.62-.45 1.09h-2c0-.73.21-1.35.62-1.87.42-.52.96-.9 1.63-1.18.67-.28 1.39-.42 2.16-.42.88 0 1.65.17 2.3.5.65.34 1.17.8 1.55 1.39.38.59.57 1.26.57 2.01 0 .53-.11 1.02-.34 1.46-.23.44-.55.85-.95 1.22z" />
  </svg>
);

// Storybook default export
export default {
  title: 'InfoLabel',
  component: InfoLabel,
};

// Template for the component
const Template = (args) => <InfoLabel {...args} />;

// Example stories
export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  text: 'Info with Tooltip',
  icon: ExampleIcon,
  tooltipText: 'This is a tooltip message',
};

export const CustomColorsWithTooltip = Template.bind({});
CustomColorsWithTooltip.args = {
  text: 'Custom Colors with Tooltip',
  color: '#ffffff',
  bgColor: '#007bff',
  icon: ExampleIcon,
  tooltipText: 'Another tooltip message',
};
