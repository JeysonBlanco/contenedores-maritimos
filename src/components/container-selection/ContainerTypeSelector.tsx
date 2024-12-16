import React, { useState } from 'react';
import { Boxes, PackageOpen, PackagePlus, Thermometer } from 'lucide-react';
import StandardContainerSelector from './StandardContainerSelector';

interface ContainerType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const containerTypes: ContainerType[] = [
  {
    id: 'standard',
    name: 'Standard',
    icon: <Boxes className="w-5 h-5" />,
    description: 'Contenedores 20\', 40\', 40\'NOR y HC'
  },
  {
    id: '40rf',
    name: 'Reefer',
    icon: <Thermometer className="w-5 h-5" />,
    description: 'Contenedor refrigerado para carga controlada'
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

interface Props {
  onSelect: (containerId: string) => void;
  selectedId: string;
}

export default function ContainerTypeSelector({ onSelect, selectedId }: Props) {
  const [selectedType, setSelectedType] = useState('standard');
  const [selectedStandard, setSelectedStandard] = useState('20st');

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId);
    if (typeId === 'standard') {
      onSelect(selectedStandard);
    } else {
      onSelect(typeId);
    }
  };

  const handleStandardSelect = (standardId: string) => {
    setSelectedStandard(standardId);
    onSelect(standardId);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {containerTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleTypeSelect(type.id)}
            className={`flex flex-col items-center p-4 rounded-lg transition-all ${
              selectedType === type.id
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

      <StandardContainerSelector
        selectedId={selectedId}
        onSelect={handleStandardSelect}
        isVisible={selectedType === 'standard'}
      />
    </div>
  );
}