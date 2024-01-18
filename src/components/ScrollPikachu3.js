
// 想要rotation有process,耳朵做鐘擺運動

import React, { useState, useEffect } from "react";
import { useGLTF, useAnimations, Html, Clone } from "@react-three/drei";
import { MeshStandardMaterial, MeshLambertMaterial, MeshMatcapMaterial, Euler } from 'three';
import { useSpring, animated } from '@react-spring/web'
import { Canvas, useFrame } from "@react-three/fiber"

export function ScrollPikachu3(props) {

  const { scene, nodes, materials, animations } = useGLTF("/pikachu/source/pikachu2.glb");
  const { ref, actions } = useAnimations(animations);
  const [a, setA] = useState(false)

  const findBones = () => {
    const indexOfLEar1 = nodes.PikachuM_1.skeleton.bones.findIndex((item) => item.name === "LEar1");
    if (indexOfLEar1 !== -1) {
      // 如果找到了具有名稱 "LEar1" 的骨頭
      console.log("答案是:", indexOfLEar1)
    } else {
      // 如果沒有找到名稱為 "LEar1" 的骨頭
      console.log("沒這東西啦");
    }

  };

  findBones()
  useEffect(() => void (actions.Walking.reset().play().paused = true), [])

  useFrame(() => {
    if (a) {
      const bone = nodes.PikachuM_1.skeleton.bones[27].rotation;
      //鐘擺的運動通常是一種週期性擺動，它的振幅隨時間變化
      if (bone.x > -1 && bone.y < 1) {
        bone.z = Math.cos(new Date() * 0.002) * 0.5;
        bone.z = Math.sin(new Date() * 0.002) * 0.5;
      }
      actions.Walking.paused = false;
    }
  });

  return (
    <>
      <group ref={ref} {...props} dispose={null}>
        <group name="Scene">
          <group name="Pikachu" rotation={[Math.PI / 2, 0, 0]} scale={0.2}>
            <group name="PikachuM" >
              {/* 全部 */}
              <skinnedMesh
                castShadow receiveShadow
                name="PikachuM_1"
                geometry={nodes.PikachuM_1.geometry}
                material={materials["Material 160"]}
                skeleton={nodes.PikachuM_1.skeleton}
              />
              {/*腮紅*/}
              <skinnedMesh
                name="PikachuM_2"
                geometry={nodes.PikachuM_2.geometry}
                material={materials["Material.001"]}
                skeleton={nodes.PikachuM_2.skeleton}
              />
              {/*嘴巴*/}
              <skinnedMesh
                name="PikachuM_3"
                geometry={nodes.PikachuM_3.geometry}
                material={materials["Material.003"]}
                skeleton={nodes.PikachuM_3.skeleton}
              />
              {/*眼睛*/}
              <skinnedMesh
                name="PikachuM_4"
                geometry={nodes.PikachuM_4.geometry}
                material={materials["Material.002"]}
                skeleton={nodes.PikachuM_4.skeleton}
              />
            </group>
            <primitive object={nodes.pm0025_00_pikachu} />
          </group>
          <group name="Sun" />
        </group>
      </group>

      <Html><button onClick={
        () => { setA(true) }
      }>按我</button></Html>
    </>
  );
}

