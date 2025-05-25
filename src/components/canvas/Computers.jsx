import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Preload model outside the component
useGLTF.preload("/desktop_pc/scene1.glb");

const Computers = ({ isMobile }) => {
  const { scene } = useGLB("/desktop_pc/scene1.glb");

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
        scale={isMobile ? 0.45 : 0.75}
        position={isMobile ? [0, -1.9, -1.6] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Optional: error boundary to prevent app crash
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  return (
    <group
      onPointerDownCapture={(e) => {
        if (e.error) {
          console.error("3D error:", e.error);
          setHasError(true);
        }
      }}
    >
      {hasError ? (
        <Html>
          <div style={{ color: 'white', background: '#000', padding: '10px', borderRadius: '8px' }}>
            Failed to load 3D model.
          </div>
        </Html>
      ) : (
        children
      )}
    </group>
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
          position: isMobile ? [5, 2, 8] : [20, 3, 5],
          fov: 25,
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <color attach="background" args={["#1a1a1a"]} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ErrorBoundary>
            <Computers isMobile={isMobile} />
          </ErrorBoundary>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
