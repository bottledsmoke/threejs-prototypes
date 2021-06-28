import React from "react";
import Scene from "Components3D/Scene/Scene";
import Model from "./Model";
import Controls from "Controls/OrbitControls";
import config from "./three.config.json";

import { Sphere } from "Components3D/Shapes";

// Router

import colors from "colors.module.css";
import "../prototypes.css";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

const Three = () => {
  const { Scene: cS } = config;

  // THREE ROUTER
  let _location = useLocation();
  const currentLocation = _location.pathname.split("/").pop();
  let routeSpecificColor;
  switch (currentLocation) {
    case "yellow":
      routeSpecificColor = "yellow";
      break;
    case "green":
      routeSpecificColor = "green";
      break;
    default:
      routeSpecificColor = undefined;
  }

  // const _config = {
  //   Renderer: {
  //     camera: { position: [1, 1, 1], zoom: 150 },
  //     style: cR.style,
  //     orthographic: true,
  //   },
  // };

  return (
    <>
      <Controls />
      <Scene
        lightingRadius={cS.lighting.lightingRadius}
        lightingBoundsHelper={cS.helpers.lightingBounds}
        intensity={cS.lighting.intensity}
      >
        {currentLocation !== "green" && <Model color={routeSpecificColor} />}
        {currentLocation === "green" && <Sphere color={"green"} />}
      </Scene>
    </>
  );
};

const RouterDrivenThree = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Link
        to={`${url}/yellow`}
        style={{ marginRight: "2rem" }}
        className={colors.link}
      >
        Go to Yellow
      </Link>
      <Link
        to={`${url}/green`}
        style={{ marginRight: "2rem" }}
        className={colors.link}
      >
        Go to Green
      </Link>
      <Link
        to={`${url}`}
        style={{ marginRight: "2rem" }}
        className={colors.link}
      >
        Default Color
      </Link>
      <Switch>
        <Route path={`${path}/yellow`}></Route>
        <Route path={`${path}/green`}></Route>
        <Route poth={`${path}`}></Route>
      </Switch>
      <Three />
    </>
  );
};

export default RouterDrivenThree;
