import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useRef } from 'react';
const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [currentPage, setCurrentPage] = useState('home'); // Initial page is 'home'

  const messageProbability = (userMessage, recognisedWords, singleResponse = false, requiredWords = []) => {
    let messageCertainty = 0;
    let hasRequiredWords = true;

    for (const word of userMessage) {
      if (recognisedWords.includes(word)) {
        messageCertainty += 1;
      }
    }

    const percentage = (messageCertainty / recognisedWords.length) * 100;

    for (const word of recognisedWords) {
      if (!userMessage.includes(word)) {
        hasRequiredWords = false;
        break;
      }
    }

    return hasRequiredWords || singleResponse ? Math.floor(percentage) : 0;
  };

  const checkAllMessages = (message) => {
    const highestProbList = {};

    const response = (botResponse, listOfWords, singleResponse = false, requiredWords = []) => {
      highestProbList[botResponse] = messageProbability(message, listOfWords, singleResponse, requiredWords);
    };

    response("Hello!", ["hello", "hi", "sup", "hey", "heyo"], true);
    response("So,Good How can i help you ?", ["welcome", "thank you", "Greets", "Thanks"], true);
    response("Reporting an Incident", ["report", "incident", "emergency"], true);
    response("Traffic Regulations", ["traffic", "rules", "license", "driving"], true);
    response("Community Safety", ["safety", "community", "neighborhood", "security"], true);
    response("Lost and Found", ["lost", "found", "belongings", "items"], true);
    response("Police Contact Information", ["contact", "phone", "number", "station"], true);
    response("Crime Prevention Tips", ["crime", "prevention", "safety", "tips"], true);
    response("Police Recruitment Information", ["recruitment", "jobs", "career", "police"], true);
    response("Law and Order Updates", ["law", "order", "updates", "notifications"], true);
    response("Public Awareness Campaigns", ["awareness", "campaigns", "events", "programs"], true);
    response("Community Policing Initiatives", ["community", "policing", "initiatives", "programs"], true);
    response("Cybercrime Awareness", ["cybercrime", "internet", "security", "online"], true);
    response("Lost Pet Assistance", ["lost", "pet", "animals",], true);
    response("Specify the problem", ["help", "problem"], true)
    response("Solution for your problem ,Go to the copconnect and register a complaint they will solve that.", ["case", "complaint"], true)
    response("Best website for our privacy concern is COPCONNECT INSIGHTS", ["privacy", "concern"], true)
    response("FeedBack has in our media Two Types  1.Specific and 2.General ", ["types", "feedback"], true)
    response("complaint has only for register a case in our Website", ["complaint", "case file"], true)
    response("purpose of Complaint Id: is to provide a specific feedback in our website", ["id", "complaint id", "digit", "numbers"], true)
    response("Senior Citizens Safety", ["senior", "citizens", "safety", "assistance"], true);
    response("Child Protection Programs", ["child", "protection", "safety", "programs"], true);
    response("Traffic Accident Reporting", ["accident", "report", "traffic", "collision"], true);
    response("Police Public Relations", ["public", "relations", "engagement", "communication"], true);
    response("Domestic Violence Support", ["domestic", "violence", "abuse", "support"], true);
    // Add more responses...

    // Add more responses...

    const bestMatch = Object.keys(highestProbList).reduce((a, b) => highestProbList[a] > highestProbList[b] ? a : b);
    return highestProbList[bestMatch] < 1 ? 'Unknown' : bestMatch;
  };
  const chatContainerRef = useRef(null);
  
  const handleInputSubmit = async () => {
    if ((userInput.trim() === '' && transcript.trim() === '') || isBotTyping) return;

    const userMessage = { text: userInput || transcript, timestamp: new Date(), isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setUserInput('');

    resetTranscript();

    setIsBotTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const splitMessage = (userInput || transcript).toLowerCase().split(/\s+|[,;?!.-]\s*/);
    const botResponse = checkAllMessages(splitMessage);

    if (botResponse.toLowerCase() === 'navigate home') {
      setCurrentPage('/Home');
    } else if (botResponse.toLowerCase() === 'navigate about') {
      setCurrentPage('/About');
    } else if (botResponse.toLowerCase() === 'navigate feedback') {
      setCurrentPage('/FeedBackSection');

    } else if (botResponse.toLowerCase() === 'navigate complaint') {
      setCurrentPage('/Complaint');

    } else if (botResponse.toLowerCase() === 'navigate social media') {
      setCurrentPage('/Social');
    }


    const botMessage = { text: botResponse, timestamp: new Date(), isUser: false };
    addBotResponse(botResponse);
    
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    setIsBotTyping(false);
  };

  const startListening = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Your browser doesn't support speech recognition. Try using Google Chrome.");
      return;
    }

    SpeechRecognition.startListening();
  };
  const addBotResponse = (text) => {
    const botMessage = { text, timestamp: new Date(), isUser: false };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">
        RajBot
      </h1>
      <div className="chat-content">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
              <div className="message-content">{message.text}</div>
              <span className="message-sender">{message.isUser ? 'You' : 'Bot'}:</span>
              <span className="timestamp">{message.timestamp.toLocaleString()}</span>
            </div>
          ))}
          {isBotTyping && <div className="bot-typing">Bot is typing...</div>}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput || transcript}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={handleInputSubmit} type='submit'>
            <span role="img" aria-label="send">➡️</span>
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;