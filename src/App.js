import { Canvas, useThree } from "@react-three/fiber"
import { Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./components/Ground"
import { Player } from "./components/Player"
import { FPV } from "./components/FPV"
import { Cubes } from "./components/Cubes"

function App() {

  return (
    <>
      <div>Outside Canvas</div>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={2} />
        <FPV />
        <Physics>
          <Ground />
          <Player />
          <Cubes />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor" >🪳</div>
    </>
  );
}

export default App;
