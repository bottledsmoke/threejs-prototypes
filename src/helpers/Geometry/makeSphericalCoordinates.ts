/**
 * * makeSphericalCoordinates (int * int * int * [int * int * int] -> [int * int * int])
 * @author: Tyler Hellner
 * @param radians(int)
 */

import { Vector3 } from "three";

type coordinate = [number, number, number];

export default function makeSphericalCoordinates(
  theta: number, // rotation about Z
  phi: number, // rotation about X
  r: number, // radius of sphere
  center: coordinate = [0, 0, 0] // center point of sphere
): Vector3 {
  return new Vector3(
    center[0] + r * Math.sin(theta) * Math.cos(phi),
    center[1] + r * Math.sin(theta) * Math.sin(phi),
    center[2] + r * Math.cos(theta)
  );
}
