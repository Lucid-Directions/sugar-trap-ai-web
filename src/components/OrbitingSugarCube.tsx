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
        <motion.div 
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(-15deg) rotateY(25deg)'
          }}
          animate={{
            rotateX: [-15, -10, -15],
            rotateY: [25, 35, 25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Front face */}
          <div 
            className="absolute w-full h-full bg-white border border-gray-800"
            style={{
              transform: 'translateZ(6px)'
            }}
          />
          
          {/* Back face */}
          <div 
            className="absolute w-full h-full bg-gray-100 border border-gray-800"
            style={{
              transform: 'translateZ(-6px) rotateY(180deg)'
            }}
          />
          
          {/* Right face */}
          <div 
            className="absolute w-full h-full bg-gray-200 border border-gray-800"
            style={{
              transform: 'rotateY(90deg) translateZ(6px)'
            }}
          />
          
          {/* Left face */}
          <div 
            className="absolute w-full h-full bg-gray-200 border border-gray-800"
            style={{
              transform: 'rotateY(-90deg) translateZ(6px)'
            }}
          />
          
          {/* Top face */}
          <div 
            className="absolute w-full h-full bg-gray-50 border border-gray-800"
            style={{
              transform: 'rotateX(90deg) translateZ(6px)'
            }}
          />
          
          {/* Bottom face */}
          <div 
            className="absolute w-full h-full bg-gray-300 border border-gray-800"
            style={{
              transform: 'rotateX(-90deg) translateZ(6px)'
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* AI Text - Always centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <span className="text-sm md:text-base font-bold text-foreground drop-shadow-sm">AI</span>
      </div>
    </div>
  );
};

export default RotatingSugarCube;