import { useMemo, useRef } from "react";
import cubeVertexShader from "../shader/vertex.glsl";
import cubeFragmentShader from "../shader/fragment.glsl";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    uniforms.uTime.value = clock.getElapsedTime();
  });

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
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Cube;
