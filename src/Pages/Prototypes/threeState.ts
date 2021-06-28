import create, { State } from "zustand";
import type OrbitControls from "Controls/OrbitControls";

const getInitialState = (state?: CameraState): CameraState => {
  return {
    position: state?.position || [0, 5, 5],
    fov: state?.fov || 50,
    lookAt: state?.lookAt || [0, 0, 0],
  };
};

interface CameraState extends State {
  position: [number, number, number];
  fov: number;
  lookAt: [number, number, number];
  setPosition?: (nextPosition: [number, number, number]) => void;
}

export const useCameraStore = create<CameraState>((set) => ({
  position: getInitialState().position,
  fov: getInitialState().fov,
  lookAt: getInitialState().lookAt,
  setPosition: (nextPosition) =>
    set((state: CameraState) => ({ position: nextPosition })),
}));

// CONTROLS STATE

type xyz = [number, number, number];

// interface ControlsProps {}

interface ControlsState extends State {
  target: xyz | null,
  ref: OrbitControls | null;
  enabled: boolean;
  setControls: (controls: OrbitControls) => void;
  setTarget: (nextTarget: xyz) => void;
  deleteControls(): void;
  enableControls(): void;
  disableControls(): void;
}

export const useControlsStore = create<ControlsState>((set) => ({
  target: [0, 0, 0],
  ref: null,
  enabled: true,
  setControls: (controls) =>
    set((state: ControlsState) => ({
      ref: controls,
      target: controls.target!.toArray(),
    })),
  setTarget: (nextTarget) =>
    set((state: ControlsState) => ({
      target: nextTarget,
    })),
  deleteControls: () =>
    set((state: ControlsState) => {
      console.log("controls deleted");
      return null;
    }),
  enableControls: () =>
    set((state: ControlsState) => ({
      enabled: true,
    })),
  disableControls: () =>
    set((state: ControlsState) => ({
      enabled: false,
    })),
}));
