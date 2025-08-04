import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Lightbulb, TrendingUp, Brain, Heart, Zap, Target } from 'lucide-react';

interface QuickFact {
  id: string;
  icon: React.ComponentType<any>;
  fact: string;
  category: string;
  color: string;
  source?: string;
}

const quickFacts: QuickFact[] = [
  {
    id: '1',
    icon: TrendingUp,
    fact: "Your glucose response to identical meals can vary by up to 500% day-to-day",
    category: "Variability",
    color: "from-blue-500 to-purple-500",
    source: "Nature Medicine, 2025"
  },
  {
    id: '2',
    icon: Brain,
    fact: "Your brain uses 20% of your daily glucose, despite being only 2% of body weight",
    category: "Metabolism",
    color: "from-green-500 to-blue-500",
    source: "Journal of Cerebral Blood Flow, 2024"
  },
  {
    id: '3',
    icon: Heart,
    fact: "Eating fat with carbs can reduce glucose spikes by up to 40%",
    category: "Nutrition",
    color: "from-purple-500 to-pink-500",
    source: "Diabetes Care, 2024"
  },
  {
    id: '4',
    icon: Zap,
    fact: "Athletes can store 2-3x more muscle glycogen than sedentary individuals",
    category: "Exercise",
    color: "from-orange-500 to-red-500",
    source: "Sports Medicine, 2025"
  },
  {
    id: '5',
    icon: Target,
    fact: "Meal timing affects insulin sensitivity by up to 50% throughout the day",
    category: "Circadian",
    color: "from-teal-500 to-green-500",
    source: "Cell Metabolism, 2024"
  },
  {
    id: '6',
    icon: Lightbulb,
    fact: "Your gut microbiome can extract 10% more energy from the same meal",
    category: "Microbiome",
    color: "from-indigo-500 to-purple-500",
    source: "Nature, 2025"
  },
  {
    id: '7',
    icon: Brain,
    fact: "One night of poor sleep can reduce insulin sensitivity by 30%",
    category: "Sleep",
    color: "from-red-500 to-orange-500",
    source: "Sleep Medicine, 2024"
  },
  {
    id: '8',
    icon: Heart,
    fact: "Stress hormones can keep glucose elevated for hours after a stressful event",
    category: "Stress",
    color: "from-pink-500 to-red-500",
    source: "Psychoneuroendocrinology, 2025"
  }
];

export const QuickFactsTicker = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentFactIndex((prev) => (prev + 1) % quickFacts.length);
        setIsVisible(true);
      }, 300); // Half of exit animation
    }, 4000); // Show each fact for 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentFact = quickFacts[currentFactIndex];
  const IconComponent = currentFact.icon;

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,theme(colors.primary),transparent_70%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,theme(colors.secondary),transparent_70%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">Did You Know?</span>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex gap-1">
            {quickFacts.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentFactIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Fact Content */}
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={currentFact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="space-y-3"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${currentFact.color} flex items-center justify-center`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>

                {/* Fact Text */}
                <div className="flex-1 space-y-2">
                  <motion.p
                    className="text-foreground font-medium leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {currentFact.fact}
                  </motion.p>
                  
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${currentFact.color} text-white font-medium`}>
                      {currentFact.category}
                    </span>
                    {currentFact.source && (
                      <span className="text-xs text-muted-foreground">
                        Source: {currentFact.source}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Interactive Element */}
              <motion.div
                className="w-full h-1 bg-gray-200 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${currentFact.color} rounded-full`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-8 opacity-10">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Lightbulb className="w-8 h-8 text-primary" />
        </motion.div>
      </div>
    </div>
  );
};

export default QuickFactsTicker;