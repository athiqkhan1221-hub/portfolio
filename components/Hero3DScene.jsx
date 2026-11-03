"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Deterministic pseudo-random generator for pure React 19 rendering
function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

// ============================================================================
// 1. 3D FOLDED GEOMETRIC ORIGAMI / FACETED SURFACE (MATCHING REFERENCE IMAGE)
// Recreates the polygonal geometric facets seen on the right edge of reference
// ============================================================================
function FacetedOrigamiSurface({ mouse, isHovered, scrollProgress }) {
  const meshRef = useRef(null);

  // Generate perturbed plane geometry for flat-shaded geometric facets
  const geometry = useMemo(() => {
    // 8x8 grid of quads (each split into 2 triangles = 128 faceted polygons)
    const geom = new THREE.PlaneGeometry(5.2, 5.8, 7, 7);
    const pos = geom.attributes.position;

    // Displace z-vertices deterministically to create sharp folded paper/crystal angles
    for (let i = 0; i < pos.count; i++) {
      const u = (i % 8) / 7;
      const v = Math.floor(i / 8) / 7;
      const noise =
        Math.sin(u * 5.2 + v * 3.1) * 0.42 +
        Math.cos(u * 3.4 - v * 4.6) * 0.32 +
        (pseudoRandom(i + 13) - 0.5) * 0.22;
      pos.setZ(i, noise);
    }

    geom.computeVertexNormals();
    return geom;
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Gentle base breathing drift
    const speed = isHovered ? 0.35 : 0.18;
    meshRef.current.position.y =
      Math.sin(state.clock.getElapsedTime() * speed) * 0.08 -
      scrollProgress.current * 0.45;

    // Fluid cursor parallax tracking
    const targetRotX = -0.12 - mouse.current.y * 0.18;
    const targetRotY = 0.28 + mouse.current.x * 0.22;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotX,
      0.06
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotY,
      0.06
    );
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={[0.55, 0.05, -0.75]}
      rotation={[-0.12, 0.28, 0.04]}
    >
      <meshStandardMaterial
        color="#1f231f"
        emissive="#0d0f0d"
        emissiveIntensity={isHovered ? 0.25 : 0.12}
        roughness={0.52}
        metalness={0.42}
        flatShading={true}
      />
    </mesh>
  );
}

// ============================================================================
// 2. MINIMALIST FLOATING GEOMETRIC POLYHEDRON (SUBTLE ARCHITECTURAL DEPTH)
// Adds a subtle faceted geometric accent floating behind the portrait
// ============================================================================
function FloatingFacetedCrystal({ mouse, isHovered }) {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Slow tumbling rotation
    const rate = isHovered ? 0.4 : 0.2;
    meshRef.current.rotation.x += delta * rate * 0.5;
    meshRef.current.rotation.y += delta * rate * 0.7;

    // Parallax tracking
    const targetX = 1.65 + mouse.current.x * 0.15;
    const targetY = 1.35 + mouse.current.y * 0.15;
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      targetX,
      0.05
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY,
      0.05
    );
  });

  return (
    <mesh ref={meshRef} position={[1.65, 1.35, -0.45]} scale={0.42}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#2b312b"
        roughness={0.35}
        metalness={0.65}
        flatShading={true}
      />
    </mesh>
  );
}

// ============================================================================
// 3. DELICATE FLOATING STUDIO PARTICLES (SUBTLE DEPTH ATMOSPHERE)
// ============================================================================
function SubtleStudioParticles({ count = 28, isHovered }) {
  const pointsRef = useRef(null);

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r1 = pseudoRandom(i * 3 + 1);
      const r2 = pseudoRandom(i * 3 + 2);
      const r3 = pseudoRandom(i * 3 + 3);

      pos[i * 3] = (r1 - 0.5) * 5.2;
      pos[i * 3 + 1] = (r2 - 0.5) * 5.2;
      pos[i * 3 + 2] = (r3 - 0.5) * 2.5 - 0.3;
    }
    return [pos];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const speed = isHovered ? 0.08 : 0.035;
    pointsRef.current.rotation.y += delta * speed;
    pointsRef.current.rotation.x += delta * (speed * 0.4);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        color="#d4d4d8"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ============================================================================
// 4. STUDIO DIRECTIONAL & CINEMATIC LIGHTING
// Emphasizes geometric facet shadows and highlights across the background
// ============================================================================
function StudioLighting({ mouse, isHovered }) {
  const followLightRef = useRef(null);

  useFrame(() => {
    if (followLightRef.current) {
      followLightRef.current.position.x = THREE.MathUtils.lerp(
        followLightRef.current.position.x,
        mouse.current.x * 2.8,
        0.08
      );
      followLightRef.current.position.y = THREE.MathUtils.lerp(
        followLightRef.current.position.y,
        mouse.current.y * 2.8,
        0.08
      );
    }
  });

  return (
    <>
      {/* Studio ambient base */}
      <ambientLight intensity={0.45} color="#151815" />

      {/* Main Overhead Studio Light */}
      <directionalLight
        position={[3.5, 4.5, 3.2]}
        intensity={1.8}
        color="#ffffff"
      />

      {/* Lateral Contrast Fill Light */}
      <directionalLight
        position={[-4.0, -2.5, 2.0]}
        intensity={0.8}
        color="#a1a1aa"
      />

      {/* Subtle Rim Light */}
      <pointLight position={[2.5, 2.0, -2.0]} intensity={1.2} color="#ffffff" />

      {/* Interactive Cursor-Tracking Studio Light */}
      <pointLight
        ref={followLightRef}
        position={[0, 0, 3.0]}
        intensity={isHovered ? 2.4 : 1.4}
        distance={7}
        color="#f4f4f5"
      />
    </>
  );
}

// ============================================================================
// 5. MAIN 3D SCENE EXPORT
// ============================================================================
export default function Hero3DScene({ mouse, isHovered, scrollProgress, isMobile }) {
  const particleCount = isMobile ? 14 : 28;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <StudioLighting mouse={mouse} isHovered={isHovered} />
        <FacetedOrigamiSurface
          mouse={mouse}
          isHovered={isHovered}
          scrollProgress={scrollProgress}
        />
        <FloatingFacetedCrystal mouse={mouse} isHovered={isHovered} />
        <SubtleStudioParticles count={particleCount} isHovered={isHovered} />
      </Canvas>
    </div>
  );
}
