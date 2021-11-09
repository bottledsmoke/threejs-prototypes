import React, { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { animated as a } from "@react-spring/three";
import type { SpringValue } from "@react-spring/three";
import type {
  Vector3,
  Euler,
  PerspectiveCamera as PerspectiveCameraType,
} from "three";

/**
 * TODO
 * LookAt should just be an array. Let the camera have the logic for looking at things.
 */

/**
 * requirements
 * Need to be able to set position and lookAt independently (two separate springs);
 * Need to be able to set fov independently (another spring)
 * Need to be able to clamp and unclamp position animation (pass in custom configs for springs via props)
 * Need to be able to bind lookAt and controls.target to the same point using the same animation
 * Camera switching: binding the last camera added to the tree must be conditional if there are two live cameras at once.
 * Config swapping: spring behavior should be able to be edited live
 * Keyframes: cameras should be able to be configured to follow a path instead of interpolating props from point A to point B.
 */

/**
 ** PerspectiveCamera
 * Wraps "@react-three/fiber"'s perspectiveCamera component for animation purposes
 * @param position {Vector3::[int || float, int || float, int || float]}
 * @param lookAt {Vector3::[int || float, int || float, int || float]}
 * @param spring {spring::SpringValue<T>}
 * @param setSpring {function => object}
 * @param stopSpring {function}
 */

// TODO Replace any types

type AnimatedXYZArray =
  | [number, number, number]
  | Vector3
  | SpringValue<number[]>;

interface PerspectiveCameraProps {
  position?: AnimatedXYZArray;
  lookAt?: AnimatedXYZArray;
  rotation?:
    | Euler
    | [number, number, number, (string | undefined)?]
    | undefined;
  fov?: number | SpringValue<number>;
  spring?: any;
  setSpring?: any;
  stopSpring?: any;
}

export const PerspectiveCamera: React.FC<PerspectiveCameraProps> = ({
  position = [0, 0, 5],
  lookAt = [0, 0, 0],
  rotation = [0, 0, 0],
  fov = 50,
  spring,
  setSpring,
  stopSpring,
  ...props
}) => {
  const camera = useRef<PerspectiveCameraType>(null!);
  const set = useThree((state) => state.set);

  // Make the camera known to the system
  useEffect(() => {
    set({ camera: camera.current });
  }, [set]);

  // Update it every frame
  useFrame(() => {
    if (spring?.lookAt && spring.lookAt.isAnimating) {
      console.log(spring.lookAt.get());
      const [x, y, z] = spring.lookAt.get();
      camera.current.lookAt(x, y, z);
    }
    camera.current.updateMatrixWorld();
  });

  // TODO: Use Effect for resizing (look up Three Docs to mount an event listener)

  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  return (
    <>
      <a.perspectiveCamera
        ref={camera}
        position={spring?.position ? spring.position : position}
        rotation={spring?.rotation ? spring.rotation : rotation}
        aspect={size.width / size.height}
        fov={fov}
        onUpdate={(self) => {
          self.updateProjectionMatrix();
        }}
        {...props}
      ></a.perspectiveCamera>
    </>
  );
};

export default PerspectiveCamera;
