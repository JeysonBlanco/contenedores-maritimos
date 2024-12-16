import { ContainerType, HotspotInfo } from './types';

export const containerTypes: ContainerType[] = [
  {
    id: '20st',
    name: "Contenedor 20' Dry",
    dimensions: {
      external: {
        length: 6.06,
        width: 2.44,
        height: 2.59
      },
      internal: {
        length: 5.89,
        width: 2.35,
        height: 2.39
      },
      maxWeight: 28200,
      capacity: 33.2
    },
    color: '#002DA4'
  },
  {
    id: '40st',
    name: "Contenedor 40' Dry",
    dimensions: {
      external: {
        length: 12.19,
        width: 2.44,
        height: 2.59
      },
      internal: {
        length: 12.01,
        width: 2.35,
        height: 2.39
      },
      maxWeight: 28800,
      capacity: 67.7
    },
    color: '#1E40AF'
  },
  // Rest of the containers remain the same
  {
    id: '40nor',
    name: "Contenedor 40' NOR",
    dimensions: {
      external: {
        length: 12.19,
        width: 2.44,
        height: 2.59
      },
      internal: {
        length: 12.01,
        width: 2.35,
        height: 2.39
      },
      maxWeight: 30480,
      capacity: 67.7
    },
    color: '#1E3A8A'
  },
  {
    id: '40hc',
    name: "Contenedor 40' HC",
    dimensions: {
      external: {
        length: 12.19,
        width: 2.44,
        height: 2.89
      },
      internal: {
        length: 12.01,
        width: 2.35,
        height: 2.69
      },
      maxWeight: 28800,
      capacity: 76.3
    },
    color: '#1E3A8A'
  },
  {
    id: '40rf',
    name: "Contenedor 40' Reefer",
    dimensions: {
      external: {
        length: 12.19,
        width: 2.44,
        height: 2.89
      },
      internal: {
        length: 11.58,
        width: 2.29,
        height: 2.44
      },
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
      external: {
        length: 12.19,
        width: 2.44,
        height: 2.59
      },
      internal: {
        length: 12.01,
        width: 2.35,
        height: 2.39
      },
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
      external: {
        length: 12.19,
        width: 2.44,
        height: 2.59
      },
      internal: {
        length: 12.01,
        width: 2.35,
        height: 0.15
      },
      maxWeight: 45000,
      capacity: 67.7
    },
    color: '#2AD4AE',
    isFlatRack: true
  }
];

// Rest of the file remains the same...