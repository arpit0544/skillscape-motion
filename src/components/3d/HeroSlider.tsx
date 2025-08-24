
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, TorusKnot } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Beautiful Websites",
    subtitle: "Modern, responsive, and lightning-fast web solutions",
    component: "sphere"
  },
  {
    title: "Mobile Apps",
    subtitle: "Native and cross-platform applications that engage users",
    component: "box"
  },
  {
    title: "Brand Identity",
    subtitle: "Compelling visual identity that sets you apart",
    component: "torus"
  },
  {
    title: "Digital Growth",
    subtitle: "Strategic solutions that drive measurable business results",
    component: "blob"
  }
];

// 3D Components
const AnimatedSphere = ({ isActive }: { isActive: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.2]} visible={isActive}>
      <meshStandardMaterial 
        color="#2563eb" 
        emissive="#1d4ed8" 
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.7}
      />
    </Sphere>
  );
};

const AnimatedBox = ({ isActive }: { isActive: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[1.5, 1.5, 1.5]} visible={isActive}>
      <meshStandardMaterial 
        color="#3b82f6" 
        emissive="#2563eb" 
        emissiveIntensity={0.2}
        roughness={0.2}
        metalness={0.8}
      />
    </Box>
  );
};

const AnimatedTorus = ({ isActive }: { isActive: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[0.8, 0.3, 128, 16]} visible={isActive}>
      <meshStandardMaterial 
        color="#1d4ed8" 
        emissive="#3b82f6" 
        emissiveIntensity={0.4}
        roughness={0.1}
        metalness={0.9}
      />
    </TorusKnot>
  );
};

const AnimatedBlob = ({ isActive }: { isActive: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} visible={isActive}>
      <icosahedronGeometry args={[1.3, 2]} />
      <meshStandardMaterial 
        color="#1e40af" 
        emissive="#2563eb" 
        emissiveIntensity={0.5}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
};

const Scene = ({ currentSlide }: { currentSlide: number }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <AnimatedSphere isActive={slides[currentSlide]?.component === "sphere"} />
      <AnimatedBox isActive={slides[currentSlide]?.component === "box"} />
      <AnimatedTorus isActive={slides[currentSlide]?.component === "torus"} />
      <AnimatedBlob isActive={slides[currentSlide]?.component === "blob"} />
    </>
  );
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene currentSlide={currentSlide} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {slides[currentSlide]?.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {slides[currentSlide]?.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="btn-hero magnetic">
              Get a Quote
            </button>
            <button className="btn-ghost bg-white/10 border-white/30 text-white hover:bg-white/20">
              Our Services
            </button>
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-15" />
    </div>
  );
};

export default HeroSlider;
