import { a, useSpring } from "@react-spring/three";
import {
  Box,
  MeshWobbleMaterial,
  softShadows,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

softShadows();

const AnimatedBox = ({ args, color, position, speed }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      colorManagement
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry attach={"geometry"} args={args} />
      <MeshWobbleMaterial
        factor={0.8}
        attach={"material"}
        color={color}
        speed={speed}
      />
    </a.mesh>
  );
};

const CanvasBox = () => {
  const mesh = useRef(null);
  return (
    <div style={{ height: "100vh", padding: "20px" }}>
      <strong>Features</strong>
      <li>Orbital control</li>
      <li>Scaleable </li>
      <Canvas shadowMap camera={{ position: [-12, 16, 13], fov: 20 }}>
        <ambientLight intensity={0.2} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight intensity={0.8} position={[8, 1, 0]} />
        <pointLight intensity={0.5} position={[-4, 1, -4]} />
        <pointLight intensity={0.5} position={[-4, 1, -4]} />
        <pointLight intensity={0.8} position={[4, 1, -5]} />
        <group>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[10, -4, 10]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.5} />
          </mesh>
        </group>

        <AnimatedBox
          speed={1}
          args={[2, 2, 2]}
          position={[0, 1, 0]}
          color={"red"}
        />
        <AnimatedBox speed={4} position={[-3, 1, -3]} color={"green"} />
        <AnimatedBox speed={4} position={[3, 1, 3]} color="blue" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
export default CanvasBox;
// mesh--> class representing traingular polygon mesh based object
// BufferGeometry-> line on point geometry
//material--> appreance of object
