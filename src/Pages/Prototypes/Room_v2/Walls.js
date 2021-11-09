import { Vector2 } from "three";
import React, { useRef, Fragment, useLayoutEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Html, Plane } from "@react-three/drei";
import { animated as a } from "@react-spring/three";

import { arraysMatch } from "helpers/arraysMatch";
import { useNearWallHiding } from "hooks";

// TODO: Extract raycaster method of hiding and showing walls from here and put it into the hook.

export default function Walls(props) {
  const group = useRef();
  const { nodes } = useGLTF("/models/Room_v2_Walls_2.glb");

  // My Code
  const getOnlyMeshes = (_nodes) =>
    Object.values(_nodes).filter((el) => el.type === "Mesh");

  const walls = useRef(getOnlyMeshes(nodes));
  const wallTargets = useRef([]);

  // TODO Set conditions to disable this when moving the camera in transitions, for example
  const wallSpringEnabled = useRef(false);

  const setForwardRef = (ref) => (el) => {
    if (el) {
      ref.current.some((e) => e.uuid === el.uuid) || ref.current.push(el);
    }
  };

  const setWallTargetRef = setForwardRef(wallTargets);

  const { wallSprings, cycleWalls, setFromIntersects } = useNearWallHiding(
    walls.current
  );

  // near wall tracking
  const { camera } = useThree();
  const rc = useRef();
  const rc_focus = useRef(new Vector2(0, 0));
  const previousIntersects = useRef([]);
  useFrame(() => {
    if (wallSpringEnabled.current) {
      rc.current.setFromCamera(rc_focus.current, camera);
      const intersects = rc.current.intersectObjects(wallTargets.current);
      const nearestIntersects = intersects.map(
        (el) => el?.object.userData.target.index
      );
      // debounce it
      if (!arraysMatch(previousIntersects.current, nearestIntersects)) {
        console.group("WALL_SPRING_FIRED");
        console.log("PREVIOUS_STATE", previousIntersects.current);
        console.log("NEW STATE", nearestIntersects);
        console.groupEnd();

        previousIntersects.current = nearestIntersects;
        setFromIntersects(nearestIntersects);
      }
    }
  });

  useLayoutEffect(() => {
    wallTargets.current.forEach((target) => {
      target.position.y = 0;
      target.lookAt(0, 0, 0);
      target.scale.set(-1, -1, -1); // flip the normals
      wallSpringEnabled.current = true;
    });
  }, [wallTargets]);

  const showTargets = useRef(1);
  // End My Code

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <raycaster ref={rc}></raycaster>
        {walls.current.map((wall, i) => {
          return (
            <Fragment key={`frag-${i}`}>
              <a.mesh
                key={wall.name}
                geometry={wall.geometry}
                name={wall.name}
                position={wallSprings?.[i].xyz}
                ref={wall}
              >
                <a.meshStandardMaterial
                  attach="material"
                  {...wall.material}
                  transparent={true}
                  opacity={wallSprings?.[i].opacity}
                ></a.meshStandardMaterial>
              </a.mesh>
              <Plane
                args={[15, 15]}
                key={`${wall.name}-hitzone`}
                name={`${wall.name}-hitzone`}
                position={wall.position}
                ref={setWallTargetRef}
                userData={{
                  target: { index: i },
                }}
              >
                <meshBasicMaterial
                  attach="material"
                  wireframe
                  visible={showTargets.current}
                  color={0x00ff00}
                ></meshBasicMaterial>
              </Plane>
            </Fragment>
          );
        })}
      </scene>
      {/* <Html postiion={[5, 5, 5]}>
        <button onClick={() => cycleWalls()}> Cycle Walls</button>
      </Html> */}
    </group>
  );
}

// <mesh
// geometry={nodes.WallT.geometry}
// name="WallTHitzone"
// position={[0, 1.3, -2.93]}
// scale={[10, 30, 0.25]}
// ref={setWallTargetRef}
// >
// <meshBasicMaterial
//   attach="material"
//   wireframe
//   visible={showTargets.current}
//   color={0x00ff00}
// ></meshBasicMaterial>
// </mesh>
// <mesh
// geometry={nodes.WallR.geometry}
// name="WallRHitzone"
// position={[2.93, 1.3, 0]}
// scale={[0.25, 30, 10]}
// ref={setWallTargetRef}
// >
// <meshBasicMaterial
//   attach="material"
//   wireframe
//   visible={showTargets.current}
//   color={0x00ff00}
// ></meshBasicMaterial>
// </mesh>
// <mesh
// geometry={nodes.WallB.geometry}
// name="WallBHitzone"
// position={[0, 1.3, 2.93]}
// scale={[10, 30, 0.25]}
// ref={setWallTargetRef}
// >
// <meshBasicMaterial
//   attach="material"
//   wireframe
//   visible={showTargets.current}
//   color={0x00ff00}
// ></meshBasicMaterial>
// </mesh>
// <mesh
// geometry={nodes.WallL.geometry}
// name="WallLHitzone"
// position={[-2.93, 1.3, 0]}
// scale={[0.25, 30, 10]}
// ref={setWallTargetRef}
// >
// <meshBasicMaterial
//   attach="material"
//   wireframe
//   visible={showTargets.current}
//   color={0x00ff00}
// ></meshBasicMaterial>
// </mesh>
