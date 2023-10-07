import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './Alerts.css'


// const StyledAlert = styled.alert`
//   padding: 2px 10px;
//   background-color: #e1ffd4;
//   font-weight: 700;
//   font-size: 12px;
// `;

export const Alerts = ({ children, className, style }) => {
  const [visible, setVisible] = React.useState(true);
  const closeAlert = () => { setVisible(false) };
  const { color } = style;
  const alertHtml = (
    <div
      className={className}
      style={
        {
          ...style,
        }
      }>
      <span> {children}</span>
      <span
        className='alert-close'
        style={{
          display: 'inline-flex',
          float: 'right',
          color: color,
        }} onClick={closeAlert}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
          <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
        </svg>
      </span>
    </div >
  )
  return (
    <React.Fragment>
      {visible ? alertHtml : null}
    </React.Fragment>
  );
}

Alerts.propTypes = {
  backgroundColor: PropTypes.string,

};

Alerts.defaultProps = {
  className: 'alert',
  onClick: undefined,
};
