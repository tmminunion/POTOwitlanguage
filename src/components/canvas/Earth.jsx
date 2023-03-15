import React, { Suspense, useRef  } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./Model/glob.gltf");
 const lightRef = useRef()
  useFrame(() => {
    lightRef.current.position.x = Math.sin(Date.now() * 0.002) * 5
    lightRef.current.position.y = Math.cos(Date.now() * 0.001) * 5
  })
  return (
    <>
     <pointLight position={[10, 10, 10]} ref={lightRef} />
    <primitive object={earth.scene} scale={1.5} position-y={0} rotation-y={0} /></>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
