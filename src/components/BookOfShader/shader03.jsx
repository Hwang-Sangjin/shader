import vertexShader from "../../shader/shader3/vertex.glsl";
import fragmentShader from "../../shader/shader3/fragment.glsl";
import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Shader3 = () => {
  const { size } = useThree();
  const materialRef = useRef();
  const uniforms = {
    u_resolution: { value: new THREE.Vector2(size.width, size.height) },
    u_time: { value: 0 },
  };

  useFrame(({ clock }) => {
    uniforms.u_time.value = clock.getElapsedTime();
  });

  useEffect(() => {
    const updateResolution = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.u_resolution.value.set(
          size.width,
          size.height
        );
      }
    };
    updateResolution();
  }, [size]);
  return (
    <mesh>
      <planeGeometry />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Shader3;
