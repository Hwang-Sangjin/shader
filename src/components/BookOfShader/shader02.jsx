import vertexShader from "../../shader/shader2/vertex.glsl";
import fragmentShader from "../../shader/shader2/fragment.glsl";

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
