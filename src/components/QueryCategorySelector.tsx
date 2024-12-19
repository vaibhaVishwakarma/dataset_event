import React from 'react';
import { 
  WrenchIcon, 
  PackageIcon, 
  HardDriveIcon, 
  FileTextIcon, 
  MessagesSquareIcon,
  CreditCardIcon 
} from 'lucide-react';

const categories = [
  { id: 'service', icon: PackageIcon, label: 'Service Avail & Plans' },
  { id: 'technical', icon: WrenchIcon, label: 'Technical Issue' },
  { id: 'hardware', icon: HardDriveIcon, label: 'Hardware or Equipment help' },
  { id: 'plan', icon: CreditCardIcon, label: 'Current plan & details' },
  { id: 'terms', icon: FileTextIcon, label: 'Terms & conditions' },
  { id: 'team', icon: MessagesSquareIcon, label: 'Talk to technical team' },
];

interface Props {
  onSelect: (category: string) => void;
  selectedCategory: string | null;
}

export function QueryCategorySelector({ onSelect, selectedCategory }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center space-y-3
              ${selectedCategory === category.id
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
              }`}
          >
            <Icon className="w-8 h-8 text-indigo-600" />
            <span className="font-medium text-gray-800">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}