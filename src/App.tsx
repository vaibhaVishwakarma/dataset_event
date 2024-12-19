import React, { useState } from 'react';
import { CategorySelection } from './components/CategorySelection';
import { ChatInterface } from './components/chat/ChatInterface';
import type { Category } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedCategory ? (
        <ChatInterface 
          category={selectedCategory}
          onReset={() => setSelectedCategory(null)}
        />
      ) : (
        <CategorySelection onSelect={setSelectedCategory} />
      )}
    </div>
  );
}

export default App;