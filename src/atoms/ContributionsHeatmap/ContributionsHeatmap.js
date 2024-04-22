import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Utility function to generate the color based on contributions
const getColorFromContributions = (count) => {
  if (count === 0) return '#ebedf0'; // No contributions
  if (count < 5) return '#c6e48b'; // Light green
  if (count < 10) return '#7bc96f'; // Medium green
  if (count < 20) return '#239a3b'; // Dark green
  return '#196127'; // Very dark green
};

// Horizontal grid with 52 weeks and 7 days per week
const HeatmapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(52, 15px); // 52 weeks (approximate)
  grid-template-rows: repeat(7, 15px); // 7 days per week
  grid-gap: 2px; // Small gap between squares
  justify-content: flex-start; // Align to the left
`;

const HeatmapSquare = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => getColorFromContributions(props.count)};
  border-radius: 3px; // Slight rounding for visual appeal
`;

const ContributionsHeatmap = ({ contributions }) => {
  return (
    <HeatmapGrid>
      {contributions.map((contribution, index) => (
        <HeatmapSquare key={index} count={contribution.count} />
      ))}
    </HeatmapGrid>
  );
};

ContributionsHeatmap.propTypes = {
  contributions: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ContributionsHeatmap;
