import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./style.css";

const ChairConfiguration = () => {
  return (
    <main className="app">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <color attach="background" args={["#020911"]} />
        <fog attach="fog" args={["#020911", 10, 20]} />
        <Scene />
      </Canvas>
    </main>
  );
};

export default ChairConfiguration;
