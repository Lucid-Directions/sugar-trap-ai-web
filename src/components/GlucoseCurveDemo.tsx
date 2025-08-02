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
      path: "M 60,184 Q 110,56 160,64 Q 210,72 260,120 Q 310,160 360,180",
      color: "#ef4444",
      gradient: "from-red-500 to-red-600",
      peak: "195mg/dL",
      time: "25 min",
      description: "Extreme spike, dramatic crash",
      emoji: "🥣"
    },
    normal: {
      name: "Corn Flakes",
      path: "M 60,184 Q 110,88 160,96 Q 210,104 260,136 Q 310,152 360,168",
      color: "#f97316",
      gradient: "from-orange-500 to-orange-600",
      peak: "165mg/dL",
      time: "35 min",
      description: "High spike, surprising for 'healthy' cereal",
      emoji: "🌽"
    },
    balanced: {
      name: "Eggs & Avocado",
      path: "M 60,184 Q 110,180 160,178 Q 210,176 260,178 Q 310,180 360,182",
      color: "#10b981",
      gradient: "from-emerald-500 to-emerald-600",
      peak: "88mg/dL",
      time: "90 min",
      description: "Minimal rise, very stable",
      emoji: "🥑"
    },
    oatmeal: {
      name: "Steel-Cut Oats",
      path: "M 60,184 Q 110,136 160,140 Q 210,144 260,152 Q 310,160 360,168",
      color: "#f59e0b",
      gradient: "from-amber-500 to-amber-600",
      peak: "125mg/dL",
      time: "60 min",
      description: "Moderate rise, sustained energy",
      emoji: "🥣"
    },
    carnivore: {
      name: "Carnivore (Steak)",
      path: "M 60,184 Q 110,182 160,181 Q 210,180 260,181 Q 310,182 360,183",
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
    <section id="glucose-demo" className="py-12 md:py-16 bg-gradient-to-b from-secondary/20 to-background scroll-mt-4">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-8 md:mb-12"
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
            className="gradient-card rounded-3xl p-4 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* Mobile: Meal Selection First */}
            <div className="block md:hidden mb-6">
              <p className="text-base mb-4 text-muted-foreground text-center">
                Compare breakfast options:
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(mealData).map(([key, meal]) => (
                  <motion.button
                    key={key}
                    className={`flex items-center gap-2 px-3 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                      selectedMeal === key 
                        ? `bg-gradient-to-r ${meal.gradient} text-white shadow-lg` 
                        : 'bg-white text-foreground hover:bg-gray-50 border border-gray-200'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedMeal(key)}
                  >
                    <span className="text-lg">{meal.emoji}</span>
                    <span className="text-xs leading-tight">{meal.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Glucose Chart - More Professional Design */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1">Glucose Response Prediction</h3>
                      <p className="text-sm text-muted-foreground">Real-time metabolic impact analysis</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2 md:mt-0">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      Target Range: 80-120 mg/dL
                    </div>
                  </div>

                  <div className="relative">
                    {/* Professional SVG Chart */}
                    <svg 
                      viewBox="0 0 400 240" 
                      className="w-full h-56 md:h-64"
                      style={{ background: 'linear-gradient(to bottom, #fafbfc 0%, #ffffff 100%)' }}
                    >
                      {/* Professional Grid */}
                      <defs>
                        <pattern id="professional-grid" width="40" height="24" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 24" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                        </pattern>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={currentMeal.color} stopOpacity="0.15"/>
                          <stop offset="100%" stopColor={currentMeal.color} stopOpacity="0.02"/>
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#professional-grid)" />

                      {/* Axes */}
                      <line x1="60" y1="40" x2="60" y2="200" stroke="#e2e8f0" strokeWidth="2"/>
                      <line x1="60" y1="200" x2="360" y2="200" stroke="#e2e8f0" strokeWidth="2"/>

                      {/* Target Range Zone */}
                      <rect x="60" y="120" width="300" height="48" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,4"/>
                      <text x="65" y="135" fontSize="11" fill="#059669" fontWeight="500">Target Range</text>
                      
                      {/* Y-axis grid lines and labels */}
                      <g stroke="#f1f5f9" strokeWidth="1">
                        <line x1="60" y1="56" x2="360" y2="56"/>
                        <line x1="60" y1="88" x2="360" y2="88"/>
                        <line x1="60" y1="120" x2="360" y2="120"/>
                        <line x1="60" y1="152" x2="360" y2="152"/>
                        <line x1="60" y1="184" x2="360" y2="184"/>
                      </g>
                      
                      {/* Y-axis labels */}
                      <text x="45" y="60" fontSize="12" fill="#64748b" textAnchor="end" fontWeight="500">200</text>
                      <text x="45" y="92" fontSize="12" fill="#64748b" textAnchor="end" fontWeight="500">160</text>
                      <text x="45" y="124" fontSize="12" fill="#10b981" textAnchor="end" fontWeight="600">120</text>
                      <text x="45" y="156" fontSize="12" fill="#64748b" textAnchor="end" fontWeight="500">100</text>
                      <text x="45" y="188" fontSize="12" fill="#10b981" textAnchor="end" fontWeight="600">80</text>
                      
                      {/* X-axis labels */}
                      <text x="60" y="220" fontSize="12" fill="#64748b" textAnchor="middle" fontWeight="500">0min</text>
                      <text x="135" y="220" fontSize="12" fill="#64748b" textAnchor="middle" fontWeight="500">30min</text>
                      <text x="210" y="220" fontSize="12" fill="#64748b" textAnchor="middle" fontWeight="500">1hr</text>
                      <text x="285" y="220" fontSize="12" fill="#64748b" textAnchor="middle" fontWeight="500">2hr</text>
                      <text x="360" y="220" fontSize="12" fill="#64748b" textAnchor="middle" fontWeight="500">3hr</text>

                      {/* Area under curve */}
                      <AnimatePresence mode="wait">
                        <motion.path
                          key={`area-${selectedMeal}`}
                          d={`${currentMeal.path} L 360,200 L 60,200 Z`}
                          fill="url(#areaGradient)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                      </AnimatePresence>

                      {/* Main Glucose Curve - Properly Positioned */}
                      <AnimatePresence mode="wait">
                        <motion.path
                          key={selectedMeal}
                          d={currentMeal.path}
                          fill="none"
                          stroke={currentMeal.color}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          exit={{ pathLength: 0, opacity: 0 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          style={{
                            filter: `drop-shadow(0 2px 8px ${currentMeal.color}30)`
                          }}
                        />
                      </AnimatePresence>

                      {/* Peak Indicator - More Precise Positioning */}
                      <motion.g
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4, type: "spring", bounce: 0.3 }}
                      >
                        <circle 
                          cx={selectedMeal === 'sugary' ? '160' : selectedMeal === 'normal' ? '160' : selectedMeal === 'balanced' ? '210' : selectedMeal === 'oatmeal' ? '160' : '210'} 
                          cy={selectedMeal === 'sugary' ? '64' : selectedMeal === 'normal' ? '96' : selectedMeal === 'balanced' ? '176' : selectedMeal === 'oatmeal' ? '140' : '180'} 
                          r="5" 
                          fill="white"
                          stroke={currentMeal.color}
                          strokeWidth="3"
                        />
                        <motion.circle 
                          cx={selectedMeal === 'sugary' ? '160' : selectedMeal === 'normal' ? '160' : selectedMeal === 'balanced' ? '210' : selectedMeal === 'oatmeal' ? '160' : '210'} 
                          cy={selectedMeal === 'sugary' ? '64' : selectedMeal === 'normal' ? '96' : selectedMeal === 'balanced' ? '176' : selectedMeal === 'oatmeal' ? '140' : '180'}
                          r="12" 
                          fill="none"
                          stroke={currentMeal.color}
                          strokeWidth="2"
                          strokeOpacity="0.6"
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Peak Value Label */}
                        <motion.text 
                          x={selectedMeal === 'sugary' ? '160' : selectedMeal === 'normal' ? '160' : selectedMeal === 'balanced' ? '210' : selectedMeal === 'oatmeal' ? '160' : '210'} 
                          y={selectedMeal === 'sugary' ? '45' : selectedMeal === 'normal' ? '77' : selectedMeal === 'balanced' ? '157' : selectedMeal === 'oatmeal' ? '121' : '161'}
                          fontSize="11" 
                          fill={currentMeal.color} 
                          textAnchor="middle" 
                          fontWeight="bold"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 }}
                        >
                          {currentMeal.peak}
                        </motion.text>
                      </motion.g>

                      {/* Baseline indicator */}
                      <line x1="60" y1="184" x2="75" y2="184" stroke="#64748b" strokeWidth="3" strokeLinecap="round"/>
                      <text x="80" y="188" fontSize="11" fill="#64748b" fontWeight="500">Baseline</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stats and Meal Selection - Improved Layout */}
              <div className="lg:col-span-2 space-y-4">
                {/* Current Meal Stats */}
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <div className="text-center mb-6">
                    <motion.div 
                      className="text-4xl mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      {currentMeal.emoji}
                    </motion.div>
                    <h4 className="text-lg font-bold">{currentMeal.name}</h4>
                    <p className="text-sm text-muted-foreground">{currentMeal.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-gray-50">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Peak Level</div>
                      <div className="text-lg font-bold" style={{ color: currentMeal.color }}>
                        {currentMeal.peak}
                      </div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-gray-50">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Time to Peak</div>
                      <div className="text-lg font-bold">{currentMeal.time}</div>
                    </div>
                  </div>
                </motion.div>

                {/* Meal Selection - Desktop */}
                <div className="hidden md:block">
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                      Compare Meals
                    </h5>
                    
                    <div className="space-y-2">
                      {Object.entries(mealData).map(([key, meal]) => (
                        <motion.button
                          key={key}
                          className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
                            selectedMeal === key 
                              ? `bg-gradient-to-r ${meal.gradient} text-white shadow-md` 
                              : 'bg-gray-50 text-foreground hover:bg-gray-100'
                          }`}
                          whileTap={{ scale: 0.98 }}
                          whileHover={{ scale: 1.01 }}
                          onClick={() => setSelectedMeal(key)}
                        >
                          <span className="text-lg">{meal.emoji}</span>
                          <div className="text-left flex-1">
                            <div className="text-sm font-medium">{meal.name}</div>
                            <div className={`text-xs ${selectedMeal === key ? 'text-white/80' : 'text-muted-foreground'}`}>
                              Peak: {meal.peak}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.p
              className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              SugarTrap AI predicts your personal glucose response to any meal using advanced AI,
              giving you insights previously only available through medical testing.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlucoseCurveDemo;