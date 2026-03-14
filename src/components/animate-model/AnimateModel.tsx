import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./style.css";

const AnimateModel = () => {
  return (
    <main className="app">
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
        <Scene />
      </Canvas>
    </main>
  );
};

export default AnimateModel;
