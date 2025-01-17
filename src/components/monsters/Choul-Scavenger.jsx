/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Choul-Scavenger.gltf 
*/

import React, {useEffect} from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import {useMonsterStatus} from "../../contexts/MonsterStatus";
import {isVisible} from "bootstrap/js/src/util";

export default function Choul_Scavenger(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('Choul-Scavenger/Choul-Scavenger.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)
  const { setAnimations, animationIndex } = useMonsterStatus();

  useEffect(() => {
    setAnimations(names)
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      if (animationIndex !== 3){
        try{
          actions[names[animationIndex]].fadeOut(0.5);
        }
        catch (er) {}
      }
    }
  }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Choul-Scavenger">
        <group name="ghoul_scavenger_allinone">
          <group name="root">
            <primitive object={nodes.pelvis} />
          </group>
          <skinnedMesh name="ghoul" geometry={nodes.ghoul.geometry} material={materials.ghoul_scavenger_mat} skeleton={nodes.ghoul.skeleton} castShadow receiveShadow/>
          <skinnedMesh name="hair" geometry={nodes.hair.geometry} material={materials.ghoul_scavenger_mat} skeleton={nodes.hair.skeleton} castShadow receiveShadow/>
        </group>
        <PerspectiveCamera name="Main_Camera" makeDefault={false} far={1000.134} near={0.3} fov={60} position={[0, 1, -10]} rotation={[-Math.PI, 0, -Math.PI]} />
        <directionalLight intensity={3.142} decay={2} color="#fff4d6" position={[0, 3, 0]} rotation={[-2.199, -0.327, -2.725]} target={nodes.Directional_Light.target} >
          <primitive object={nodes.Directional_Light.target} position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight position={[0, -1, 3]} intensity={3} />
        <directionalLight position={[-1, 3, -0.2]} intensity={3} />
        <directionalLight position={[2, 0, 1]} intensity={3} />
      </group>
    </group>
  )
}

