import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

export default function ChatWidget({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to Madhura's Cafe. How can we help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    // Simulate bot reply
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        text: "Thank you for your message! Our team will get back to you shortly.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="ak-chat-widget">
      <div className="ak-chat-header">
        <div>
          <h4>Madhura's Support</h4>
          <p>Typically replies in a few minutes</p>
        </div>
        <button onClick={onClose} className="ak-chat-close"><X size={20} /></button>
      </div>
      <div className="ak-chat-body">
        {messages.map(msg => (
          <div key={msg.id} className={`ak-chat-message ${msg.sender}`}>
            <div className="ak-chat-bubble">{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="ak-chat-input-area">
        <input 
          type="text" 
          placeholder="Type your message..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" aria-label="Send Message"><Send size={18} /></button>
      </form>
    </div>
  );
}
