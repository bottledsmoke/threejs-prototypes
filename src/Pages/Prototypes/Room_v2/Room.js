import React, { useState, Fragment } from "react";

import { Html, OrbitControls } from "@react-three/drei";
import { useSpring } from "@react-spring/three";
import PerspectiveCamera from "Components3D/Cameras/PerspectiveCamera";

import Scene from "Components3D/Scene/Scene";
import Model from "./Model";
import Walls from "./Walls";
import config from "./three.config.json";

const Room = () => {
  const { Scene: cS } = config;
  //  const { Renderer: cR, Scene: cS } = config;

  // Cam Controls
  const [orthographic, setOrtho] = useState(true);
  const camSpring = useSpring({
    position: orthographic ? [30, 30, 30] : [10, 10, 10],
    fov: orthographic ? 10 : 50,
    config: { tension: 500, friction: 53, clamp: true },
  });

  // Wall Controls
  // const { wallSprings, cycleWalls } = useNearWallHiding([1, 0, 0, 1]);

  //  console.log(cR, cS);
  return (
    <Fragment>
      <OrbitControls target={[0, 1, 0]} />
      <PerspectiveCamera position={camSpring.position} fov={camSpring.fov} />
      <Scene
        lightingRadius={cS.lighting.lightingRadius}
        intensity={cS.lighting.intensity}
      >
        <Model />
        <Walls />
      </Scene>
      <Html position={[5, 0, 0]}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            width: "300px",
            padding: "1em",
            border: "1px solid #ccc",
          }}
        >
          <button
            style={{ flex: "1 1", padding: "1em", margin: "1em" }}
            onClick={() => setOrtho((orthographic) => !orthographic)}
          >
            {`Set Camera to ${orthographic ? "perspective" : "orthographic"}`}
          </button>
        </div>
      </Html>
    </Fragment>
  );
};

export default Room;
