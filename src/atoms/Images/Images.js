import React from 'react';
import PropTypes from 'prop-types';
import './Images.css';
import { simpleSvgPlaceholder } from './../../util/Placeholder';


const isValid = (src) => {
  if (src === null || src === undefined || src === '') {
    return false;
  }
  return true;
}



export default function Images({ src, alt, className, style, ...props }) {

  return (
    <img
      className={className}
      src={!isValid(src) ? simpleSvgPlaceholder({ ...style }) : src}
      alt={alt}
      style={{ ...style }}
    >
    </img>
  );
}

Images.propTypes = {
  src: PropTypes.string,
};

Images.defaultProps = {
  src: null,
};
