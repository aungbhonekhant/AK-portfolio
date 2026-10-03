import { useProgress } from "@react-three/drei";

// Rendered as plain DOM next to the <Canvas> (not drei's <Html> inside it):
// <Html> unmounts its own React root during commit, which React 19 rejects.
const CanvasLoader = () => {
  const { active, progress } = useProgress();
  if (!active) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        pointerEvents: "none",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </div>
  );
};

export default CanvasLoader;
