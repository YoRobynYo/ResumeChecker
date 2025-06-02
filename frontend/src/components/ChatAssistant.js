// chatAssistant.js

import React, { useState } from 'react';

const ChatAssistant = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.response || 'No response from backend');
    } catch (err) {
      console.error(err);
      setResponse('Error communicating with the assistant.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>AI Assistant</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
        rows={4}
        style={{ width: '100%' }}
      />
      <button onClick={handleSend} style={{ marginTop: '10px' }}>
        Send
      </button>
      <div style={{ marginTop: '20px' }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatAssistant;
