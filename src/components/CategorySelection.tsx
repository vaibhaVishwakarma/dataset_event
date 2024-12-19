import React from 'react';
import { categories } from '../constants/categories';
import type { Category } from '../types';

interface Props {
  onSelect: (category: Category) => void;
}

export function CategorySelection({ onSelect }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to Customer Support</h1>
          <p className="text-indigo-100">How can we assist you today?</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => onSelect(category)}
                  className="p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-300 
                    hover:bg-indigo-50/50 transition-all duration-200 group"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 bg-indigo-100 rounded-full group-hover:bg-indigo-200 
                      transition-colors duration-200">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <span className="font-medium text-gray-800 text-lg text-center">
                      {category.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p></p>
        </div>
      </footer>
    </div>
  );
}