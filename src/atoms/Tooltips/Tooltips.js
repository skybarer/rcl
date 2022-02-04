import React from 'react';
import PropTypes from 'prop-types';
import './Tooltips.css';

const Tooltips = (props) => {
  let timeout;
  const [active, setActive] = React.useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
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
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

Tooltips.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Tooltips.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

export default Tooltips;
