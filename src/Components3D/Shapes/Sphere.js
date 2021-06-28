import React from "react";

const Sphere = ({ radius = 1, ...props }) => {
  return (
    <mesh name="Sphere">
      <sphereBufferGeometry attach="geometry" args={[radius, 32, 32]} />
      <meshStandardMaterial attach="material" {...props} />
    </mesh>
  );
};

export default Sphere;
