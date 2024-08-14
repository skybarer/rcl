import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CodeContainer = styled.div`
  position: relative;
  background-color: #2d2d2d;
  color: white;
  border-radius: 5px;
  padding: 16px;
  font-family: monospace;
`;

export const CopyButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: white;
  }
`;

const CodeBlock = ({ code }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log('Copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <CodeContainer>
      <pre>
        <code>{code}</code>
      </pre>
      <CopyButton onClick={handleCopy} title="Copy code">
        copy
      </CopyButton>
    </CodeContainer>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CodeBlock;
