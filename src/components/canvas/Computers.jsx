import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Choose model path based on device type
  const modelPath = isMobile
    ? ".public/desktop_pc/output.glb"        // smaller model for mobile
    : ".public/desktop_pc/optimized.glb";    // full model for desktop

  const { scene } = useGLTF(modelPath);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.35 : 0.75}                      // smaller scale on mobile
        position={isMobile ? [0, -2.2, -2] : [0, -3.25, -1.5]}  // adjusted position for mobile
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={isMobile ? 1 : [1, 2]}
        camera={{
          position: isMobile ? [7, 3, 10] : [20, 3, 5],  // move camera back on mobile
          fov: 25,
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={isMobile}  // enable zoom on mobile for better control
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;

