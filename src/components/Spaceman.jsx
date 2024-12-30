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
            rotation={[0, 0, 0]}
        >
            <primitive object={scene} />
        </mesh>
    );
};

const SpacemanCanvas = ({ scrollContainer }) => {
    const [scale, setScale] = useState([2, 2, 2]); // Increased scale
    const [position, setPosition] = useState([0.2, -0.7, 0]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScale([1.5, 1.5, 1.5]); // Increased scale for smaller screens
                setPosition([0.2, -0.1, 0]);
            } else if (window.innerWidth < 1024) {
                setScale([2, 2, 2]); // Increased scale for medium screens
                setPosition([0.2, -0.3, 0]);
            } else if (window.innerWidth < 1280) {
                setScale([2, 2, 2]); // Increased scale for larger screens
                setPosition([0.2, -0.4, 0]);
            } else if (window.innerWidth < 1536) {
                setScale([2, 2, 2]); // Increased scale for larger screens
                setPosition([0.2, -0.5, 0]);
            } else {
                setScale([2, 2, 2]); // Increased scale for largest screens
                setPosition([0.2, -0.7, 0]);
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
            className={`w-full h-screen bg-transparent z-10`}
            camera={{ near: 0.1, far: 1000 }}
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
