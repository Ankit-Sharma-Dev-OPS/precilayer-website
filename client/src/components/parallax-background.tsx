import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Transform values for parallax layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const layers = [
    {
      transform: backgroundY,
      opacity: 0.1,
      speed: 0.2,
      elements: [
        { x: '10%', y: '20%', size: 120, type: 'circle' },
        { x: '80%', y: '10%', size: 80, type: 'hexagon' },
        { x: '60%', y: '70%', size: 100, type: 'triangle' },
        { x: '20%', y: '80%', size: 60, type: 'square' }
      ]
    },
    {
      transform: midgroundY,
      opacity: 0.15,
      speed: 0.5,
      elements: [
        { x: '70%', y: '30%', size: 90, type: 'hexagon' },
        { x: '15%', y: '50%', size: 70, type: 'circle' },
        { x: '85%', y: '60%', size: 50, type: 'triangle' },
        { x: '40%', y: '15%', size: 110, type: 'square' }
      ]
    },
    {
      transform: foregroundY,
      opacity: 0.2,
      speed: 0.8,
      elements: [
        { x: '25%', y: '40%', size: 75, type: 'circle' },
        { x: '90%', y: '25%', size: 95, type: 'hexagon' },
        { x: '50%', y: '85%', size: 65, type: 'triangle' }
      ]
    }
  ];

  const renderShape = (element: any, layerIndex: number, elementIndex: number) => {
    const key = `shape-${layerIndex}-${elementIndex}`;
    
    switch (element.type) {
      case 'circle':
        return (
          <motion.div
            key={key}
            className="absolute border border-cyber-400/30 rounded-full"
            style={{
              left: element.x,
              top: element.y,
              width: element.size,
              height: element.size,
              background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 20 + layerIndex * 5, repeat: Infinity, ease: "linear" },
              scale: { duration: 8 + elementIndex * 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        );
      case 'hexagon':
        return (
          <motion.div
            key={key}
            className="absolute border border-cyber-400/20"
            style={{
              left: element.x,
              top: element.y,
              width: element.size,
              height: element.size * 0.866,
              background: `rgba(6, 182, 212, 0.05)`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 25 + layerIndex * 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 12 + elementIndex * 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={key}
            className="absolute"
            style={{
              left: element.x,
              top: element.y,
              width: 0,
              height: 0,
              borderLeft: `${element.size / 2}px solid transparent`,
              borderRight: `${element.size / 2}px solid transparent`,
              borderBottom: `${element.size}px solid rgba(6, 182, 212, 0.1)`
            }}
          />
        );
      case 'square':
        return (
          <motion.div
            key={key}
            className="absolute border border-cyber-400/25"
            style={{
              left: element.x,
              top: element.y,
              width: element.size,
              height: element.size,
              background: `linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, transparent 100%)`
            }}
            animate={{
              rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
            }}
            transition={{
              duration: 30 + layerIndex * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {layers.map((layer, layerIndex) => (
        <motion.div
          key={`layer-${layerIndex}`}
          className="absolute inset-0"
          style={{
            y: layer.transform,
            opacity: layer.opacity
          }}
        >
          {layer.elements.map((element, elementIndex) => 
            renderShape(element, layerIndex, elementIndex)
          )}
        </motion.div>
      ))}
      
      {/* Animated grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          y: useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
        }}
      />
    </div>
  );
}