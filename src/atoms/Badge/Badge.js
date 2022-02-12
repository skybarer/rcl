import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css'

// https://staxmanade.com/CssToReact/

export const Badge = ({
  content = '5',
  style,
  scale = 1,
}) => {
  return (
    <span
      className='tip'
      style={{
        ...style,
        transform: 'scale(1)',
      }}
    >
      {content}
    </span>
  );
}

Badge.propTypes = {
  content: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  style: undefined,
};
