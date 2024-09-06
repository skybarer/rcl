// src/components/WordCloud.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled component for individual word
const Word = styled.span`
  display: inline-block;
  margin: 5px;
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  flex: 1 1 auto;
`;

// Styled component for the word cloud container with rectangular layout
const CloudContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 20px;
`;

// WordCloud component definition
const WordCloud = ({ words }) => {
  return (
    <CloudContainer>
      {words.map((word, index) => (
        <Word key={index} size={word.size} color={word.color}>
          {word.text}
        </Word>
      ))}
    </CloudContainer>
  );
};

// Prop types validation
WordCloud.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      size: PropTypes.number,
      color: PropTypes.string,
    }),
  ).isRequired,
};

// Default props
WordCloud.defaultProps = {
  words: [],
};

export default WordCloud;
