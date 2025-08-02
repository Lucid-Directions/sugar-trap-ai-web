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
          rotateY: [0, 360],
          rotateX: [0, 15, 0, -15, 0],
        }}
        transition={{
          rotateY: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          },
          rotateX: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Front face */}
        <div 
          className="absolute inset-0 bg-white/20 border border-foreground/30 backdrop-blur-sm"
          style={{
            transform: 'translateZ(20px)'
          }}
        />
        
        {/* Back face */}
        <div 
          className="absolute inset-0 bg-white/15 border border-foreground/25 backdrop-blur-sm"
          style={{
            transform: 'translateZ(-20px) rotateY(180deg)'
          }}
        />
        
        {/* Right face */}
        <div 
          className="absolute inset-0 bg-white/25 border border-foreground/35 backdrop-blur-sm"
          style={{
            transform: 'rotateY(90deg) translateZ(20px)'
          }}
        />
        
        {/* Left face */}
        <div 
          className="absolute inset-0 bg-white/25 border border-foreground/35 backdrop-blur-sm"
          style={{
            transform: 'rotateY(-90deg) translateZ(20px)'
          }}
        />
        
        {/* Top face */}
        <div 
          className="absolute inset-0 bg-white/30 border border-foreground/40 backdrop-blur-sm"
          style={{
            transform: 'rotateX(90deg) translateZ(20px)'
          }}
        />
        
        {/* Bottom face */}
        <div 
          className="absolute inset-0 bg-white/20 border border-foreground/30 backdrop-blur-sm"
          style={{
            transform: 'rotateX(-90deg) translateZ(20px)'
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