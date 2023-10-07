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
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#007bff' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#007bff')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#e9ecef')};
  }
`;

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationWrapper>
      {pageNumbers.map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </PageNumber>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
