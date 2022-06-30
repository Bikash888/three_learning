import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { ChromePicker } from "react-color";

function Model({ ...props }) {
  const group = useRef();
  console.log(props?.color?.body);
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props?.color?.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props?.color?.body}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props?.color?.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props?.color?.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props?.color?.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props?.color?.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props?.color?.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props?.color?.patch}
      />
    </group>
  );
}

const Shoes = ({ ...props }) => {
  const shoeRef = useRef(null);
  const [colors, setColor] = useState({
    laces: "",
    patch: "",
    band: "",
    body: "",
    caps: "",
    stripes: "",
    inner: "",
    sole: "",
  });

  return (
    <div
      style={{
        height: "100vh",
        padding: "0px 20px 0px 0px",
        display: "flex",
      }}
    >
      <div
        style={{
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          // backgroundColor: "red",
          maxWidth: 300,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <div className="color-wrapper">
          <label>Main color</label>

          <input
            onChange={(e) => setColor({ ...colors, body: e.target.value })}
            type="color"
          />
        </div>
        <div className="color-wrapper">
          <label>Laces color</label>
          <input
            onChange={(e) => setColor({ ...colors, laces: e.target.value })}
            type="color"
          />
        </div>
        <div className="color-wrapper">
          <label>Laces caps color</label>
          <input
            onChange={(e) => setColor({ ...colors, caps: e.target.value })}
            type="color"
          />
        </div>
        <div className="color-wrapper">
          <label>Inner sole color</label>
          <input
            onChange={(e) => setColor({ ...colors, inner: e.target.value })}
            type="color"
          />
        </div>
        <div className="color-wrapper">
          <label>Outer sole color</label>
          <input
            onChange={(e) => setColor({ ...colors, sole: e.target.value })}
            type="color"
          />
        </div>
        <div className="color-wrapper">
          <label>Stripe color</label>
          <input
            onChange={(e) => setColor({ ...colors, stripes: e.target.value })}
            type="color"
          />
        </div>
        <div className="color-wrapper">
          <label>Band color</label>
          <input
            onChange={(e) => setColor({ ...colors, band: e.target.value })}
            type="color"
          />
        </div>
        <div className="color-wrapper">
          <label>Patch color</label>
          <input
            onChange={(e) => setColor({ ...colors, patch: e.target.value })}
            type="color"
          />
        </div>
      </div>
      <Canvas camera={{ fov: 40 }}>
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight
            intensity={0.8}
            angle={0.1}
            penumbra={1}
            position={[12, 20, 12]}
          />
          <Model color={colors} />
          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Shoes;
