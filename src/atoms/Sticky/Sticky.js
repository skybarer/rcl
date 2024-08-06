import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Wrapper that holds the sticky content
const StickyWrapper = styled.div`
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'static')};
  top: ${({ isSticky }) => (isSticky ? '0' : 'auto')};
  width: 100%;
  background-color: #fff;
  box-shadow: ${({ isSticky }) =>
    isSticky ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none'};
  z-index: 1000;
`;

const Placeholder = styled.div`
  height: ${({ height }) => height}px;
`;

const Sticky = ({ children, offset }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [height, setHeight] = useState(0);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const stickyTop = stickyRef.current.getBoundingClientRect().top;
        setIsSticky(stickyTop <= offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  useEffect(() => {
    if (stickyRef.current) {
      setHeight(stickyRef.current.getBoundingClientRect().height);
    }
  }, [children]);

  return (
    <>
      {isSticky && <Placeholder height={height} />}
      <StickyWrapper ref={stickyRef} isSticky={isSticky}>
        {children}
      </StickyWrapper>
    </>
  );
};

Sticky.propTypes = {
  children: PropTypes.node.isRequired, // The content to be made sticky
  offset: PropTypes.number, // Offset from the top of the viewport before sticking
};

Sticky.defaultProps = {
  offset: 0,
};

export default Sticky;
