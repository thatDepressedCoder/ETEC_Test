/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import roomScene from "../assets/3d/ETEC.glb";


export function ETEC(props) {
    const { nodes, materials } = useGLTF(roomScene)

    const roomRef = useRef();

    const [rotationY, setRotationY] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update rotationY every second (millisecond)
            setRotationY(prevRotationY => prevRotationY + 0.01);
        }, 15);

        return () => clearInterval(interval);
    }, []); // Run effect only once on component mount

    return (
        <group {...props} dispose={null} ref={roomRef}>
            <group name="Scene">
                <group
                    name="Google_3D_Tiles"
                    position={[-22, -4, 0]}
                    scale={0.158}
                    rotation={[0, rotationY, 0]}
                    userData={{ name: 'Google 3D Tiles' }}>
                    <mesh
                        name="Mesh_0914"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914.geometry}
                        material={materials['Material_0.767']}
                    />
                    <mesh
                        name="Mesh_0914_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_1.geometry}
                        material={materials['Material_0.769']}
                    />
                    <mesh
                        name="Mesh_0914_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_2.geometry}
                        material={materials['Material_0.772']}
                    />
                    <mesh
                        name="Mesh_0914_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_3.geometry}
                        material={materials['Material_0.773']}
                    />
                    <mesh
                        name="Mesh_0914_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_4.geometry}
                        material={materials['Material_0.774']}
                    />
                    <mesh
                        name="Mesh_0914_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_5.geometry}
                        material={materials['Material_0.775']}
                    />
                    <mesh
                        name="Mesh_0914_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_6.geometry}
                        material={materials['Material_0.776']}
                    />
                    <mesh
                        name="Mesh_0914_7"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_7.geometry}
                        material={materials['Material_0.777']}
                    />
                    <mesh
                        name="Mesh_0914_8"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_8.geometry}
                        material={materials['Material_0.778']}
                    />
                    <mesh
                        name="Mesh_0914_9"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_9.geometry}
                        material={materials['Material_0.779']}
                    />
                    <mesh
                        name="Mesh_0914_10"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_10.geometry}
                        material={materials['Material_1.072']}
                    />
                    <mesh
                        name="Mesh_0914_11"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_11.geometry}
                        material={materials['Material_0.780']}
                    />
                    <mesh
                        name="Mesh_0914_12"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_12.geometry}
                        material={materials['Material_0.785']}
                    />
                    <mesh
                        name="Mesh_0914_13"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_13.geometry}
                        material={materials['Material_0.787']}
                    />
                    <mesh
                        name="Mesh_0914_14"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_14.geometry}
                        material={materials['Material_0.788']}
                    />
                    <mesh
                        name="Mesh_0914_15"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_15.geometry}
                        material={materials['Material_0.789']}
                    />
                    <mesh
                        name="Mesh_0914_16"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_16.geometry}
                        material={materials['Material_0.796']}
                    />
                    <mesh
                        name="Mesh_0914_17"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_17.geometry}
                        material={materials['Material_0.797']}
                    />
                    <mesh
                        name="Mesh_0914_18"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_18.geometry}
                        material={materials['Material_0.798']}
                    />
                    <mesh
                        name="Mesh_0914_19"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_19.geometry}
                        material={materials['Material_0.799']}
                    />
                    <mesh
                        name="Mesh_0914_20"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_20.geometry}
                        material={materials['Material_0.800']}
                    />
                    <mesh
                        name="Mesh_0914_21"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_21.geometry}
                        material={materials['Material_0.801']}
                    />
                    <mesh
                        name="Mesh_0914_22"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_22.geometry}
                        material={materials['Material_0.802']}
                    />
                    <mesh
                        name="Mesh_0914_23"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_23.geometry}
                        material={materials['Material_0.803']}
                    />
                    <mesh
                        name="Mesh_0914_24"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_24.geometry}
                        material={materials['Material_0.804']}
                    />
                    <mesh
                        name="Mesh_0914_25"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_25.geometry}
                        material={materials['Material_0.815']}
                    />
                    <mesh
                        name="Mesh_0914_26"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_26.geometry}
                        material={materials['Material_0.816']}
                    />
                    <mesh
                        name="Mesh_0914_27"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_27.geometry}
                        material={materials['Material_0.817']}
                    />
                    <mesh
                        name="Mesh_0914_28"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_28.geometry}
                        material={materials['Material_0.818']}
                    />
                    <mesh
                        name="Mesh_0914_29"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_29.geometry}
                        material={materials['Material_0.819']}
                    />
                    <mesh
                        name="Mesh_0914_30"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_30.geometry}
                        material={materials['Material_0.820']}
                    />
                    <mesh
                        name="Mesh_0914_31"
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_0914_31.geometry}
                        material={materials['Material_0.821']}
                    />
                </group>
            </group>
        </group>
    )
}
