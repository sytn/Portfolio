import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const Model = () => {
    const { scene } = useGLTF('/models/book.glb');
    const ref = useRef();

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
        }
    });

    return <primitive ref={ref} object={scene} scale={[2.5, 2.5, 2.5]} castShadow />;
};

const ThreeDScene = () => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const totalDuration = 1500; // Toplam yükleme süresi
        const incrementTime = 30; // Her artış arasındaki süre
        const incrementValue = (incrementTime / totalDuration) * 100; // Yüzde artışı
        
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev + incrementValue >= 100) {
                    clearInterval(interval);
                    setIsLoaded(true);
                    return 100;
                }
                return prev + incrementValue;
            });
        }, incrementTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            {/* Yükleme sırasında ilerleme çubuğu */}
            {!isLoaded && (
                <progress
                    value={progress}
                    max={100}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '30%',
                        height: '10px',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '10px',
                    }}
                />
            )}
            <Canvas style={{ height: '100%', width: '100%' }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                {isLoaded && <Model />} {/* Model yalnızca yüklendiğinde render edilir */}
                
                {/* OrbitControls - Zoom ve pan'ı devre dışı bırak */}
                <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
                
                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
};

export default ThreeDScene;
