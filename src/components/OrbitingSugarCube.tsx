import { motion } from 'framer-motion';

const RotatingSugarCube = () => {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
      {/* Orbiting cube */}
      <motion.div
        className="absolute w-3 h-3 md:w-4 md:h-4"
        style={{
          transformOrigin: '20px 20px', // Center of the container
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Simple 3D Sugar Cube */}
        <div 
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-15deg) rotateY(20deg)'
          }}
        >
          {/* Front face */}
          <div 
            className="absolute w-full h-full bg-white/80 border border-foreground/60"
            style={{
              transform: 'translateZ(4px)'
            }}
          />
          
          {/* Right face */}
          <div 
            className="absolute w-full h-full bg-white/60 border border-foreground/50"
            style={{
              transform: 'rotateY(90deg) translateZ(4px)'
            }}
          />
          
          {/* Top face */}
          <div 
            className="absolute w-full h-full bg-white/90 border border-foreground/70"
            style={{
              transform: 'rotateX(90deg) translateZ(4px)'
            }}
          />
        </div>
      </motion.div>
      
      {/* AI Text - Always centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <span className="text-sm md:text-base font-bold text-foreground drop-shadow-sm">AI</span>
      </div>
    </div>
  );
};

export default RotatingSugarCube;