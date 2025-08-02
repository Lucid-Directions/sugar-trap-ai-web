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
      
      {/* Hero Section - Modern floating design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.primary/8),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.secondary/10),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block mb-4 sm:mb-6 lg:mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Evidence-Based Nutrition Science</span>
              </div>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              The Science of{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent block lg:inline">
                Personal Nutrition
              </span>
            </h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Everyone's glucose response is as unique as their fingerprint.
            </motion.p>
            
            <motion.div
              className="flex justify-center items-center mt-4 sm:mt-6 lg:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link to="/waitlist">Start Your Journey</Link>
              </Button>
            </motion.div>
            
            <motion.div
              className="max-w-4xl mx-auto mt-12 sm:mt-16 lg:mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl p-6 sm:p-8 border border-primary/10 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 text-center text-primary">Key Research Insights</h3>
                <div className="prose prose-sm sm:prose-base text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    <strong>Healthy individuals</strong> maintain tightly regulated glucose with low insulin due to high sensitivity.
                  </p>
                  <p className="mb-4">
                    <strong>Insulin-resistant states</strong> (prediabetes, type 2 diabetes) show elevated insulin levels and impaired glucose tolerance, progressing to beta-cell failure if unchecked.
                  </p>
                  <p className="mb-4">
                    <strong>Special populations</strong> like children, athletes, and pregnant women each have unique profiles – e.g. puberty and late pregnancy both induce transient insulin resistance (for different reasons), while athletes exhibit enhanced insulin action and lower insulin needs.
                  </p>
                  <p className="mb-0">
                    <strong>Conditions like fasting, feeding, exercise, stress, and sleep cycles</strong> acutely modulate insulin and glucose: exercise and fasting generally lower glucose/insulin requirements, whereas stress and circadian hormone surges raise glucose and can demand more insulin.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-pulse animation-delay-300"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse animation-delay-700"></div>
        </div>
      </section>

      {/* Transition section with modern flow */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              ref={ref}
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                The Problem with Traditional Approaches
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Why <span className="text-gradient bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Calories Don't Tell</span> the Whole Story
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                For decades, weight management advice was simple: <strong>calories in, calories out</strong>. 
                But groundbreaking research over the past decade has revealed a crucial missing piece—your body's hormonal response to food.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {[
                "Ignored individual metabolic differences",
                "Treated all calories as equal", 
                "Overlooked hormonal responses to food",
                "Created unsustainable restriction cycles"
              ].map((issue, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                  <div className="relative bg-white rounded-2xl p-6 border border-red-200 group-hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-sm">✕</span>
                    </div>
                    <p className="text-sm font-medium text-red-800">{issue}</p>
                  </div>
                </div>
              ))}
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
                {/* Population Differences - Enhanced */}
                <div className="gradient-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">👥</span>
                    </div>
                    Individual Differences Matter
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-green-700">Healthy Adults</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Fasting glucose: 70-99 mg/dL</li>
                        <li>• Low fasting insulin (2-10 μU/mL)</li>
                        <li>• Post-meal peak: &lt;140 mg/dL</li>
                        <li>• Tight glycemic control</li>
                      </ul>
                      <div className="mt-3 text-xs text-green-600 bg-green-50 rounded p-2">
                        First-phase insulin response keeps glucose spikes minimal
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-yellow-700">Prediabetic</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Fasting glucose: 100-125 mg/dL</li>
                        <li>• Elevated insulin (&gt;15 μU/mL)</li>
                        <li>• 1-hour post-meal: &gt;160 mg/dL</li>
                        <li>• Compensatory hyperinsulinemia</li>
                      </ul>
                      <div className="mt-3 text-xs text-yellow-600 bg-yellow-50 rounded p-2">
                        Pancreas working "overtime" to overcome resistance
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-blue-700">Type 2 Diabetic</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Fasting glucose: ≥126 mg/dL</li>
                        <li>• Early: High insulin (~31 μU/mL)</li>
                        <li>• Late: Declining insulin</li>
                        <li>• Lost first-phase response</li>
                      </ul>
                      <div className="mt-3 text-xs text-blue-600 bg-blue-50 rounded p-2">
                        Progressive β-cell dysfunction over time
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-purple-700">Athletes</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• 50% lower fasting insulin</li>
                        <li>• 22% higher insulin sensitivity</li>
                        <li>• Enhanced mitochondrial capacity</li>
                        <li>• Superior glucose uptake</li>
                      </ul>
                      <div className="mt-3 text-xs text-purple-600 bg-purple-50 rounded p-2">
                        Training creates metabolic flexibility
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-indigo-700">Children</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• Age 3-4: ~3-4 μU/mL insulin</li>
                        <li>• Age 10: ~7-9 μU/mL insulin</li>
                        <li>• Puberty: temporary resistance</li>
                        <li>• Very insulin sensitive</li>
                      </ul>
                      <div className="mt-3 text-xs text-indigo-600 bg-indigo-50 rounded p-2">
                        Obesity can cause early glucose intolerance
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-pink-700">Pregnancy</h4>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li>• 50-60% ↓ insulin sensitivity</li>
                        <li>• 200-250% ↑ insulin production</li>
                        <li>• 70% ↑ insulin needs (T1DM)</li>
                        <li>• Gestational diabetes risk</li>
                      </ul>
                      <div className="mt-3 text-xs text-pink-600 bg-pink-50 rounded p-2">
                        Placental hormones drive resistance
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-800 mb-2">Critical Research Finding</h4>
                    <p className="text-blue-700 text-sm">
                      <strong>30% of young adults (16-25y)</strong> have hyperinsulinemia despite normal glucose tolerance, 
                      indicating early metabolic dysfunction years before diabetes diagnosis. This represents millions of people 
                      with "hidden" insulin resistance.
                    </p>
                    <p className="text-blue-600 text-xs mt-2 italic">
                      Source: Battalwar et al., Front Endocrinol (2023)
                    </p>
                  </div>
                </div>

                {/* Conditions & Context - Enhanced */}
                <div className="gradient-card rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🔄</span>
                    </div>
                    How Context Changes Everything
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-green-700 flex items-center gap-2">
                        <span>💪</span> Exercise Effects
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-green-800 mb-1">During Moderate Exercise</p>
                          <p className="text-sm text-green-700">
                            Insulin levels drop, glucose uptake becomes insulin-independent via muscle contractions
                          </p>
                          <p className="text-xs text-green-600 mt-1 italic">
                            GLUT4 transporters activate without insulin
                          </p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-green-800 mb-1">High-Intensity Exercise</p>
                          <p className="text-sm text-green-700">
                            Stress hormones can temporarily raise glucose for ~1 hour post-workout
                          </p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-green-800 mb-1">Post-Exercise (24-48h)</p>
                          <p className="text-sm text-green-700">
                            Insulin sensitivity increases, muscles prioritize glycogen refill
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-green-600 bg-green-100 rounded p-2">
                        <strong>Research:</strong> Athletes show 50% lower insulin levels for same glucose (Bioblast, 2012)
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-red-700 flex items-center gap-2">
                        <span>😰</span> Stress Impact
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-red-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-red-800 mb-1">Acute Stress Response</p>
                          <p className="text-sm text-red-700">
                            Adrenaline suppresses insulin, triggers liver glucose release
                          </p>
                          <p className="text-xs text-red-600 mt-1">
                            +20-35 mg/dL in healthy people, +50-100 mg/dL in diabetics
                          </p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-red-800 mb-1">Chronic Stress (Cortisol)</p>
                          <p className="text-sm text-red-700">
                            Increases insulin resistance, promotes glucose production
                          </p>
                          <p className="text-xs text-red-600 mt-1">
                            Depression linked to hyperinsulinemia risk
                          </p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-red-800 mb-1">Critical Illness</p>
                          <p className="text-sm text-red-700">
                            "Stress hyperglycemia" can spike glucose &gt;300 mg/dL even in non-diabetics
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-red-600 bg-red-100 rounded p-2">
                        <strong>Research:</strong> Morning cortisol peaks linked to dawn phenomenon (Kamba et al., 2016)
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-indigo-50 rounded-xl p-6">
                      <h4 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
                        <span>😴</span> Sleep & Circadian
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-indigo-700 mb-1">Sleep Deprivation</p>
                          <p className="text-indigo-600 text-xs">Single night of poor sleep = reduced insulin sensitivity next day</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-indigo-700 mb-1">Dawn Phenomenon</p>
                          <p className="text-indigo-600 text-xs">4-8 AM: Growth hormone & cortisol raise glucose</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-indigo-700 mb-1">Circadian Misalignment</p>
                          <p className="text-indigo-600 text-xs">Shift work decreases insulin sensitivity</p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-indigo-600 italic">
                        Source: Nguyen et al., Diabetes (2019)
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                        <span>🤰</span> Pregnancy Changes
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-orange-700 mb-1">Progressive Resistance</p>
                          <p className="text-orange-600 text-xs">50-60% ↓ insulin sensitivity by late pregnancy</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-orange-700 mb-1">Insulin Production</p>
                          <p className="text-orange-600 text-xs">200-250% ↑ to compensate for resistance</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-orange-700 mb-1">T1DM Impact</p>
                          <p className="text-orange-600 text-xs">~70% ↑ insulin needs by third trimester</p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-orange-600 italic">
                        Source: Jensen et al., J Diabetes Res (2019)
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                        <span>⏰</span> Fasting States
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-purple-700 mb-1">Overnight Fast</p>
                          <p className="text-purple-600 text-xs">Steady glucose (70-99 mg/dL), low insulin (2-10 μU/mL)</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-purple-700 mb-1">Extended Fasting</p>
                          <p className="text-purple-600 text-xs">Insulin drops further, ketone production increases</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-purple-700 mb-1">Therapeutic Benefit</p>
                          <p className="text-purple-600 text-xs">Intermittent fasting improves insulin sensitivity</p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-purple-600 italic">
                        Time-restricted feeding shows metabolic benefits
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6">
                    <h4 className="font-semibold text-amber-800 mb-3 text-center">Key Clinical Insight</h4>
                    <p className="text-amber-700 text-sm text-center">
                      Modern continuous glucose monitoring reveals that the same meal can cause vastly different glucose responses 
                      based on sleep quality, stress levels, exercise timing, and even time of day. This variability explains why 
                      traditional "one-size-fits-all" nutrition advice often fails.
                    </p>
                    <div className="flex justify-center items-center gap-4 mt-4 text-xs text-amber-600">
                      <span>🏃‍♂️ Exercise context</span>
                      <span>•</span>
                      <span>😴 Sleep quality</span>
                      <span>•</span>
                      <span>⏰ Meal timing</span>
                      <span>•</span>
                      <span>😰 Stress levels</span>
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
                    <h3 className="font-semibold mb-2">Realtime Optimisation</h3>
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