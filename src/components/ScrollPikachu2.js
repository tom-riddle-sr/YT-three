
import React, { useRef, useMemo, useCallback } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { Euler } from 'three';

//改變單個bone的屬性

export function ScrollPikachu2(props) {
  const group1 = useRef();
  const { nodes, materials, animations } = useGLTF("/pikachu/source/pikachu2.glb");
  const { actions } = useAnimations(animations, group1);


  // const aa = useMemo(() => {
  //   return new MeshStandardMaterial({ color: "pink" });
  // }, []);

  const aa = useCallback(() => {
    const newPosition = [50, 0, 0];
    // nodes.LEar1.position.set(...newPosition);
    // nodes.LEar1.scale.set(2, 2, 2);
    const newRotation = new Euler(0, 0, -Math.PI / 2);
    nodes.LEar1.rotation.copy(newRotation)
  }, [nodes.LEar1]);


  return (
    <>
      <group ref={group1} {...props} dispose={null} >
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
      <Html><button style={{ background: "pink", margin: "20px" }} onClick={
        aa
      }>按我</button></Html>
    </>
  );
}

// useGLTF.preload("/pikachu2.glb");