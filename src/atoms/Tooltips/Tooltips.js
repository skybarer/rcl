import React from 'react';
import PropTypes from 'prop-types';
import './Tooltips.css';

const Tooltips = ({ children, direction, content, delay }) => {

  let timeout;
  const [active, setActive] = React.useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || "top"}`}>
          {content}
        </div>
      )}
    </div>
  );
};

Tooltips.propTypes = {
  // backgroundColor: PropTypes.string,
  // label: PropTypes.string.isRequired,
  // onClick: PropTypes.func,
};

Tooltips.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

export default Tooltips;
