import { Environment, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Plannn() {
  const tex = useTexture("krisna.jpg");
  // const tex = useLoader(TextureLoader, "textures/krisna512.jpg");
  return (
    <mesh>
      <Environment files="textures/as.hdr" />
      <boxGeometry />
      <meshStandardMaterial map={tex} transparent />
    </mesh>
  );
}

export default Plannn;
