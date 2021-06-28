/**
 ** SpotLight.js
 ** Author: Tyler Hellner
 *  A component that returns the "@react-three/fiber" spotlight with an additional prop: withHelper.
 *  If withHelper is true, it will render several helper rays for the position, cone, and target of the spotlight.
 *  To prevent gotchas, helpers are not rendered in production even if withHelper is true.
 */

// TODO - Make a global isDev prop that is used to enable debug mode instead of doing a process.env check in each component.

import React, {useRef}  from "react";
import { Html } from "@react-three/drei";

import { SpotLight as SpotLightType } from "three";
import type { Vector3 } from "three";

// TODO Come up with a way to extend the spotlight type while not polluting the props that are passed
//      to the actual spotLight component from Three. If we Partial<SpotLightType>, the props are polluted
//      and the app will not compile, but if we simply extend SpotLightType, the props must all be defined,
//      which doesn't work.
interface SpotlightProps {
  name: string;
  position: Vector3 | [number, number, number];
  intensity?: number;
  castShadow?: boolean;
  withHelper?: boolean;
  withShadowHelper?: boolean;
  helperColor?: string | number;
  shadowMapSize?: number;
}

const MySpotLight: React.FC<SpotlightProps> = ({
  withHelper,
  withShadowHelper,
  helperColor,
  shadowMapSize,
  name,
  ...props
}) => {
  const light = useRef<SpotLightType>();
  const isDev = process.env.NODE_ENV === "development";

  let lightHelper, shadowCameraHelper;
  if (light.current) {
    // shadowMap already has a default value of 512x512; there's no use setting a default value here.
    if (shadowMapSize) {
      light.current.shadow.mapSize.set(shadowMapSize, shadowMapSize);
    }

    lightHelper = withHelper && (
      <spotLightHelper args={[light.current, helperColor]} />
    );
    shadowCameraHelper = withShadowHelper && (
      <cameraHelper args={[light.current.shadow.camera]} />
    );
  }

  const LightLabel = isDev && (
    <Html>
      <p>{name ? name : ""}</p>
    </Html>
  );

  return (
    <>
      <spotLight ref={light} {...props}>
        {LightLabel}
      </spotLight>
      {isDev && lightHelper}
      {isDev && shadowCameraHelper}
    </>
  );
};

export default MySpotLight;
