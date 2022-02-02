import React from 'react';
import PropTypes from 'prop-types';
import './Images.css';
import { simpleSvgPlaceholder } from './../../util/Placeholder';

export default function Images(
  { src,
    type,
    alt,
    className = 'rounded',
    style,
    backgroundColor
  }) {
  return (
    <img
      className={className}
      src={src == null ?
        simpleSvgPlaceholder(
          {
            width: 200,
            height: 200,
            bgColor: backgroundColor
          }) : src}
      alt={alt}
      style={style}
    >
    </img>
  );
}

Images.propTypes = {
  type: PropTypes.string,
};

Images.defaultProps = {
  type: null,
};
