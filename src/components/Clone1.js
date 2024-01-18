import React from 'react';
import { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, OrbitControls, SoftShadows, Html, Clone } from "@react-three/drei"


export const Clone1 = (props) => {

  // const { nodes, materials, animations } = useGLTF("/jump-transformed.glb")
  const gltfData = useGLTF("/pikachu/source/pikachu2.glb");

  const { nodes, materials, animations, } = useGLTF("/pikachu/source/pikachu2.glb")
  const scroll = useScroll()

  const { ref: p1, actions: p2 } = useAnimations(animations)
  const { ref: p3, actions: p4 } = useAnimations(animations)
  useEffect(() => {
    p2.Walking.reset().play().paused = true;

    p4.Walking.reset().play().paused = true;
  }, [p2.Walking, p4.Walking]);


  const aa = () => {
    p2.Walking.time = p2.Walking.getClip().duration;
    p4.Walking.time = p4.Walking.getClip().duration;

    p2.Walking.paused = false;
    p4.Walking.paused = false;

    setTimeout(() => {
      p2.Walking.paused = true;
      p4.Walking.paused = true;

    }, p2.Walking.getClip().duration * 1000 + 2000)
  }
  useFrame(() => {
    if (!p2.Walking.paused) {
      // 根据动画的播放时间和滚动偏移来计算旋转角度
      const rotationSpeed = Math.PI / 2; // 90度每秒（可以根据需要调整）
      const rotation = p2.Walking.time * rotationSpeed;


      // 将模型的 y 轴旋转
      p1.current.rotation.y = rotation;
      p3.current.rotation.y = rotation;
    }
  });
  return (
    <>
      <group {...props} ref={p1}>
        <primitive object={gltfData.scene} />
      </group>
      {/* <group {...props} ref={p3}>
        <primitive object={gltfData.scene} />
      </group> */}
      <Html><button onClick={aa}>sdsd</button></Html>
      <group {...props} ref={p3}>
        <Clone object={gltfData.scene} scale={0.8} position-x={-1} />
      </group>
    </>
  )
};




