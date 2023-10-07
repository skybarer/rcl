// ProgressBar.js
import React from 'react';
import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 10px;
  width: ${(props) => props.progress}%;
  background-color: #007bff;
  transition: width 0.3s ease;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarFill progress={progress} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
