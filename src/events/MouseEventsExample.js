import React, { useState } from 'react';

const MouseEventsExample = () => {
  const [message, setMessage] = useState('');

  const handleMouseEnter = () => setMessage('Mouse entered!');
  const handleMouseLeave = () => setMessage('Mouse left!');
  const handleClick = () => setMessage('Clicked!');
  const handleDoubleClick = () => setMessage('Double clicked!');

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{
        width: '200px',
        height: '100px',
        border: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      {message || 'Interact with me!'}
    </div>
  );
};

export default MouseEventsExample;
