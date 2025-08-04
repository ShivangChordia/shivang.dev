// src/components/WavyShaderMaterial.jsx
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'

// GLSL code directly as strings — no macros needed
const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.z += sin(pos.x * 3.0 + uTime * 1.5) * 0.2;
    pos.z += sin(pos.y * 2.0 + uTime * 1.0) * 0.1;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(uColor, 1.0);
  }
`;

const WavyMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color(0xE9DCC9) },
  vertexShader,
  fragmentShader
);

extend({ WavyMaterial });
export default WavyMaterial;
