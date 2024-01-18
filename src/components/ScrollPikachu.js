import React from 'react';
import { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, OrbitControls, SoftShadows, Html } from "@react-three/drei"

// 使用animation

export const ScrollPikachu = (props) => {

  // const { nodes, materials, animations } = useGLTF("/jump-transformed.glb")
  const gltfData = useGLTF("/pikachu/source/pikachu2.glb");

  const { nodes, materials, animations } = useGLTF("/pikachu/source/pikachu2.glb")
  const scroll = useScroll()

  const { ref, actions } = useAnimations(animations)
  useEffect(() => void (actions.Walking.reset().play().paused = true), [])
  // useFrame(() => (actions.Walking.time = actions.Walking.getClip().duration * scroll.offset))
  // actions.Walking.getClip().duration 
  // 拿walking 這動作的每個動畫幀的時間＊上滾動
  const aa = () => {
    actions.Walking.time = actions.Walking.getClip().duration;
    // 恢复动画的播放
    actions.Walking.paused = false;
    // ref.current.rotation.y = Math.PI / 2

    setTimeout(() => {
      actions.Walking.paused = true;
      // ref.current.rotation.y = 0

    }, actions.Walking.getClip().duration * 1000 + 2000)
  }
  useFrame(() => {
    if (!actions.Walking.paused) {
      // 根据动画的播放时间和滚动偏移来计算旋转角度
      const rotationSpeed = Math.PI / 2; // 90度每秒（可以根据需要调整）
      const rotation = actions.Walking.time * rotationSpeed;


      // 将模型的 y 轴旋转
      ref.current.rotation.y = rotation;
    }
  });
  return (
    <group {...props} ref={ref}>
      <primitive object={gltfData.scene} />
      <Html><button onClick={aa}>sdsd</button></Html>
    </group>
  )
};


