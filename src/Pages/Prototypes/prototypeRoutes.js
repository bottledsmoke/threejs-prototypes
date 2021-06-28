// import { HowA } from "./HowItsMade";
import { Room, config as RoomConfig } from "./Room";
import { RoomV2, config as RoomV2Config } from "./Room_v2";
import { Pizza } from "./Pizza";
import { Particles } from "./Particles";
import { CameraTracking } from "./CameraTracking";
import { OfficeTourViewer } from "./OfficeTourViewer";
import { BaseRig } from "./BaseRig";
// import { default as RouterDrivenThree } from "./RouterDrivenThree";
// BEGIN SCAFFOLDED ROUTE IMPORTS
import { NearWallHiding } from "./NearWallHiding";
import { ZustandCamera } from "./ZustandCamera";
// ADD_ROUTE_IMPORT_HERE

const PrototypeRoutes = {
  // howItsMade: { path: "/howItsMade", name: "How It's Made", component: HowA },
  room: { path: "/room", name: "Room", config: RoomConfig, component: Room },
  "room-v2": {
    path: "/room-v2",
    name: "Room V2",
    config: RoomV2Config,
    component: RoomV2,
  },
  pizza: { path: "/pizza", name: "Pizza", component: Pizza },
  particles: {
    path: "/particles",
    name: "Particles",
    component: Particles,
  },
  "camera-tracking": {
    path: "/camera-tracking",
    name: "Camera Tracking",
    component: CameraTracking,
  },
  "office-tour-viewer": {
    path: "/office-tour-viewer",
    name: "Office Tour Viewer",
    component: OfficeTourViewer,
  },
  "base-rig": {
    path: "/base-rig",
    name: "Base Rig",
    component: BaseRig,
  },
  // BEGIN SCAFFOLDED ROUTES
  "near-wall-hiding": {
    path: "/near-wall-hiding",
    name: "Near Wall Hiding",
    component: NearWallHiding,
  },
  "zustand-camera": {
    path: "/zustand-camera",
    name: "Zustand Camera",
    component: ZustandCamera,
  },
  // ADD_ROUTE_HERE
};

export default PrototypeRoutes;
