
// spring 動畫, 想要rotation有process

import React, { useRef, useMemo, useState, useCallback } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { MeshStandardMaterial, MeshLambertMaterial, MeshMatcapMaterial, Euler } from 'three';
import { useSpring, animated } from '@react-spring/web'
import { Canvas, useFrame } from "@react-three/fiber"



export function ScrollPikachu3(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/pikachu/source/pikachu2.glb");
  const { actions } = useAnimations(animations, group);
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

  const earBone = nodes.PikachuM_1.skeleton.bones[27]
  const initEarBone = nodes.PikachuM_1.skeleton.bones[27].rotation
  const springProps = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, Math.PI / 2, 0] },
  });

  useFrame(() => {
    if (a) {
      if (nodes.PikachuM_1.skeleton.bones[27].rotation.x > -1 && nodes.PikachuM_1.skeleton.bones[27].rotation.y < 1) {
        nodes.PikachuM_1.skeleton.bones[27].rotation.x -= 0.03;
        // nodes.PikachuM_1.skeleton.bones[27].rotation.x = -1;
        nodes.PikachuM_1.skeleton.bones[27].rotation.y += 0.02;
        // nodes.PikachuM_1.skeleton.bones[27].rotation.y = 1;


      }
    }
  })
  const initBoneX = nodes.PikachuM_1.skeleton.bones[27].rotation.x;
  const initBoneY = nodes.PikachuM_1.skeleton.bones[27].rotation.y;

  useFrame(() => {
    if (a) {
      const bone = nodes.PikachuM_1.skeleton.bones[27].rotation;

      if (bone.x > -1 && bone.y < 1) {
        bone.x = Math.sin(0.002) * 0.5;
        bone.y = Math.cos(0.002) * 0.5;
      }
    }
  });



  const bb = () => {
    setA(true)
  }

  return (
    <>
      <group ref={group} {...props} dispose={null}>
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
        bb
      }>按我</button></Html>
    </>
  );
}

