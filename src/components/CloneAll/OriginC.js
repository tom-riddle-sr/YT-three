import React from 'react';
import { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, OrbitControls, SoftShadows, Html, Clone } from "@react-three/drei"
import { CloneC } from "./CloneC"

export const OriginC = (props) => {

  const gltfData = useGLTF("/pikachu/source/pikachu2.glb");

  const { nodes, materials, animations } = useGLTF("/pikachu/source/pikachu2.glb")
  const scroll = useScroll()

  const { ref: p1, actions: p2 } = useAnimations(animations)
  const { ref: p3, actions: p4 } = useAnimations(animations)
  const { ref: p5, actions: p6 } = useAnimations(animations)
  useEffect(() => {
    p2.Walking.reset().play().paused = true;
    p4.Dance.reset().play().paused = true;
    p6.Jump.reset().play().paused = true;
  }, [p2.Walking, p4.Dance, p6.Jump]);


  const aa = () => {
    p2.Walking.time = p2.Walking.getClip().duration;
    p4.Dance.time = p4.Dance.getClip().duration;
    p6.Jump.time = p6.Jump.getClip().duration;

    p2.Walking.paused = false;
    p4.Dance.paused = false;
    p6.Jump.paused = false;

    setTimeout(() => {
      p2.Walking.paused = true;
      p4.Dance.paused = true;
      p6.Jump.paused = true;

    }, p2.Walking.getClip().duration * 1000 + 80000)
  }
  useFrame(() => {
    if (!p2.Walking.paused) {
      // 根据动画的播放时间和滚动偏移来计算旋转角度
      const rotationSpeed = Math.PI / 2; // 90度每秒（可以根据需要调整）
      const rotation = p2.Walking.time * rotationSpeed;


      // 将模型的 y 轴旋转
      p1.current.rotation.y = rotation;

    }
  });
  return (
    <>
      <group position={[-4, 0, 0]} ref={p1}>
        <primitive object={gltfData.scene} />
      </group>
      {/* <group {...props} ref={p3}>
        <primitive object={gltfData.scene} />
      </group> */}
      <Html><button onClick={aa}>sdsd</button></Html>

      <CloneC object={gltfData} position={[-2, 0, 0]} refs={p3} />
      <CloneC object={gltfData} position={[0, 0, 0]} refs={p5} />
      <CloneC object={gltfData} position={[2, 0, 0]} refs={p1} />
    </>
  )
};


