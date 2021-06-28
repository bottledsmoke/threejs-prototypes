import React from "react";
import { Html } from "@react-three/drei";
import { useCameraStore, useControlsStore } from "Pages/Prototypes/threeState";

interface Props {
  animateCameraTo?(nextPosition: [number, number, number]): void;
}

const Controls: React.FC<Props> = ({ animateCameraTo, ...props }) => {
  const { setPosition: setCameraPosition, position } = useCameraStore(
    (state) => state
  );

  const {
    setTarget,
    target,
    enableControls,
    disableControls,
    enabled,
  } = useControlsStore((state) => state);

  return (
    <Html position={[0.75, -0.5, 0]}>
      <div style={{ width: "500px", userSelect: "none", color: "white" }}>
        <p>
          <b>
            Camera Position: {position[0]} {position[1]} {position[2]}
          </b>
        </p>
        <p>
          <b>
            Controls Target: {target?.[0] || "null"} {target?.[1] || "null"} {target?.[2] || "null"}
          </b>
        </p>
        <h1 style={{ color: "white", userSelect: "none" }}>
          Zustand Camera Prototype
        </h1>
        <div>
          <button
            style={{ userSelect: "none", padding: "1rem" }}
            onClick={() => {
              setCameraPosition && // check if it's undefined because the type potentially can be
                setCameraPosition([
                  Math.random() * 5 + 2,
                  Math.random() * 5 + 2,
                  Math.random() * 5 + 2,
                ]);
            }}
          >
            Randomize Camera Position
          </button>
          <button
            style={{ userSelect: "none", padding: "1rem" }}
            onClick={() => {
              setTarget([Math.random(), Math.random(), Math.random()]);
            }}
          >
            Set Controls
          </button>
          <button
            style={{ userSelect: "none", padding: "1rem" }}
            onClick={() => {
              enabled ? disableControls() : enableControls();
            }}
          >
            {enabled ? "Disable Controls" : "Enable Controls"}
          </button>
        </div>
      </div>
    </Html>
  );
};

export default Controls;
