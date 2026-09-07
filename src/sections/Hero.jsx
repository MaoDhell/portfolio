import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import { EffectComposer, N8AO, Bloom } from '@react-three/postprocessing'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Room = () => {
  const { scene, animations } = useGLTF('/models/room.glb')
  const { actions } = useAnimations(animations, scene)
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
      if (child.isLight) {
        child.intensity *= 5
      }
    })
    if (actions && Object.keys(actions).length > 0) {
      console.log('Animaciones de Room disponibles:', Object.keys(actions))
      actions?.sirius?.play()
    } else {
      console.log('No se encontraron animaciones en room.glb')  
    }
  }, [scene, actions])

  return <primitive object={scene} />
}

const Character = () => {
  const { scene, animations } = useGLTF('/models/Mao.glb')
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
      actions?.Typing?.play()
    }, [actions, scene])

  return <primitive object={scene} scale={1.8} position={[0, 0.8, 0.5]} rotation={[0, Math.PI, 0]} />
}

const CameraRig = ({ basePosition = [4, 9, 12], target = [0, 4, 0], intensity = 1.5 }) => {
  const { camera, pointer } = useThree()
  const targetVec = useRef(new THREE.Vector3(...target))

  useFrame(() => {
    const x = basePosition[0] + pointer.x * intensity
    const y = basePosition[1] + pointer.y * intensity * 0.5
    const z = basePosition[2]

    camera.position.lerp(new THREE.Vector3(x, y, z), 0.05)
    camera.lookAt(targetVec.current)
  })

  return null
}

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Canvas shadows camera={{ position: [4, 9, 12], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, -4]} intensity={5} color="#ff69b4" distance={5} decay={1} />
        <pointLight position={[-6, 5, -2]} intensity={8} distance={10} decay={1} color="#08C4D6" />
        <pointLight position={[5, 8, 3]} intensity={5} color="#D5182E" distance={10} decay={1} />
        <Room />
        <Character/>
        <CameraRig basePosition={[5, 9, 12]} target={[-1, 4, 0]} intensity={1.5}/>
        <EffectComposer>
          <N8AO aoRadius={0.5} intensity={1.5} />
          <Bloom luminanceThreshold={0.6} intensity={0.8} mipmapBlur />
        </EffectComposer>
        <OrbitControls 
          target={[0, 4, 0]}
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
        />
      </Canvas>

      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="pl-16 md:pl-32 lg:pl-48">
          <h1 className="font-[Mochiy_Pop_One] text-4xl md:text-6xl text-gray drop-shadow-[0_0_15px_rgba(8,196,214,0.6)]">
            Laura - 猫D
          </h1>
          <p className="font-[Genos] text-lg md:text-2xl text-cyan tracking-[0.3em] mt-2">
           DEVELOPER / DESIGNER
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero