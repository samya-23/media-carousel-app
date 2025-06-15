import React from 'react';
import './MessageBubbles.css';

const MessageBubbles = ({ chat }) => (
  <div className="chat-messages">
    {chat.map((msg, idx) => (
      <div key={idx} className={`chat-bubble ${msg.from}`}>
        {msg.text}
      </div>
    ))}
  </div>
);

export default MessageBubbles;
