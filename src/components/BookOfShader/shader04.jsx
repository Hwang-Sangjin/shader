import vertexShader from "../../shader/shader4/vertex.glsl";
import fragmentShader from "../../shader/shader4/fragment.glsl";

const Shader2 = () => {
  return (
    <mesh>
      <planeGeometry />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default Shader2;
