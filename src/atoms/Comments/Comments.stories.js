import React from 'react';
import Comments from './Comments';

export default {
  title: 'Comments',
  component: Comments,
};

const Template = (args) => <Comments {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialComments: [
    { id: 1, author: 'Alice', content: 'Great post!' },
    { id: 2, author: 'Bob', content: 'Very informative.' },
  ],
};
