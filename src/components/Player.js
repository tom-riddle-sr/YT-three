import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { useKeyboard } from "../hooks/useKeyboards"
import * as THREE from "three"


const JUMP_FORCE = 3
const SPEED = 4


export const Player = () => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } = useKeyboard()

  // const filteredEntries = Object.entries(actions).filter(([k, v]) => v);
  //把{}轉成[] k=全部為篩選的 v=已篩選的

  const { camera } = useThree()


  const [ref, api] = useSphere(() => ({ //ref提供引用,api提供物理屬性
    mass: 1,
    type: 'Dynamic',
    position: [3, 1, 8]
  }))

  const pos = useRef([0, 0, 0])
  const vel = useRef([0, 0, 0])
  // 用ref 不會像state一樣觸發渲染
  // 為何不用變數存?
  // 确保即使组件重新渲染，位置和速度等物理属性也会保持


  useEffect(() => {
    api.position.subscribe((p) => pos.current = p)
  }, [api.position])

  useEffect(() => {
    api.velocity?.subscribe((v) => vel.current = v)
  }, [api])


  useFrame(() => {
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

    const direction = new THREE.Vector3()
    const frontVector = new THREE.Vector3(0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0))
    const sideVector = new THREE.Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0))

    direction.subVectors(frontVector, sideVector) //計算sideVector-frontVector 的差值,獲得移動方向向量
      .normalize()
      .multiplyScalar(SPEED) // 乘上SPEED=速度
      .applyEuler(camera.rotation) //將相機朝向跟方向綁定

    api.velocity?.set(direction.x, vel.current[1], direction.z)

    if (jump && Math.abs(vel.current[1]) < 1) { api.velocity?.set(vel.current[0], JUMP_FORCE, vel.current[2]) }

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
