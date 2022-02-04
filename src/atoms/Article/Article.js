import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

export const Article = ({ children }) => {
  return (
    <article>
      {children}
    </article>
  );
}

Article.propTypes = {
  children: PropTypes.node.isRequired
};

Article.defaultProps = {

};
