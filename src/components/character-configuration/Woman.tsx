import React, { useEffect } from "react";
import * as THREE from "three";
import { useGraph, type ThreeElements } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useCharacterAnimation } from "../../context/CharacterAnimation";
import { useCharacterCustomization } from "../../context/CharacterCustomization";

type GLTFResult = GLTF & {
  nodes: {
    mixamorigHips: THREE.Bone;
    Mesh019: THREE.SkinnedMesh;
    Mesh019_1: THREE.SkinnedMesh;
    Mesh019_2: THREE.SkinnedMesh;
    Mesh019_3: THREE.SkinnedMesh;
    Mesh019_4: THREE.SkinnedMesh;
    Mesh019_5: THREE.SkinnedMesh;
    Mesh019_6: THREE.SkinnedMesh;
    Mesh019_7: THREE.SkinnedMesh;
    Mesh019_8: THREE.SkinnedMesh;
    Mesh019_9: THREE.SkinnedMesh;
  };
  materials: {
    Glasses: THREE.Material;
    Eyes: THREE.Material;
    Hair: THREE.Material;
    Skin: THREE.Material;
    Mouth: THREE.Material;
    Shirt: THREE.Material;
    Pants: THREE.Material;
    Shoes: THREE.Material;
    Sole: THREE.Material;
    Laces: THREE.Material;
  };
};

type GraphResult = Pick<GLTFResult, "nodes" | "materials">;

const Woman = (props: ThreeElements["group"]) => {
  const group = React.useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(
    "/models/woman.gltf",
  ) as unknown as GLTFResult;
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as unknown as GraphResult;
  const { actions, names } = useAnimations(animations, group);
  const { animationIndex, setAnimations } = useCharacterAnimation();
  const { hairColor } = useCharacterCustomization();

  useEffect(() => {
    setAnimations(names);
  }, [names, setAnimations]);

  useEffect(() => {
    const animationName = names[animationIndex];
    if (!animationName) return;

    actions[animationName]?.reset().fadeIn(0.5).play();
    return () => {
      actions[animationName]?.fadeOut(0.5);
    };
  }, [actions, names, animationIndex]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="SM_Chr_Developer_Female_02">
            <skinnedMesh
              castShadow
              name="Mesh019"
              geometry={nodes.Mesh019.geometry}
              material={materials.Glasses}
              skeleton={nodes.Mesh019.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_1"
              geometry={nodes.Mesh019_1.geometry}
              material={materials.Eyes}
              skeleton={nodes.Mesh019_1.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_2"
              geometry={nodes.Mesh019_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Mesh019_2.skeleton}
            >
              <meshStandardMaterial {...materials.Hair} color={hairColor} />
            </skinnedMesh>
            <skinnedMesh
              castShadow
              name="Mesh019_3"
              geometry={nodes.Mesh019_3.geometry}
              material={materials.Skin}
              skeleton={nodes.Mesh019_3.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_4"
              geometry={nodes.Mesh019_4.geometry}
              material={materials.Mouth}
              skeleton={nodes.Mesh019_4.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_5"
              geometry={nodes.Mesh019_5.geometry}
              material={materials.Shirt}
              skeleton={nodes.Mesh019_5.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_6"
              geometry={nodes.Mesh019_6.geometry}
              material={materials.Pants}
              skeleton={nodes.Mesh019_6.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_7"
              geometry={nodes.Mesh019_7.geometry}
              material={materials.Shoes}
              skeleton={nodes.Mesh019_7.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_8"
              geometry={nodes.Mesh019_8.geometry}
              material={materials.Sole}
              skeleton={nodes.Mesh019_8.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_9"
              geometry={nodes.Mesh019_9.geometry}
              material={materials.Laces}
              skeleton={nodes.Mesh019_9.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/woman.gltf");

export default Woman;
