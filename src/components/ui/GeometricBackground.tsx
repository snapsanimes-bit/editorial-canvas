import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: "circle" | "square" | "triangle" | "hexagon";
  delay: number;
  duration: number;
}

const GeometricBackground = () => {
  const [shapes, setShapes] = useState<FloatingShape[]>([]);

  useEffect(() => {
    const generateShapes = () => {
      const types: FloatingShape["type"][] = ["circle", "square", "triangle", "hexagon"];
      const newShapes: FloatingShape[] = [];
      
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          rotation: Math.random() * 360,
          type: types[Math.floor(Math.random() * types.length)],
          delay: Math.random() * 2,
          duration: Math.random() * 10 + 15,
        });
      }
      setShapes(newShapes);
    };
    
    generateShapes();
  }, []);

  const renderShape = (shape: FloatingShape) => {
    const baseClasses = "absolute opacity-[0.03] dark:opacity-[0.06]";
    
    switch (shape.type) {
      case "circle":
        return (
          <div
            className={`${baseClasses} rounded-full border border-primary`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case "square":
        return (
          <div
            className={`${baseClasses} border border-primary`}
            style={{ width: shape.size, height: shape.size }}
          />
        );
      case "triangle":
        return (
          <div
            className={`${baseClasses}`}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid hsl(var(--primary) / 0.1)`,
            }}
          />
        );
      case "hexagon":
        return (
          <div
            className={`${baseClasses} border border-primary`}
            style={{
              width: shape.size,
              height: shape.size * 0.866,
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Floating shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          initial={{ opacity: 0, rotate: shape.rotation }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            rotate: [shape.rotation, shape.rotation + 360],
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-accent/15 via-primary/5 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          delay: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GeometricBackground;
