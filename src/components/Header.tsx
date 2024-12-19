import React from 'react';
import { HeadphonesIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <HeadphonesIcon className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Customer Support Center</h1>
        </div>
        <p className="text-center mt-2 text-indigo-100">How can we help you today?</p>
      </div>
    </header>
  );
}