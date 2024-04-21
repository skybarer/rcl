import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px;
  appearance: none;
  border: 1px solid #cacaca;
  border-radius: 6px;
  box-shadow: none;
  box-sizing: border-box;
  color: black;
  height: 50px;
  letter-spacing: 0;
  line-height: 20px;
  line-height: 18px;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 35rem;

  &:hover {
    border: 1px solid #b180d1;
  }
`;

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <SearchInput type="text" placeholder={placeholder} onChange={onChange} />
  );
};

export default SearchBar;
