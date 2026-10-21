import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { useTheme } from "styled-components";

import { MyCanvas } from "./style/HeroScene";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const WIDE = 1280; // matches the hero layout breakpoint in Hero/style/Hero.js
const EDGE = 40; // keep clear of the nav dots and canvas edges
const SCROLL_HINT = 90; // keep clear of the scroll indicator at the bottom
const MIN_RADIUS = 70; // below this the object is a blob; hide it instead

// Finds where the object fits. On wide screens the canvas is its own column
// next to the text; below that the text sits on top of the canvas, so use
// the larger free gap, either below the text or to its right. Returns null
// when neither gap is big enough (e.g. 1024x768, where the text fills it).
const layout = (canvas, text) => {
  const { width, height } = canvas;
  if (window.innerWidth >= WIDE || !text) {
    return {
      x: width / 2,
      y: height / 2,
      r: Math.min(width * 0.36, height * 0.3),
    };
  }
  const below = {
    top: text.bottom - canvas.top + 24,
    bottom: height - SCROLL_HINT,
  };
  const belowH = below.bottom - below.top;
  const belowR = Math.min(belowH / 2, width * 0.32) * 0.9;
  const right = { left: text.right - canvas.left + 24, right: width - EDGE };
  const rightW = right.right - right.left;
  const rightR = Math.min(rightW / 2, (height - SCROLL_HINT) * 0.3) * 0.9;
  if (Math.max(rightR, belowR) < MIN_RADIUS) return null;
  if (rightR > belowR) {
    return {
      x: right.left + rightW / 2,
      y: (text.top - canvas.top + text.bottom - canvas.top) / 2,
      r: rightR,
    };
  }
  return { x: width / 2, y: below.top + belowH / 2, r: belowR };
};

const Stage = ({ children, speed, avoid }) => {
  const group = useRef();
  const { viewport, size, gl } = useThree();
  const reduced = useRef(prefersReducedMotion());

  // size changes on resize, which re-runs this with fresh measurements
  const canvasRect = gl.domElement.getBoundingClientRect();
  const spot = layout(
    {
      top: canvasRect.top,
      left: canvasRect.left,
      width: size.width,
      height: size.height,
    },
    avoid?.current?.getBoundingClientRect()
  );

  useFrame((_, delta) => {
    if (group.current && !reduced.current)
      group.current.rotation.y += delta * speed;
  });

  if (!spot) return null;
  const unit = viewport.width / size.width;
  const position = [
    (spot.x - size.width / 2) * unit,
    (size.height / 2 - spot.y) * unit,
    0,
  ];
  const radius = spot.r * unit;

  return (
    <group position={position} scale={radius}>
      {/* drag spins the object around its own centre, like the old model */}
      <PresentationControls
        global
        polar={[0, 0]}
        azimuth={[-Infinity, Infinity]}
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        <group ref={group}>{children}</group>
      </PresentationControls>
    </group>
  );
};

const HeroScene = ({ children, speed = 0.15, avoid }) => {
  const theme = useTheme();
  return (
    <MyCanvas camera={{ position: [0, 0, 10], fov: 35 }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight
        position={[-6, -2, -4]}
        intensity={0.6}
        color={theme.main}
      />
      <Stage speed={speed} avoid={avoid}>
        {children}
      </Stage>
    </MyCanvas>
  );
};

export default HeroScene;
