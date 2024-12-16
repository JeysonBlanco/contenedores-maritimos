import React from 'react';
import { Box } from 'lucide-react';

const standardContainers = [
  {
    id: '20st',
    name: "Contenedor 20' Dry",
    description: "Ideal para cargas pequeñas y medianas"
  },
  {
    id: '40st',
    name: "Contenedor 40' Dry",
    description: "Perfecto para cargas voluminosas"
  },
  {
    id: '40nor',
    name: "Contenedor 40' NOR",
    description: "Optimizado para cargas pesadas"
  },
  {
    id: '40hc',
    name: "Contenedor 40' HC",
    description: "Mayor altura para cargas voluminosas"
  }
];

interface StandardContainerSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
  isVisible: boolean;
}

export default function StandardContainerSelector({ 
  selectedId, 
  onSelect, 
  isVisible 
}: StandardContainerSelectorProps) {
  if (!isVisible) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      {standardContainers.map((container) => (
        <button
          key={container.id}
          onClick={() => onSelect(container.id)}
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${
            selectedId === container.id
              ? 'bg-accent text-primary-dark'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Box className="w-5 h-5" />
            <span className="font-medium">{container.name}</span>
          </div>
          <span className="text-sm opacity-80">{container.description}</span>
        </button>
      ))}
    </div>
  );
}