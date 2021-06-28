import React, { Suspense } from "react";
import Box from "Components3D/Shapes/Box";

import ThreePointLighting from "Components3D/Lights/ThreePointLighting";

/**
 * Scene -
 * A generic scene component to handle async loading and shared lighting configurations.
 * Think of it as a Layout component in Next.js.
 */
function Scene({
  children,
  fallback = null,
  lightingBoundsHelper,
  intensity = 0.5,
  lightingRadius,
}) {
  return (
    <>
      <ambientLight intensity={intensity * 0.125} />
      <ThreePointLighting
        lightingBoundsHelper={lightingBoundsHelper}
        radius={lightingRadius}
        intensity={intensity}
      />
      <Suspense fallback={fallback || <Box />}>{children}</Suspense>
    </>
  );
}

export default Scene;
