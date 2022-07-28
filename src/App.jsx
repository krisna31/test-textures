import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stats } from "@react-three/drei";
import Plannn from "./atoms/Plannn";

function App() {
  return (
    <Canvas>
      <Stats />
      <Environment files="textures/as.hdr" />
      <Plannn />
      <ambientLight />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
