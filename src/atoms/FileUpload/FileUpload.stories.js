// src/components/FileUpload.stories.js

import React from 'react';
import FileUpload from './FileUpload';

export default {
  title: 'FileUpload',
  component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  onFileSelect: (files) => console.log('Selected files:', files),
};
