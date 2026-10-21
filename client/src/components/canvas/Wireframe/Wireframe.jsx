import { useMemo } from "react";
import { Float } from "@react-three/drei";
import { IcosahedronGeometry } from "three";
import { useTheme } from "styled-components";

import HeroScene from "../HeroScene/HeroScene";

// Faceted graphite solid with a sage wireframe and vertex dots.
const WireframeCanvas = ({ avoid }) => {
  const theme = useTheme();
  const vertices = useMemo(() => {
    const geometry = new IcosahedronGeometry(1.004, 1);
    return geometry.getAttribute("position");
  }, []);

  return (
    <HeroScene speed={0.15} avoid={avoid}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={theme.tertiary}
            flatShading
            roughness={0.55}
            metalness={0.25}
          />
        </mesh>
        <mesh scale={1.004}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color={theme.main}
            wireframe
            transparent
            opacity={0.55}
          />
        </mesh>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[vertices.array, 3]}
            />
          </bufferGeometry>
          <pointsMaterial color={theme.main} size={0.06} sizeAttenuation />
        </points>
        <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
          <torusGeometry args={[1.32, 0.004, 8, 160]} />
          <meshBasicMaterial color={theme.subtle} />
        </mesh>
      </Float>
    </HeroScene>
  );
};

export default WireframeCanvas;
