import { motion } from 'framer-motion';

const RotatingSugarCube = () => {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
      {/* 3D Rotating Sugar Cube Container */}
      <motion.div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 360],
        }}
        transition={{
          rotateX: {
            duration: 7,
            repeat: Infinity,
            ease: "linear"
          },
          rotateY: {
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          },
          rotateZ: {
            duration: 11,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {/* Front face */}
        <div 
          className="absolute inset-0 bg-white/20 border border-foreground/30 backdrop-blur-sm"
          style={{
            transform: 'translateZ(12px)'
          }}
        />
        
        {/* Back face */}
        <div 
          className="absolute inset-0 bg-white/15 border border-foreground/25 backdrop-blur-sm"
          style={{
            transform: 'translateZ(-12px) rotateY(180deg)'
          }}
        />
        
        {/* Right face */}
        <div 
          className="absolute inset-0 bg-white/25 border border-foreground/35 backdrop-blur-sm"
          style={{
            transform: 'rotateY(90deg) translateZ(12px)'
          }}
        />
        
        {/* Left face */}
        <div 
          className="absolute inset-0 bg-white/25 border border-foreground/35 backdrop-blur-sm"
          style={{
            transform: 'rotateY(-90deg) translateZ(12px)'
          }}
        />
        
        {/* Top face */}
        <div 
          className="absolute inset-0 bg-white/30 border border-foreground/40 backdrop-blur-sm"
          style={{
            transform: 'rotateX(90deg) translateZ(12px)'
          }}
        />
        
        {/* Bottom face */}
        <div 
          className="absolute inset-0 bg-white/20 border border-foreground/30 backdrop-blur-sm"
          style={{
            transform: 'rotateX(-90deg) translateZ(12px)'
          }}
        />
      </motion.div>
      
      {/* AI Text - Always centered and visible */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <span className="text-sm md:text-base font-bold text-foreground drop-shadow-sm">AI</span>
      </div>
    </div>
  );
};

export default RotatingSugarCube;