import { HotspotInfo } from '../types';
import { containerTypes } from '../models/containerTypes';

export const getHotspots = (containerId: string): HotspotInfo[] => {
  const container = containerTypes.find(c => c.id === containerId);
  if (!container) return [];

  return [
    {
      id: 'door',
      position: [0, 0, container.dimensions.external.length / 2],
      title: 'Puerta',
      content: 'Apertura completa para facilitar la carga y descarga'
    },
    {
      id: 'dimensions',
      position: [container.dimensions.external.width / 2, 0, 0],
      title: 'Dimensiones',
      content: `Externas: ${container.dimensions.external.length}m × ${container.dimensions.external.width}m × ${container.dimensions.external.height}m\nInternas: ${container.dimensions.internal.length}m × ${container.dimensions.internal.width}m × ${container.dimensions.internal.height}m`
    },
    {
      id: 'capacity',
      position: [0, container.dimensions.external.height / 2, 0],
      title: 'Capacidad',
      content: `Volumen: ${container.dimensions.capacity}m³\nPeso máximo: ${container.dimensions.maxWeight}kg`
    }
  ];
};