import { Canvas } from "@react-three/fiber"
import { Sky } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./components/Ground"
import { Player } from "./components/Player"

function App() {
  return (
    <>
      <div>Outside Canvas</div>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={2} />
        <Physics>
          <Ground />
          <Player />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
