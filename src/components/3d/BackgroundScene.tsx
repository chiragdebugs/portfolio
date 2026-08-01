"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 700;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#00F0FF");
    const color2 = new THREE.Color("#8B5CF6");
    const color3 = new THREE.Color("#38BDF8");

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const mixRatio = Math.random();
      let chosenColor = color1;
      if (mixRatio > 0.6) chosenColor = color2;
      else if (mixRatio > 0.3) chosenColor = color3;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.04;
    pointsRef.current.rotation.x = time * 0.02;

    if (mouse.current) {
      pointsRef.current.rotation.x += (mouse.current.y * 0.05 - pointsRef.current.rotation.x) * 0.05;
      pointsRef.current.rotation.y += (mouse.current.x * 0.05 - pointsRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    meshRef.current.rotation.y = Math.cos(t * 0.3) * 0.2;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <icosahedronGeometry args={[4, 2]} />
      <meshBasicMaterial
        wireframe
        color="#00F0FF"
        transparent
        opacity={0.07}
      />
    </mesh>
  );
}

export default function BackgroundScene() {
  const mouse = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <ParticleField mouse={mouse} />
        <FloatingMesh />
      </Canvas>
    </div>
  );
}
