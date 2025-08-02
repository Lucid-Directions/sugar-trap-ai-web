import { motion } from 'framer-motion';

const OrbitingSugarCube = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Orbiting cube */}
      <motion.div
        className="absolute w-3 h-3 md:w-4 md:h-4"
        style={{
          transformOrigin: '24px 24px', // Center of the 48px container
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* 3D Sugar Cube */}
        <div 
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-20deg) rotateY(25deg)'
          }}
        >
          {/* Front face */}
          <div 
            className="absolute w-full h-full bg-white/60 border border-foreground/40 flex items-center justify-center"
            style={{
              transform: 'translateZ(6px)'
            }}
          >
            <span className="text-xs font-bold text-foreground">AI</span>
          </div>
          
          {/* Back face */}
          <div 
            className="absolute w-full h-full bg-white/40 border border-foreground/30"
            style={{
              transform: 'translateZ(-6px) rotateY(180deg)'
            }}
          />
          
          {/* Right face */}
          <div 
            className="absolute w-full h-full bg-white/50 border border-foreground/35"
            style={{
              transform: 'rotateY(90deg) translateZ(6px)'
            }}
          />
          
          {/* Left face */}
          <div 
            className="absolute w-full h-full bg-white/50 border border-foreground/35"
            style={{
              transform: 'rotateY(-90deg) translateZ(6px)'
            }}
          />
          
          {/* Top face */}
          <div 
            className="absolute w-full h-full bg-white/70 border border-foreground/40"
            style={{
              transform: 'rotateX(90deg) translateZ(6px)'
            }}
          />
          
          {/* Bottom face */}
          <div 
            className="absolute w-full h-full bg-white/30 border border-foreground/25"
            style={{
              transform: 'rotateX(-90deg) translateZ(6px)'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OrbitingSugarCube;