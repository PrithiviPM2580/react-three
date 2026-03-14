import { OrbitControls } from "@react-three/drei";
import {
  CameraModes,
  useCharacterCustomization,
} from "../../context/CharacterCustomization";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

type NonFreeCameraMode = Exclude<
  (typeof CameraModes)[keyof typeof CameraModes],
  "FREE"
>;

const cameraPositions: Record<
  NonFreeCameraMode,
  { position: THREE.Vector3; target: THREE.Vector3 }
> = {
  [CameraModes.HEAD]: {
    position: new THREE.Vector3(0, 0.5, 1),
    target: new THREE.Vector3(0, 0.5, 0),
  },
  [CameraModes.TOP]: {
    position: new THREE.Vector3(-0.5, 0.2, 1.5),
    target: new THREE.Vector3(0, 0.2, 0),
  },
  [CameraModes.BOTTOM]: {
    position: new THREE.Vector3(0, -0.5, 2.5),
    target: new THREE.Vector3(0, -0.5, 0),
  },
};

const freeCameraPose = {
  position: new THREE.Vector3(1, 1.5, 2.5),
  target: new THREE.Vector3(0, 0.5, 0),
};

const settleEpsilon = 0.01;

const CameraControl = () => {
  const { cameraMode } = useCharacterCustomization();
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);

  useFrame((state, delta) => {
    const controls = orbitControlsRef.current;
    if (!controls) return;

    const pose =
      cameraMode === CameraModes.FREE
        ? freeCameraPose
        : cameraPositions[cameraMode];

    state.camera.position.lerp(pose.position, 3 * delta);
    controls.target.lerp(pose.target, 3 * delta);

    const isAtDefaultFreePose =
      state.camera.position.distanceTo(freeCameraPose.position) <
        settleEpsilon &&
      controls.target.distanceTo(freeCameraPose.target) < settleEpsilon;

    controls.enabled = cameraMode === CameraModes.FREE && isAtDefaultFreePose;
    controls.update();
  });
  return (
    <>
      <OrbitControls ref={orbitControlsRef} />
    </>
  );
};

export default CameraControl;
