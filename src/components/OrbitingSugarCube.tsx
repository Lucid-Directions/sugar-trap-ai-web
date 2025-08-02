import { motion } from 'framer-motion';

const OrbitingSugarCube = () => {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
      {/* Orbiting container */}
      <motion.div
        className="absolute"
        style={{
          width: '12px',
          height: '12px',
          transformOrigin: '20px 20px', // Orbit around center
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
        {/* 3D Sugar Cube with proper depth */}
        <div 
          className="relative w-3 h-3"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-25deg) rotateY(35deg)'
          }}
        >
          {/* Front face */}
          <div 
            className="absolute w-3 h-3 bg-white border border-gray-900"
            style={{
              transform: 'translateZ(12px)'
            }}
          />
          
          {/* Back face */}
          <div 
            className="absolute w-3 h-3 bg-gray-200 border border-gray-900"
            style={{
              transform: 'translateZ(-12px)'
            }}
          />
          
          {/* Right face */}
          <div 
            className="absolute w-3 h-3 bg-gray-150 border border-gray-900"
            style={{
              transform: 'rotateY(90deg) translateZ(12px)'
            }}
          />
          
          {/* Left face */}
          <div 
            className="absolute w-3 h-3 bg-gray-150 border border-gray-900"
            style={{
              transform: 'rotateY(-90deg) translateZ(12px)'
            }}
          />
          
          {/* Top face */}
          <div 
            className="absolute w-3 h-3 bg-gray-50 border border-gray-900"
            style={{
              transform: 'rotateX(90deg) translateZ(12px)'
            }}
          />
          
          {/* Bottom face */}
          <div 
            className="absolute w-3 h-3 bg-gray-300 border border-gray-900"
            style={{
              transform: 'rotateX(-90deg) translateZ(12px)'
            }}
          />
        </div>
      </motion.div>
      
      {/* AI Text - Always centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-sm md:text-base font-bold text-foreground">AI</span>
      </div>
    </div>
  );
};

export default OrbitingSugarCube;