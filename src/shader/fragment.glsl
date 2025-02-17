varying vec3 vNormal;

vec3 ambientLight(vec3 lightColor, float lightIntensity)
{
    return lightColor * lightIntensity;
}

vec3 directionalLight(vec3 lightColor, float lightIntensity, vec3 normal, vec3 lightPosition)
{
    vec3 lightDirection = normalize(lightPosition);

    float shading = dot(normal, lightDirection);
    shading = max(0.0, shading);

    return lightColor * lightIntensity * shading;
}

void main(){
    vec3 color = vec3(1.0,1.0,1.0);

vec3 light = vec3(0.0);
light += directionalLight(
        vec3(0.1, 0.1, 1.0), // Light color
        0.5,                 // Light intensity,
        vNormal,             // Normal
        vec3(1.0, 0.75, 6.0)  // Light position
    );

color*=light;

    gl_FragColor = vec4(color,1.0);
}