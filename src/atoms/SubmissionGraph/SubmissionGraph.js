// Import necessary libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components for the graph
const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MonthRow = styled.div`
  display: flex;
`;

const DaySquare = styled.div`
  width: 10px;
  height: 10px;
  margin: 2px;
`;

// Define colors based on submission status
const getColor = (status) => {
  switch (status) {
    case 'noSubmission':
      return '#e0e0e0';
    case 'active':
      return '#4caf50';
    case 'maxStreak':
      return '#f44336';
    case 'currentStreak':
      return '#2196f3';
    default:
      return '#ffffff';
  }
};

// Create Day component
const Day = ({ status }) => (
  <DaySquare style={{ backgroundColor: getColor(status) }} />
);

Day.propTypes = {
  status: PropTypes.oneOf([
    'noSubmission',
    'active',
    'maxStreak',
    'currentStreak',
  ]).isRequired,
};

// Create Month component
const Month = ({ days }) => (
  <MonthRow>
    {days.map((dayStatus, index) => (
      <Day key={index} status={dayStatus} />
    ))}
  </MonthRow>
);

Month.propTypes = {
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Main Component for the Submission Graph
const SubmissionGraph = ({ data }) => (
  <GraphContainer>
    {data.map((monthData, index) => (
      <Month key={index} days={monthData.days} />
    ))}
  </GraphContainer>
);

SubmissionGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      days: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default SubmissionGraph;
