import React, { useState } from 'react';
import './FloatingChatbot.css';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const aiMessage = {
      sender: 'ai',
      text: `You said: "${input}". This is a static AI reply.`
    };
    setMessages(prev => [...prev, userMessage, aiMessage]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <span className="chatbot-title">Paul - My Enterprise AI Agent</span>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      <div className="chatbot-tooltip-wrapper" onClick={() => setIsOpen(true)}>
        <div className="chatbot-tooltip">Start a chat with Paul</div>
        <button className="chatbot-toggle">
          <div className="chatbot-icon">💬</div>
        </button>
      </div>
    </>
  );
};

export default FloatingChatbot;

