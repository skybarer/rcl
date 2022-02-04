import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

export const Article = ({ children, type }) => {
  return (
    <article className={`markdown ${type}`}>
      {children}
    </article>
  );
}

Article.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['border', 'raised', 'none']),
};

Article.defaultProps = {
  type: 'border',
};
