import { AmbientLight } from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Plane from "./Plane";
import Sphere from "./Sphere";
import Shader2 from "./BookOfShader/shader02";
import Shader3 from "./BookOfShader/shader03";
import Shader4 from "./BookOfShader/shader04";

const Experience = () => {
  return (
    <Canvas camera={{ position: [5, 1, 5] }}>
      <ambientLight intensity={1} />
      <Environment environmentIntensity={0.5} preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={0.1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <OrbitControls />
      <Shader4 />
      {/* <Shader3 /> */}
      {/* <Shader2 /> */}
      {/* <Plane />
      <Sphere /> */}
    </Canvas>
  );
};

export default Experience;
