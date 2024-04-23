import React from 'react';
import PropTypes from 'prop-types';
import css from '../../electrons/accordian.module.css';

const AccordionTitle = ({
  children,
  titileOnClick,
  svgShow,
  toogleBody,
  style,
}) => {
  return (
    <div
      className={css.accordianTitle}
      onClick={titileOnClick}
      style={{
        // borderBottom: (!toogleBody ? 'thin solid #ddd' : 'none'),
        ...style,
      }}
    >
      <span>{children}</span>
      <span className={css.open}>{svgShow}</span>
    </div>
  );
};

AccordionTitle.propTypes = {
  toogleIcon: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

AccordionTitle.defaultProps = {
  toogleIcon: false,
};

export default AccordionTitle;
