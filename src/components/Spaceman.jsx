import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../assets/3d/spaceman.glb";
import CanvasLoader from "./Loader";

const Spaceman = ({ scale, position }) => {
    const spacemanRef = useRef();
    const { scene, animations } = useGLTF(spacemanScene);
    const { actions } = useAnimations(animations, spacemanRef);

    useEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            Object.values(actions).forEach((action) => action.play());
        } else {
            console.error("No animations found");
        }
    }, [actions, scene]);

    return (
        <mesh
            ref={spacemanRef}
            position={position}
            scale={scale}
            rotation={[0, -Math.PI / 9, 0]}
        >
            <primitive object={scene} />
        </mesh>
    );
};

const SpacemanCanvas = ({ scrollContainer }) => {
    const [scale, setScale] = useState([2, 2, 2]);
    const [position, setPosition] = useState([0, 0, 0]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) { // xs
                setScale([1.2, 1.2, 1.2]);
                setPosition([1.25, -1.6, 0]);
            } else if (width < 768) { // sm
                setScale([1.25, 1.25, 1.25]);
                setPosition([1.25, -1.6, 0]);
            } else if (width < 1024) { // md
                setScale([1.25, 1.25, 1.25]);
                setPosition([1.2, -1.6, 0]);
            } else if (width < 2000) { // lg
                setScale([1.35, 1.35, 1.35]);
                setPosition([1.2, -1.6, 0]);
            } else { // xl and above
                setScale([1.4, 1.4, 1.4]);
                setPosition([0.6, -1.6, 0]);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Canvas
            className="w-full h-full bg-transparent z-10"
            camera={{ 
                position: [0, 0, 5],
                fov: 45,
                near: 0.1,
                far: 1000
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <directionalLight position={[1, 1, 1]} intensity={1} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight
                    position={[0, 50, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                />
                <hemisphereLight
                    skyColor="#b1e1ff"
                    groundColor="#000000"
                    intensity={1}
                />

                <Spaceman
                    scale={scale}
                    position={position}
                />
            </Suspense>
        </Canvas>
    );
};

export default SpacemanCanvas;
