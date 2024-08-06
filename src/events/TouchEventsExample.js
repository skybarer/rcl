import React, { useState } from 'react';

const TouchEventsExample = () => {
  const [touchMessage, setTouchMessage] = useState('');

  const handleTouchStart = () => setTouchMessage('Touch started!');
  const handleTouchMove = () => setTouchMessage('Touch moving!');
  const handleTouchEnd = () => setTouchMessage('Touch ended!');

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {touchMessage || 'Touch here!'}
    </div>
  );
};

export default TouchEventsExample;
