import React from 'react';
import { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, SoftShadows, Html } from "@react-three/drei"


export const ScrollGirl = (props) => {

  const { nodes, materials, animations } = useGLTF("/jump-transformed.glb")
  const scroll = useScroll()

  const { ref, actions } = useAnimations(animations)
  useEffect(() => void (actions.jump.reset().play().paused = true), [])
  useFrame(() => (actions.jump.time = actions.jump.getClip().duration * scroll.offset))

  console.log("actions", actions)

  return (
    <group {...props} ref={ref}>
      <primitive object={nodes.mixamorigHips} />
      <skinnedMesh castShadow receiveShadow geometry={nodes.Ch03.geometry} material={materials.Ch03_Body} skeleton={nodes.Ch03.skeleton} />

    </group>
  )
};


