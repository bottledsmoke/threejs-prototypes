import React from "react";
import Scene from "Components3D/Scene/Scene";
import Model from "./Model";
import OrbitControls from "Controls/OrbitControls";
import config from "./three.config.json";

import PerspectiveCamera from "Components3D/Cameras/PerspectiveCamera";
import { useSpring, config as springConfig } from "@react-spring/three";
import { useCameraStore } from "../threeState";
import { useThree } from "@react-three/fiber";
import getCameraPosition from "Components3D/Cameras/getCameraPosition";

import Controls from "./Controls";

const useAnimatedCamera = (camera: any) => {
  const position = useCameraStore((state) => state.position);

  const spring = useSpring({
    from: {
      position: getCameraPosition(camera),
    },
    to: { position: position },
    config: { ...springConfig.default, clamp: false },
    reset: true,
  });

  return spring;
};

const ZustandCamera: React.FC = () => {
  // const { Renderer: cR, Scene: cS } = config;
  const { Scene: cS } = config;
  const position = useCameraStore((state) => state.position);

  // Used to track the position of the camera without commiting it to state.
  const { camera } = useThree();
  const spring = useAnimatedCamera(camera);

  // TODO: Move this logic to the Prototype Renderer

  // State-dependent animation
  // The main difference is that we have to use reset: true to flush the from prop every time.
  // If reset: true is not used, the animation will not trigger if the state is the same.
  // That makes sense, right? Why animate if the camera position state has not changed?
  // Well, we don't track the position of the camera when it is affected by orbitControls
  // or any other user update. That would destroy performance. Reset: true assures us the
  // animation will always occur, so if we have the same state, it will still animate us
  // back from whatever orbitControls delta we have to that position. Handy.

  // For both examples, we have to use clamp: true. If the camera is still animating once it hits its
  // destination point, it will fight against immediate orbitControls actions and resist the user's input.
  // This feels bad, so once the animation "seems" over, it's over.

  // We use the springConfig of wobbly because it still has nice easing while being a little more expedient
  // to get to the clamp point than the default config.

  // Note: if you will disable controls after animating the camera, disable the clamp setting and use whatever
  // config you want. It will look more natural.
  // const spring = useSpring({
  //   from: {
  //     position: getCameraPosition(camera),
  //   },
  //   to: { position: position },
  //   config: { ...springConfig.default, clamp: false },
  //   reset: true,
  // });

  // stub for an explicit setter function to be made later.
  const fn = undefined;

  // Setter-based animation
  // It works like the state-dependent animation, but it does not cause a refresh of the component.
  // Therefore, it's more performant, but if we want our camera to simply animate to the initialState
  // camera settings of eachcomponent, we would have to import the setSpring function and use it in a
  // useEffect() wrapper in every component. In this light, the state-dependent animation is a better
  // implementation if a little bit less performant.
  //
  // const [spring, set] = useSpring(() => ({ position: position }));
  // const fn = (nextPosition: [number, number, number]) =>
  //   set({
  //     from: {
  //       position: getCameraPosition(),
  //     },
  //     to: { position: nextPosition },
  //     config: { ...springConfig.default, clamp: true },
  //   });

  return (
    <>
      <PerspectiveCamera position={position} spring={spring} />
      <OrbitControls />
      <Controls animateCameraTo={fn} />
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

export default ZustandCamera;
