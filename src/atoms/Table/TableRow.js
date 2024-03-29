// TableRow.js
import React from 'react';
import styled from 'styled-components';

const TableRowStyle = styled.tr`
  border-top: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  line-height: 24px;
  &:last-child {
    border-bottom: 1px solid #e5e5e5;
  }
`;

const TableRow = ({ children }) => {
    return <TableRowStyle>{children}</TableRowStyle>;
};

export default TableRow;
