import { useRef } from "react";
import cubeVertexShader from "../shader/vertex.glsl";
import cubeFragmentShader from "../shader/fragment.glsl";

const Cube = () => {
  const mesh = useRef();

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={cubeFragmentShader}
        vertexShader={cubeVertexShader}
        wireframe
      />
    </mesh>
  );
};

export default Cube;
