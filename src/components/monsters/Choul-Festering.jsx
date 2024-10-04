/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Choul-Festering.gltf 
*/

import React, {useEffect} from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import {useMonsterStatus} from "../../contexts/MonsterStatus";

export default function Choul_Festering(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('Choul-Festering/Choul-Festering.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)
  const {setAnimations, animationIndex} = useMonsterStatus();

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
      <group name="Choul-Festering">
        <group name="ghoul_festering_allinone">
          <group name="root">
            <primitive object={nodes.pelvis} />
          </group>
          <skinnedMesh name="festering_ghoul" geometry={nodes.festering_ghoul.geometry} material={materials.ghoul_festering_mat} skeleton={nodes.festering_ghoul.skeleton} castShadow receiveShadow/>
        </group>
        <PerspectiveCamera name="Main_Camera" makeDefault={false} far={1000.134} near={0.3} fov={60} position={[0, 1, -10]} rotation={[-Math.PI, 0, -Math.PI]} />
        <directionalLight intensity={3.142} decay={2} color="#fff4d6" position={[0, 3, 0]} rotation={[-2.199, -0.327, -2.725]} target={nodes.Directional_Light.target} >
          <primitive object={nodes.Directional_Light.target} position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight position={[0, -2, 3]} intensity={2} />
        <directionalLight position={[3, 3, 1]} intensity={3} />
        <directionalLight position={[-2, 2, -3]} intensity={2} />
        <directionalLight position={[-2, -5, 2]} intensity={2} />
        <directionalLight position={[-0.5, -0.5, 1]} intensity={0.7} />
      </group>
    </group>
  )
}
