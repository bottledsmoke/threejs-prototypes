import React from "react";
import { Canvas } from "@react-three/fiber";

const ThreeRenderer = ({ children, style, ...props }) => {
  // const prevStyles = {
  //   height: "100vh",
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   zIndex: -10,
  //   backgroundColor: "#445566",
  //   ...style
  // };
  return (
    <Canvas
      style={style}
      camera={props.camera}
      shadowMap
      colorManagement
      {...props}
    >
      {children}
    </Canvas>
  );
};

export default ThreeRenderer;
