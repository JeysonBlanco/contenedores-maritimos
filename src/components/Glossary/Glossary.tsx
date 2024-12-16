import React from 'react';
import { Book, Box, Scale, FileText } from 'lucide-react';
import GlossaryTerm from './GlossaryTerm';

const glossaryTerms = [
  {
    term: 'TEU (Twenty-foot Equivalent Unit)',
    definition: 'Unidad de medida estándar equivalente a un contenedor de 20 pies.',
    example: 'Un contenedor de 40 pies equivale a 2 TEUs.',
    icon: <Box className="w-6 h-6" />
  },
  {
    term: 'Cubicaje',
    definition: 'Cálculo del volumen total disponible en un contenedor.',
    example: 'Un contenedor de 20\' tiene un cubicaje de 33.2m³.',
    icon: <Scale className="w-6 h-6" />
  },
  {
    term: 'CSC Plate',
    definition: 'Placa de aprobación de seguridad que certifica que el contenedor cumple con los estándares internacionales.',
    example: 'Todo contenedor debe tener una CSC plate válida para el transporte internacional.',
    icon: <FileText className="w-6 h-6" />
  }
];

export default function Glossary() {
  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Book className="w-10 h-10 text-primary" />
            <h2 className="text-3xl font-bold text-primary-dark">Glosario de Términos</h2>
          </div>
          
          <div className="space-y-6">
            {glossaryTerms.map((term, index) => (
              <GlossaryTerm
                key={index}
                term={term.term}
                definition={term.definition}
                example={term.example}
                icon={term.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}