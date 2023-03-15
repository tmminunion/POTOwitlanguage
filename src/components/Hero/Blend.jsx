import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from '../Loader';
import GetObjeck from '../Generator/GetObjeck';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const BlenderCanvas = () => {
  if (isMobile) {
    return <div></div>
  } else {
   
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
              />
              
        <GetObjeck 
        files={'./Asus/asus.gltf'}
        position={[3.45, -2.5, -2]}
        rotation={[0.3,0, 0]}
        scale={1.8}
      />
      </Suspense>

      <Preload all />
    </Canvas>
    )
  }
};
export default BlenderCanvas;
