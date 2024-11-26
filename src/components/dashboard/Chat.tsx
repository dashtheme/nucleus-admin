import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSmile, faPaperclip } from '@fortawesome/free-solid-svg-icons';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  avatar: string;
  isOwn: boolean;
}

const Chat: React.FC = () => {
  const [newMessage, setNewMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hey, how\'s the project coming along?',
      timestamp: '10:30 AM',
      avatar: 'https://i.pravatar.cc/150?img=1',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Making good progress! Should be done by tomorrow.',
      timestamp: '10:32 AM',
      avatar: 'https://i.pravatar.cc/150?img=2',
      isOwn: true
    },
    {
      id: 3,
      sender: 'John Doe',
      content: 'Great! Let me know if you need any help.',
      timestamp: '10:33 AM',
      avatar: 'https://i.pravatar.cc/150?img=1',
      isOwn: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'Will do, thanks!',
      timestamp: '10:34 AM',
      avatar: 'https://i.pravatar.cc/150?img=2',
      isOwn: true
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: 'https://i.pravatar.cc/150?img=2',
        isOwn: true
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="card h-100">
      <div className="card-header">
        <h5 className="card-title mb-0">Team Chat</h5>
      </div>
      <div className="card-body d-flex flex-column" style={{ height: '400px' }}>
        <div className="chat-messages flex-grow-1 overflow-auto mb-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chat-message d-flex mb-3 ${message.isOwn ? 'justify-content-end' : ''}`}
            >
              {!message.isOwn && (
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="avatar rounded-circle me-2"
                  style={{ width: '32px', height: '32px' }}
                />
              )}
              <div
                className={`message-content p-2 rounded ${
                  message.isOwn ? 'bg-primary text-white' : 'bg-light'
                }`}
                style={{ maxWidth: '75%' }}
              >
                {!message.isOwn && (
                  <div className="sender-name small mb-1">{message.sender}</div>
                )}
                <div className="message-text">{message.content}</div>
                <div className="message-time small mt-1 text-end">
                  {message.timestamp}
                </div>
              </div>
              {message.isOwn && (
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="avatar rounded-circle ms-2"
                  style={{ width: '32px', height: '32px' }}
                />
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="mt-auto">
          <div className="input-group">
            <button type="button" className="btn btn-light">
              <FontAwesomeIcon icon={faSmile} />
            </button>
            <button type="button" className="btn btn-light">
              <FontAwesomeIcon icon={faPaperclip} />
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
