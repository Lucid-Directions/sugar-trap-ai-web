import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Microscope, Activity, BarChart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';


const SciencePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const studies = [
    {
      icon: TrendingUp,
      title: "Glucose Variability Study",
      journal: "Nature Metabolism, 2023",
      finding: "40% reduction in glucose spikes with optimised food combinations",
      color: "text-green-600"
    },
    {
      icon: Brain,
      title: "Cognitive Performance Research", 
      journal: "Journal of Clinical Medicine, 2023",
      finding: "Stable glucose linked to 25% improvement in cognitive function",
      color: "text-blue-600"
    },
    {
      icon: Activity,
      title: "Metabolic Health Analysis",
      journal: "Diabetes Care, 2022", 
      finding: "Food order affects glucose response by up to 70%",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6">
              The New Science of 
              <span className="text-gradient block">Nutrition</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              It's not just about calories anymore. Groundbreaking research reveals the crucial missing piece—
              <strong className="text-foreground"> your body's hormonal response to food.</strong>
            </p>
          </motion.div>

        </div>
      </section>

      {/* The Outdated Model - moved higher up */}
      <section className="py-4 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              ref={ref}
              className="gradient-card rounded-3xl p-8 md:p-12 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">The Outdated Model</h2>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                For decades, weight management advice was simple: <strong>calories in, calories out</strong>. 
                But groundbreaking research over the past decade has revealed a crucial missing piece
                your body's hormonal response to food.
              </p>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="font-semibold text-red-800 mb-2">Why This Approach Failed Millions</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Ignored individual metabolic differences</li>
                  <li>• Treated all calories as equal</li>
                  <li>• Overlooked hormonal responses to food</li>
                  <li>• Created unsustainable restriction cycles</li>
                </ul>
              </div>
            </motion.div>

            {/* Comprehensive Glucose & Insulin Research */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="text-gradient">Evidence-Based</span> Glucose Science
              </h2>
              
              <div className="space-y-8">
                {/* Population Differences */}
                <div className="gradient-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">👥</span>
                    </div>
                    Individual Differences Matter
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-green-700">Healthy Adults</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Fasting glucose: 70-99 mg/dL</li>
                        <li>• Low fasting insulin (2-10 μU/mL)</li>
                        <li>• Post-meal peak: &lt;140 mg/dL</li>
                        <li>• High insulin sensitivity</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-yellow-700">Prediabetic</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Fasting glucose: 100-125 mg/dL</li>
                        <li>• Elevated insulin (&gt;15 μU/mL)</li>
                        <li>• 1-hour post-meal: &gt;160 mg/dL</li>
                        <li>• Compensatory hyperinsulinemia</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-purple-700">Athletes</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• 50% lower fasting insulin</li>
                        <li>• 22% higher insulin sensitivity</li>
                        <li>• Blunted glucose response</li>
                        <li>• Enhanced muscle uptake</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-800 mb-2">Key Research Finding</h4>
                    <p className="text-blue-700 text-sm">
                      Studies show ~30% of young adults have hyperinsulinemia despite normal glucose tolerance, 
                      indicating early metabolic dysfunction years before diabetes diagnosis.
                    </p>
                  </div>
                </div>

                {/* Conditions & Context */}
                <div className="gradient-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🔄</span>
                    </div>
                    How Context Changes Everything
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-green-700">Exercise Effects</h4>
                      <div className="space-y-3">
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-green-800 mb-1">During Exercise</p>
                          <p className="text-sm text-green-700">Insulin drops, glucose uptake becomes insulin-independent</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-green-800 mb-1">Post-Exercise</p>
                          <p className="text-sm text-green-700">Insulin sensitivity increased for 24-48 hours</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-red-700">Stress Impact</h4>
                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-red-800 mb-1">Acute Stress</p>
                          <p className="text-sm text-red-700">Glucose spikes 20-35 mg/dL in healthy people, 50-100 mg/dL in diabetics</p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-red-800 mb-1">Chronic Stress</p>
                          <p className="text-sm text-red-700">Cortisol increases insulin resistance long-term</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-indigo-50 rounded-xl p-6">
                      <h4 className="font-semibold text-indigo-800 mb-2">Sleep & Circadian</h4>
                      <p className="text-indigo-700 text-sm">
                        Even one night of poor sleep reduces insulin sensitivity the next day. 
                        Dawn phenomenon causes morning glucose rise due to cortisol/growth hormone.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h4 className="font-semibold text-orange-800 mb-2">Pregnancy Changes</h4>
                      <p className="text-orange-700 text-sm">
                        Late pregnancy: 50-60% decrease in insulin sensitivity. 
                        Insulin requirements can double by third trimester.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Meal Timing & Combinations */}
                <div className="gradient-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">⏰</span>
                    </div>
                    Revolutionary Insights: Timing & Order
                  </h3>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-6">
                    <h4 className="text-xl font-bold mb-4 text-center">Research-Proven Strategies</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🥗➜🍞</span>
                        </div>
                        <h5 className="font-semibold mb-2">Eat Fiber First</h5>
                        <p className="text-sm text-muted-foreground">Vegetables before carbs reduces glucose spike by 40-70%</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🌅</span>
                        </div>
                        <h5 className="font-semibold mb-2">Morning Advantage</h5>
                        <p className="text-sm text-muted-foreground">Same meal causes lower glucose rise in AM vs PM</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🚶‍♀️</span>
                        </div>
                        <h5 className="font-semibold mb-2">Post-Meal Walk</h5>
                        <p className="text-sm text-muted-foreground">10-minute walk reduces glucose peaks significantly</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-inner">
                    <h4 className="font-semibold mb-4 text-center">Clinical Evidence</h4>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="font-medium text-blue-700 mb-2">Nature Metabolism (2023)</p>
                        <p className="text-muted-foreground">"40% reduction in glucose spikes with optimised food combinations"</p>
                      </div>
                      <div>
                        <p className="font-medium text-purple-700 mb-2">Diabetes Care (2022)</p>
                        <p className="text-muted-foreground">"Food order affects glucose response by up to 70%"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Understanding <span className="text-gradient">Glucose & Insulin</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="gradient-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">What Happens When You Eat</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <p className="text-sm">Blood glucose rises, especially with carbohydrates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <p className="text-sm">Pancreas releases insulin to help cells absorb glucose</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <p className="text-sm">High spikes cause overproduction of insulin</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <p className="text-sm text-red-600">Blood sugar crashes below baseline</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
                      <p className="text-sm text-red-600">You feel tired, foggy, and crave more carbs</p>
                    </div>
                  </div>
                </div>

                <div className="gradient-card rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Why This Matters More Than Calories</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Stable Glucose = Stable Energy</h4>
                      <p className="text-sm text-green-700">Consistent blood sugar means sustained energy, better mood, and clearer thinking</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Impacts Weight Management</h4>
                      <p className="text-sm text-blue-700">Insulin spikes promote fat storage and increase cravings</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Long-term Health</h4>
                      <p className="text-sm text-purple-700">Glucose variability linked to chronic disease risk</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Food Combination Effect */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                The <span className="text-gradient">Food Combination</span> Effect
              </h2>

              <div className="gradient-card rounded-3xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Here's where it gets fascinating—the same foods can have completely different effects 
                  depending on how you eat them:
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-inner">
                  <h3 className="text-2xl font-bold mb-6 text-center">Example: Morning Toast</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🍞</span>
                      </div>
                      <h4 className="font-semibold mb-2">Toast Alone</h4>
                      <div className="text-2xl font-bold text-red-600 mb-2">Major Spike</div>
                      <p className="text-sm text-muted-foreground">Rapid glucose rise, energy crash in 2 hours</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🥑🍞</span>
                      </div>
                      <h4 className="font-semibold mb-2">Toast + Avocado</h4>
                      <div className="text-2xl font-bold text-yellow-600 mb-2">40% Lower</div>
                      <p className="text-sm text-muted-foreground">Fats slow glucose absorption</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🥑➜🍞</span>
                      </div>
                      <h4 className="font-semibold mb-2">Avocado First, Then Toast</h4>
                      <div className="text-2xl font-bold text-green-600 mb-2">70% Lower</div>
                      <p className="text-sm text-muted-foreground">Optimal sequence for stable glucose</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg text-muted-foreground">
                    This is why extreme diets (keto, carnivore, vegetarian) often work—they naturally 
                    eliminate many high-glucose response foods. But you don't need to be extreme; 
                    you just need to be <strong className="text-foreground">informed</strong>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Research Studies */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Peer-Reviewed</span> Research
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {studies.map((study, index) => (
                  <motion.div
                    key={study.title}
                    className="gradient-card rounded-2xl p-6 hover-lift"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-100 flex items-center justify-center mb-4 ${study.color}`}>
                      <study.icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{study.journal}</p>
                    <p className="text-sm font-medium">{study.finding}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What SugarTrap AI Does */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="gradient-card rounded-3xl p-8 md:p-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Microscope className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    What <span className="text-gradient">SugarTrap AI</span> Does Differently
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  We use advanced AI to analyse food composition, combinations, portion sizes, and individual patterns 
                  over time. This allows us to predict your personal glucose response to any meal—information previously 
                  only available through expensive continuous glucose monitors or clinical testing.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <BarChart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Food Composition Analysis</h3>
                    <p className="text-sm text-muted-foreground">AI identifies ingredients, portions, and nutrient ratios</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Personalised Predictions</h3>
                    <p className="text-sm text-muted-foreground">Learn your unique patterns and responses over time</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Real-time Optimisation</h3>
                    <p className="text-sm text-muted-foreground">Get instant suggestions to improve any meal</p>
                  </div>
                </div>

                <Link to="/waitlist">
                  <Button size="lg" className="magnetic-button shadow-lg hover:shadow-glow">
                    Ready to See Your Hidden Patterns? Join the Waitlist
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;