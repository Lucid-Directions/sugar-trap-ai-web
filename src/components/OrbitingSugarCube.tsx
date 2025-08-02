import { motion } from 'framer-motion';

const RotatingSugarCube = () => {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
      {/* Simple rotating cube outline */}
      <motion.div
        className="w-6 h-6 md:w-7 md:h-7 border-2 border-foreground/60 bg-white/20"
        style={{
          clipPath: 'polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)'
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
      />
      
      {/* AI Text - Always centered and visible */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <span className="text-sm md:text-base font-bold text-foreground drop-shadow-sm">AI</span>
      </div>
    </div>
  );
};

export default RotatingSugarCube;