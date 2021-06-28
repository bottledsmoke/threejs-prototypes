// import React from "react";
// import useGLTFLoader from "helpers/Loaders/useGLTFLoader";

// const Mesh = ({ src, ...props }) => {
//   const model = useGLTFLoader(src);

//   return (
//     <>
//       {model.scene.children.map(({ geometry, material, name, uuid }, i) => {
//         if (geometry) {
//           console.log(name, geometry.morphAttributes);
//           return (
//             <mesh key={uuid} name={name} {...props}>
//               <bufferGeometry attach="geometry" {...geometry} />
//               <meshStandardMaterial attach="material" {...material} />
//             </mesh>
//           );
//         } else {
//           return null;
//         }
//       })}
//     </>
//   );
// };

// export default Mesh;
