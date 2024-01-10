import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../images/textures"
import { useStore } from "../hooks/useStore";

export const Ground = () => {

  //這種寫法只返回[]中第1個元素
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
  }))
  groundTexture.repeat.set(100, 100)

  const [addCube] = useStore((state) => [state.addCube])

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation() //控制事件處理的範圍，確保特定元素上的事件處理不會影響到其他元素。
        const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
        // ceil:將數字向上取整到最接近的整數 Math.ceil(-3.8) 將得到 -3
        // floor:將數字向上取整到最接近的整數 Math.floor(-3.8) 將得到 -4
        addCube(x, y, z)
      }}
    >
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}


// 有些名字已經改掉ㄌ 要記得有問題去three.js官網看一下