"use client";

import { Suspense, useEffect, useRef, MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight || 1;
      progress.current = Math.min(1, Math.max(0, window.scrollY / vh));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function FloatingKnot({ scrollRef }: { scrollRef: MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const outerMesh = useRef<THREE.Mesh>(null);
  const innerMesh = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scroll = scrollRef.current;
    mouse.current.x = state.mouse.x;
    mouse.current.y = state.mouse.y;

    if (group.current) {
      // Base idle motion + mouse parallax, accelerated as the user scrolls past the hero
      group.current.rotation.y = t * (0.12 + scroll * 0.5) + mouse.current.x * 0.4;
      group.current.rotation.x = Math.sin(t * 0.2) * 0.15 + mouse.current.y * 0.25 + scroll * 0.6;
      group.current.position.y = Math.sin(t * 0.6) * 0.15 - scroll * 1.4;
      group.current.position.x = mouse.current.x * 0.3;

      const scale = 1 - scroll * 0.45;
      group.current.scale.setScalar(scale);
    }

    const fade = 1 - scroll;
    if (outerMesh.current) {
      (outerMesh.current.material as THREE.MeshStandardMaterial).opacity = fade;
    }
    if (innerMesh.current) {
      (innerMesh.current.material as THREE.MeshStandardMaterial).opacity = 0.6 * fade;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={outerMesh}>
        <torusKnotGeometry args={[1.1, 0.32, 220, 32, 2, 3]} />
        <meshStandardMaterial
          color="#0A0A0A"
          metalness={0.9}
          roughness={0.25}
          emissive="#FFFFFF"
          emissiveIntensity={0.02}
          wireframe
          transparent
          opacity={1}
        />
      </mesh>
      <mesh ref={innerMesh} scale={0.985}>
        <torusKnotGeometry args={[1.1, 0.32, 220, 32, 2, 3]} />
        <meshStandardMaterial color="#050505" metalness={1} roughness={0.15} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function Particles({ scrollRef }: { scrollRef: MutableRefObject<number> }) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.PointsMaterial>(null);
  const count = 260;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
  }

  useFrame((state) => {
    const scroll = scrollRef.current;
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.015 + scroll * 0.3;
      points.current.position.y = scroll * 1.2;
    }
    if (material.current) {
      material.current.opacity = 0.5 * (1 - scroll * 0.8);
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial ref={material} size={0.014} color="#A1A1AA" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  const scrollRef = useScrollProgress();

  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={12} color="#ffffff" />
      <Suspense fallback={null}>
        <FloatingKnot scrollRef={scrollRef} />
        <Particles scrollRef={scrollRef} />
      </Suspense>
    </Canvas>
  );
}
