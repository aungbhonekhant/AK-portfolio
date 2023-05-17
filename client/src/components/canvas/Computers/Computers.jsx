import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../../Loader/Loader";
import { MyCanvas } from "./style/Computers";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./sci_-_fi_computer_game_ready/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={10} groundColor="#6495ED" />
      <pointLight intensity={1} />
      <spotLight
        position={[-50, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.85 : isTablet ? 1 : 1.5}
        position={
          isMobile ? [0, -4, -0.6] : isTablet ? [0, -4, -1] : [0, -3.1, -0.5]
        }
        rotation={[0.1, -0.1, -0.01]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mobileQuery.matches);

    const tabletQuery = window.matchMedia(
      "(min-width: 501px) and (max-width: 1279px)"
    );
    setIsTablet(tabletQuery.matches);

    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleTabletQueryChange = (event) => {
      setIsTablet(event.matches);
    };

    mobileQuery.addEventListener("change", handleMobileQueryChange);
    tabletQuery.addEventListener("change", handleTabletQueryChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileQueryChange);
      tabletQuery.removeEventListener("change", handleTabletQueryChange);
    };
  }, []);
  return (
    <MyCanvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 30], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </MyCanvas>
  );
};

export default ComputersCanvas;
