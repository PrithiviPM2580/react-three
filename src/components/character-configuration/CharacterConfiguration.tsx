import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./style.css";
import { CharacterAnimationProvider } from "../../context/CharacterAnimation";
import Interface from "./Interface";
import { CharacterCustomizationProvider } from "../../context/CharacterCustomization";

const CharacterConfiguration = () => {
  return (
    <CharacterCustomizationProvider>
      <CharacterAnimationProvider>
        <main className="app">
          <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
            <Scene />
          </Canvas>
          <Interface />
        </main>
      </CharacterAnimationProvider>
    </CharacterCustomizationProvider>
  );
};

export default CharacterConfiguration;
