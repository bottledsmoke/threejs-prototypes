import React from "react";
import { useGLTF } from "@react-three/drei";

const ParticleSystem = () => {
  // const rezW = 16;
  // const rezH = 16;

  const { nodes } = useGLTF("/models/InvisibleMan.glb");

  return (
    <group>
      {Object.keys(nodes).map((asset) => {
        return (
          nodes[asset].geometry && (
            <points key={nodes[asset].uuid}>
              <bufferGeometry attach="geometry" {...nodes[asset].geometry} />
              <pointsMaterial
                attach="material"
                color={"#a824b9"}
                size={0.025}
              />
            </points>
          )
        );
      })}
    </group>
  );
};

export default ParticleSystem;
