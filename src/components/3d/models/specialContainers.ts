import { ContainerType } from '../types';

export const specialContainers: ContainerType[] = [
  {
    id: '40rf',
    name: "Contenedor 40' Reefer",
    dimensions: {
      external: { length: 12.19, width: 2.44, height: 2.89 },
      internal: { length: 11.58, width: 2.29, height: 2.44 },
      maxWeight: 28800,
      capacity: 67.7
    },
    color: '#1E3A8A',
    isReefer: true
  },
  {
    id: 'open-top',
    name: "Open Top 40'",
    dimensions: {
      external: { length: 12.19, width: 2.44, height: 2.59 },
      internal: { length: 12.01, width: 2.35, height: 2.39 },
      maxWeight: 28800,
      capacity: 67.7
    },
    color: '#2AD4AE',
    isOpenTop: true
  },
  {
    id: 'flat-rack',
    name: "Flat Rack 40'",
    dimensions: {
      external: { length: 12.19, width: 2.44, height: 2.59 },
      internal: { length: 12.01, width: 2.35, height: 0.15 },
      maxWeight: 45000,
      capacity: 67.7
    },
    color: '#2AD4AE',
    isFlatRack: true
  }
];