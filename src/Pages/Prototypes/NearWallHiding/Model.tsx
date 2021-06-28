import React, { useRef, useLayoutEffect, useState } from "react";
import { Box } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import type { Mesh } from "three";
import { arraysMatch } from "helpers/arraysMatch";

interface ModelProps {
  numWalls: number;
}

/**
 * NearWallHiding - The Dot Product method
 * pros: works very smoothly
 * cons: only works on a 2D plane right now. I would like to be able to view a full geodesic dome and peer into it.
 *       I would like to look into a room from the top and not have the walls hidden like they initial are when
 *       looking dead-on into the set.
 *
 * TODO: Add a deadzone when looking from a certain threshold above (ie, when the camera reaches a certain height)
 *       so that the walls are all visible once the camera can "peek over them" to a sufficient degree.
 */
const Model: React.FC<ModelProps> = ({ numWalls, ...props }) => {
  const walls = useRef<Array<Mesh>>([]);
  const [visibleWalls, updateWallVisibility] = useState<Array<boolean>>([
    true,
    true,
    false,
    false,
  ]);
  const { camera } = useThree();

  const temp = useRef<Vector3>(new Vector3());

  // TODO: move this into useNearWallHiding for crying out loud.

  useFrame(() => {
    const a = walls.current.map((el: Mesh) => {
      temp.current.copy(el.position);
      const dot = temp.current.dot(camera.position);
      return dot <= 0.1;
    });
    if (!arraysMatch(a, visibleWalls)) {
      updateWallVisibility(a);
    }
  });

  // TODO find a way to implement useState so that the unmount naturally clears data.
  useLayoutEffect(() => {
    // nuke the walls ref when the component unmounts to keep old refs from persisting.
    // problem this solves: when going from higher to lower number of walls, the max number of walls will persist.
    return () => {
      walls.current = [...walls.current.slice(0, numWalls - 1)];
    };
  }, [numWalls]);

  const setForwardRef = (ref: any) => (el: Mesh) => {
    // if the item exists and has a uuid
    if (el?.uuid) {
      // push it to the refs array if it's not already in it.
      ref.current.some((arrayItem: Mesh) => arrayItem.uuid === el.uuid) ||
        ref.current.push(el);
    }
  };

  // bounding shape trigonometry
  const outer_R: number = 5; // outer radius (of bounding circle)
  const inner_r: number = outer_R * Math.cos(Math.PI / numWalls); // inner radius (of shape)
  const wallLength: number = 2 * outer_R * Math.sin(Math.PI / numWalls);

  return (
    <>
      {[...Array(numWalls)].map((_, i) => (
        <Box
          key={`$wall-${i}`}
          args={[0.25, outer_R / 2, wallLength]}
          position={[
            inner_r * Math.cos(2 * Math.PI * (i / numWalls)),
            0,
            inner_r * Math.sin(2 * Math.PI * (i / numWalls)),
          ]}
          rotation={[0, Math.PI * (i / (-numWalls / 2)), 0]}
          ref={setForwardRef(walls)}
        >
          <meshStandardMaterial
            attach="material"
            color={visibleWalls[i] ? 0x115588 : "red"}
          />
        </Box>
      ))}
    </>
  );
};

export default Model;
