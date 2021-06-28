import React from "react";
import Scene from "Components3D/Scene/Scene";
import Model from "./Model";
import Controls from "Controls/OrbitControls";
import config from "./three.config.json";

const BaseRig = () => {
  const { Scene: cS } = config;

  return (
    <>
      <Controls />
      <Scene lightingRadius={cS.lightingRadius}>
        <Model />
      </Scene>
    </>
  );
};

export default BaseRig;
