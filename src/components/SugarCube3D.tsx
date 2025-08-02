import { motion } from 'framer-motion';

const SugarCube3D = () => {
  return (
    <div className="relative flex items-center justify-center h-64 w-64 mx-auto">
      <motion.div
        className="relative preserve-3d"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-15deg) rotateY(25deg)'
        }}
        animate={{
          rotateY: [25, 385],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Front face */}
        <div 
          className="absolute w-24 h-24 bg-white border-4 border-gray-800 shadow-lg"
          style={{
            transform: 'translateZ(48px)'
          }}
        />
        
        {/* Back face */}
        <div 
          className="absolute w-24 h-24 bg-gray-100 border-4 border-gray-800 shadow-lg"
          style={{
            transform: 'translateZ(-48px) rotateY(180deg)'
          }}
        />
        
        {/* Right face */}
        <div 
          className="absolute w-24 h-24 bg-gray-200 border-4 border-gray-800 shadow-lg"
          style={{
            transform: 'rotateY(90deg) translateZ(48px)'
          }}
        />
        
        {/* Left face */}
        <div 
          className="absolute w-24 h-24 bg-gray-200 border-4 border-gray-800 shadow-lg"
          style={{
            transform: 'rotateY(-90deg) translateZ(48px)'
          }}
        />
        
        {/* Top face */}
        <div 
          className="absolute w-24 h-24 bg-gray-50 border-4 border-gray-800 shadow-lg"
          style={{
            transform: 'rotateX(90deg) translateZ(48px)'
          }}
        />
        
        {/* Bottom face */}
        <div 
          className="absolute w-24 h-24 bg-gray-300 border-4 border-gray-800 shadow-lg"
          style={{
            transform: 'rotateX(-90deg) translateZ(48px)'
          }}
        />
        
        {/* Sugar crystal texture overlays */}
        <div 
          className="absolute w-24 h-24 opacity-30"
          style={{
            transform: 'translateZ(49px)',
            background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)'
          }}
        />
        
        <div 
          className="absolute w-24 h-24 opacity-20"
          style={{
            transform: 'rotateY(90deg) translateZ(49px)',
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,255,255,0.2) 2px, rgba(255,255,255,0.2) 4px)'
          }}
        />
        
        <div 
          className="absolute w-24 h-24 opacity-25"
          style={{
            transform: 'rotateX(90deg) translateZ(49px)',
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px)'
          }}
        />
      </motion.div>
      
      {/* Floating particles for sugar effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SugarCube3D;