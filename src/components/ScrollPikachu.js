import React from 'react';
import { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, SoftShadows, Html } from "@react-three/drei"


export const ScrollPikachu = (props) => {

  // const { nodes, materials, animations } = useGLTF("/jump-transformed.glb")
  const gltfData = useGLTF("/pikachu/source/pikachu2.glb");

  const { nodes, materials, animations } = useGLTF("/pikachu/source/pikachu2.glb")
  const scroll = useScroll()

  const { ref, actions } = useAnimations(animations)
  useEffect(() => void (actions.Walking.reset().play().paused = true), [])
  useFrame(() => (actions.Walking.time = actions.Walking.getClip().duration * scroll.offset))

  console.log("nodes", nodes)

  return (
    <group {...props} ref={ref}>
      <primitive object={gltfData.scene} />
      {/* <skinnedMesh castShadow receiveShadow geometry={nodes.Ch03.geometry} material={materials.Ch03_Body} skeleton={nodes.Ch03.skeleton} /> */}

    </group>
  )
};


