import { useRef } from "react";
import cubeVertexShader from "../shader/vertex.glsl";
import cubeFragmentShader from "../shader/fragment.glsl";

const Cube = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial
        attach="material"
        vertexShader={cubeVertexShader}
        fragmentShader={cubeFragmentShader}
      />
    </mesh>
  );
};

export default Cube;
