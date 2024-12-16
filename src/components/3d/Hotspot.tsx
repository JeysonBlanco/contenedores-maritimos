import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { HotspotInfo } from './types';

interface HotspotProps {
  info: HotspotInfo;
}

export default function Hotspot({ info }: HotspotProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <group position={info.position}>
      <Html center>
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-4 h-4 bg-accent rounded-full cursor-pointer" />
          {isHovered && (
            <div className="absolute z-50 -translate-x-1/2 translate-y-2 bottom-full left-1/2 w-48 bg-white p-3 rounded-lg shadow-lg">
              <h4 className="font-semibold text-primary-dark mb-1">{info.title}</h4>
              <p className="text-sm text-primary-dark/80 whitespace-pre-line">{info.content}</p>
            </div>
          )}
        </div>
      </Html>
      <mesh>
        <sphereGeometry args={[0.1]} />
        <meshBasicMaterial color="#2AD4AE" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}