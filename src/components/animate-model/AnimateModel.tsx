import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./style.css";

const AnimateModel = () => {
  return (
    <main className="app">
      <Canvas>
        <Scene />
      </Canvas>
    </main>
  );
};

export default AnimateModel;
