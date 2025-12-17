// src/components/RobotModel.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function RobotModel() {
  const { scene } = useGLTF('/utility_robot.glb'); 
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      // 1. Get the time (how long the app has been running)
      const t = state.clock.getElapsedTime();

      // --- EXISTING LOGIC (Look at mouse) ---
      const x = state.mouse.x;
      const y = state.mouse.y;
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x * 0.8, 0.1);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y * 0.5, 0.1);

      // --- NEW LOGIC (Hover Effect) ---
      // Base Y position is -1. 
      // We add a sine wave to it.
      // t * 2 = Speed (Higher is faster)
      // * 0.1 = Distance (Higher moves it further up/down)
      ref.current.position.y = 0 + Math.sin(t * 2) * 0.1; 
    }
  });

  return (
    <primitive 
      ref={ref} 
      object={scene} 
      scale={0.025} 
      position={[0, 0, 0]} 
    />
  );
}