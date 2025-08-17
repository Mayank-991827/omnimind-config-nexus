import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Simplified Neural network nodes component
function NeuralNodes() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions for neural nodes
  const positions = useMemo(() => {
    const positions = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  // Animate the nodes
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00FFFF"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// Simplified floating brain core
function BrainCore() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.2, 2]} />
      <meshStandardMaterial
        color="#FF00FF"
        transparent
        opacity={0.6}
        wireframe
        emissive="#FF00FF"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Main Neural Network 3D Scene - Simplified
export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00FFFF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8A2BE2" />
        
        <NeuralNodes />
        <BrainCore />
      </Canvas>
    </div>
  );
}