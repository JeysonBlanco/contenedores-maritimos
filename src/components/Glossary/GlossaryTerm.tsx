import React from 'react';
import { Info } from 'lucide-react';

interface GlossaryTermProps {
  term: string;
  definition: string;
  example?: string;
  icon?: React.ReactNode;
}

export default function GlossaryTerm({ term, definition, example, icon }: GlossaryTermProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-accent/10">
      <div className="flex items-start gap-4">
        <div className="text-primary">
          {icon || <Info className="w-6 h-6" />}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary-dark mb-2">{term}</h3>
          <p className="text-primary-dark/80 mb-3">{definition}</p>
          {example && (
            <div className="bg-neutral/30 rounded-lg p-3 text-sm text-primary-dark/70">
              <strong className="text-primary-dark">Ejemplo:</strong> {example}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}