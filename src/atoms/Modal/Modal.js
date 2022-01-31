import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css'

export default function Modal({ show = false }) {

  const [modalStatus, setModalStatus] = React.useState(show);

  const closeModal = () => {
    setModalStatus(false);
  }

  return (
    <div className='modal' style={{ display: modalStatus ? "block" : "none" }}>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
