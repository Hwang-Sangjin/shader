import vertexShader from "../../shader/shader4/vertex.glsl";
import fragmentShader from "../../shader/shader4/fragment.glsl";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const Shader4 = () => {
  const { size } = useThree();
  const materialRef = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    uniforms.u_time.value = clock.getElapsedTime();
  }, []);

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
      <planeGeometry args={[5, 5, 100, 100]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Shader4;
