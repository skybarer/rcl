import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css'

export default function Modal(props) {

  const { show, children } = props;
  const [modalStatus, setModalStatus] = React.useState(show);

  const closeModal = () => {
    setModalStatus(false);
  }

  return (
    <div className='modal' style={{ display: modalStatus ? "block" : "none" }}>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.string,
};

Modal.defaultProps = {
  show: false,
};
