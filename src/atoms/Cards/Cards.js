import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css'
import css from '../../electrons/card.module.css';

export default function Cards({ children, className, ...props }) {
  return (
    <div className={className ? className : css.rclCard}>
      {children}
    </div>
  );
}

Cards.propTypes = {
  // backgroundColor: PropTypes.string,
  // onClick: PropTypes.func,
};

Cards.defaultProps = {
  // backgroundColor: null,
  // onClick: undefined,
};
