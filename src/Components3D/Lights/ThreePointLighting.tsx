import React from "react";
import SpotLight from "Components3D/Lights/SpotLight";

import { Sphere } from "Components3D/Shapes";

import { makeSphericalCoordinates, toRadians } from "helpers/Geometry";

interface PropTypes {
  helperColors?: [string, string, string] | [number, number, number];
  radius: number;
  lightingBoundsHelper: boolean;
  intensity: number;
}

const ThreePointLighting: React.FC<PropTypes> = ({
  helperColors = ["#990000", "#009900", "#000099"],
  radius = 5,
  lightingBoundsHelper = false,
  intensity = 1,
  ...props
}) => {
  const [keyColor, fillColor, backColor] = helperColors;
  const r = radius;

  return (
    <>
      <ambientLight intensity={0.5} />
      {lightingBoundsHelper && (
        <Sphere radius={r} wireframe color={"#330"} opacity={0.125} />
      )}
      <SpotLight
        name={"Key Light"}
        withHelper
        withShadowHelper={false}
        helperColor={keyColor}
        intensity={0.6 * intensity}
        position={makeSphericalCoordinates(toRadians(90), toRadians(45), r)}
        castShadow
        shadowMapSize={2056}
        shadow-bias={-0.0004}
      />
      <SpotLight
        name={"Fill Light"}
        withHelper
        helperColor={fillColor}
        intensity={0.25 * intensity}
        position={makeSphericalCoordinates(toRadians(-45), toRadians(45), r)}
      />
      <SpotLight
        name={"Back Light"}
        withHelper
        helperColor={backColor}
        intensity={0.75 * intensity}
        position={makeSphericalCoordinates(Math.PI, 0, r)}
      />
    </>
  );
};

export default ThreePointLighting;
