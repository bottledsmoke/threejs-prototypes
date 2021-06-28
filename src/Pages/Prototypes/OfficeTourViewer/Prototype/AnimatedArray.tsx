// @ts-nocheck
// Typescript is driving me insane in this file so I just stopped (for now).

// TODO: There is a jump the first time the camera animates.
// I believe there is a discrepancy between the initial position of the camera and the initial from value of the spring.
// Investigate.

import { useRef } from "react";
import {
  config,
  animated as a,
  useSpring,
  useSprings,
} from "@react-spring/three";
import { inRadians, makeShapeArray } from "../helpers/helpers";

import PerspectiveCamera from "Components3D/Cameras/PerspectiveCamera";

type XYZArray = [number, number, number];

interface Props {
  itemsPerAxis: XYZArray;
  itemSize: XYZArray;
  padding: XYZArray;
}

interface ShapeState {
  index: number | null;
  isUp: boolean;
}

const AnimatedArray: React.FC<Props> = ({
  itemsPerAxis = [1, 1, 1],
  itemSize = [1, 1, 1],
  padding = [0, 0, 0],
  ...props
}) => {
  // SETUP ---------------------------------------------------------------------
  const items = makeShapeArray(itemsPerAxis, itemSize, padding);
  const selectedShape = useRef<ShapeState>({ index: null, isUp: false });
  const selectShape = (shape: ShapeState): void => {
    selectedShape.current = shape;
  };

  const initialCameraPosition: XYZArray = [0, 10, 30];
  const initialCameraLookAt: XYZArray = [0, 5, 0];

  const [cameraSpring, setCamera] = useSpring(() => ({
    position: initialCameraPosition,
    lookAt: initialCameraLookAt,
  }));

  // Instantiate Geo  ----------------------------------------------------------

  const [springs, setSprings] = useSprings(items.length, (index: number) => ({
    xyz: items[index],
    rotation: [0, 0, 0],
    config: config.gentle,
  }));

  const handleClick = (e: MouseEvent, i: number) => {
    e.stopPropagation(); // stop the raycaster at first item else all items in ray will trigger an event;

    const isUp =
      selectedShape.current.index === i && selectedShape.current.isUp;
    selectShape({ index: i, isUp: !isUp });
    const nextPosition = isUp
      ? initialCameraPosition
      : [items[i][0], itemSize[1] * 1.5, items[i][2] + 20];
    const nextLookAt = isUp
      ? initialCameraLookAt
      : [items[i][0], itemSize[1] * 1.5, 0];

    setCamera({
      position: nextPosition,
      lookAt: nextLookAt,
    });

    setSprings((spring) => {
      const item = {
        x: items[spring][0],
        y: items[spring][1],
        z: items[spring][2],
      };

      const selected = {
        xyz: [item.x, itemSize[1] * 1.5, item.z],
        rotation: [0, inRadians(-45), 0],
      };

      // TODO: useChain to animate the rest of t0he blocks to bounce like a trampoline when a block slams down on it.
      const rest = {
        xyz: [item.x, item.y, item.z],
        rotation: [0, 0, 0],
      };

      return spring === i && !isUp ? selected : rest;
    });
  };

  return (
    <>
      <PerspectiveCamera fov={50} spring={cameraSpring} setSpring={setCamera} />
      <group>
        {springs.map(({ xyz, rotation }, i: number) => {
          return (
            <a.mesh
              name="Box"
              onClick={(e: any) => handleClick(e, i)}
              position={xyz}
              key={`box_${i}`}
              receiveShadow
            >
              <boxBufferGeometry attach="geometry" args={itemSize} />
              <meshStandardMaterial attach="material" color={"#b7b8de"} />
            </a.mesh>
          );
        })}
      </group>
    </>
  );
};

export default AnimatedArray;
