import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./style.css";

const ChairConfiguration = () => {
  return (
    <main className="app">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <color attach="background" args={["#213547"]} />
        <Scene />
      </Canvas>
    </main>
  );
};

export default ChairConfiguration;
