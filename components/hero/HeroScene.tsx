"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
const PARTICLE_COUNT = isMobile ? 400 : 1500;

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    const accentColors = [
      new THREE.Color("#00D4FF"),
      new THREE.Color("#7C3AED"),
      new THREE.Color("#10B981"),
      new THREE.Color("#F59E0B"),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const color = accentColors[Math.floor(Math.random() * accentColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.03;
    ref.current.rotation.x = Math.sin(time * 0.02) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function GridLines() {
  const ref = useRef<THREE.LineSegments>(null!);
  const gridSize = 20;
  const divisions = 20;

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const step = gridSize / divisions;

    for (let i = 0; i <= divisions; i++) {
      const pos = -gridSize / 2 + i * step;
      vertices.push(-gridSize / 2, -4, pos, gridSize / 2, -4, pos);
      vertices.push(pos, -4, -gridSize / 2, pos, -4, gridSize / 2);
    }

    geom.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geom;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    (ref.current.material as THREE.LineBasicMaterial).opacity =
      0.08 + Math.sin(time * 0.5) * 0.03;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#00D4FF" transparent opacity={0.08} />
    </lineSegments>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "default" }}
        dpr={[1, isMobile ? 1 : 2]}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
          });
        }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        {!isMobile && <GridLines />}
      </Canvas>
    </div>
  );
}
