import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CopyWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: rgba(13, 13, 13, 1);
  color: white;
`;

const CopyButton = styled.button`
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #45a049;
  }
`;

const Copy = ({ text, onCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    onCopy();
  };

  return (
    <CopyWrapper>
      {text}
      <CopyButton onClick={handleCopy}>Copy</CopyButton>
    </CopyWrapper>
  );
};

Copy.propTypes = {
  text: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default Copy;
