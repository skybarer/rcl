import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const SearchBar = ({ placeholder, onChange }) => {
    return <SearchInput type="text" placeholder={placeholder} onChange={onChange} />;
};

export default SearchBar;
