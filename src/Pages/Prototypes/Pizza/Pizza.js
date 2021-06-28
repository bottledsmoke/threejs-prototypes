import React, { Suspense } from "react";

import Box from "Components3D/Shapes/Box";

import Model from "./Model";

import OrbitControls from "Controls/OrbitControls";
import { ThreePointLighting } from "Components3D/Lights";

const Pizza = () => {
  // const initialCameraPosition = [6, 1.5, 0];
  return (
    <>
      <OrbitControls enablePan={false} rotateSpeed={0.15} />
      <ThreePointLighting />
      <Suspense fallback={<Box />}>
        <Model />
      </Suspense>
    </>
  );
};

export default Pizza;
