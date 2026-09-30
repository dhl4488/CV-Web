import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

export function Earth(props) {
  const { scene } = useGLTF("/models/planet_earth.glb");
  const earthRef = useRef();

  const earth = useMemo(() => (scene ? scene.clone(true) : null), [scene]);

  useFrame((_, delta) => {
    if (!earthRef.current) return;
    earthRef.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={earthRef} {...props}>
      {earth ? (
        <primitive object={earth} dispose={null} />
      ) : (
        <mesh>
          <sphereGeometry args={[1.8, 64, 64]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#1d4ed8"
            emissiveIntensity={0.35}
            roughness={1}
            metalness={0.08}
          />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("/models/planet_earth.glb");
