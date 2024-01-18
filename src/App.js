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
import { ScrollPikachu2 } from "./components/ScrollPikachu2"
import { ScrollPikachu3 } from "./components/ScrollPikachu3"
import { Test } from "./components/Test"

import { useEffect, useRef } from "react"
import { useGLTF, useAnimations, useScroll, ScrollControls, OrbitControls, SoftShadows, Sky, } from "@react-three/drei"
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


  // return (
  //   <Canvas shadows gl={{ antialias: true }} camera={{ position: [0, 1, 5], fov: 50 }} >
  //     <OrbitControls />
  //     <color attach="background" args={["pink"]} />
  //     {/* <fog attach="fog" args={["#f0f0f0", 0, 20]} /> */}
  //     <ambientLight intensity={0.8} />
  //     <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
  //     <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}>
  //       <ScrollGirl position={[2, -1, -1]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
  //       {/* <ScrollPikachu position={[-2, -1, -2]} scale={1} /> */}
  //       <Physics>
  //         {/* <ScrollPikachu2 position={[-2, -1, -2]} scale={1} /> */}
  //         <ScrollPikachu3 position={[-2, -1, -2]} scale={1} />
  //       </Physics>
  //     </ScrollControls>
  //     <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
  //       <planeGeometry args={[10, 10, 1, 1]} />
  //       <shadowMaterial transparent opacity={0.75} />
  //     </mesh>

  //   </Canvas>
  // );


  // return (
  //   <>
  //     <Canvas shadows gl={{ antialias: true }} camera={{ position: [0, 1, 5], fov: 50 }} >
  //       <OrbitControls />
  //       <color attach="background" args={["pink"]} />
  //       <ambientLight intensity={0.8} />
  //       <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
  //       <Physics>
  //         <ScrollPikachu3 />

  //         {/* <Test /> */}
  //       </Physics>
  //     </Canvas >
  //   </>
  // );
  return (
    <>

      <Canvas >
        <ambientLight intensity={2} />

        {/* 第一个 Pikachu 在位置 [-2, 0, 0] */}
        <ScrollPikachu2 position={[-2, -1, -2]} scale={1} />
        {/* 第二个 Pikachu 在位置 [2, 0, 0] */}
        <ScrollPikachu3 position={[2, 0, 0]} scale={0.08} />

      </Canvas>


    </>
  );
}





export default App;
