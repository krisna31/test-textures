import logo from "./logo.svg";
import "./App.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Plane, useTexture } from "@react-three/drei";
import { TextureLoader } from "three";

function App() {
  return (
    <Canvas>
      <Plannn />
      <ambientLight />
      <OrbitControls />
    </Canvas>
  );
}

function Plannn() {
  // const tex = useTexture("krisna.png");
  const tex = useLoader(TextureLoader, "textures/krisna512.jpg");
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial map={tex} transparent />
    </mesh>
  );
}

export default App;
