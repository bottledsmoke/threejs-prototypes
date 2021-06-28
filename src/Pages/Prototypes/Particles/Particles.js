import { Suspense } from "react";
import { SpotLight } from "Components3D/Lights";
import Box from "Components3D/Shapes/Box";
import OrbitControls from "Controls/OrbitControls";
import ParticleSystem from "./Model";

const Particles = () => {
  // const config = { Renderer: { camera: { fov: 50, position: [0, 0, 7.5] } } };
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <SpotLight
        position={[20, 5, 15]}
        color={"#ffffff"}
        intensity={1}
        castShadow
        withHelper
        withShadowHelper
        shadow-bias={-0.001}
        shadow-camera-far={50}
      />
      <Suspense fallback={<Box />}>
        <ParticleSystem />
      </Suspense>
    </>
  );
};

export default Particles;
