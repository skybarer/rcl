import React from 'react';
import CodeBlock from './CodeBlock';

export default {
  title: 'CodeBlock',
  component: CodeBlock,
};

const Template = (args) => <CodeBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  code: 'npm run storybook',
};

export const MultipleLines = Template.bind({});
MultipleLines.args = {
  code: `# Install dependencies\nnpm install\n\n# Run Storybook\nnpm run storybook`,
};
