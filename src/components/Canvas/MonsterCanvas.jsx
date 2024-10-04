import { Canvas } from "@react-three/fiber";
import 'bootstrap/dist/css/bootstrap.min.css';
import Monster from "../Monster/Monster";
import { useGLTF } from "@react-three/drei";
import {useEffect} from "react";


function MonsterCanvas() {
  useGLTF.preload('Choul/SampleScene.gltf');
  useGLTF.preload('Choul-Boss/Choul-Boss.gltf');
  useGLTF.preload('Choul-Festering/Choul-Festering.gltf');
  useGLTF.preload('Choul-Grotesque/Choul-Grotesque.gltf');
  useGLTF.preload('Choul-Scavenger/Choul-Scavenger.gltf');


  return (<>
      <div className='h-100'>
          <Canvas shadows camera={{position: [-0.3,2,5]}}>
              <directionalLight
                  position={[1, 15, 0]}
                  castShadow
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                  color={'white'}
              />
              <Monster />
              <mesh rotation-x={5.1} receiveShadow >
                  <planeGeometry args={[10, 10, 1, 1]} />
                  <shadowMaterial transparent opacity={0.7}/>
              </mesh>
          </Canvas>
      </div>
  </>)
}

export default MonsterCanvas;
