import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Box = ({ args, color, position }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach={"geometry"} args={args} />
      <meshStandardMaterial attach={"material"} color={color} />
    </mesh>
  );
};

const CanvasBox = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [-15, 200, 1000], fov: 1000 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 20, 0]} intensity={1} />
        <pointLight intensity={0.5} position={[8, 1, 0]} />
        <pointLight intensity={0.5} position={[-4, 1, -4]} />
        <pointLight intensity={0.5} position={[-4, 1, -4]} />
        <pointLight intensity={0.8} position={[4, 1, -5]} />
        <Box position={[0, 1, 0]} color={"red"} />
        <Box position={[-6, 1, -5]} color={"green"} />
        <Box position={[5, 1, -6]} color="lightblue" />
      </Canvas>
    </div>
  );
};
export default CanvasBox;
// mesh--> class representing traingular polygon mesh based object
// BufferGeometry-> line on point geometry
//material--> appreance of object
