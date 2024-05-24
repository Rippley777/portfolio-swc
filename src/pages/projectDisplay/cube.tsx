import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
// import { OrbitControls } from "@react-three/drei";

const vertexShader = `
varying vec3 v_color;

void main() {
  v_color = position; // Pass the vertex position as color for simplicity
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform vec2 resolution;
uniform float u_shadow_power;
uniform float u_darken_top;
uniform float u_time;
uniform vec4 u_active_colors;
uniform struct Global {
    vec2 noiseFreq;
    float noiseSpeed;
} u_global;
varying vec3 v_color;

void main() {
    vec3 color = v_color;
    if (u_darken_top == 1.0) {
        vec2 st = gl_FragCoord.xy / resolution.xy;
        color.g -= pow(st.y + sin(u_time * u_global.noiseSpeed + st.x) * u_global.noiseFreq.x, u_shadow_power) * 0.4;
    }
    gl_FragColor = vec4(color, 1.0);
}
`;

const ShaderBox = forwardRef<THREE.Mesh, JSX.IntrinsicElements["mesh"]>(
  (props, ref) => {
    const { size } = useThree();
    const shaderMaterial = useRef(
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          resolution: { value: new THREE.Vector2(size.width, size.height) },
          u_shadow_power: { value: 1.0 },
          u_darken_top: { value: 1.0 },
          u_time: { value: 0.0 },
          u_active_colors: { value: new THREE.Vector4(1.0, 0.0, 0.0, 1.0) },
          u_global: {
            value: {
              noiseFreq: new THREE.Vector2(1.0, 1.0),
              noiseSpeed: 1.0,
            },
          },
        },
      })
    );

    useFrame(() => {
      shaderMaterial.current.uniforms.u_time.value += 0.01;
    });

    useEffect(() => {
      const handleResize = () => {
        shaderMaterial.current.uniforms.resolution.value.set(
          window.innerWidth,
          window.innerHeight
        );
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <mesh ref={ref} material={shaderMaterial.current} {...props}>
        <boxGeometry args={[10, 10, 10]} />
      </mesh>
    );
  }
);

const ShaderScene: React.FC = () => {
  const { camera } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  const [zoomingIn /*, setZoomingIn*/] = useState(true);

  useFrame(() => {
    if (zoomingIn && camera.position.z > 7) {
      if (camera.position.x < 0) {
        camera.position.x += 0.1;
      }
      // Stop zooming when close enough
      camera.position.z -= 0.1;
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      console.log("Mesh ref:", meshRef.current);
    }
    camera.position.z = 15;
  }, []);

  return (
    <>
      <ShaderBox ref={meshRef} position={[0, 0, 0]} />
      {/* <OrbitControls /> */}
    </>
  );
};

const App: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <ShaderScene />
      </Canvas>
    </div>
  );
};

export default App;
