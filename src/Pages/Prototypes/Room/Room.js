import React from "react";

import Scene from "Components3D/Scene/Scene";

import Model from "./Model";

import Controls from "Controls/OrbitControls";
import config from "./three.config.json";

const Room = () => {
  // const { Renderer: cR, Scene: cS } = config;
  const { Scene: cS } = config;
  return (
    <>
      <Controls />
      <Scene
        lightingRadius={cS.lighting.lightingRadius}
        lightingBoundsHelper={cS.helpers.lightingBounds}
        intensity={cS.lighting.intensity}
      >
        <Model />
      </Scene>
    </>
  );
};

export default Room;
