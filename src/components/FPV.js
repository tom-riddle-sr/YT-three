import { PointerLockControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

// FPV First Personal Version 第一人稱視角
export const FPV = () => {
  const { camera, gl } = useThree() //WebGL 渲染器

  return (<PointerLockControls args={[camera, gl.domElement]} />)

}