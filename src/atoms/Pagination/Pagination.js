// Pagination.js
import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  margin: 0 5px;
  padding: 8px 16px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#3f51b5' : '#e0e0e0')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  font-weight: ${(props) => (props.active ? '500' : '400')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? '#303f9f' : '#d5d5d5')};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #e0e0e0;
  }
`;

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  maxPagesToShow = 5,
}) => {
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <PaginationWrapper>
      <PageNumber
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </PageNumber>
      {pageNumbers.map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </PageNumber>
      ))}
      <PageNumber
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </PageNumber>
    </PaginationWrapper>
  );
};

export default Pagination;
