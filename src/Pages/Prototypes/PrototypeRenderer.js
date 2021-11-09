import React from "react";
import "./prototypes.css";
import { useMatch } from "react-router-dom";
import prototypeRoutes from "./prototypeRoutes";
import { ThreeRenderer } from "Components3D/ThreeRenderer";

// TODO Refactor and Delete
import _config from "./RouterDrivenThree/three.config.json";
// End TODO

// TODO The aperature is not being recalculated when the window is resized. Since I overrode the default camera, fix it.
import { PerspectiveCamera } from "Components3D/Cameras/PerspectiveCamera";

// TODO Move all the routing logic to the PrototypeRouter and get it the heck out of this component.

const Three = () => {
  const match = useMatch("/prototypes/:prototypeId");
  // if match is null (default return for no match) return route.
  const pid = match && match.params.prototypeId;

  let config;

  // TODO replace with Zustand state
  const defaultConfig = _config;

  if (prototypeRoutes[pid] && prototypeRoutes[pid].config) {
    config = prototypeRoutes[pid].config;
  } else {
    config = defaultConfig;
  }

  const { Renderer: cR } = config;
  // END TODO

  return (
    <>
      <ThreeRenderer {...cR}>
        <PerspectiveCamera />
        {prototypeRoutes[pid]
          ? React.createElement(prototypeRoutes[pid].component)
          : null}
      </ThreeRenderer>
    </>
  );
};

export default Three;
