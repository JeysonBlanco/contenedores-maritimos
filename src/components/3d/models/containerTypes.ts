import { ContainerType } from '../types';
import { standardContainers } from './standardContainers';
import { specialContainers } from './specialContainers';

export const containerTypes: ContainerType[] = [
  ...standardContainers,
  ...specialContainers
];