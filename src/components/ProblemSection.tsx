import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, Brain, Zap, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const problems = [
    {
      icon: TrendingDown,
      title: "Energy Crashes",
      description: "That 'healthy' breakfast might be spiking your blood sugar higher than dessert",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Brain Fog",
      description: "Your 3pm energy crash isn't about willpower, it's about biology",
      color: "text-orange-500"
    },
    {
      icon: Zap,
      title: "Stubborn Weight",
      description: "Those pounds aren't just about calories in vs. calories out",
      color: "text-yellow-500"
    },
    {
      icon: AlertTriangle,
      title: "Hidden Patterns",
      description: "The glucose rollercoaster you can't see is controlling your day",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="problem-section" className="py-12 sm:py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Why Traditional Nutrition 
            <span className="text-gradient block">Tracking Falls Short</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            You've been told to count calories. Watch your portions. Exercise more. 
            But what if the real key to sustained energy and health has been 
            <strong className="text-foreground"> invisible all along?</strong>
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="gradient-card rounded-2xl p-4 sm:p-6 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center mb-4 ${problem.color}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <problem.icon className="w-6 h-6" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hidden Problem Reveal */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="gradient-card rounded-3xl p-6 sm:p-8 lg:p-12">
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              The Glucose Rollercoaster You Can't See
            </motion.h3>
            
            <motion.div
              className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <p>
                Modern science has revealed that <span className="text-gradient font-semibold">
                how your body responds to food
                </span> matters far more than simple calorie math.
              </p>
              
              <p>
                Every meal triggers a complex hormonal response that affects your energy, 
                mood, focus, and long-term health. Until now, this information was only 
                available through expensive medical testing.
              </p>
            </motion.div>

            <motion.div
              className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Lower glucose spike with proper food combinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">70%</div>
                <div className="text-sm text-muted-foreground">Reduction in energy crashes with optimised meals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10x</div>
                <div className="text-sm text-muted-foreground">More predictive than calorie counting alone</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;