import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./style.css";
import { CharacterAnimationProvider } from "../../context/CharacterAnimation";
import Interface from "./Interface";

const AnimateModel = () => {
  return (
    <CharacterAnimationProvider>
      <main className="app">
        <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
          <Scene />
        </Canvas>
        <Interface />
      </main>
    </CharacterAnimationProvider>
  );
};

export default AnimateModel;
