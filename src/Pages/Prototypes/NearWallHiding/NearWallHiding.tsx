import React, { useState } from "react";
import Scene from "Components3D/Scene/Scene";
import Model from "./Model";
import Controls from "Controls/OrbitControls";
import config from "./three.config.json";
import { PerspectiveCamera, Html } from "@react-three/drei";

const NearWallHiding: React.FC = () => {
  const { Scene: cS } = config;
  const [numWalls, setNumWalls] = useState(4);

  // TODO children={null} is to suppress a TypeScript error, not to do anything functional. Remove it.

  return (
    <>
      <PerspectiveCamera children={null} makeDefault position={[-10, 10, 0]} />
      <Controls />
      <Scene
        lightingRadius={cS.lighting.lightingRadius}
        lightingBoundsHelper={cS.helpers.lightingBounds}
        intensity={cS.lighting.intensity}
        {...cS}
      >
        <Model numWalls={numWalls} />
      </Scene>
      <Html zIndexRange={[10, 0]} center>
        <div style={styles.container}>
          <h3 style={styles.header}>Number of Walls</h3>
          <div style={styles.flexContainer}>
            <button
              style={styles.button}
              onClick={() => setNumWalls(numWalls === 3 ? 3 : numWalls - 1)}
            >
              -
            </button>
            <p style={styles.numWalls}>{[numWalls]}</p>
            <button
              style={styles.button}
              onClick={() => setNumWalls(numWalls + 1)}
            >
              +
            </button>
          </div>
        </div>
      </Html>
    </>
  );
};

const styles = {
  container: {
    width: "15vw",
    color: "white",
    backgroundColor: "rgba(256,256,256,0.5)",
    padding: ".25em 1.5em 1.5em",
  } as React.CSSProperties,
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
  header: {
    textAlign: "center",
    marginBottom: "1em",
  } as React.CSSProperties,
  button: { flex: "0 0 0", fontSize: "1.6em" } as React.CSSProperties,
  numWalls: {
    textAlign: "center",
    flex: "3 1",
    fontSize: "1em",
    margin: 0,
  } as React.CSSProperties,
};

export default NearWallHiding;
