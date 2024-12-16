import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import ContainerModel from './ContainerModel';
import { containerTypes } from './models/containerTypes';
import { getHotspots } from './utils/hotspotUtils';

interface ContainerViewerProps {
  selectedType?: string;
}

export default function ContainerViewer({ selectedType = '20st' }: ContainerViewerProps) {
  const [selectedContainer, setSelectedContainer] = useState(containerTypes[0]);
  
  useEffect(() => {
    const container = containerTypes.find(c => c.id === selectedType);
    if (container) {
      setSelectedContainer(container);
    }
  }, [selectedType]);

  return (
    <div className="w-full h-[400px] bg-primary-dark/5 rounded-lg overflow-hidden">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[8, 5, 8]} />
          <OrbitControls 
            enablePan={false}
            minDistance={5}
            maxDistance={15}
            autoRotate={true}
            autoRotateSpeed={1}
          />
          <ContainerModel
            container={selectedContainer}
            hotspots={getHotspots(selectedContainer.id)}
            position={[0, -1, 0]}
          />
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}