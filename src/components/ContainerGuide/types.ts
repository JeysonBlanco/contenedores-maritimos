import { ReactNode } from 'react';

export interface CargoType {
  name: string;
  icon: ReactNode;
}

export interface ContainerGuideType {
  name: string;
  description: string;
  infographicUrl: string;
  imageUrl: string;
  typicalCargo: CargoType[];
}