import React, { useState } from 'react';

const KeyboardEventsExample = () => {
  const [keyPressed, setKeyPressed] = useState('');

  const handleKeyDown = (event) => {
    setKeyPressed(`Key Down: ${event.key}`);
  };

  const handleKeyUp = (event) => {
    setKeyPressed(`Key Up: ${event.key}`);
  };

  return (
    <div
      tabIndex={0} // Makes the div focusable
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      style={{ padding: '20px', border: '1px solid #ccc', outline: 'none' }}
    >
      <p>Press any key!</p>
      <p>{keyPressed}</p>
    </div>
  );
};

export default KeyboardEventsExample;
