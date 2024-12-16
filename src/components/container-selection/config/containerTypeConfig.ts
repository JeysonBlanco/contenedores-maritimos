import { Boxes, PackageOpen, PackagePlus, Thermometer } from 'lucide-react';

export const containerTypeConfig = [
  {
    id: 'standard',
    name: 'Standard',
    icon: Boxes,
    description: 'Contenedores 20\', 40\', 40\'NOR y HC'
  },
  {
    id: '40rf',
    name: 'Reefer',
    icon: Thermometer,
    description: 'Contenedor refrigerado para carga controlada'
  },
  {
    id: 'open-top',
    name: 'Open Top',
    icon: PackageOpen,
    description: 'Contenedor sin techo para cargas altas'
  },
  {
    id: 'flat-rack',
    name: 'Flat Rack',
    icon: PackagePlus,
    description: 'Para cargas sobredimensionadas'
  }
];