"use client";

import { useRef } from "react";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";
import type { ThreeElements } from "@react-three/fiber";

export function AcUnit3D(props: ThreeElements["group"]) {
  const group = useRef<THREE.Group>(null);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Main Chassis */}
      <RoundedBox
        args={[4.2, 1.4, 1.3]}
        radius={0.15}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
      </RoundedBox>

      {/* Front Panel (slight indent) */}
      <RoundedBox
        args={[4.0, 1.25, 0.1]}
        position={[0, 0, 0.65]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial color="#f8f9fa" roughness={0.2} metalness={0.1} />
      </RoundedBox>

      {/* Air Output Vent (Bottom Front) */}
      <mesh position={[0, -0.45, 0.68]}>
        <boxGeometry args={[3.8, 0.3, 0.1]} />
        <meshStandardMaterial color="#111827" roughness={0.8} />
      </mesh>

      {/* Flap inside vent */}
      <mesh position={[0, -0.45, 0.72]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[3.7, 0.05, 0.15]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Secondary Flap inside vent */}
      <mesh position={[0, -0.55, 0.7]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[3.7, 0.03, 0.1]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.3} />
      </mesh>

      {/* Hidden LED Display */}
      <mesh position={[1.3, 0.15, 0.71]}>
        <boxGeometry args={[0.5, 0.25, 0.02]} />
        <meshStandardMaterial color="#000000" roughness={0.1} />
      </mesh>
      <Text
        position={[1.3, 0.15, 0.73]}
        fontSize={0.18}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_EeA.woff"
      >
        24°
      </Text>

      {/* Logo Placeholder */}
      <mesh position={[-1.6, 0.35, 0.71]}>
        <boxGeometry args={[0.3, 0.1, 0.02]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      {/* Right side connection pipes */}
      <mesh position={[2.15, -0.3, -0.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshStandardMaterial
          color="#b87333"
          metalness={0.8}
          roughness={0.2}
        />{" "}
        {/* Copper */}
      </mesh>
      <mesh position={[2.15, -0.1, -0.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
        <meshStandardMaterial
          color="#b87333"
          metalness={0.8}
          roughness={0.2}
        />{" "}
        {/* Copper */}
      </mesh>
    </group>
  );
}
