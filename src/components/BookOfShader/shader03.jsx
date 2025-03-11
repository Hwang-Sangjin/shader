import vertexShader from "../../shader/shader3/vertex.glsl";
import fragmentShader from "../../shader/shader3/fragment.glsl";
import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Shader3 = () => {
  const uniforms = {
    u_time: { value: 0 },
  };

  useFrame(({ clock }) => {
    uniforms.u_time.value = clock.getElapsedTime();
  });
  return (
    <mesh>
      <planeGeometry />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Shader3;
