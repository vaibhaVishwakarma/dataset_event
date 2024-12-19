import React from 'react';
import { SendIcon } from 'lucide-react';

interface Props {
  category: string | null;
  followUpQuestion: string | null;
  onSubmit: (details: string) => void;
}

export function QueryForm({ category, followUpQuestion, onSubmit }: Props) {
  const [details, setDetails] = React.useState('');

  if (!category || !followUpQuestion) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Details
        </label>
        <textarea
          id="details"
          rows={4}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Please provide any additional details about your issue..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        <span>Submit Query</span>
        <SendIcon className="w-4 h-4" />
      </button>
    </form>
  );
}