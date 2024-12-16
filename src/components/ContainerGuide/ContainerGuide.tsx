import React from 'react';
import { Box, FileDown, Package, Car, Thermometer, Wrench } from 'lucide-react';
import ContainerTypeCard from './ContainerTypeCard';
import type { ContainerGuideType } from './types';

const containerGuides: ContainerGuideType[] = [
  {
    name: 'Contenedor Estándar',
    description: 'Ideal para carga seca y general',
    infographicUrl: '/guides/standard-container.pdf',
    imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3',
    typicalCargo: [
      { name: 'Cajas', icon: <Box className="w-4 h-4" /> },
      { name: 'Palets', icon: <Package className="w-4 h-4" /> },
      { name: 'Maquinaria', icon: <Wrench className="w-4 h-4" /> },
      { name: 'Mercancía general', icon: <Box className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Contenedor High Cube',
    description: 'Mayor altura para cargas voluminosas',
    infographicUrl: '/guides/hc-container.pdf',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    typicalCargo: [
      { name: 'Carga ligera', icon: <Box className="w-4 h-4" /> },
      { name: 'Muebles', icon: <Package className="w-4 h-4" /> },
      { name: 'Vehículos', icon: <Car className="w-4 h-4" /> },
      { name: 'Mercancía voluminosa', icon: <Box className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Contenedor Refrigerado',
    description: 'Control de temperatura para productos perecederos',
    infographicUrl: '/guides/reefer-container.pdf',
    imageUrl: 'https://images.unsplash.com/photo-1577791465485-b80039b4d69a',
    typicalCargo: [
      { name: 'Frutas', icon: <Package className="w-4 h-4" /> },
      { name: 'Productos frescos', icon: <Thermometer className="w-4 h-4" /> },
      { name: 'Farmacéuticos', icon: <Package className="w-4 h-4" /> },
      { name: 'Alimentos congelados', icon: <Thermometer className="w-4 h-4" /> }
    ]
  }
];

export default function ContainerGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            Guía Visual de Tipos de Contenedores
          </h2>
          <p className="text-primary-dark/80">
            Descubre las características y usos ideales de cada tipo de contenedor
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {containerGuides.map((container, index) => (
            <ContainerTypeCard key={index} container={container} />
          ))}
        </div>
      </div>
    </section>
  );
}