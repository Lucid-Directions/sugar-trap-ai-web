import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Microscope, Activity, BarChart, Clock, Zap, Target, Heart, Moon, Coffee, Timer, Users, Dna, FlaskConical, LineChart } from 'lucide-react';
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
      
      {/* Hero Section with Research Insights */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.primary/8),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.secondary/10),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto text-center"
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
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-8">
              The Science of{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent block lg:inline">
                Personal Nutrition
              </span>
            </h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Everyone's glucose response is as unique as their fingerprint. Modern research reveals why traditional one-size-fits-all approaches fail, and how personalized nutrition science is revolutionizing health.
            </motion.p>

            {/* Key Research Insights */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-green-100 to-green-200">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold mb-3 text-sm">Healthy Regulation</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Healthy individuals maintain tightly regulated glucose with low insulin due to high sensitivity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-yellow-100 to-yellow-200">
                    <BarChart className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-bold mb-3 text-sm">Insulin Resistance</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Insulin-resistant states show elevated insulin levels and impaired glucose tolerance, progressing to beta-cell failure if unchecked.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-purple-100 to-purple-200">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-3 text-sm">Special Populations</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Children, athletes, and pregnant women each have unique profiles – puberty and pregnancy induce transient resistance, while athletes show enhanced action.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-blue-100 to-blue-200">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-3 text-sm">Dynamic Conditions</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Exercise and fasting generally lower glucose/insulin requirements, whereas stress and circadian hormone surges raise glucose demands.
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link to="/waitlist">Start Your Journey</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Professional geometric elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-pulse animation-delay-300"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse animation-delay-700"></div>
        </div>
      </section>

      {/* Transition section - Enhanced but keep structure */}
      <section className="relative py-20 overflow-hidden">
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
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                For decades, weight management advice was simple: <strong>calories in, calories out</strong>. 
                But groundbreaking research has revealed why this oversimplified model fails to account for the body's complex hormonal response to food—the key to sustainable metabolic health.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
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

            {/* Enhanced Scientific Foundation */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gradient">The Discovery</span> That Changed Everything
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Understanding insulin and glucose dynamics required over a century of scientific breakthroughs. 
                  Here's how modern research reveals why personalized nutrition is not just possible—it's essential.
                </p>
              </div>

              {/* Historical Context - From the knowledge base */}
              <div className="gradient-card rounded-3xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-blue-600" />
                  </div>
                  The Insulin Discovery: A Century of Scientific Progress
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-blue-700">1889: The Pancreas Connection</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        German researchers von Mering and Minkowski surgically removed a dog's pancreas—the animal rapidly developed severe diabetes, proving the pancreas controls blood glucose.
                      </p>
                      <div className="text-xs text-blue-600 bg-blue-50 rounded p-2">
                        First definitive link between pancreas and diabetes
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-green-700">1921: The Toronto Breakthrough</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Banting, Best, Macleod, and Collip successfully isolated insulin from pancreatic islets, transforming diabetes from a death sentence to a manageable condition.
                      </p>
                      <div className="text-xs text-green-600 bg-green-50 rounded p-2">
                        First successful insulin treatment: Leonard Thompson, age 14
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-purple-700">1978-1982: Synthetic Insulin</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Recombinant DNA technology enabled production of synthetic human insulin, eliminating allergic reactions from animal-derived insulin.
                      </p>
                      <div className="text-xs text-purple-600 bg-purple-50 rounded p-2">
                        Eli Lilly's Humulin: first biosynthetic human insulin
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold mb-3 text-orange-700">2000s-Present: Precision Medicine</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Continuous glucose monitors, insulin pumps, and AI-driven analytics enable personalized diabetes management based on individual metabolic patterns.
                      </p>
                      <div className="text-xs text-orange-600 bg-orange-50 rounded p-2">
                        Era of automated insulin delivery and precision nutrition
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Individual Metabolic Differences - Enhanced from knowledge base */}
              <div className="gradient-card rounded-3xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  Individual Metabolic Phenotypes
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-green-700">Healthy Adults</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• Fasting glucose: 70-99 mg/dL</li>
                      <li>• Low fasting insulin (2-10 μU/mL)</li>
                      <li>• Post-meal peak: &lt;140 mg/dL</li>
                      <li>• Robust first-phase insulin response</li>
                    </ul>
                    <div className="mt-3 text-xs text-green-600 bg-green-50 rounded p-2">
                      Tight glycemic control with minimal insulin
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-yellow-700">Prediabetic Population</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• Fasting glucose: 100-125 mg/dL</li>
                      <li>• Elevated insulin (&gt;15 μU/mL)</li>
                      <li>• 1-hour post-meal: &gt;160 mg/dL</li>
                      <li>• Compensatory hyperinsulinemia</li>
                    </ul>
                    <div className="mt-3 text-xs text-yellow-600 bg-yellow-50 rounded p-2">
                      <strong>30% of young adults (16-25y)</strong> show hidden insulin resistance
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-blue-700">Type 2 Diabetic</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• Fasting glucose: ≥126 mg/dL</li>
                      <li>• Early: High insulin (~31 μU/mL)</li>
                      <li>• Late: Progressive β-cell failure</li>
                      <li>• Lost first-phase response</li>
                    </ul>
                    <div className="mt-3 text-xs text-blue-600 bg-blue-50 rounded p-2">
                      Monophasic glucose curves indicate dysfunction
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-purple-700">Endurance Athletes</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• 50% lower fasting insulin</li>
                      <li>• 22% higher insulin sensitivity</li>
                      <li>• 32% greater mitochondrial capacity</li>
                      <li>• Superior glucose uptake efficiency</li>
                    </ul>
                    <div className="mt-3 text-xs text-purple-600 bg-purple-50 rounded p-2">
                      Training creates metabolic flexibility and efficiency
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-indigo-700">Children & Adolescents</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• Age 3-4: ~3-4 μU/mL insulin</li>
                      <li>• Age 10: ~7-9 μU/mL insulin</li>
                      <li>• Puberty: 25-50% ↓ sensitivity</li>
                      <li>• Very robust β-cell function</li>
                    </ul>
                    <div className="mt-3 text-xs text-indigo-600 bg-indigo-50 rounded p-2">
                      25% of obese children already show glucose intolerance
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
                      Placental hormones create physiological resistance
                    </div>
                  </div>
                </div>
              </div>

              {/* Physiological Context - Enhanced from knowledge base */}
              <div className="gradient-card rounded-3xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  Physiological Context: How Conditions Modulate Glucose Response
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="font-semibold mb-4 text-green-700 flex items-center gap-2">
                        <Activity className="w-5 h-5" />
                        Exercise Physiology
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-green-800 mb-1">During Moderate Exercise</p>
                          <p className="text-sm text-green-700">
                            Insulin levels drop while glucose uptake increases via insulin-independent GLUT4 translocation
                          </p>
                          <p className="text-xs text-green-600 mt-1 italic">
                            Muscle contractions activate glucose transporters directly
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-green-800 mb-1">High-Intensity Exercise</p>
                          <p className="text-sm text-green-700">
                            Catecholamines can raise glucose for ~1 hour as "fight or flight" response
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-green-800 mb-1">Post-Exercise (24-48h)</p>
                          <p className="text-sm text-green-700">
                            Enhanced insulin sensitivity persists, prioritizing muscle glycogen restoration
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-xl p-6">
                      <h4 className="font-semibold mb-4 text-red-700 flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Stress Response
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-red-800 mb-1">Acute Stress</p>
                          <p className="text-sm text-red-700">
                            Epinephrine raises glucose by 20-35 mg/dL in healthy adults, 50-100 mg/dL in diabetics
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-red-800 mb-1">Chronic Stress</p>
                          <p className="text-sm text-red-700">
                            Elevated cortisol induces sustained insulin resistance and promotes visceral fat accumulation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-indigo-50 rounded-xl p-6">
                      <h4 className="font-semibold mb-4 text-indigo-700 flex items-center gap-2">
                        <Moon className="w-5 h-5" />
                        Sleep & Circadian Rhythms
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-indigo-800 mb-1">Dawn Phenomenon</p>
                          <p className="text-sm text-indigo-700">
                            Morning cortisol and growth hormone surge increases glucose 4-8 AM
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-indigo-800 mb-1">Sleep Deprivation</p>
                          <p className="text-sm text-indigo-700">
                            Single night of poor sleep reduces insulin sensitivity the next day
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-indigo-800 mb-1">Circadian Insulin Sensitivity</p>
                          <p className="text-sm text-indigo-700">
                            Higher sensitivity in morning, gradual decline throughout day
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-6">
                      <h4 className="font-semibold mb-4 text-amber-700 flex items-center gap-2">
                        <Timer className="w-5 h-5" />
                        Fasting vs. Fed States
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-amber-800 mb-1">Fasting State (8-12h)</p>
                          <p className="text-sm text-amber-700">
                            Low insulin (2-10 μU/mL), stable glucose via hepatic glucose production
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm font-medium text-amber-800 mb-1">Postprandial State</p>
                          <p className="text-sm text-amber-700">
                            Insulin surge (30-50+ μU/mL), facilitates glucose uptake and storage
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modern Technology & Precision Medicine */}
              <div className="gradient-card rounded-3xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <LineChart className="w-5 h-5 text-cyan-600" />
                  </div>
                  The Era of Precision Nutrition
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-cyan-700">Continuous Glucose Monitoring</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Real-time glucose data every few minutes reveals individual patterns previously invisible to traditional testing.
                    </p>
                    <div className="text-xs text-cyan-600 bg-cyan-50 rounded p-2">
                      <strong>Key insight:</strong> 10-fold variation in glucose response to identical foods between individuals
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-emerald-700">Multi-Omics Analysis</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Integration of genomics, microbiomics, metabolomics creates comprehensive metabolic profiles.
                    </p>
                    <div className="text-xs text-emerald-600 bg-emerald-50 rounded p-2">
                      <strong>Future:</strong> Digital twins for personalized nutrition prediction
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-violet-700">AI-Driven Predictions</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Machine learning algorithms identify complex patterns in food composition, timing, and individual response.
                    </p>
                    <div className="text-xs text-violet-600 bg-violet-50 rounded p-2">
                      <strong>Capability:</strong> Predict glucose response before eating
                    </div>
                  </div>
                </div>
              </div>

              {/* Food Combination Science - Professional version */}
              <div className="gradient-card rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-amber-600" />
                  </div>
                  The Food Combination Effect
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Research demonstrates that food sequence and combination can alter glucose response by up to 70%—
                  the same ingredients in different order create completely different metabolic outcomes.
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-inner">
                  <h4 className="text-xl font-bold mb-6 text-center">Clinical Example: Bread Response Modification</h4>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <div className="w-12 h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg relative">
                          <div className="absolute inset-1 bg-amber-300 rounded opacity-60"></div>
                        </div>
                      </div>
                      <h5 className="font-semibold mb-2">Bread Alone</h5>
                      <div className="text-2xl font-bold text-red-600 mb-2">Baseline Spike</div>
                      <p className="text-sm text-muted-foreground">Rapid glucose rise, energy crash in 2 hours</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <div className="flex items-center gap-1">
                          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full relative">
                            <div className="absolute inset-1 bg-green-300 rounded-full"></div>
                            <div className="absolute inset-2 bg-amber-200 rounded-full"></div>
                          </div>
                          <div className="w-6 h-4 bg-gradient-to-br from-amber-500 to-amber-700 rounded relative">
                            <div className="absolute inset-0.5 bg-amber-300 rounded opacity-60"></div>
                          </div>
                        </div>
                      </div>
                      <h5 className="font-semibold mb-2">Bread + Avocado</h5>
                      <div className="text-2xl font-bold text-yellow-600 mb-2">40% Reduction</div>
                      <p className="text-sm text-muted-foreground">Fats slow glucose absorption</p>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full relative">
                            <div className="absolute inset-1 bg-green-300 rounded-full"></div>
                            <div className="absolute inset-1.5 bg-amber-200 rounded-full"></div>
                          </div>
                          <Timer className="w-4 h-4 text-gray-500" />
                          <div className="w-5 h-3 bg-gradient-to-br from-amber-500 to-amber-700 rounded relative">
                            <div className="absolute inset-0.5 bg-amber-300 rounded opacity-60"></div>
                          </div>
                        </div>
                      </div>
                      <h5 className="font-semibold mb-2">Avocado First, Then Bread</h5>
                      <div className="text-2xl font-bold text-green-600 mb-2">70% Reduction</div>
                      <p className="text-sm text-muted-foreground">Optimal sequence for stable glucose</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h5 className="font-semibold text-blue-800 mb-2">Mechanism: The "Incretin Effect"</h5>
                    <p className="text-sm text-blue-700">
                      Eating protein and fat first triggers GLP-1 release, which slows gastric emptying and enhances 
                      insulin sensitivity. This gut-pancreas communication creates a "protective buffer" against subsequent 
                      carbohydrate absorption, explaining why food order matters more than previously understood.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Research Studies Section - Enhanced */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Peer-Reviewed</span> Research Foundation
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

              {/* Additional Research Citations */}
              <div className="mt-12 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Supporting Research</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-3">Population Studies</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Battalwar et al., <em>Front Endocrinol</em> (2023): Hyperinsulinemia in young adults</li>
                      <li>• Peplies et al., <em>Int J Obes</em> (2014): Pediatric insulin/glucose reference values</li>
                      <li>• Jensen et al., <em>J Diabetes Res</em> (2019): Pregnancy insulin resistance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Physiological Research</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Colberg et al., <em>ADA Position Statement</em> (2016): Exercise and diabetes</li>
                      <li>• Nguyen et al., <em>Diabetes</em> (2019): Circadian misalignment effects</li>
                      <li>• Leproult et al., <em>JCSM</em> (2015): Sleep extension and insulin sensitivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What SugarTrap AI Does - Enhanced */}
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

                <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
                  We integrate cutting-edge research on individual metabolic differences, physiological context, and food interaction science 
                  to predict your personal glucose response to any meal. This represents the convergence of a century of insulin research 
                  with modern AI capabilities—making personalized nutrition accessible without expensive clinical testing.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <BarChart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Multi-Factor Analysis</h3>
                    <p className="text-sm text-muted-foreground">Integrates food composition, sequence, timing, and your unique metabolic profile</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Personalized Predictions</h3>
                    <p className="text-sm text-muted-foreground">Learns your individual patterns across different physiological states</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Context-Aware Recommendations</h3>
                    <p className="text-sm text-muted-foreground">Adapts to exercise, stress, sleep, and circadian factors</p>
                  </div>
                </div>

                <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-semibold">
                  <Link to="/waitlist">Join the Science Revolution</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;
