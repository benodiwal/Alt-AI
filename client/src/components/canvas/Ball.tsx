import { Canvas, useFrame } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import { Suspense } from "react";

interface BallCanvasProps {
    icon: string;
}

const Ball = (props: any) => {

    const [decal] = useTexture([props.imgURL]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
        <ambientLight intensity={0.25}/>
        <directionalLight position={[0, 0, 0.05]}/>
        <mesh castShadow receiveShadow scale={2.75}>
            <sphereGeometry/>
            <meshStandardMaterial 
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            />
            <Decal 
            map={decal}
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            />
        </mesh>
    </Float>
  )
}

const BallCanvas: React.FC<BallCanvasProps> = ({icon}) => {
    
    return(
        <Canvas
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        >
            
            <Suspense fallback={null}>
                <OrbitControls 
                enableZoom={false}
                />
                <Ball imgURL={icon}/>
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default BallCanvas
