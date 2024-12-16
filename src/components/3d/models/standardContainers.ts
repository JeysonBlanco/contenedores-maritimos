import { ContainerType } from '../types';

export const standardContainers: ContainerType[] = [
  {
    id: '20st',
    name: "Contenedor 20' Dry",
    dimensions: {
      external: { length: 6.06, width: 2.44, height: 2.59 },
      internal: { length: 5.89, width: 2.35, height: 2.39 },
      maxWeight: 28200,
      capacity: 33.2
    },
    color: '#002DA4'
  },
  {
    id: '40st',
    name: "Contenedor 40' Dry",
    dimensions: {
      external: { length: 12.19, width: 2.44, height: 2.59 },
      internal: { length: 12.01, width: 2.35, height: 2.39 },
      maxWeight: 28800,
      capacity: 67.7
    },
    color: '#1E40AF'
  },
  {
    id: '40nor',
    name: "Contenedor 40' NOR",
    dimensions: {
      external: { length: 12.19, width: 2.44, height: 2.59 },
      internal: { length: 12.01, width: 2.35, height: 2.39 },
      maxWeight: 30480,
      capacity: 67.7
    },
    color: '#1E3A8A'
  },
  {
    id: '40hc',
    name: "Contenedor 40' HC",
    dimensions: {
      external: { length: 12.19, width: 2.44, height: 2.89 },
      internal: { length: 12.01, width: 2.35, height: 2.69 },
      maxWeight: 28800,
      capacity: 76.3
    },
    color: '#1E3A8A'
  }
];