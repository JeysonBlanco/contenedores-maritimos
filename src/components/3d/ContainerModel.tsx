import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Hotspot from './Hotspot';
import { ContainerType, HotspotInfo } from './types';
import * as THREE from 'three';

interface ContainerModelProps {
  container: ContainerType;
  hotspots: HotspotInfo[];
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function ContainerModel({
  container,
  hotspots,
  position = [0, 0, 0],
  rotation = [0, 0, 0]
}: ContainerModelProps) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  const { external } = container.dimensions;

  const renderStandardContainer = () => (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[external.width, external.height, external.length]} />
      <meshStandardMaterial 
        color={container.color}
        metalness={0.6}
        roughness={0.2}
      />
      {hotspots.map((hotspot) => (
        <Hotspot key={hotspot.id} info={hotspot} />
      ))}
    </mesh>
  );

  const renderOpenTopContainer = () => (
    <group ref={meshRef} position={position} rotation={rotation}>
      {/* Base and sides */}
      <mesh>
        <boxGeometry args={[external.width, 0.1, external.length]} position={[0, -external.height/2, 0]} />
        <meshStandardMaterial color={container.color} />
      </mesh>
      {/* Sides */}
      {[[-external.width/2, 0, 0], [external.width/2, 0, 0]].map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.1, external.height, external.length]} />
          <meshStandardMaterial color={container.color} />
        </mesh>
      ))}
      {/* Front and back */}
      {[[-external.length/2, 0, 0], [external.length/2, 0, 0]].map((pos, i) => (
        <mesh key={i} position={[0, 0, pos[0]]}>
          <boxGeometry args={[external.width, external.height, 0.1]} />
          <meshStandardMaterial color={container.color} />
        </mesh>
      ))}
      {hotspots.map((hotspot) => (
        <Hotspot key={hotspot.id} info={hotspot} />
      ))}
    </group>
  );

  const renderFlatRackContainer = () => (
    <group ref={meshRef} position={position} rotation={rotation}>
      {/* Base platform */}
      <mesh>
        <boxGeometry args={[external.width, 0.15, external.length]} />
        <meshStandardMaterial color={container.color} />
      </mesh>
      {/* End walls */}
      {[-external.length/2, external.length/2].map((pos, i) => (
        <mesh key={i} position={[0, external.height/2, pos]}>
          <boxGeometry args={[external.width, external.height, 0.1]} />
          <meshStandardMaterial color={container.color} />
        </mesh>
      ))}
      {hotspots.map((hotspot) => (
        <Hotspot key={hotspot.id} info={hotspot} />
      ))}
    </group>
  );

  if (container.isOpenTop) {
    return renderOpenTopContainer();
  } else if (container.isFlatRack) {
    return renderFlatRackContainer();
  } else {
    return renderStandardContainer();
  }
}