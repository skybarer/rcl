// Pagination.stories.js
import React, { useState } from 'react';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  maxPagesToShow: 7,
};
