import React from 'react';
import type { Message } from '../../types';
import { formatRelativeTime } from '../../utils/dateUtils';

interface Props {
  message: Message;
}

export function ChatMessage({ message }: Props) {
  const isSystem = message.type === 'system' || message.type === 'followup';
  
  return (
    <div className={`flex ${isSystem ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] ${isSystem ? 'bg-white' : 'bg-indigo-600 text-white'} 
        rounded-lg shadow-sm p-4`}>
        <div className="flex flex-col space-y-2">
          <div className="prose prose-sm max-w-none">
            {message.content}
          </div>
          
          {message.attachments?.map((attachment, index) => (
            <div key={index} className="mt-2">
              {attachment.type === 'image' && (
                <img 
                  src={attachment.url} 
                  alt={attachment.name}
                  className="rounded-lg max-w-full h-auto" 
                />
              )}
              {attachment.type === 'audio' && (
                <audio controls className="w-full">
                  <source src={attachment.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
          
          <div className={`text-xs ${isSystem ? 'text-gray-500' : 'text-indigo-100'}`}>
            {formatRelativeTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
}