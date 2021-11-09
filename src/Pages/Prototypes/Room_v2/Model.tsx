/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube008: THREE.Mesh;
    Lampshade: THREE.Mesh;
    Circle: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle002: THREE.Mesh;
    Cloth_Cover: THREE.Mesh;
    Cloth_Cover001: THREE.Mesh;
    Guitar_Amp_1: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane010: THREE.Mesh;
    Switch_Board: THREE.Mesh;
    BezierCurve002_1: THREE.Mesh;
    BezierCurve002_2: THREE.Mesh;
    Bridge: THREE.Mesh;
    String_Dowels: THREE.Mesh;
    Neck: THREE.Mesh;
    Fretboard: THREE.Mesh;
    Nut: THREE.Mesh;
    Strings: THREE.Mesh;
    Mattress: THREE.Mesh;
    Mattress_Rest_X: THREE.Mesh;
    Mattress_Rest_Y: THREE.Mesh;
    Sofa_Arm_Rest_Cross_Beams: THREE.Mesh;
    Sofa_Arm_Rests: THREE.Mesh;
    Piano: THREE.Mesh;
    Black_Keys: THREE.Mesh;
    Brace: THREE.Mesh;
    Pedals: THREE.Mesh;
    Pedal_Left: THREE.Mesh;
    Pedal_Left001: THREE.Mesh;
    Pedal_Middle: THREE.Mesh;
    Pedal_Middle001: THREE.Mesh;
    Pedal_Right: THREE.Mesh;
    Pedal_Right001: THREE.Mesh;
    SideBoards: THREE.Mesh;
    Top_Board: THREE.Mesh;
    White_Keys_bool: THREE.Mesh;
    Drafting_Table_Table: THREE.Mesh;
    Cylinder014: THREE.Mesh;
    Cylinder014_1: THREE.Mesh;
    BezierCurve: THREE.Mesh;
    Drafting_Table_Lamp_Clamp: THREE.Mesh;
    Drafting_Table_Lamp_Clamp001: THREE.Mesh;
    Drafting_Table_Lamp_Clamp002: THREE.Mesh;
    Drafting_Table_Lamp_Clamp003: THREE.Mesh;
    Plane023: THREE.Mesh;
    Plane025: THREE.Mesh;
    Legs_Connector_Rear: THREE.Mesh;
    Legs_Connector_Sides: THREE.Mesh;
    Cylinder017: THREE.Mesh;
    Cylinder017_1: THREE.Mesh;
    Cylinder016: THREE.Mesh;
    Cylinder016_1: THREE.Mesh;
    Desk_LegL: THREE.Mesh;
    Desk_Bottom_Foot: THREE.Mesh;
    Desk_Leg001: THREE.Mesh;
    Desk_Top_Attachment: THREE.Mesh;
    Foot_Disc_Back: THREE.Mesh;
    Foot_Disc_Front: THREE.Mesh;
    Desk_LegR: THREE.Mesh;
    Desk_Bottom_Foot001: THREE.Mesh;
    Desk_Leg003: THREE.Mesh;
    Desk_Top_Attachment001: THREE.Mesh;
    Foot_Disc_Back001: THREE.Mesh;
    Foot_Disc_Front001: THREE.Mesh;
    Desk_Top: THREE.Mesh;
    Plane029: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube_1: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder006_1: THREE.Mesh;
    Cylinder007: THREE.Mesh;
    Plane030: THREE.Mesh;
    White_Board_Frame: THREE.Mesh;
    White_Board_Surface: THREE.Mesh;
    Base: THREE.Mesh;
    Keys: THREE.Mesh;
    Keys_Function: THREE.Mesh;
    Screen: THREE.Mesh;
    ["Bezel-Glass"]: THREE.Mesh;
    Bezel_Rubb: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Macbook_Screen: THREE.Mesh;
    Monitor: THREE.Mesh;
    Adjustment_Handles: THREE.Mesh;
    Monitor_Glass_Inlay: THREE.Mesh;
    Mounting_Rod_Monitor: THREE.Mesh;
    Screen_Cintiq: THREE.Mesh;
    Monitor_Base: THREE.Mesh;
    Mounting_Rod_Arms: THREE.Mesh;
    Mounting_Rod_Base_Core: THREE.Mesh;
    Mounting_Rod_Monitor_Core: THREE.Mesh;
    Armrest_R: THREE.Mesh;
    Armrest_R003: THREE.Mesh;
    Armrest_R001: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Armrest_R004: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cylinder027: THREE.Mesh;
    Cylinder027_1: THREE.Mesh;
    Armrest_R005: THREE.Mesh;
    Armrest_R007: THREE.Mesh;
    Arms: THREE.Mesh;
    Back_Rest_Cover_V2001: THREE.Mesh;
    Back_Rest_V2: THREE.Mesh;
    Base_Extension_Rod: THREE.Mesh;
    Chair_Back_Metal: THREE.Mesh;
    Seat001: THREE.Mesh;
    Seat002: THREE.Mesh;
    Seat_Adjustment_Knobs: THREE.Mesh;
    Cylinder028: THREE.Mesh;
    Cylinder028_1: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cylinder012: THREE.Mesh;
    Cylinder013: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Ikea_Bookcase_4x2: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane003: THREE.Mesh;
    Ikea_Bookcase_1x2_Near: THREE.Mesh;
    Plane005_1: THREE.Mesh;
    Record_Sleeve001: THREE.Mesh;
    Ikea_Bookcase_1x2_Far: THREE.Mesh;
    Plane041: THREE.Mesh;
    Record_Sleeve002: THREE.Mesh;
    Coffee_Table_Top: THREE.Mesh;
    Coffee_Table_Legs: THREE.Mesh;
    Coffee_Table_Bottom: THREE.Mesh;
    Keyboard_Shell: THREE.Mesh;
    Keyboard_Keys_Grey: THREE.Mesh;
    Keyboard_Keys_White: THREE.Mesh;
    Wacom_Pen_Holder: THREE.Mesh;
    Cylinder005_1: THREE.Mesh;
    Cylinder005_2: THREE.Mesh;
    Cylinder005_3: THREE.Mesh;
    ["Coaster&Coffee"]: THREE.Mesh;
    Coffee_Cup: THREE.Mesh;
    Coffee: THREE.Mesh;
    Floor: THREE.Mesh;
    Rug: THREE.Mesh;
  };
  materials: {
    Wood_Dark: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshPhysicalMaterial;
    Steel_Polished: THREE.MeshStandardMaterial;
    ["Brushed Aluminum"]: THREE.MeshStandardMaterial;
    Wood_Light: THREE.MeshStandardMaterial;
    Metal_White_Enameled: THREE.MeshPhysicalMaterial;
    Fabric_Green: THREE.MeshStandardMaterial;
    ["Black Plastic"]: THREE.MeshStandardMaterial;
    Wood_White: THREE.MeshPhysicalMaterial;
    Metal_Red_Matte: THREE.MeshStandardMaterial;
    Metal_White: THREE.MeshStandardMaterial;
    Fabric_Gray: THREE.MeshStandardMaterial;
    ["Gray Plastic"]: THREE.MeshStandardMaterial;
    ["Black Glass"]: THREE.MeshPhysicalMaterial;
    Screen: THREE.MeshStandardMaterial;
    Cintiq_Screen: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Blue Porcelain"]: THREE.MeshPhysicalMaterial;
    Coffee: THREE.MeshPhysicalMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/models/Room_v2.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-2.51, 0, -2.51]}>
        <mesh
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[-0.12, 0.79, 0.12]}
        />
        <mesh
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[0, 0.01, 0]}
        />
        <mesh
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[0, 0.4, 0]}
        />
        <mesh
          geometry={nodes.Lampshade.geometry}
          material={materials["Material.002"]}
          position={[0, 1.39, 0]}
        />
      </group>
      <group position={[2.46, 0, -2.62]}>
        <mesh
          geometry={nodes.Circle.geometry}
          material={nodes.Circle.material}
          position={[-0.21, 0.54, 0.13]}
        />
        <mesh
          geometry={nodes.Circle001.geometry}
          material={nodes.Circle001.material}
          position={[-0.21, 0.51, 0.14]}
        />
        <mesh
          geometry={nodes.Circle002.geometry}
          material={nodes.Circle002.material}
          position={[-0.25, 0.54, 0.12]}
        />
        <mesh
          geometry={nodes.Cloth_Cover.geometry}
          material={nodes.Cloth_Cover.material}
          position={[0, 0.25, 0.14]}
        />
        <mesh
          geometry={nodes.Cloth_Cover001.geometry}
          material={nodes.Cloth_Cover001.material}
          position={[-0.16, 0.4, 0.14]}
        />
        <mesh
          geometry={nodes.Guitar_Amp_1.geometry}
          material={nodes.Guitar_Amp_1.material}
          position={[0, 0.29, 0.02]}
        />
        <mesh
          geometry={nodes.Plane008.geometry}
          material={nodes.Plane008.material}
          position={[0.24, 0.51, 0.13]}
        />
        <mesh
          geometry={nodes.Plane009.geometry}
          material={nodes.Plane009.material}
          position={[-0.08, 0.58, 0]}
        />
        <mesh
          geometry={nodes.Plane010.geometry}
          material={nodes.Plane010.material}
          position={[0, 0.58, 0]}
        />
        <mesh
          geometry={nodes.Switch_Board.geometry}
          material={nodes.Switch_Board.material}
          position={[0, 0.52, 0.13]}
        />
      </group>
      <group position={[1.52, 0.46, -2.62]} rotation={[-0.18, 0, 0]}>
        <group position={[0, 0.5, 0]}>
          <mesh
            geometry={nodes.BezierCurve002_1.geometry}
            material={nodes.BezierCurve002_1.material}
          />
          <mesh
            geometry={nodes.BezierCurve002_2.geometry}
            material={nodes.BezierCurve002_2.material}
          />
          <mesh
            geometry={nodes.Bridge.geometry}
            material={nodes.Bridge.material}
            position={[0, -0.34, 0.1]}
          />
          <mesh
            geometry={nodes.String_Dowels.geometry}
            material={nodes.String_Dowels.material}
            position={[0, 0.34, 0.08]}
          />
        </group>
        <mesh
          geometry={nodes.Neck.geometry}
          material={nodes.Neck.material}
          position={[0, 0.5, 0]}
        >
          <mesh
            geometry={nodes.Fretboard.geometry}
            material={nodes.Fretboard.material}
            position={[0, 0.11, 0.1]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Nut.geometry}
            material={nodes.Nut.material}
            position={[0, 0.33, 0.1]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Strings.geometry}
            material={nodes.Strings.material}
            position={[0, 0.11, 0.1]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </mesh>
      </group>
      <group position={[2.14, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Mattress.geometry}
          material={materials.Fabric_Green}
          position={[0, 0.3, 0]}
        />
        <mesh
          geometry={nodes.Mattress_Rest_X.geometry}
          material={nodes.Mattress_Rest_X.material}
          position={[0, 0.19, 0]}
        />
        <mesh
          geometry={nodes.Mattress_Rest_Y.geometry}
          material={nodes.Mattress_Rest_Y.material}
          position={[0, 0.19, 0]}
        />
        <mesh
          geometry={nodes.Sofa_Arm_Rest_Cross_Beams.geometry}
          material={nodes.Sofa_Arm_Rest_Cross_Beams.material}
          position={[0, 0.11, 0]}
        />
        <mesh
          geometry={nodes.Sofa_Arm_Rests.geometry}
          material={nodes.Sofa_Arm_Rests.material}
          position={[0, 0.29, 0]}
        />
      </group>
      <group position={[0, 0, 2.64]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          geometry={nodes.Piano.geometry}
          material={nodes.Piano.material}
          position={[0, 0.69, -0.03]}
        >
          <mesh
            geometry={nodes.Black_Keys.geometry}
            material={nodes.Black_Keys.material}
            position={[-0.01, 0.04, 0.02]}
          />
          <mesh
            geometry={nodes.Brace.geometry}
            material={nodes.Brace.material}
            position={[0, -0.25, -0.12]}
          />
          <mesh
            geometry={nodes.Pedals.geometry}
            material={nodes.Pedals.material}
            position={[0, -0.67, -0.1]}
          >
            <mesh
              geometry={nodes.Pedal_Left.geometry}
              material={nodes.Pedal_Left.material}
              position={[-0.08, -0.01, 0.07]}
              scale={[0.5, 1, 1]}
            />
            <mesh
              geometry={nodes.Pedal_Left001.geometry}
              material={nodes.Pedal_Left001.material}
              position={[-0.08, -0.02, 0.07]}
              scale={[0.5, 1, 1]}
            />
            <mesh
              geometry={nodes.Pedal_Middle.geometry}
              material={nodes.Pedal_Middle.material}
              position={[0, -0.01, 0.07]}
              scale={[0.5, 1, 1]}
            />
            <mesh
              geometry={nodes.Pedal_Middle001.geometry}
              material={nodes.Pedal_Middle001.material}
              position={[0, -0.02, 0.07]}
              scale={[0.5, 1, 1]}
            />
            <mesh
              geometry={nodes.Pedal_Right.geometry}
              material={nodes.Pedal_Right.material}
              position={[0.08, -0.01, 0.07]}
              scale={[0.5, 1, 1]}
            />
            <mesh
              geometry={nodes.Pedal_Right001.geometry}
              material={nodes.Pedal_Right001.material}
              position={[0.08, -0.02, 0.07]}
              scale={[0.5, 1, 1]}
            />
          </mesh>
          <mesh
            geometry={nodes.SideBoards.geometry}
            material={nodes.SideBoards.material}
            position={[0, -0.35, 0.01]}
          />
          <mesh
            geometry={nodes.Top_Board.geometry}
            material={nodes.Top_Board.material}
            position={[0, 0.06, -0.09]}
          />
          <mesh
            geometry={nodes.White_Keys_bool.geometry}
            material={nodes.White_Keys_bool.material}
            position={[0, 0.03, 0.05]}
          />
        </mesh>
      </group>
      <group position={[-2.31, 0.84, 1.85]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Drafting_Table_Table.geometry}
          material={materials.Wood_White}
          position={[0, -0.04, 0.01]}
          rotation={[0.14, 0, 0]}
        >
          <group position={[-0.5, 0.28, -0.35]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh
              geometry={nodes.Cylinder014.geometry}
              material={nodes.Cylinder014.material}
            />
            <mesh
              geometry={nodes.Cylinder014_1.geometry}
              material={materials.Metal_White}
            />
            <mesh
              geometry={nodes.BezierCurve.geometry}
              material={nodes.BezierCurve.material}
              position={[0, 0.11, 0]}
              rotation={[0.73, -1.36, 2.32]}
            />
          </group>
          <mesh
            geometry={nodes.Drafting_Table_Lamp_Clamp.geometry}
            material={nodes.Drafting_Table_Lamp_Clamp.material}
            position={[-0.51, 0.01, -0.35]}
          />
          <mesh
            geometry={nodes.Drafting_Table_Lamp_Clamp001.geometry}
            material={nodes.Drafting_Table_Lamp_Clamp001.material}
            position={[-0.5, 0.03, -0.35]}
          />
          <mesh
            geometry={nodes.Drafting_Table_Lamp_Clamp002.geometry}
            material={nodes.Drafting_Table_Lamp_Clamp002.material}
            position={[-0.5, 0.07, -0.35]}
          />
          <mesh
            geometry={nodes.Drafting_Table_Lamp_Clamp003.geometry}
            material={nodes.Drafting_Table_Lamp_Clamp003.material}
            position={[-0.5, 0.25, -0.35]}
          />
          <mesh
            geometry={nodes.Plane023.geometry}
            material={nodes.Plane023.material}
            position={[0.37, -0.05, -0.26]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            geometry={nodes.Plane025.geometry}
            material={nodes.Plane025.material}
            position={[0.37, -0.01, 0.17]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </mesh>
        <mesh
          geometry={nodes.Legs_Connector_Rear.geometry}
          material={nodes.Legs_Connector_Rear.material}
          position={[0, -0.37, -0.28]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          geometry={nodes.Legs_Connector_Sides.geometry}
          material={nodes.Legs_Connector_Sides.material}
          position={[0.37, -0.37, -0.01]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <group
          position={[0.37, -0.09, 0.15]}
          rotation={[-0.41, -1.57, 0]}
          scale={[1, 1.09, 1]}
        >
          <mesh
            geometry={nodes.Cylinder017.geometry}
            material={nodes.Cylinder017.material}
          />
          <mesh
            geometry={nodes.Cylinder017_1.geometry}
            material={nodes.Cylinder017_1.material}
          />
        </group>
        <group position={[0.37, -0.1, -0.28]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            geometry={nodes.Cylinder016.geometry}
            material={nodes.Cylinder016.material}
          />
          <mesh
            geometry={nodes.Cylinder016_1.geometry}
            material={nodes.Cylinder016_1.material}
          />
        </group>
      </group>
      <group position={[-2.37, 0, 0]}>
        <mesh
          geometry={nodes.Desk_LegL.geometry}
          material={nodes.Desk_LegL.material}
          position={[-0.15, 0.24, 0.85]}
        >
          <mesh
            geometry={nodes.Desk_Bottom_Foot.geometry}
            material={nodes.Desk_Bottom_Foot.material}
            position={[0.15, -0.2, 0]}
          />
          <mesh
            geometry={nodes.Desk_Leg001.geometry}
            material={nodes.Desk_Leg001.material}
            position={[0, 0.26, 0]}
          />
          <mesh
            geometry={nodes.Desk_Top_Attachment.geometry}
            material={nodes.Desk_Top_Attachment.material}
            position={[0.13, 0.56, 0]}
          />
          <mesh
            geometry={nodes.Foot_Disc_Back.geometry}
            material={nodes.Foot_Disc_Back.material}
            position={[-0.12, -0.23, 0]}
            rotation={[0, 1.57, 0]}
          />
          <mesh
            geometry={nodes.Foot_Disc_Front.geometry}
            material={nodes.Foot_Disc_Front.material}
            position={[0.41, -0.23, 0]}
            rotation={[0, 1.57, 0]}
          />
        </mesh>
        <mesh
          geometry={nodes.Desk_LegR.geometry}
          material={nodes.Desk_LegR.material}
          position={[-0.15, 0.24, -0.85]}
        >
          <mesh
            geometry={nodes.Desk_Bottom_Foot001.geometry}
            material={nodes.Desk_Bottom_Foot001.material}
            position={[0.15, -0.2, 0]}
          />
          <mesh
            geometry={nodes.Desk_Leg003.geometry}
            material={nodes.Desk_Leg003.material}
            position={[0, 0.26, 0]}
          />
          <mesh
            geometry={nodes.Desk_Top_Attachment001.geometry}
            material={nodes.Desk_Top_Attachment001.material}
            position={[0.13, 0.56, 0]}
          />
          <mesh
            geometry={nodes.Foot_Disc_Back001.geometry}
            material={nodes.Foot_Disc_Back001.material}
            position={[-0.12, -0.23, 0]}
            rotation={[0, 1.57, 0]}
          />
          <mesh
            geometry={nodes.Foot_Disc_Front001.geometry}
            material={nodes.Foot_Disc_Front001.material}
            position={[0.41, -0.23, 0]}
            rotation={[0, 1.57, 0]}
          />
        </mesh>
        <mesh
          geometry={nodes.Desk_Top.geometry}
          material={nodes.Desk_Top.material}
          position={[0.05, 0.84, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <group position={[-2.81, 1.59, 1.34]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Plane029.geometry}
          material={nodes.Plane029.material}
          position={[0.22, -0.3, 0.03]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[1, 1, 1.04]}
        >
          <mesh
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[0, 0.03, 0.07]}
            scale={[1, 1, 0.96]}
          >
            <mesh
              geometry={nodes.Cube_1.geometry}
              material={nodes.Cube_1.material}
            />
          </mesh>
          <mesh
            geometry={nodes.Cylinder005.geometry}
            material={nodes.Cylinder005.material}
            position={[0, 0.01, -0.1]}
            rotation={[Math.PI / 2, -1.01, 0]}
            scale={[1, 0.96, 1]}
          >
            <mesh
              geometry={nodes.Cylinder006_1.geometry}
              material={nodes.Cylinder006_1.material}
            />
            <mesh
              geometry={nodes.Cylinder007.geometry}
              material={nodes.Cylinder007.material}
            />
          </mesh>
          <mesh
            geometry={nodes.Plane030.geometry}
            material={nodes.Plane030.material}
            scale={[1, 1, 0.96]}
          />
        </mesh>
        <mesh
          geometry={nodes.White_Board_Frame.geometry}
          material={nodes.White_Board_Frame.material}
          position={[0, 0, 0.01]}
        />
        <mesh
          geometry={nodes.White_Board_Surface.geometry}
          material={nodes.White_Board_Surface.material}
          position={[0, 0, 0.01]}
        />
      </group>
      <group position={[-2.33, 0.86, -0.6]} rotation={[0, 1.57, 0]}>
        <mesh
          geometry={nodes.Base.geometry}
          material={nodes.Base.material}
          position={[0, 0.01, 0]}
          rotation={[0, Math.PI / 4, 0]}
        >
          <mesh
            geometry={nodes.Keys.geometry}
            material={nodes.Keys.material}
            position={[0.03, 0.01, -0.03]}
          />
          <mesh
            geometry={nodes.Keys_Function.geometry}
            material={nodes.Keys_Function.material}
            position={[0.06, 0.01, -0.06]}
          />
        </mesh>
        <mesh
          geometry={nodes.Screen.geometry}
          material={nodes.Screen.material}
          position={[0, 0.13, -0.14]}
          rotation={[0, Math.PI / 4, 0]}
        >
          <mesh
            geometry={nodes["Bezel-Glass"].geometry}
            material={nodes["Bezel-Glass"].material}
          />
          <mesh
            geometry={nodes.Bezel_Rubb.geometry}
            material={nodes.Bezel_Rubb.material}
          />
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={nodes.Cylinder.material}
            position={[-0.02, -0.12, 0.02]}
          />
          <mesh
            geometry={nodes.Macbook_Screen.geometry}
            material={materials.Screen}
          />
        </mesh>
      </group>
      <group position={[-2.48, 0.86, 0.17]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes.Monitor.geometry}
          material={nodes.Monitor.material}
          position={[0, -0.02, 0.26]}
        >
          <mesh
            geometry={nodes.Adjustment_Handles.geometry}
            material={nodes.Adjustment_Handles.material}
          />
          <mesh
            geometry={nodes.Monitor_Glass_Inlay.geometry}
            material={nodes.Monitor_Glass_Inlay.material}
          />
          <mesh
            geometry={nodes.Mounting_Rod_Monitor.geometry}
            material={nodes.Mounting_Rod_Monitor.material}
          />
          <mesh
            geometry={nodes.Screen_Cintiq.geometry}
            material={materials.Cintiq_Screen}
          />
        </mesh>
        <mesh
          geometry={nodes.Monitor_Base.geometry}
          material={nodes.Monitor_Base.material}
          position={[0, -0.02, 0.26]}
        />
        <mesh
          geometry={nodes.Mounting_Rod_Arms.geometry}
          material={nodes.Mounting_Rod_Arms.material}
          position={[0, -0.02, 0.26]}
        />
        <mesh
          geometry={nodes.Mounting_Rod_Base_Core.geometry}
          material={nodes.Mounting_Rod_Base_Core.material}
          position={[0, -0.02, 0.26]}
        />
        <mesh
          geometry={nodes.Mounting_Rod_Monitor_Core.geometry}
          material={nodes.Mounting_Rod_Monitor_Core.material}
          position={[0, -0.02, 0.26]}
        />
      </group>
      <group position={[-1.65, 0, -0.05]} rotation={[-Math.PI / 2, 0, 1.76]}>
        <group
          position={[0, 0, 0.22]}
          rotation={[-Math.PI / 2, -0.23, Math.PI]}
          scale={[1, 1.08, 1]}
        >
          <group position={[0.38, 0.53, 0.05]}>
            <mesh
              geometry={nodes.Armrest_R.geometry}
              material={nodes.Armrest_R.material}
            />
          </group>
          <group position={[-0.31, 0.53, 0.08]}>
            <mesh
              geometry={nodes.Armrest_R003.geometry}
              material={nodes.Armrest_R003.material}
            />
          </group>
        </group>
        <group position={[0, 0, 0.3]} rotation={[-Math.PI / 2, -0.23, Math.PI]}>
          <group position={[0.27, 0.4, -0.13]} rotation={[-0.3, 0.52, 0.15]}>
            <group position={[0, 0.04, 0.23]}>
              <mesh
                geometry={nodes.Armrest_R001.geometry}
                material={nodes.Armrest_R001.material}
              />
            </group>
            <mesh
              geometry={nodes.Cube003.geometry}
              material={nodes.Cube003.material}
            />
            <mesh
              geometry={nodes.Cube009.geometry}
              material={nodes.Cube009.material}
              position={[0, -0.02, 0.11]}
            />
            <mesh
              geometry={nodes.Cube010.geometry}
              material={nodes.Cube010.material}
              position={[0, -0.02, 0.11]}
            />
          </group>
          <group
            position={[-0.27, 0.4, -0.13]}
            rotation={[-0.23, -0.16, -0.04]}
          >
            <mesh
              geometry={nodes.Armrest_R004.geometry}
              material={nodes.Armrest_R004.material}
              position={[0, 0.02, 0.23]}
            />
            <mesh
              geometry={nodes.Cube004.geometry}
              material={nodes.Cube004.material}
              position={[0, 0, 0.11]}
            />
            <mesh
              geometry={nodes.Cube005.geometry}
              material={nodes.Cube005.material}
              position={[0, -0.02, 0.12]}
            />
            <mesh
              geometry={nodes.Cube007.geometry}
              material={nodes.Cube007.material}
              position={[0, 0, 0.22]}
            />
          </group>
          <group position={[0.23, 0.17, 0.07]}>
            <mesh
              geometry={nodes.Cylinder027.geometry}
              material={nodes.Cylinder027.material}
            />
            <mesh
              geometry={nodes.Cylinder027_1.geometry}
              material={nodes.Cylinder027_1.material}
            />
          </group>
          <mesh
            geometry={nodes.Armrest_R005.geometry}
            material={nodes.Armrest_R005.material}
            position={[0, 0.55, -0.24]}
          />
          <mesh
            geometry={nodes.Armrest_R007.geometry}
            material={nodes.Armrest_R007.material}
            position={[0, 0.14, 0.04]}
          />
          <mesh
            geometry={nodes.Arms.geometry}
            material={nodes.Arms.material}
            position={[0, 0.27, -0.13]}
          />
          <mesh
            geometry={nodes.Back_Rest_Cover_V2001.geometry}
            material={nodes.Back_Rest_Cover_V2001.material}
            position={[0, 0.85, -0.23]}
          />
          <mesh
            geometry={nodes.Back_Rest_V2.geometry}
            material={nodes.Back_Rest_V2.material}
            position={[0, 0.85, -0.23]}
          />
          <mesh
            geometry={nodes.Base_Extension_Rod.geometry}
            material={nodes.Base_Extension_Rod.material}
            position={[0, 0.06, 0]}
          />
          <mesh
            geometry={nodes.Chair_Back_Metal.geometry}
            material={nodes.Chair_Back_Metal.material}
            position={[0, 1.34, -0.25]}
          />
          <mesh
            geometry={nodes.Seat001.geometry}
            material={nodes.Seat001.material}
            position={[0, 0.18, 0.03]}
          />
          <mesh
            geometry={nodes.Seat002.geometry}
            material={nodes.Seat002.material}
            position={[0, 0.18, 0.03]}
          />
          <mesh
            geometry={nodes.Seat_Adjustment_Knobs.geometry}
            material={nodes.Seat_Adjustment_Knobs.material}
            position={[0.2, 0.18, 0.02]}
          />
        </group>
        <group position={[0, -0.35, 0.03]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cylinder028.geometry}
            material={nodes.Cylinder028.material}
          />
          <mesh
            geometry={nodes.Cylinder028_1.geometry}
            material={nodes.Cylinder028_1.material}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder011.geometry}
          material={nodes.Cylinder011.material}
          position={[0, 0, 0.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder012.geometry}
          material={nodes.Cylinder012.material}
          position={[0, 0, 0.01]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder013.geometry}
          material={nodes.Cylinder013.material}
          position={[0, 0, 0.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[-2.52, 0.81, -2.53]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[-2.53, 0.84, -2.54]}
        rotation={[0, 0.71, 0]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[-2.54, 0.91, -2.54]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-2.54, 0.87, -2.54]}
      />
      <mesh
        geometry={nodes.Ikea_Bookcase_4x2.geometry}
        material={nodes.Ikea_Bookcase_4x2.material}
        position={[0.46, 0.76, -2.62]}
      >
        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
        <mesh
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
          position={[0, 0.36, 0]}
        />
        <mesh
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
          position={[0, -0.36, 0]}
        />
        <mesh
          geometry={nodes.Plane003.geometry}
          material={nodes.Plane003.material}
        />
      </mesh>
      <mesh
        geometry={nodes.Ikea_Bookcase_1x2_Near.geometry}
        material={nodes.Ikea_Bookcase_1x2_Near.material}
        position={[1.52, 0.23, -2.62]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        {/* <mesh
          geometry={nodes.Plane005_1.geometry}
          material={nodes.Plane005_1.material}
        /> */}
        <mesh
          geometry={nodes.Record_Sleeve001.geometry}
          material={nodes.Record_Sleeve001.material}
          position={[0.02, 0.34, 0.02]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </mesh>
      <mesh
        geometry={nodes.Ikea_Bookcase_1x2_Far.geometry}
        material={nodes.Ikea_Bookcase_1x2_Far.material}
        position={[-0.89, 0.23, -2.62]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <mesh
          geometry={nodes.Plane041.geometry}
          material={nodes.Plane041.material}
        />
        <mesh
          geometry={nodes.Record_Sleeve002.geometry}
          material={nodes.Record_Sleeve002.material}
          position={[0.02, 0.34, 0.02]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </mesh>
      <mesh
        geometry={nodes.Coffee_Table_Top.geometry}
        material={nodes.Coffee_Table_Top.material}
        position={[0.66, 0.3, 0]}
      />
      <mesh
        geometry={nodes.Coffee_Table_Legs.geometry}
        material={nodes.Coffee_Table_Legs.material}
        position={[0.38, 0.14, -0.75]}
      />
      <mesh
        geometry={nodes.Coffee_Table_Bottom.geometry}
        material={nodes.Coffee_Table_Bottom.material}
        position={[0.66, 0.11, 0]}
      />
      <mesh
        geometry={nodes.Keyboard_Shell.geometry}
        material={nodes.Keyboard_Shell.material}
        position={[-2.11, 0.86, 0.21]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          geometry={nodes.Keyboard_Keys_Grey.geometry}
          material={nodes.Keyboard_Keys_Grey.material}
          position={[0, 0.02, 0.01]}
        />
        <mesh
          geometry={nodes.Keyboard_Keys_White.geometry}
          material={nodes.Keyboard_Keys_White.material}
          position={[0, 0.02, 0.01]}
        />
      </mesh>
      <mesh
        geometry={nodes.Wacom_Pen_Holder.geometry}
        material={nodes.Wacom_Pen_Holder.material}
        position={[-2.22, 0.86, -0.26]}
      >
        <group position={[0, 0.1, 0]}>
          <mesh
            geometry={nodes.Cylinder005_1.geometry}
            material={nodes.Cylinder005_1.material}
          />
          <mesh
            geometry={nodes.Cylinder005_2.geometry}
            material={nodes.Cylinder005_2.material}
          />
          <mesh
            geometry={nodes.Cylinder005_3.geometry}
            material={nodes.Cylinder005_3.material}
          />
        </group>
      </mesh>
      <mesh
        geometry={nodes["Coaster&Coffee"].geometry}
        material={nodes["Coaster&Coffee"].material}
        position={[-2.4, 0.86, 0.74]}
        rotation={[0, 0.98, 0]}
      >
        <mesh
          geometry={nodes.Coffee_Cup.geometry}
          material={nodes.Coffee_Cup.material}
          position={[0.01, 0.05, 0]}
        >
          <mesh
            geometry={nodes.Coffee.geometry}
            material={materials.Coffee}
            position={[-0.01, 0, 0]}
          />
        </mesh>
      </mesh>
      <mesh
        geometry={nodes.Floor.geometry}
        material={nodes.Floor.material}
        position={[0, 0.08, 0]}
      />
      <mesh
        geometry={nodes.Rug.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

useGLTF.preload("/Room_v2.glb");
