import * as THREE from "three";

const HeroLights = () => (
  <>
    <ambientLight intensity={0.8} color="#b7d7ff" />

    <directionalLight
      position={[8, 4, 6]}
      intensity={2.8}
      color="#fff5d6"
      castShadow={false}
    />

    <directionalLight
      position={[-6, -2, -5]}
      intensity={0.7}
      color="#7cc7ff"
      castShadow={false}
    />
  </>
);

export default HeroLights;
