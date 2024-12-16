import React from 'react';
import { Container, PackageCheck, Scale, PackageOpen, PackageX, Thermometer } from 'lucide-react';

const containerTypes = [
  {
    name: "Contenedor 20' Dry",
    dimensions: {
      external: { length: "6.06m", width: "2.44m", height: "2.59m" },
      internal: { length: "5.89m", width: "2.35m", height: "2.39m" },
      capacity: "33.2m³",
      maxWeight: "28,200kg"
    },
    description: "Contenedor estándar ideal para cargas generales y consolidadas. Perfecto para mercancías de peso medio y volumen moderado.",
    uses: ["Carga general", "Productos embalados", "Cajas y palets", "Maquinaria pequeña"],
    icon: <Container className="w-8 h-8 text-accent" />
  },
  {
    name: "Contenedor 40' Dry",
    dimensions: {
      external: { length: "12.19m", width: "2.44m", height: "2.59m" },
      internal: { length: "12.01m", width: "2.35m", height: "2.39m" },
      capacity: "67.7m³",
      maxWeight: "28,800kg"
    },
    description: "Contenedor versátil de mayor longitud, óptimo para cargas voluminosas y mercancías diversas.",
    uses: ["Carga voluminosa", "Muebles", "Maquinaria", "Mercancía general"],
    icon: <Container className="w-8 h-8 text-accent" />
  },
  {
    name: "Contenedor 40' NOR",
    dimensions: {
      external: { length: "12.19m", width: "2.44m", height: "2.59m" },
      internal: { length: "12.01m", width: "2.35m", height: "2.39m" },
      capacity: "67.7m³",
      maxWeight: "30,480kg"
    },
    description: "Diseñado para cargas pesadas con mayor capacidad de peso.",
    uses: ["Cargas pesadas", "Materiales densos", "Productos industriales"],
    icon: <Scale className="w-8 h-8 text-accent" />
  },
  {
    name: "Contenedor 40' HC",
    dimensions: {
      external: { length: "12.19m", width: "2.44m", height: "2.89m" },
      internal: { length: "12.01m", width: "2.35m", height: "2.69m" },
      capacity: "76.3m³",
      maxWeight: "28,800kg"
    },
    description: "Mayor altura para cargas voluminosas que requieren espacio vertical adicional.",
    uses: ["Carga voluminosa", "Productos ligeros", "Mercancía apilable"],
    icon: <PackageCheck className="w-8 h-8 text-accent" />
  },
  {
    name: "Contenedor 40' Reefer",
    dimensions: {
      external: { length: "12.19m", width: "2.44m", height: "2.89m" },
      internal: { length: "11.58m", width: "2.29m", height: "2.44m" },
      capacity: "67.7m³",
      maxWeight: "28,800kg"
    },
    description: "Contenedor refrigerado para el transporte de mercancías que requieren temperatura controlada.",
    uses: ["Productos perecederos", "Farmacéuticos", "Alimentos congelados"],
    icon: <Thermometer className="w-8 h-8 text-accent" />
  },
  {
    name: "Open Top 40'",
    dimensions: {
      external: { length: "12.19m", width: "2.44m", height: "2.59m" },
      internal: { length: "12.01m", width: "2.35m", height: "2.39m" },
      capacity: "67.7m³",
      maxWeight: "28,800kg"
    },
    description: "Contenedor sin techo para cargas de altura especial o que requieren carga superior.",
    uses: ["Maquinaria alta", "Cargas especiales", "Productos sobredimensionados"],
    icon: <PackageOpen className="w-8 h-8 text-accent" />
  },
  {
    name: "Flat Rack 40'",
    dimensions: {
      external: { length: "12.19m", width: "2.44m", height: "2.59m" },
      internal: { length: "12.01m", width: "2.35m", height: "0.15m" },
      capacity: "67.7m³",
      maxWeight: "45,000kg"
    },
    description: "Plataforma con paneles frontales abatibles o fijos. Diseñado para cargas extra-dimensionales y pesadas.",
    uses: ["Maquinaria pesada", "Vehículos", "Cargas extra-anchas", "Productos industriales"],
    icon: <PackageX className="w-8 h-8 text-accent" />
  }
];

export default function ContainerTypes() {
  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">Tipos de Contenedores</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {containerTypes.map((container, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-accent/10">
              <div className="flex items-center gap-3 mb-4">
                {container.icon}
                <h3 className="text-xl font-semibold">{container.name}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-primary-dark/80">{container.description}</p>
                <div>
                  <h4 className="font-medium flex items-center gap-2">
                    <PackageCheck className="w-5 h-5 text-accent" />
                    Dimensiones Externas
                  </h4>
                  <ul className="mt-2 space-y-1 text-primary-dark/80">
                    <li>Largo: {container.dimensions.external.length}</li>
                    <li>Ancho: {container.dimensions.external.width}</li>
                    <li>Alto: {container.dimensions.external.height}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium flex items-center gap-2">
                    <Scale className="w-5 h-5 text-accent" />
                    Capacidad
                  </h4>
                  <ul className="mt-2 space-y-1 text-primary-dark/80">
                    <li>Volumen: {container.dimensions.capacity}</li>
                    <li>Peso máximo: {container.dimensions.maxWeight}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Usos típicos:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {container.uses.map((use, index) => (
                      <li
                        key={index}
                        className="text-sm text-primary-dark/80 flex items-center gap-2 bg-neutral/50 rounded-full px-3 py-1"
                      >
                        <Container className="w-4 h-4" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}