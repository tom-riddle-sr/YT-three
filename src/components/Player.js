import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { useKeyboard } from "../hooks/useKeyboards"

export const Player = () => {
  const actions = useKeyboard()
  console.log("actions", Object.entries(actions).filter(([k, v]) => v))




  const { camera } = useThree()
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 1, 0]
  }))

  const pos = useRef([0, 0, 0])
  const vel = useRef([0, 0, 0])

  useEffect(() => {
    api.position.subscribe((p) => pos.current = p)
  }, [api.position])

  useEffect(() => {
    api.velocity.subscribe((v) => vel.current = v)
  }, [api.velocity])


  useFrame(() => {
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
    // api.velocity.set(0, 1, 0)

  }) //用於渲染循環的Hooks

  return (
    <>
      <mesh ref={ref}>

      </mesh>
    </>
  )
}


//邏輯
// 1.建立camera,用ref綁好position
// 2.camera的position subscribe by sphere position
