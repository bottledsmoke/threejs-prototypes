import type { PerspectiveCamera, OrthographicCamera } from "three";
import type { Vector3 } from "three";

// Utility function to not have to write out [camera.position.x, camera.position.y, camera.position.z]
const getCameraPosition = (
  camera: PerspectiveCamera | OrthographicCamera
): [number, number, number] | Vector3 => {
  const { x, y, z } = camera.position;
  return [x, y, z];
};

export default getCameraPosition;
