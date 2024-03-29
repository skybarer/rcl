// TableHeader.js
import React from 'react';
import styled from 'styled-components';

const TableHeaderStyle = styled.th`
  background-color: #f4f4f4;
  padding: 0.45rem;
  text-align: left;
  vertical-align: middle;
  border-color: inherit;
  border-top: 1px solid #e5e5e5;
  color: #111010;
`;

const TableHeader = ({ children }) => {
    return <TableHeaderStyle>{children}</TableHeaderStyle>;
};

export default TableHeader;
