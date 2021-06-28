import { SpotLight } from "Components3D/Lights";
import { Prototype } from "./Prototype";

const OfficeTourViewer = () => {
  // const config = { Renderer: { camera: { position: [0, 10, 30], fov: 50 } } };
  return (
    <>
      <SpotLight
        withHelper
        castShadow
        shadowMapSize={512}
        position={[10, 10, 10]}
      />
      <Prototype
        itemsPerAxis={[4, 1, 4]}
        itemSize={[3, 5, 3]}
        padding={[0, 0, 0]}
      />
    </>
  );
};

/*
 * Animated Stuff
 * For ideas on how useSprings can be implemented using currying...
 * https://codesandbox.io/embed/r5qmj8m6l
 */

/*
 * Exports
 */

export default OfficeTourViewer;
