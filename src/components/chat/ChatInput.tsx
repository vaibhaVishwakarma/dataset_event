import React, { useState, useRef } from 'react';
import { ImageIcon, Mic, Send, X } from 'lucide-react';

interface Props {
  onSendMessage: (content: string, attachments: File[]) => void;
}

export function ChatInput({ onSendMessage }: Props) {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || attachments.length > 0) {
      onSendMessage(message, attachments);
      setMessage('');
      setAttachments([]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="border-t bg-white p-4">
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {attachments.map((file, index) => (
            <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <span className="text-sm text-gray-600 mr-2">{file.name}</span>
              <button
                type="button"
                onClick={() => removeAttachment(index)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
      
      <div className="flex items-center space-x-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*,audio/*"
          className="hidden"
          multiple
        />
        
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <ImageIcon className="w-5 h-5" />
        </button>
        
        <button
          type="button"
          onClick={() => setIsRecording(!isRecording)}
          className={`p-2 transition-colors ${
            isRecording ? 'text-red-500' : 'text-gray-500 hover:text-indigo-600'
          }`}
        >
          <Mic className="w-5 h-5" />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-indigo-300"
        />
        
        <button
          type="submit"
          disabled={!message.trim() && attachments.length === 0}
          className="p-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 
            disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}