import React from "react";
import { animated as a } from "@react-spring/three";

const Box = React.forwardRef(
  ({ size = [1, 1, 1], wireframe, animation, ...props }, ref) => {
    return (
      <a.mesh name="Box" ref={ref} {...props} {...animation}>
        <boxBufferGeometry attach="geometry" args={size} />
        <meshStandardMaterial
          wireframe={wireframe}
          attach="material"
          color={"#5e5e99"}
        />
      </a.mesh>
    );
  }
);

export default Box;
