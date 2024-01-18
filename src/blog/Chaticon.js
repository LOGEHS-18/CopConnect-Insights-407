import React, { useState } from 'react';
import Chatbot from '../Chatbot'; // Assuming the Chatbot component is in a separate file
const ChatbotIcon = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '100%',
          padding: '10px',
          cursor: 'pointer',
        }}
        onClick={toggleChatbot}
      >
        <span role="img" aria-label="chatbot-icon">
          💬
        </span>
      </div>
      {isChatbotOpen && <Chatbot/>}
    </div>
  );
};

export default ChatbotIcon;
