import React from "react";

// imports for boilerplate -- delete this
import { useRef } from "react";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
// end delete this

const Model: React.FC = () => {
  const box = useRef<Mesh>(null);
  useFrame(() => {
    // annoying TS null checking workaround
    if (box !== null) {
      box!.current!.rotation.x += 0.01;
      box!.current!.rotation.z += 0.01;
    }
  });

  return (
    <>
      <Box args={[1, 1, 1]} position={[0, 0, 1]} ref={box}>
        <meshStandardMaterial attach="material" wireframe color={0xcc33ff} />
      </Box>
    </>
  );
};

export default Model;
