import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshWobbleMaterial } from '@react-three/drei'

export default function BlobCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} intensity={2} />
      <mesh>
        <icosahedronGeometry args={[1.5, 20]} />
        <MeshWobbleMaterial
          factor={0.6} // How much it wiggles
          speed={1.5} // Speed of wiggle
          color="#8b5cf6"
          roughness={0.1}
        />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
