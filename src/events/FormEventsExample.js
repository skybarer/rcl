import React, { useState } from 'react';

const FormEventsExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way
    setMessage(`Submitted: ${name}, ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setMessage('Focusing on Name')}
            onBlur={() => setMessage('Blurred from Name')}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setMessage('Focusing on Email')}
            onBlur={() => setMessage('Blurred from Email')}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
};

export default FormEventsExample;
