
import React, { useRef, useMemo, useCallback } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { MeshStandardMaterial, MeshLambertMaterial, MeshMatcapMaterial, Euler } from 'three';

const Test = (props) => {
  const group = useRef();
  const group2 = useRef();
  const { nodes, materials, animations } = useGLTF("/pikachu/source/pikachu2.glb");
  const { actions } = useAnimations(animations, group);

  const bb = () => {
    actions.play(); // 播放动画
  };

  return (
    <group ref={props.ref1} position={props.position} {...props} dispose={null}>
      {/* ... your existing Pikachu components */}
      <Html>
        <button onClick={bb}>按我</button>
      </Html>
    </group>
  );
}

export default Test
