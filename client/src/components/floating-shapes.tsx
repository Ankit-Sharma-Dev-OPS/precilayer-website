import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: 'circle' | 'triangle' | 'square' | 'hexagon';
  opacity: number;
  duration: number;
}

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random floating shapes
    const generateShapes = () => {
      const newShapes: Shape[] = [];
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 60 + 20,
          rotation: Math.random() * 360,
          type: ['circle', 'triangle', 'square', 'hexagon'][Math.floor(Math.random() * 4)] as Shape['type'],
          opacity: Math.random() * 0.3 + 0.1,
          duration: Math.random() * 20 + 10
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
    window.addEventListener('resize', generateShapes);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', generateShapes);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getShapeElement = (shape: Shape) => {
    const baseClasses = "absolute pointer-events-none";
    
    switch (shape.type) {
      case 'circle':
        return (
          <div 
            className={`${baseClasses} rounded-full border border-cyber-400/30`}
            style={{
              width: shape.size,
              height: shape.size,
              background: `radial-gradient(circle, rgba(6, 182, 212, ${shape.opacity}) 0%, transparent 70%)`
            }}
          />
        );
      case 'triangle':
        return (
          <div 
            className={baseClasses}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid rgba(6, 182, 212, ${shape.opacity})`
            }}
          />
        );
      case 'square':
        return (
          <div 
            className={`${baseClasses} border border-cyber-400/30`}
            style={{
              width: shape.size,
              height: shape.size,
              background: `linear-gradient(45deg, rgba(6, 182, 212, ${shape.opacity}) 0%, transparent 100%)`
            }}
          />
        );
      case 'hexagon':
        return (
          <div 
            className={`${baseClasses} border border-cyber-400/20`}
            style={{
              width: shape.size,
              height: shape.size * 0.866,
              background: `rgba(6, 182, 212, ${shape.opacity})`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={{
            x: shape.x,
            y: shape.y,
            rotate: shape.rotation,
            scale: 0
          }}
          animate={{
            x: [
              shape.x,
              shape.x + Math.sin(Date.now() * 0.001 + shape.id) * 100,
              shape.x + Math.cos(Date.now() * 0.0015 + shape.id) * 150,
              shape.x
            ],
            y: [
              shape.y,
              shape.y + Math.cos(Date.now() * 0.001 + shape.id) * 80,
              shape.y + Math.sin(Date.now() * 0.0012 + shape.id) * 120,
              shape.y
            ],
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [0, 1, 0.8, 1]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
          }}
        >
          {getShapeElement(shape)}
        </motion.div>
      ))}

      {/* Particle trail effect */}
      <motion.div
        className="absolute w-2 h-2 bg-cyber-400 rounded-full opacity-60"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20">
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-15">
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)',
            filter: 'blur(30px)'
          }}
          animate={{
            scale: [1, 0.8, 1.1, 1],
            opacity: [0.15, 0.3, 0.1, 0.15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </div>
  );
}