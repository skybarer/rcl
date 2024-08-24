import React from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
  display: flex;
  /* background-color: rgb(242 244 245/1); */
  /* border: 1px solid #cacaca; */
  flex-direction: row;
  gap: 16px;
  position: relative;
  /* flex: 1 1 0%; */
  /* border-radius: 6px; */
`;

const SvgBox = styled.svg`
  width: 20px;
  height: 20px;
  /* color: rgb(111 112 113 / 1); */
  position: absolute;
  /* display: block; */
  left: 18px;
  top: 12px;
  vertical-align: middle;
`;

const SearchInput = styled.input`
  color: black;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  letter-spacing: 1px;
  padding-right: 16px;
  padding-left: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: rgb(242 244 245/1);
  border-radius: 12px;
  /* border-width: 1px; */
  border-style: solid;
  overflow: hidden;
  &:focus {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
`;

const Svg = () => (
  <SvgBox
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="icon-search"
    stroke="none"
  >
    <path
      d="M20 20L16.05 16.05M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    ></path>
  </SvgBox>
);

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <SearchBox>
      <Svg />
      <SearchInput
        name="search"
        type="search"
        role="searchbox"
        autoComplete="off"
        data-testid="search-input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </SearchBox>
  );
};

export default SearchBar;
