import React from 'react';
import { Boxes, PackageOpen, PackagePlus } from 'lucide-react';

interface ContainerTypeButton {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const containerTypes: ContainerTypeButton[] = [
  {
    id: 'standard',
    name: 'Standard',
    icon: <Boxes className="w-5 h-5" />,
    description: 'Contenedores 20\', 40\', 40\'NOR y HC'
  },
  {
    id: 'open-top',
    name: 'Open Top',
    icon: <PackageOpen className="w-5 h-5" />,
    description: 'Contenedor sin techo para cargas altas'
  },
  {
    id: 'flat-rack',
    name: 'Flat Rack',
    icon: <PackagePlus className="w-5 h-5" />,
    description: 'Para cargas sobredimensionadas'
  }
];

interface ContainerTypeButtonsProps {
  onSelect: (containerId: string) => void;
  selectedId: string;
}

export default function ContainerTypeButtons({ onSelect, selectedId }: ContainerTypeButtonsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {containerTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${
            selectedId === type.id
              ? 'bg-accent text-primary-dark'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {type.icon}
            <span className="font-medium">{type.name}</span>
          </div>
          <span className="text-sm opacity-80">{type.description}</span>
        </button>
      ))}
    </div>
  );
}