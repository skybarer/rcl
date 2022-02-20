import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css'
import css from '../../electrons/card.module.css';

export default function Cards({ children, className, style, ...props }) {
  return (
    <div
      id='rcl-card'
      className={className ? className : css.rclCard}
      style={{ ...style }}
    >
      {children}
    </div>
  );
}

Cards.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

Cards.defaultProps = {
  // backgroundColor: null,
  // onClick: undefined,
};
