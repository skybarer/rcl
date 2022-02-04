import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css'

// https://staxmanade.com/CssToReact/

export const Badge = ({
  content = '5',
  backgroundColor = 'aliceblue',
  borderRadius = '10px',
  color = 'black',
  padding,
  style,
  // scale = 1,
}) => {
  return (
    <span
      className='tip'
      style={{
        ...style,
        transform: 'scale(1)',
        // backgroundColor,
        // borderRadius,
        // padding,
        // color,
        // textAlign: 'center',
        // fontSize: 'small'
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
  backgroundColor: null,
  onClick: undefined,
};
