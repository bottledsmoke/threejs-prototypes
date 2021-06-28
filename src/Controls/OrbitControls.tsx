import React, { useRef, useEffect } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useControlsStore } from "Pages/Prototypes/threeState";
import { useSpring, config as springConfig } from "@react-spring/three";
import type { SpringValue } from "react-spring";

// TYPE DEFINITIONS

import type { ReactThreeFiber } from "@react-three/fiber";

type Controls = ReactThreeFiber.Object3DNode<
  OrbitControls,
  typeof OrbitControls
>;

interface ControlsProps {
  rotateSpeed?: number;
}

interface SpringType {
  target: SpringValue<[number, number, number]>;
}

// CODE
extend({ OrbitControls }); // make the controls known to the system

/* eslint-disable */
const Controls: React.FC<ControlsProps> = ({ rotateSpeed, ...props }) => {
  /* eslint-enable */
  const controls = useRef<OrbitControls>(null!);
  const { camera, gl } = useThree();
  const {
    target: targetState,
    enabled: enabledState,
    setControls,
    deleteControls,
  } = useControlsStore((state) => state);

  // Register the controls in state.
  // It's debatable if I'll need this.
  // TODO: Decide if I need this.
  useEffect(() => {
    setControls(controls.current);
    return () => deleteControls();
  }, [setControls, deleteControls]);

  // Utility function to map a Vector3 to an array.
  const getCurrentTarget = (): [number, number, number] => {
    if (controls.current) {
      const { x, y, z } = controls.current.target;
      return [x, y, z];
    } else {
      return [0, 0, 0];
    }
  };

  const [{ target: targetSpring }, set] = useSpring<SpringType>(() => ({
    from: {
      target: getCurrentTarget(),
    },
    to: { target: targetState },
    config: springConfig.default,
    reset: true, // required for side-effect animations. Side-effects will not persist unless the spring is reset.
  }));

  // Only set the targetSpring when the target has changed.
  // This preserves the ability to pan away from the targetState and have that transformation
  // preserved if other state comes down the wire (enabling / disabling the controls, for example)
  useEffect(() => {
    set({
      from: {
        target: getCurrentTarget(),
      },
      to: { target: targetState },
      config: springConfig.default,
      reset: true,
    });
  }, [targetState, set]);

  // Used to update the render loop and animate side effects.
  useFrame((state) => {
    // SIDE EFFECT START
    if (targetSpring.isAnimating) {
      const [x, y, z] = targetSpring.get();
      controls.current.target.set(x, y, z);
    }
    // END SIDE EFFECT
    controls.current && controls.current.update();
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enabled={enabledState}
      enableDamping
      enableZoom
      dampingFactor={0.1}
      rotateSpeed={rotateSpeed || 1}
      {...props}
    />
  );
};

export default Controls;

// add these to contrain rotation to a certain axis
// enablePan
// maxPolarAngle={Math.PI / 2.5}
// minPolarAngle={Math.PI / 2.5}

// autoRotate
// autoRotateSpeed={5}
