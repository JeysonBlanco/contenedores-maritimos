import { ContainerType } from '../types';
import * as THREE from 'three';

export const createStandardGeometry = (dimensions: ContainerType['dimensions']['external']) => {
  return new THREE.BoxGeometry(dimensions.width, dimensions.height, dimensions.length);
};

export const createOpenTopGeometry = (dimensions: ContainerType['dimensions']['external']) => {
  const geometry = new THREE.BoxGeometry(dimensions.width, dimensions.height, dimensions.length);
  // Remove top face
  const positions = geometry.attributes.position.array;
  for (let i = 0; i < positions.length; i += 3) {
    if (positions[i + 1] > dimensions.height / 2 - 0.1) {
      positions[i + 1] = dimensions.height / 2 - 0.1;
    }
  }
  return geometry;
};

export const createFlatRackGeometry = (dimensions: ContainerType['dimensions']['external']) => {
  const geometry = new THREE.BoxGeometry(dimensions.width, 0.15, dimensions.length);
  return geometry;
};