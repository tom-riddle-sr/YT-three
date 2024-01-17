
// 完成使用3D模型,一步到位的移動

import React, { useRef, useMemo, useCallback } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { MeshStandardMaterial, MeshLambertMaterial, MeshMatcapMaterial, Euler } from 'three';

export function ScrollPikachu3(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/pikachu/source/pikachu2.glb");
  const { actions } = useAnimations(animations, group);


  const aa = useCallback(() => {
    const newRotation = new Euler(0, 0, -Math.PI / 2);
    nodes.LEar1.rotation.copy(newRotation)
  }, [nodes.LEar1]);


  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Pikachu" rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
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
        aa
      }>按我</button></Html>
    </>
  );
}

