import React from 'react';
import './MessageBubbles.css';

const MessageBubbles = ({ chat, isBotTyping }) => (
  <div className="chat-messages">
    {chat.map((msg, idx) => (
      <div key={idx} className={`chat-bubble ${msg.from}`}>
        {msg.text}
      </div>
    ))}

    {isBotTyping && (
      <div className="chat-bubble ai typing-indicator">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    )}
  </div>
);

export default MessageBubbles;
