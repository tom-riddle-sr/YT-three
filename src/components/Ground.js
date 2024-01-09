import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../images/textures"
import { NearestFilter, RepeatWrapping } from "three"

export const Ground = () => {

  //這種寫法只返回[]中第1個元素
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
  }))
  groundTexture.magFilter = NearestFilter //texture 放大過濾器,控制放大時的渲染效果
  groundTexture.wrapS = RepeatWrapping //Ｓ軸(水平方向)
  groundTexture.wrapT = RepeatWrapping //Y軸(垂直方向)
  groundTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref}>
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}


// 有些名字已經改掉ㄌ 要記得有問題去three.js官網看一下