import React, { useState } from "react";
import { animated as a, useSpring } from "@react-spring/three";
import { SpotLight } from "Components3D/Lights";
import PerspectiveCamera from "Components3D/Cameras/PerspectiveCamera";
import { Html } from "@react-three/drei";
import { inRadians } from "../OfficeTourViewer/helpers/helpers";

import colors from "colors.module.css";

const items = [
  [0, 0, 2.5],
  [-5, 0, 0],
  [5, 0, 0],
  [2.5, 3, 0],
];

const CameraTracking = () => {
  console.log("CameraTracking mounted");

  const [stationary, toggleStationary] = useState(false);

  const initialCameraPosition = [0, 0, 15];
  const initialCameraRotation = [0, 0, 0];
  const target0 = [0, 0, 0];

  const [cameraSpring, setCamera] = useSpring(() => ({
    position: initialCameraPosition,
    rotation: initialCameraRotation,
    lookAt: target0,
  }));

  const handleClick = (e, i) => {
    e.stopPropagation();

    console.group("CLICKED");
    console.log("Object ", e.object);
    console.log("Event Object", e.eventObject);
    console.log("Ray", e.ray);
    console.groupEnd();

    if (stationary) {
      setCamera({
        lookAt: items[i],
      });
    } else {
      setCamera({
        position: [items[i][0], items[i][1], items[i][2] + 15],
        lookAt: items[i],
      });
    }
  };

  const track = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Html position={[-5, 5, 0]}>
        <h2 className={colors.white}>
          Camera Position is{" "}
          {stationary ? (
            <span className={colors.red}>
              <u>locked</u>
            </span>
          ) : (
            <span className={colors.green}>
              <u>unlocked</u>
            </span>
          )}
        </h2>
        <button onClick={() => toggleStationary((stationary) => !stationary)}>
          {stationary ? "Unlock Camera Position" : "Lock Camera Position"}
        </button>
      </Html>
      <PerspectiveCamera
        lookAt={cameraSpring.lookAt}
        spring={cameraSpring}
        fov={50}
      />
      <SpotLight
        withHelper
        castShadow
        shadowMapSize={512}
        position={[3, 3, 7.5]}
      />
      {items.map((p, i) => (
        <Box key={`box-${i}`} onClick={(e) => handleClick(e, i)} position={p} />
      ))}
      <Box
        key={`box-${3}`}
        onClick={(e) => track(e)}
        position={[0, 0, 0]}
        rotation={[0, inRadians(15), 0]}
      />
    </>
  );
};

export default CameraTracking;

/*
 * SHAPE
 */

const Box = ({ size = [1, 1, 1], ...props }) => {
  const [hover, setHover] = useState(false);

  return (
    <a.mesh
      name="Box"
      onPointerOver={() => setHover((hover) => !hover)}
      onPointerLeave={() => setHover((hover) => !hover)}
      {...props}
    >
      <boxBufferGeometry attach="geometry" args={size} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        attach="material"
        color={hover ? "red" : "#5e5e99"}
      />
    </a.mesh>
  );
};
