// src/components/WaveCanvas.jsx
import { useThree, Canvas, useFrame } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import { useRef } from 'react'
import WavyMaterial from './WavyShaderMaterial'

function WavyPlane() {
  const materialRef = useRef()
  const { viewport } = useThree() // this gives you width/height in world units

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime()
    }
  })

  // Make the plane as wide as the viewport, and as tall as needed
  return (
    <Plane
      args={[viewport.width, viewport.height * 0.4, 128, 128]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -viewport.height / 2 + (viewport.height * 0.2), 1]} // Push to bottom
    >
      <wavyMaterial ref={materialRef} />
    </Plane>
  )
}

export default function WaveCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <WavyPlane />
    </Canvas>
  )
}
