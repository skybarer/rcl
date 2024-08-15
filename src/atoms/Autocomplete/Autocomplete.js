// src/components/Autocomplete.js

import React, { useState } from 'react';
import styled from 'styled-components';

const AutocompleteWrapper = styled.div`
  position: relative;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #b0b0b0;
  color: fieldtext !important;
  /* -webkit-box-shadow: 0 0 0 30px white inset; */
  background-image: none !important;
  background-color: light-dark(
    rgb(232, 240, 254),
    rgba(70, 90, 126, 0.4)
  ) !important;
  border-radius: 4px;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Autocomplete = ({ suggestions, onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // Filter suggestions based on input value
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase()),
    );

    setFilteredSuggestions(filtered);
  };

  const handleSelect = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    onSelect(suggestion);
  };

  return (
    <AutocompleteWrapper>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      {filteredSuggestions.length > 0 && (
        <SuggestionsList>
          {filteredSuggestions.map((suggestion, index) => (
            <SuggestionItem
              key={index}
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </AutocompleteWrapper>
  );
};

export default Autocomplete;
