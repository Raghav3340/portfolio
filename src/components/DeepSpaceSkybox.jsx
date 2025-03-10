import { useGLTF, OrbitControls } from '@react-three/drei';

export default function DeepSpaceSkybox(props) {
  const { scene } = useGLTF('/models/deep_space_skybox.glb');
  
  return (
    <>
      <primitive object={scene} {...props} />
      <OrbitControls enableZoom={true} />
    </>
  );
}

useGLTF.preload('/models/deep_space_skybox.glb');
