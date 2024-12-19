import React, { useState, useEffect } from 'react';
import { followUpQuestions } from '../../constants/followUpQuestions';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import type { Message, Category } from '../../types';
import { HeadphonesIcon, ArrowLeftIcon } from 'lucide-react';

interface Props {
  category: Category;
  onReset: () => void;
}

export function ChatInterface({ category, onReset }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Initial system message with follow-up options
    const initialMessages: Message[] = [
      {
        id: '1',
        type: 'system',
        content: `Welcome to ${category.label} support! How can I help you today?`,
        timestamp: new Date()
      },
      {
        id: '2',
        type: 'followup',
        content: 'Please select one of the following options or describe your issue:',
        timestamp: new Date()
      }
    ];
    setMessages(initialMessages);
  }, [category]);

  const handleSendMessage = (content: string, attachments: File[]) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
      attachments: attachments.map(file => ({
        type: file.type.startsWith('image/') ? 'image' : 'audio',
        url: URL.createObjectURL(file),
        name: file.name
      }))
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Simulate system response
    setTimeout(() => {
      const systemResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'system',
        content: 'Thank you for your message. A support representative will respond shortly.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, systemResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onReset}
              className="flex items-center space-x-2 text-indigo-100 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Back</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <HeadphonesIcon className="w-6 h-6" />
              <h1 className="text-xl font-semibold">{category.label} Support</h1>
            </div>
            
            <div className="w-20"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {messages.length === 2 && (
            <div className="grid gap-2">
              {followUpQuestions[category.id]?.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleSendMessage(option.text, [])}
                  className="text-left p-3 bg-white rounded-lg shadow-sm hover:bg-indigo-50 
                    transition-colors duration-200"
                >
                  {option.text}
                </button>
              ))}
              <button
                onClick={() => handleSendMessage("I'd like to talk to the technical team", [])}
                className="text-left p-3 bg-indigo-100 text-indigo-700 rounded-lg 
                  hover:bg-indigo-200 transition-colors duration-200"
              >
                Talk to technical team
              </button>
            </div>
          )}
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}