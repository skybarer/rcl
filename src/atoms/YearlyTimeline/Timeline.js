import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-left: 2px solid #ccc;
  position: relative;
  &:last-child {
    border-left: none;
  }
`;

const TimelineDot = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => (props.completed ? 'green' : 'gray')};
  border-radius: 50%;
  position: absolute;
  left: -10px;
`;

const TimelineContent = styled.div`
  padding-left: 20px;
`;

const Timeline = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineDot completed={item.completed} />
          <TimelineContent>
            <strong>{item.title}</strong>
            <div>{item.description}</div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    }),
  ).isRequired,
};

export default Timeline;
