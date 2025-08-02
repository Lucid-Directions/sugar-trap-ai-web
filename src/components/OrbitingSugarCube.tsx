import { motion } from 'framer-motion';

const RotatingSugarCube = () => {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
      {/* 3D Rotating Sugar Cube Container */}
      <motion.div
        className="absolute inset-2 md:inset-2"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          rotateX: {
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          },
          rotateY: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {/* Front face */}
        <div 
          className="absolute inset-0 bg-white/30 border border-foreground/50"
          style={{
            transform: 'translateZ(8px)'
          }}
        />
        
        {/* Back face */}
        <div 
          className="absolute inset-0 bg-white/20 border border-foreground/40"
          style={{
            transform: 'translateZ(-8px)'
          }}
        />
        
        {/* Right face */}
        <div 
          className="absolute inset-0 bg-white/25 border border-foreground/45"
          style={{
            transform: 'rotateY(90deg) translateZ(8px)'
          }}
        />
        
        {/* Left face */}
        <div 
          className="absolute inset-0 bg-white/25 border border-foreground/45"
          style={{
            transform: 'rotateY(-90deg) translateZ(8px)'
          }}
        />
        
        {/* Top face */}
        <div 
          className="absolute inset-0 bg-white/35 border border-foreground/55"
          style={{
            transform: 'rotateX(90deg) translateZ(8px)'
          }}
        />
        
        {/* Bottom face */}
        <div 
          className="absolute inset-0 bg-white/15 border border-foreground/35"
          style={{
            transform: 'rotateX(-90deg) translateZ(8px)'
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