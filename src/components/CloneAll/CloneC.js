import React from 'react';
import { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, OrbitControls, SoftShadows, Html, Clone } from "@react-three/drei"

export const CloneC = (props) => {
  const { object, position, refs } = props
  const { ref: p1, actions: p2 } = useAnimations(object.animations)



  return (
    <>
      <group {...props} ref={refs} position={position} >
        <Clone object={object.scene} scale={0.8} />
      </group>
    </>
  )
}

export default CloneC
