import React from "react";
import Scene from "Components3D/Scene/Scene";
import Model from "./Model";
import Controls from "Controls/OrbitControls";
import config from "./three.config.json";

import { Html } from "@react-three/drei";

const BaseRig = () => {
  const { Scene: cS } = config;

  return (
    <>
      <Controls />
      <Scene lightingRadius={cS.lightingRadius}>
        <Model />
        <Html position={[10, 0, 0]}>
          <p style={{ color: "white" }}>
            Note to user: there is a cache invalidation error when navigating
            away from this page due to the animation loop. I'm looking into it.
            A reload will fix the error, and it won't ramp up your cpu or
            graphics card.
          </p>
        </Html>
      </Scene>
    </>
  );
};

export default BaseRig;
