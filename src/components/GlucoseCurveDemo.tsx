import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import sugaryCerealPhoto from '@/assets/sugary-cereal-photo.jpg';
import cornFlakesPhoto from '@/assets/corn-flakes-photo.jpg';
import orangeJuicePhoto from '@/assets/orange-juice-photo.jpg';
import blackCoffeePhoto from '@/assets/black-coffee-photo.jpg';
import eggsAvocadoPhoto from '@/assets/eggs-avocado-photo.jpg';
import steelCutOatsPhoto from '@/assets/steel-cut-oats-photo.jpg';
import steakPhoto from '@/assets/steak-photo.jpg';

const GlucoseCurveDemo = () => {
  const [selectedMeal, setSelectedMeal] = useState('sugary');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getMealPhoto = (mealKey: string) => {
    const photoMap: { [key: string]: string } = {
      sugary: sugaryCerealPhoto,
      normal: cornFlakesPhoto,
      orangeJuice: orangeJuicePhoto,
      coffee: blackCoffeePhoto,
      balanced: eggsAvocadoPhoto,
      oatmeal: steelCutOatsPhoto,
      carnivore: steakPhoto
    };
    return photoMap[mealKey];
  };

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
    orangeJuice: {
      name: "Fresh Orange Juice",
      path: "M 60,184 Q 110,64 160,72 Q 210,80 260,128 Q 310,168 360,176",
      color: "#ff8c00",
      gradient: "from-orange-400 to-orange-500",
      peak: "180mg/dL",
      time: "30 min",
      description: "Sharp spike, liquid sugars hit fast",
      emoji: "🍊"
    },
    coffee: {
      name: "Black Coffee",
      path: "M 60,184 Q 110,183 160,182 Q 210,181 260,182 Q 310,183 360,184",
      color: "#6b5b73",
      gradient: "from-gray-600 to-gray-700",
      peak: "85mg/dL",
      time: "60 min",
      description: "Virtually no impact on glucose",
      emoji: "☕"
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
            {/* Mobile: Enhanced Layout with Taller Chart */}
            <div className="block lg:hidden">
              {/* Mobile Chart - Enhanced Version */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Glucose Response</h3>
                    <p className="text-sm text-muted-foreground">Real-time metabolic impact</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: currentMeal.color }}>
                      {currentMeal.peak}
                    </div>
                    <div className="text-xs text-muted-foreground">Peak Level</div>
                  </div>
                </div>

                {/* Enhanced Mobile Chart - Taller with More Detail */}
                <div className="relative mb-6">
                  <svg 
                    viewBox="0 0 360 200" 
                    className="w-full h-64"
                    style={{ background: 'linear-gradient(to bottom, #fafbfc 0%, #ffffff 100%)' }}
                  >
                    {/* Enhanced Grid */}
                    <defs>
                      <pattern id="mobile-grid" width="36" height="18" patternUnits="userSpaceOnUse">
                        <path d="M 36 0 L 0 0 0 18" fill="none" stroke="#f1f5f9" strokeWidth="0.5"/>
                      </pattern>
                      <linearGradient id="mobileAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={currentMeal.color} stopOpacity="0.2"/>
                        <stop offset="100%" stopColor={currentMeal.color} stopOpacity="0.03"/>
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mobile-grid)" />

                    {/* Enhanced Axes */}
                    <line x1="50" y1="30" x2="50" y2="150" stroke="#e2e8f0" strokeWidth="1.5"/>
                    <line x1="50" y1="150" x2="320" y2="150" stroke="#e2e8f0" strokeWidth="1.5"/>

                    {/* Enhanced Target Range */}
                    <rect x="50" y="90" width="270" height="36" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3,3"/>
                    <text x="55" y="105" fontSize="10" fill="#059669" fontWeight="600">Target Range</text>
                    
                    {/* Enhanced Y-axis labels */}
                    <text x="45" y="35" fontSize="11" fill="#64748b" textAnchor="end" fontWeight="500">200</text>
                    <text x="45" y="57" fontSize="11" fill="#64748b" textAnchor="end" fontWeight="500">160</text>
                    <text x="45" y="94" fontSize="11" fill="#10b981" textAnchor="end" fontWeight="600">120</text>
                    <text x="45" y="114" fontSize="11" fill="#64748b" textAnchor="end" fontWeight="500">100</text>
                    <text x="45" y="132" fontSize="11" fill="#10b981" textAnchor="end" fontWeight="600">80</text>
                    
                    {/* Enhanced X-axis labels */}
                    <text x="50" y="167" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="500">0</text>
                    <text x="117" y="167" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="500">30m</text>
                    <text x="185" y="167" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="500">1h</text>
                    <text x="252" y="167" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="500">2h</text>
                    <text x="320" y="167" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="500">3h</text>

                    {/* Mobile-adjusted curve paths with proper scaling */}
                    <AnimatePresence mode="wait">
                      <motion.path
                        key={`mobile-area-${selectedMeal}`}
                        d={`${currentMeal.path.replace(/M (\d+),(\d+)/, 'M 50,$2').replace(/Q (\d+),(\d+) (\d+),(\d+) Q (\d+),(\d+) (\d+),(\d+) Q (\d+),(\d+) (\d+),(\d+)/, (match, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6) => {
                          const scale = 270 / 300;
                          return `Q ${50 + (parseInt(x1) - 60) * scale},${y1} ${50 + (parseInt(x2) - 60) * scale},${y2} Q ${50 + (parseInt(x3) - 60) * scale},${y3} ${50 + (parseInt(x4) - 60) * scale},${y4} Q ${50 + (parseInt(x5) - 60) * scale},${y5} ${50 + (parseInt(x6) - 60) * scale},${y6}`;
                        })} L 320,150 L 50,150 Z`}
                        fill="url(#mobileAreaGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.path
                        key={`mobile-${selectedMeal}`}
                        d={currentMeal.path.replace(/M (\d+),(\d+)/, 'M 50,$2').replace(/Q (\d+),(\d+) (\d+),(\d+) Q (\d+),(\d+) (\d+),(\d+) Q (\d+),(\d+) (\d+),(\d+)/, (match, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6) => {
                          const scale = 270 / 300;
                          return `Q ${50 + (parseInt(x1) - 60) * scale},${y1} ${50 + (parseInt(x2) - 60) * scale},${y2} Q ${50 + (parseInt(x3) - 60) * scale},${y3} ${50 + (parseInt(x4) - 60) * scale},${y4} Q ${50 + (parseInt(x5) - 60) * scale},${y5} ${50 + (parseInt(x6) - 60) * scale},${y6}`;
                        })}
                        fill="none"
                        stroke={currentMeal.color}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                          filter: `drop-shadow(0 1px 4px ${currentMeal.color}40)`
                        }}
                      />
                    </AnimatePresence>

                    {/* Peak indicator for mobile */}
                    <motion.g
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      {selectedMeal !== 'coffee' && selectedMeal !== 'balanced' && selectedMeal !== 'carnivore' && (
                        <>
                          <circle 
                            cx={selectedMeal === 'sugary' ? "117" : selectedMeal === 'normal' ? "131" : selectedMeal === 'orangeJuice' ? "124" : "158"} 
                            cy={selectedMeal === 'sugary' ? "56" : selectedMeal === 'normal' ? "66" : selectedMeal === 'orangeJuice' ? "60" : "84"}
                            r="4" 
                            fill={currentMeal.color} 
                            stroke="white" 
                            strokeWidth="2"
                          />
                          <text 
                            x={selectedMeal === 'sugary' ? "117" : selectedMeal === 'normal' ? "131" : selectedMeal === 'orangeJuice' ? "124" : "158"} 
                            y={selectedMeal === 'sugary' ? "48" : selectedMeal === 'normal' ? "58" : selectedMeal === 'orangeJuice' ? "52" : "76"} 
                            fontSize="10" 
                            fill={currentMeal.color} 
                            textAnchor="middle" 
                            fontWeight="600"
                          >
                            {currentMeal.peak}
                          </text>
                        </>
                      )}
                    </motion.g>
                  </svg>
                </div>

                {/* Mobile Meal Selection - Horizontal Scroll */}
                <div className="overflow-x-auto pb-2">
                  <div className="flex gap-2 min-w-max">
                    {Object.entries(mealData).map(([key, meal]) => (
                      <motion.button
                        key={key}
                        className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 ${
                          selectedMeal === key 
                            ? `bg-gradient-to-r ${meal.gradient} text-white shadow-lg` 
                            : 'bg-gray-100 text-foreground hover:bg-gray-200'
                        }`}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedMeal(key)}
                      >
                        <div className="w-6 h-6 rounded overflow-hidden">
                          <img 
                            src={getMealPhoto(key)} 
                            alt={meal.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="whitespace-nowrap">{meal.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Current Selection Info */}
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">{currentMeal.name}</div>
                      <div className="text-xs text-muted-foreground">{currentMeal.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Time to Peak</div>
                      <div className="text-sm font-semibold">{currentMeal.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
                {/* Glucose Chart - More Professional Design */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1">Glucose Response Prediction</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Realtime metabolic impact analysis</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2 md:mt-0">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="hidden sm:inline">Target Range: 80-120 mg/dL</span>
                        <span className="sm:hidden">Target: 80-120</span>
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
                            cx={selectedMeal === 'sugary' ? '160' : selectedMeal === 'normal' ? '160' : selectedMeal === 'orangeJuice' ? '160' : selectedMeal === 'coffee' ? '210' : selectedMeal === 'balanced' ? '210' : selectedMeal === 'oatmeal' ? '160' : '210'} 
                            cy={selectedMeal === 'sugary' ? '64' : selectedMeal === 'normal' ? '96' : selectedMeal === 'orangeJuice' ? '72' : selectedMeal === 'coffee' ? '182' : selectedMeal === 'balanced' ? '176' : selectedMeal === 'oatmeal' ? '140' : '180'}
                            r="5" 
                            fill="white"
                            stroke={currentMeal.color}
                            strokeWidth="3"
                          />
                          <motion.circle 
                            cx={selectedMeal === 'sugary' ? '160' : selectedMeal === 'normal' ? '160' : selectedMeal === 'orangeJuice' ? '160' : selectedMeal === 'coffee' ? '210' : selectedMeal === 'balanced' ? '210' : selectedMeal === 'oatmeal' ? '160' : '210'} 
                            cy={selectedMeal === 'sugary' ? '64' : selectedMeal === 'normal' ? '96' : selectedMeal === 'orangeJuice' ? '72' : selectedMeal === 'coffee' ? '182' : selectedMeal === 'balanced' ? '176' : selectedMeal === 'oatmeal' ? '140' : '180'}
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
                            x={selectedMeal === 'sugary' ? '160' : selectedMeal === 'normal' ? '160' : selectedMeal === 'orangeJuice' ? '160' : selectedMeal === 'coffee' ? '210' : selectedMeal === 'balanced' ? '210' : selectedMeal === 'oatmeal' ? '160' : '210'} 
                            y={selectedMeal === 'sugary' ? '45' : selectedMeal === 'normal' ? '77' : selectedMeal === 'orangeJuice' ? '53' : selectedMeal === 'coffee' ? '163' : selectedMeal === 'balanced' ? '157' : selectedMeal === 'oatmeal' ? '121' : '161'}
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
                <div className="lg:col-span-2 space-y-4 order-1 lg:order-2">
                  {/* Current Meal Stats */}
                  <motion.div 
                    className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <div className="text-center mb-4 lg:mb-6">
                      <motion.div 
                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg overflow-hidden mx-auto mb-2 border border-gray-200"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <img 
                          src={getMealPhoto(selectedMeal)} 
                          alt={currentMeal.name} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <h4 className="text-base lg:text-lg font-bold">{currentMeal.name}</h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">{currentMeal.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <div className="text-center p-2 lg:p-3 rounded-lg bg-gray-50">
                        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Peak Level</div>
                        <div className="text-base lg:text-lg font-bold" style={{ color: currentMeal.color }}>
                          {currentMeal.peak}
                        </div>
                      </div>
                      <div className="text-center p-2 lg:p-3 rounded-lg bg-gray-50">
                        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Time to Peak</div>
                        <div className="text-base lg:text-lg font-bold">{currentMeal.time}</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Meal Selection - Desktop */}
                  <div className="hidden lg:block">
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
                            <div className="w-8 h-8 rounded overflow-hidden">
                              <img 
                                src={getMealPhoto(key)} 
                                alt={meal.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
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