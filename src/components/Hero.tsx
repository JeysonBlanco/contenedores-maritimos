import React, { useState } from 'react';
import ContainerViewer from './3d/ContainerViewer';
import ContainerTypeSelector from './container-selection/ContainerTypeSelector';

export default function Hero() {
  const [selectedContainerId, setSelectedContainerId] = useState('20st');

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
            Conoce las Dimensiones de los Contenedores Marítimos: Optimiza tu Logística Internacional
          </h1>
          
          <p className="text-xl mb-8 text-neutral">
            Aprende a seleccionar el contenedor ideal para tus necesidades de transporte marítimo
          </p>
          
          <div className="mb-12">
            <ContainerTypeSelector
              selectedId={selectedContainerId}
              onSelect={setSelectedContainerId}
            />
          </div>
          
          <div className="mt-12">
            <ContainerViewer selectedType={selectedContainerId} />
          </div>
        </div>
      </div>
    </section>
  );
}