import { useMemo, useRef } from "react";
import cubeVertexShader from "../shader/plane/vertex.glsl";
import cubeFragmentShader from "../shader/plane/fragment.glsl";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

const Plane = () => {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uColorA: { value: new Color("#FFE486") },
      uColorB: { value: new Color("#FEB3D9") },
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
      position={[6, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        fragmentShader={cubeFragmentShader}
        vertexShader={cubeVertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Plane;
