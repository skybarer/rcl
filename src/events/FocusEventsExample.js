import React, { useState } from 'react';

const FocusEventsExample = () => {
  const [focusMessage, setFocusMessage] = useState('');

  const handleFocus = () => setFocusMessage('Input is focused!');
  const handleBlur = () => setFocusMessage('Input lost focus!');

  return (
    <div>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Focus or blur this input"
      />
      <p>{focusMessage}</p>
    </div>
  );
};

export default FocusEventsExample;
