import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Play, Users, Star, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Phone Mockup Component
const PhoneDemo = ({ currentMeal }) => {
  return (
    <div className="relative mx-auto" style={{ maxWidth: '280px' }}>
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status Bar */}
          <div className="bg-white px-4 py-2 flex justify-between items-center text-xs">
            <span className="font-medium">9:41 AM</span>
            <div className="flex gap-1">
              <div className="w-3 h-2 bg-gray-300 rounded-sm" />
              <div className="w-3 h-2 bg-gray-300 rounded-sm" />
              <div className="w-3 h-2 bg-green-500 rounded-sm" />
            </div>
          </div>
          
          {/* App Content */}
          <div className="px-4 pb-6">
            {/* App Header */}
            <div className="text-center py-3">
              <h3 className="font-bold text-base">SugarTrap AI</h3>
            </div>
            
            {/* Meal Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMeal.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                {/* Food Image Placeholder */}
                <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center">
                  <motion.div
                    className="text-4xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {currentMeal.name === "Sugary Cereal" && "🥣"}
                    {currentMeal.name === "Smoothie Bowl" && "🥤"}
                    {currentMeal.name === "Eggs & Avocado" && "🍳"}
                  </motion.div>
                </div>
                
                {/* Meal Name */}
                <h4 className="font-semibold text-center text-sm">{currentMeal.name}</h4>
                
                {/* Glucose Curve */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 mb-2">Predicted Glucose Response</div>
                  <svg viewBox="0 0 200 60" className="w-full h-16">
                    <motion.path
                      d={
                        currentMeal.spike === "high"
                          ? "M 10,50 Q 50,15 90,25 T 170,55"
                          : "M 10,40 Q 50,35 90,38 T 170,40"
                      }
                      fill="none"
                      stroke={
                        currentMeal.color === "red"
                          ? "#ef4444"
                          : currentMeal.color === "orange"
                          ? "#f97316"
                          : "#10b981"
                      }
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Spike indicator */}
                    {currentMeal.spike === "high" && (
                      <motion.circle
                        cx="70"
                        cy="20"
                        r="4"
                        fill="#ef4444"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ delay: 1, duration: 0.5 }}
                      />
                    )}
                  </svg>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500">Now</span>
                    <span className="text-gray-500">+2 hours</span>
                  </div>
                </div>
                
                {/* Alert */}
                {currentMeal.spike === "high" && (
                  <motion.div
                    className="bg-red-50 text-red-700 text-xs p-2 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 }}
                  >
                    ⚠️ High spike predicted - expect energy crash
                  </motion.div>
                )}
                {currentMeal.spike === "low" && (
                  <motion.div
                    className="bg-green-50 text-green-700 text-xs p-2 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 }}
                  >
                    ✅ Stable energy - great choice!
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-[2.5rem] blur-xl opacity-60"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const HeroSection = () => {
  const [currentMeal, setCurrentMeal] = useState(0);
  
  const meals = [
    { name: "Sugary Cereal", spike: "high", color: "red" },
    { name: "Smoothie Bowl", spike: "high", color: "orange" },
    { name: "Eggs & Avocado", spike: "low", color: "green" }
  ];
  
  // Cycle through meals for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMeal((prev) => (prev + 1) % meals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-primary/5 rounded-full blur-2xl"
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
              style={{
                left: `${i * 25}%`,
                top: `${i * 20}%`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient Mesh Animation */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, hsl(var(--primary)) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, hsl(var(--primary)) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, hsl(var(--primary)) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, hsl(var(--primary)) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-[1fr,0.6fr] gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Headline with Animation */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Why Do You{' '}
              <span className="text-gradient">
                Crash at 3PM
              </span>{' '}
              Every Day?
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your "healthy" breakfast might be the culprit. See the hidden glucose spikes 
              behind every meal before you feel the crash.
            </motion.p>
            
            
            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="magnetic-button group relative px-6 py-3 text-base font-semibold shadow-lg hover:shadow-glow transform transition-all duration-300"
                  onClick={() => {
                    document.getElementById('glucose-demo')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Show Me My Hidden Spikes
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                No CGM device needed
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                AI-powered predictions
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                90% accuracy
              </div>
            </motion.div>
          </div>
          
          {/* Right Side - Visual Demo */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <PhoneDemo currentMeal={meals[currentMeal]} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          document.getElementById('problem-section')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm">Discover More</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;