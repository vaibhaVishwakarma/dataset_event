import React from 'react';

const followUpQuestions: Record<string, string[]> = {


  service: [
    'What plans are offered in my area',
    'Any plan under ₹1500',
    'What is installation price',
    'How to upgrade from current plan'
  ],
  technical: [
    'No internet connection',
    'Why is my internet slow',
    'Router light is RED'
  ],
  hardware: [
    'How to reset WiFi',
    'Router replacement',
  ],
  plan: [
    'Password reset',
    'View current plan details',
    'Check usage statistics',
    'Update Email',
    'Payment history'
  ],
  terms: [
    'Termination fee',
    'Privacy policy',
    'Cancellation policy',
    'Data usage policy'
  ],
  team: [
    'Schedule a call',
    'Live chat support',
    'On-site visit request'
  ]
};

interface Props {
  category: string | null;
  onSelect: (question: string) => void;
  selectedQuestion: string | null;
}

export function FollowUpQuestions({ category, onSelect, selectedQuestion }: Props) {
  if (!category) return null;

  const questions = followUpQuestions[category] || [];

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-700">Please select your specific concern:</h3>
      <div className="space-y-2">
        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className={`w-full text-left p-3 rounded-lg transition-all duration-200
              ${selectedQuestion === question
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-gray-50 hover:bg-indigo-50 text-gray-700'
              }`}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}