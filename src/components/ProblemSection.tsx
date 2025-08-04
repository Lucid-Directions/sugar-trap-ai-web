import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TrendingDown, Brain, Zap, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProblem, setSelectedProblem] = useState<null | typeof problems[0]>(null);

  const problems = [
    {
      icon: TrendingDown,
      title: "Energy Crashes",
      description: "That 'healthy' breakfast might be spiking your blood sugar higher than dessert",
      color: "text-red-500",
      expandedContent: {
        subtitle: "The Hidden Science Behind Energy Dips",
        details: [
          "Blood sugar spikes from high-glycemic foods cause rapid insulin release, leading to subsequent crashes that leave you feeling drained and craving more sugar.",
          "Research shows that glucose variability - the ups and downs of blood sugar throughout the day - is more predictive of energy crashes than absolute glucose levels.",
          "A study published in Nature Metabolism found that identical meals can cause 10x different glucose responses between individuals, explaining why your 'healthy' oatmeal might drain your energy while energizing your friend.",
          "The timing of these crashes often coincides with productivity dips at work - that 3pm slump isn't just in your head, it's measurable biology."
        ],
        solution: "Sugar Trap AI predicts your personal glucose response to any meal, helping you choose foods that provide sustained energy rather than quick spikes and crashes."
      }
    },
    {
      icon: Brain,
      title: "Brain Fog",
      description: "Your 3pm energy crash isn't about willpower, it's about biology",
      color: "text-orange-500",
      expandedContent: {
        subtitle: "The Glucose-Brain Connection",
        details: [
          "Your brain consumes 20% of your daily glucose, making it extremely sensitive to blood sugar fluctuations. When glucose drops after a spike, cognitive function measurably declines.",
          "Studies show that glucose variability correlates with reduced working memory, slower processing speed, and difficulty concentrating - what we commonly call 'brain fog'.",
          "The hippocampus, crucial for memory formation, is particularly vulnerable to glucose swings. This explains why you might forget important details after a high-sugar meal and subsequent crash.",
          "Research published in Diabetes Care demonstrates that people with higher glucose variability score lower on cognitive tests, even when their average glucose levels are normal."
        ],
        solution: "By maintaining stable glucose levels through personalized meal choices, Sugar Trap AI helps preserve mental clarity and cognitive performance throughout the day."
      }
    },
    {
      icon: Zap,
      title: "Stubborn Weight",
      description: "Those pounds aren't just about calories in vs. calories out",
      color: "text-yellow-500",
      expandedContent: {
        subtitle: "Beyond Calories: The Hormonal Truth",
        details: [
          "Insulin, triggered by glucose spikes, is a powerful fat-storage hormone. Frequent spikes keep your body in 'storage mode' regardless of total calorie intake.",
          "A landmark study in the American Journal of Clinical Nutrition showed that two groups eating identical calories but different glycemic index foods had vastly different weight loss outcomes.",
          "High glucose variability disrupts leptin (satiety hormone) and ghrelin (hunger hormone) signaling, making you feel hungrier and less satisfied after meals.",
          "The 'calories in, calories out' model ignores the complex hormonal cascade triggered by different foods - 200 calories of almonds affects your body completely differently than 200 calories of white bread."
        ],
        solution: "Sugar Trap AI helps you choose foods that keep insulin stable and hunger hormones balanced, supporting natural weight management beyond simple calorie counting."
      }
    },
    {
      icon: AlertTriangle,
      title: "Hidden Patterns",
      description: "The glucose rollercoaster you can't see is controlling your day",
      color: "text-purple-500",
      expandedContent: {
        subtitle: "The Invisible Puppet Master",
        details: [
          "Your glucose levels fluctuate dramatically throughout the day in response to meals, stress, sleep, and activity - yet these changes are completely invisible without monitoring.",
          "Research shows that glucose patterns established early in the day cascade through your entire day, affecting meal choices, energy levels, and even sleep quality.",
          "A study tracking glucose responses found that the same person eating the same meal at different times can have completely different responses based on their metabolic state.",
          "These hidden patterns explain seemingly random cravings, energy dips, and mood swings that many people attribute to lack of willpower or motivation."
        ],
        solution: "Sugar Trap AI makes the invisible visible by predicting your glucose response before you eat, giving you the power to make informed choices that optimize your entire day."
      }
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
              className="gradient-card rounded-2xl p-4 sm:p-6 hover-lift cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedProblem(problem)}
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
              <div className="mt-4 text-sm text-primary font-medium">
                Click to learn more →
              </div>
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
                </span> matters far more than simple calorie maths.
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

        {/* Problem Detail Modal */}
        <Dialog open={!!selectedProblem} onOpenChange={() => setSelectedProblem(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProblem && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center ${selectedProblem.color}`}>
                      <selectedProblem.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl">{selectedProblem.title}</DialogTitle>
                      <DialogDescription className="text-lg mt-1">
                        {selectedProblem.expandedContent.subtitle}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-4">
                  {selectedProblem.expandedContent.details.map((detail, index) => (
                    <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                      <p className="text-sm leading-relaxed">{detail}</p>
                    </div>
                  ))}
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">How Sugar Trap AI Helps:</h4>
                    <p className="text-sm leading-relaxed">{selectedProblem.expandedContent.solution}</p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProblemSection;