import { useGLTF, useTexture } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { BufferGeometry, MeshStandardMaterial } from "three";
import * as Three from "three";

type GLTFResult = GLTF & {
  nodes: {
    Chair: { geometry: BufferGeometry };
    Cushion: { geometry: BufferGeometry };
    Legs1: { geometry: BufferGeometry };
    Legs2: { geometry: BufferGeometry };
  };
  materials: {
    Chair: MeshStandardMaterial;
    Cushion: MeshStandardMaterial;
    Legs: MeshStandardMaterial;
  };
};

const Chair = (props: ThreeElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/models/chair.gltf",
  ) as unknown as GLTFResult;

  const leatherTextureProps = useTexture({
    map: "/textures/leather/Leather_008_Base Color.jpg",
    normalMap: "/textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "/textures/leather/Leather_008_Roughness.jpg",
    aoMap: "/textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  const fabricTextureProps = useTexture({
    map: "/textures/fabrics/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "/textures/fabrics/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "/textures/fabrics/Fabric_Knitted_006_roughness.jpg",
    aoMap: "/textures/fabrics/Fabric_Knitted_006_ambientOcclusion.jpg",
  });

  leatherTextureProps.map.repeat.set(3, 3);
  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);

  fabricTextureProps.map.repeat.set(3, 3);
  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);

  leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT =
    Three.RepeatWrapping;
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    Three.RepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = Three.RepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    Three.RepeatWrapping;

  fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT =
    Three.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    Three.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = Three.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    Three.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Chair.geometry}>
        <meshStandardMaterial {...leatherTextureProps} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cushion.geometry}
        position={[0, 0.064, 0.045]}
      >
        <meshStandardMaterial {...fabricTextureProps} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Legs1.geometry}
        material={materials.Legs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
      />
    </group>
  );
};

useGLTF.preload("/models/chair.gltf");

export default Chair;
