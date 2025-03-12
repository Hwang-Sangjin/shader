precision mediump float;


uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/ u_resolution;
  gl_FragColor = vec4(abs(sin(u_time)),st.x,st.y,1.0);
}