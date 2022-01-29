import React from 'react';
import PropTypes from 'prop-types';

export const Alerts = ({ label = 'Alerts', backgroundColor, onClick }) => {
  const [visible, setVisible] = React.useState(true);
  const closeAlert = () => { setVisible(false) }
  const alertHtml = (
    <div
      style={
        {
          "background": "#E1FFD4",
          "fontWeight": "700",
          "fontSize": "14px",
          "padding": "10px 20px",
          "marginBottom": "24px",
          "borderRadius": "4px",
          "border": "1px solid rgba(0,0,0,.1)",
          backgroundColor
        }
      }>
      {label}
      <span style={{
        color: 'black',
        display: 'inline-flex',
        float: 'right',
        border: '1px dotted red',
        padding: '0 2px'
      }} onClick={closeAlert}>X</span>
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
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Alerts.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
