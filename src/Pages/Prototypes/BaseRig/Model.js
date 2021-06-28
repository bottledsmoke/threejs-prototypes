import React, { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useAnimations, useGLTF } from "@react-three/drei";

export default function Model(props) {
  // NOTE: This file has been updated to use the newest useGLTF and useAnimations hooks, but
  // I have not re-run it through gltfjsx or re-written much of the code to compensate
  // for these new hooks. I've only just removed the bloat they clean up.
  const { nodes, animations } = useGLTF("/models/RIG_TEST_V2_C.glb");
  const { ref, mixer, actions } = useAnimations(animations);

  const [animationPlaying, setAnimation] = useState();
  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    actions.current = {
      Sun_Salutation: mixer.clipAction(animations[0], ref.current),
      Trot: mixer.clipAction(animations[1], ref.current),
    };
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, [animations, ref, actions, mixer]);

  const toggleAnimation = (animation) => {
    console.log(animationPlaying, animation);
    if (animationPlaying) {
      // if there is a current animation playing
      if (animationPlaying === animation) {
        actions.current[animation].paused = !actions.current[animation].paused;
      } else {
        actions.current[animation].paused = false;
        actions.current[animation].enabled = true;
        actions.current[animationPlaying]
          .setEffectiveWeight(1)
          .crossFadeTo(actions.current[animation], 1)
          .play();

        console.log(actions.current);
      }
    } else {
      actions.current[animation].play();
    }
    setAnimation(animation);
  };

  const resetAnimation = () => {
    mixer.stopAllAction();
  };

  return (
    <group ref={ref} {...props} dispose={null}>
      <scene name="Scene">
        <group name="Armature_Final">
          <primitive object={nodes.Root} />
          <skinnedMesh
            material={nodes.Cube004.material}
            geometry={nodes.Cube004.geometry}
            skeleton={nodes.Cube004.skeleton}
            name="Cube004"
          />
        </group>

        <Html>
          <button onClick={() => toggleAnimation("Sun_Salutation")}>
            Sun Salutation
          </button>
          <button onClick={() => toggleAnimation("Trot")}>Trot</button>
          <button onClick={() => resetAnimation()}>Reset Animation</button>
        </Html>
      </scene>
    </group>
  );
}
