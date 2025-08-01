import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const GlucoseCurveDemo = () => {
  const [selectedMeal, setSelectedMeal] = useState('sugary');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mealData = {
    sugary: {
      name: "Sugary Cereal",
      path: "M 10,80 Q 40,10 80,15 Q 120,25 160,100",
      color: "#ef4444",
      gradient: "from-red-500 to-red-600",
      peak: "195mg/dL",
      time: "25 min",
      description: "Extreme spike, dramatic crash",
      emoji: "🥣"
    },
    normal: {
      name: "Corn Flakes",
      path: "M 10,80 Q 40,25 80,30 Q 120,35 160,85",
      color: "#f97316",
      gradient: "from-orange-500 to-orange-600",
      peak: "165mg/dL",
      time: "35 min",
      description: "High spike, surprising for 'healthy' cereal",
      emoji: "🌽"
    },
    balanced: {
      name: "Eggs & Avocado",
      path: "M 10,80 Q 40,75 80,77 Q 120,79 160,82",
      color: "#10b981",
      gradient: "from-emerald-500 to-emerald-600",
      peak: "88mg/dL",
      time: "90 min",
      description: "Minimal rise, very stable",
      emoji: "🥑"
    },
    oatmeal: {
      name: "Steel-Cut Oats",
      path: "M 10,80 Q 40,50 80,52 Q 120,60 160,70",
      color: "#f59e0b",
      gradient: "from-amber-500 to-amber-600",
      peak: "125mg/dL",
      time: "60 min",
      description: "Moderate rise, sustained energy",
      emoji: "🥣"
    },
    carnivore: {
      name: "Carnivore (Steak)",
      path: "M 10,80 Q 40,78 80,79 Q 120,80 160,81",
      color: "#8b5cf6",
      gradient: "from-purple-500 to-purple-600",
      peak: "82mg/dL",
      time: "120 min",
      description: "Virtually flat, maximum stability",
      emoji: "🥩"
    }
  };

  const currentMeal = mealData[selectedMeal];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            See The 
            <span className="text-gradient"> Hidden Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The same 300 calories can have completely different effects on your body.
            For the first time, see your glucose response before you eat.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="gradient-card rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* Glucose Chart */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-inner">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Your Predicted Glucose Response</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  Normal Range: 80-120 mg/dL
                </div>
              </div>

              <div className="relative">
                {/* SVG Chart */}
                <svg 
                  viewBox="0 0 180 120" 
                  className="w-full h-64 md:h-80"
                  style={{ background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)' }}
                >
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Normal Range Zone */}
                  <rect x="10" y="60" width="150" height="20" fill="#10b981" fillOpacity="0.1" />
                  
                  {/* Y-axis labels */}
                  <text x="5" y="25" fontSize="10" fill="#64748b">200</text>
                  <text x="5" y="45" fontSize="10" fill="#64748b">150</text>
                  <text x="5" y="65" fontSize="10" fill="#64748b">120</text>
                  <text x="5" y="85" fontSize="10" fill="#64748b">80</text>
                  
                  {/* X-axis labels */}
                  <text x="10" y="115" fontSize="10" fill="#64748b">0</text>
                  <text x="50" y="115" fontSize="10" fill="#64748b">1hr</text>
                  <text x="90" y="115" fontSize="10" fill="#64748b">2hr</text>
                  <text x="130" y="115" fontSize="10" fill="#64748b">3hr</text>

                  {/* Animated Glucose Curve */}
                  <AnimatePresence mode="wait">
                    <motion.path
                      key={selectedMeal}
                      d={currentMeal.path}
                      fill="none"
                      stroke={currentMeal.color}
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      style={{
                        filter: `drop-shadow(0 0 8px ${currentMeal.color}40)`
                      }}
                    />
                  </AnimatePresence>

                  {/* Peak Indicator */}
                  <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
                  >
                    <circle 
                      cx={selectedMeal === 'sugary' ? '80' : selectedMeal === 'normal' ? '80' : selectedMeal === 'balanced' ? '80' : selectedMeal === 'oatmeal' ? '80' : '80'} 
                      cy={selectedMeal === 'sugary' ? '25' : selectedMeal === 'normal' ? '30' : selectedMeal === 'balanced' ? '70' : selectedMeal === 'oatmeal' ? '55' : '79'} 
                      r="4" 
                      fill={currentMeal.color}
                    />
                    <motion.circle 
                      cx={selectedMeal === 'sugary' ? '80' : selectedMeal === 'normal' ? '80' : selectedMeal === 'balanced' ? '80' : selectedMeal === 'oatmeal' ? '80' : '80'} 
                      cy={selectedMeal === 'sugary' ? '25' : selectedMeal === 'normal' ? '30' : selectedMeal === 'balanced' ? '70' : selectedMeal === 'oatmeal' ? '55' : '79'}
                      r="8" 
                      fill="none"
                      stroke={currentMeal.color}
                      strokeWidth="2"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.g>
                </svg>
              </div>

              {/* Meal Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-4 mt-6 p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Peak Glucose</div>
                  <div className={`text-xl font-bold text-${currentMeal.color}`}>
                    {currentMeal.peak}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Time to Peak</div>
                  <div className="text-xl font-bold">{currentMeal.time}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Energy Pattern</div>
                  <div className="text-sm font-medium">{currentMeal.description}</div>
                </div>
              </motion.div>
            </div>

            {/* Meal Selection */}
            <div className="text-center">
              <p className="text-lg mb-6 text-muted-foreground">
                Compare breakfast options (same calories, different responses):
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(mealData).map(([key, meal]) => (
                  <motion.button
                    key={key}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                      selectedMeal === key 
                        ? `bg-gradient-to-r ${meal.gradient} text-white shadow-lg` 
                        : 'bg-white text-foreground hover:bg-gray-50 border-2 border-gray-200'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedMeal(key)}
                  >
                    <span className="text-2xl">{meal.emoji}</span>
                    <span className="text-lg">{meal.name}</span>
                  </motion.button>
                ))}
              </div>

              <motion.p
                className="mt-8 text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                SugarTrap AI predicts your personal glucose response to any meal using advanced AI,
                giving you insights previously only available through medical testing.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlucoseCurveDemo;