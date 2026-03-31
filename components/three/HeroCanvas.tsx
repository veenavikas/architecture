'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';

function WireframeModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
    meshRef.current.rotation.z += delta * 0.04;
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.8, 1), []);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color="#C84B31"
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function InnerSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x -= delta * 0.05;
    meshRef.current.rotation.y -= delta * 0.08;
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.1, 2), []);

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color="#F5F0E8"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#F5F0E8"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useMousePosition();

  useFrame(() => {
    const targetX = (mouse.x / window.innerWidth - 0.5) * 0.4;
    const targetY = -(mouse.y / window.innerHeight - 0.5) * 0.4;
    camera.position.x += (targetX - camera.position.x) * 0.03;
    camera.position.y += (targetY - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroCanvas() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <CameraRig />
        <WireframeModel />
        <InnerSphere />
        <ParticleField />
      </Canvas>
    </div>
  );
}
