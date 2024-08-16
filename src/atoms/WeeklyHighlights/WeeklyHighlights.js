import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HighlightsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  padding: 20px;
`;

const HighlightItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  position: relative;
`;

const HighlightImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

const HighlightText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const SaleTag = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: red;
  color: white;
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
`;

const WeeklyHighlights = ({ highlights }) => {
  return (
    <HighlightsContainer>
      {highlights.map((item, index) => (
        <HighlightItem key={index}>
          {item.sale && <SaleTag>Sale</SaleTag>}
          <HighlightImage src={item.image} alt={item.title} />
          <HighlightText>{item.title}</HighlightText>
          <HighlightText>{item.discount}</HighlightText>
        </HighlightItem>
      ))}
    </HighlightsContainer>
  );
};

WeeklyHighlights.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      discount: PropTypes.string.isRequired,
      sale: PropTypes.bool,
    }),
  ).isRequired,
};

export default WeeklyHighlights;
