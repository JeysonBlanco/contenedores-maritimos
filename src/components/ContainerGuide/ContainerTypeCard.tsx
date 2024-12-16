import React from 'react';
import { FileDown } from 'lucide-react';
import type { ContainerGuideType } from './types';

export default function ContainerTypeCard({ container }: { container: ContainerGuideType }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-accent/10">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-primary-dark">{container.name}</h3>
          <p className="text-primary-dark/70 mt-1">{container.description}</p>
        </div>
        <a
          href={container.infographicUrl}
          download
          className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
        >
          <FileDown className="w-5 h-5" />
          <span className="text-sm">Descargar</span>
        </a>
      </div>
      
      <div className="aspect-video rounded-lg overflow-hidden mb-4">
        <img
          src={container.imageUrl}
          alt={container.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="space-y-3">
        <h4 className="font-medium text-primary-dark">Cargas típicas:</h4>
        <ul className="grid grid-cols-2 gap-2">
          {container.typicalCargo.map((cargo, index) => (
            <li
              key={index}
              className="text-sm text-primary-dark/80 flex items-center gap-2 bg-neutral/50 rounded-full px-3 py-1"
            >
              {cargo.icon}
              <span>{cargo.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}