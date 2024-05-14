import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? 'none' : '3')};
  -webkit-box-orient: vertical;
`;

const Button = styled.button`
  color: blue;
  background: none;
  border: none;
  margin: 10px 0;
  cursor: pointer;
`;

const ReadMore = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Text expanded={expanded}>{children}</Text>
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Read Less' : 'Read More'}
      </Button>
    </>
  );
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReadMore;
