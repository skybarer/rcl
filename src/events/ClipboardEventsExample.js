import React, { useState } from 'react';

const ClipboardEventsExample = () => {
  const [message, setMessage] = useState('');

  const handleCopy = () => setMessage('Content copied!');
  const handlePaste = () => setMessage('Content pasted!');
  const handleCut = () => setMessage('Content cut!');

  return (
    <div>
      <textarea
        onCopy={handleCopy}
        onPaste={handlePaste}
        onCut={handleCut}
        placeholder="Try copying, pasting, or cutting text here!"
        style={{ width: '300px', height: '100px' }}
      ></textarea>
      <p>{message}</p>
    </div>
  );
};

export default ClipboardEventsExample;
