import React, { useState, useEffect } from 'react';
import './FloatingChatbot.css';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: 'ai',
          text: "Hi there! I'm Paul 👋\nHow can I help you today?",
          options: ['Book a demo', 'Know our services', 'Talk to support']
        }
      ]);
    }
  }, [isOpen]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsBotTyping(true);

    setTimeout(() => {
      const aiReply = {
        sender: 'ai',
        text: `You selected "${text}". This is a sample AI reply.`
      };
      setMessages(prev => [...prev, aiReply]);
      setIsBotTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend(input);
  };

  return (
    <>
      {/* Floating Icon */}
      {!isOpen && (
        <div className="chatbot-tooltip-wrapper">
          <div className="chatbot-tooltip">Start a chat with Paul</div>
          <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
            <div className="chatbot-icon">💬</div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <span className="chatbot-title">Paul - My Enterprise AI Agent</span>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.sender}`}>
                <div>{msg.text}</div>
                {msg.options && (
                  <div className="chat-options">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        className="option-button"
                        onClick={() => handleSend(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
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

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => handleSend(input)}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
