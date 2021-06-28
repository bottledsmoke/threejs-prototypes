import React, { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { animated as a } from "@react-spring/three";

/**
 ** OrthographicCamera
 * Wraps "@react-three/fiber"'s orthographicCamera component for animation purposes
 * @param position {Vector3::[int || float, int || float, int || float]}
 * @param lookAt {Vector3::[int || float, int || float, int || float]}
 * @param spring {spring::}
 * @param setSpring {function => object}
 * @param stopSpring {function}
 */
function OrthographicCamera({
  position = [5, 5, 5],
  zoom = 10,
  lookAt = [0, 0, 0],
  spring,
  setSpring,
  stopSpring,
  ...props
}) {
  const camera = useRef();

  const  set = useThree((state) => state.set);

  // Make the camera known to the system
  useEffect(() => {
    set({camera: camera.current})
  }, [set]);
  // Make the camera known to the system
  useEffect(() => {
    set({camera: camera.current};
          camera.current.lookAt(lookAt[0], lookAt[1], lookAt[2]);
  }, [set, lookAt]);
  // Update it every frame
  useFrame(() => {
    camera.current.updateMatrixWorld();
  });

  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const clipping = {
    near: 0.1,
    far: 2000,
  };

  return (
    <a.orthographicCamera
      ref={camera}
      left={size.width / -2}
      right={size.width / 2}
      top={size.height / 2}
      bottom={size.height / -2}
      position={spring.xyz}
      rotation={spring.rotation}
      zoom={spring.zoom}
      onUpdate={(self) => self.updateProjectionMatrix()}
      radius={(size.width + size.height) / 4}
      {...clipping}
      {...props}
    />
  );
}

export default OrthographicCamera;
