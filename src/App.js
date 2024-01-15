import { Canvas, useFrame } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import { Ground } from "./components/Ground"
import { Player } from "./components/Player"
import { FPV } from "./components/FPV"
import { Cubes } from "./components/Cubes"
import { TextureSelector } from "./components/TextureSelector"
import { Menu } from "./components/Menu"
import { ScrollGirl } from "./components/ScrollGirl"
import { ScrollPikachu } from "./components/ScrollPikachu"
// import { Test } from "./components/Test"

import { useEffect } from "react"
import { useGLTF, useAnimations, useScroll, ScrollControls, SoftShadows, Sky, } from "@react-three/drei"
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing"

function App() {


  // return (
  //   <>
  //     <div>Outside Canvas</div>
  //     <Canvas>
  //       <Sky sunPosition={[100, 100, 20]} />
  //       <ambientLight intensity={2} />
  //       <FPV />
  //       <Physics>
  //         <Ground />
  //         <Player />
  //         <Cubes />
  //       </Physics>
  //     </Canvas>
  //     <div className="absolute centered cursor" >🪳</div>
  //     <TextureSelector />
  //     <Menu />
  //   </>
  // );


  return (
    <Canvas shadows gl={{ antialias: true }} camera={{ position: [0, 1, 5], fov: 100 }} >
      <color attach="background" args={["#f0f0f0"]} />
      {/* <fog attach="fog" args={["#f0f0f0", 0, 20]} /> */}
      <ambientLight intensity={0.8} />
      <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
      <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}>
        <ScrollGirl position={[2, -1, -1]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <ScrollPikachu position={[-2, -1, -2]} scale={1} />
      </ScrollControls>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.75} />
      </mesh>
      <SoftShadows size={40} samples={16} />
      <EffectComposer disableNormalPass multisampling={4}>
        <TiltShift2 blur={1} />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
