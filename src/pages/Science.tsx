import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Microscope, Activity, BarChart, Clock, Zap, Target, Heart, Moon, Coffee, Timer, Users, Dna, FlaskConical, LineChart, Calendar, Dumbbell, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import breadAlonePhoto from '@/assets/bread-alone-photo.jpg';
import breadAvocadoPhoto from '@/assets/bread-avocado-photo.jpg';
import avocadoBreadSequencePhoto from '@/assets/avocado-bread-sequence-photo.jpg';
import glucoseResponseIllustration from '@/assets/glucose-response-illustration.jpg';
import laboratoryEquipment from '@/assets/laboratory-equipment.jpg';
import healthAppPhone from '@/assets/health-app-phone.jpg';
import medicalDataChart from '@/assets/medical-data-chart.jpg';
import diverseWellnessGroup from '@/assets/diverse-wellness-group.jpg';
import peacefulSleep from '@/assets/peaceful-sleep.jpg';


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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
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
              <div className="relative inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs md:text-sm font-medium text-primary">Evidence-Based Nutrition Science</span>
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

            {/* Key Research Insights - Mobile Optimized */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12"
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
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="h-32 md:h-48 overflow-hidden">
                    <img 
                      src={glucoseResponseIllustration}
                      alt="Glucose level chart showing healthy regulation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 md:p-4 lg:p-6">
                    <h4 className="font-bold mb-2 md:mb-3 text-xs md:text-sm">Optimal Insulin Sensitivity</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Healthy pancreatic β-cells produce minimal insulin to maintain glucose 70-100 mg/dL. Muscle and liver tissues respond efficiently, clearing glucose rapidly post-meal.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="h-32 md:h-48 overflow-hidden">
                    <img 
                      src={medicalDataChart}
                      alt="Medical data chart"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 md:p-4 lg:p-6">
                    <h4 className="font-bold mb-2 md:mb-3 text-xs md:text-sm">Compensatory Hyperinsulinemia</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Pancreas overproduces insulin (2-10x normal) to overcome cellular resistance. Eventually β-cells exhaust, leading to type 2 diabetes progression.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="h-32 md:h-48 overflow-hidden">
                     <img 
                      src={diverseWellnessGroup}
                      alt="Diverse group of people"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 md:p-4 lg:p-6">
                    <h4 className="font-bold mb-2 md:mb-3 text-xs md:text-sm">Physiological Adaptations</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Puberty causes 25-50% insulin resistance to support growth. Pregnancy develops 40-60% resistance for fetal glucose supply. Athletes achieve 30-50% higher sensitivity.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="h-32 md:h-48 overflow-hidden">
                    <img 
                      src={peacefulSleep}
                      alt="Person sleeping peacefully"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 md:p-4 lg:p-6">
                    <h4 className="font-bold mb-2 md:mb-3 text-xs md:text-sm">Environmental Modulation</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Sleep deprivation causes 20-30% insulin resistance. Stress hormones (cortisol) increase hepatic glucose output. Exercise acutely improves sensitivity for 24-48 hours.
                    </p>
                  </div>
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

            {/* Traditional Problems vs Modern Solutions - Mobile Optimized */}
            <motion.div
              className="mb-12 md:mb-20"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Mobile: Compact card format, Desktop: Original two-column layout */}
              <div className="lg:hidden">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                        <Target className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="text-sm font-medium text-red-700">Old Paradigm</div>
                      <div className="text-xs text-red-600">One-size-fits-all</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-2 mx-auto">
                        <Zap className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-sm font-medium text-green-700">New Science</div>
                      <div className="text-xs text-green-600">Personalized glucose</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-green-50 rounded-lg">
                      <span className="text-sm text-gray-600">Calorie counting</span>
                      <span className="text-sm font-medium text-green-700">→ Glucose response</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-green-50 rounded-lg">
                      <span className="text-sm text-gray-600">95% diet failure</span>
                      <span className="text-sm font-medium text-green-700">→ 85% adherence</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-green-50 rounded-lg">
                      <span className="text-sm text-gray-600">Hormonal blindness</span>
                      <span className="text-sm font-medium text-green-700">→ Real-time insights</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Left side - Traditional Problems */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm font-medium mb-4">
                    <Target className="w-4 h-4" />
                    The Old Paradigm
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      {
                        icon: Users,
                        title: "One-Size-Fits-All Approach",
                        description: "Ignored individual metabolic differences and genetic variations",
                        stat: "95% of diets fail long-term"
                      },
                      {
                        icon: BarChart,
                        title: "Calorie Counting Focus",
                        description: "Treated all calories as equal, ignoring food quality and timing",
                        stat: "200 calories of soda ≠ 200 calories of almonds"
                      },
                      {
                        icon: Activity,
                        title: "Hormonal Blindness",
                        description: "Overlooked insulin, cortisol, and hunger hormone responses",
                        stat: "Insulin can vary 10x between individuals"
                      },
                      {
                        icon: Timer,
                        title: "Restriction Cycles",
                        description: "Created unsustainable patterns leading to metabolic adaptation",
                        stat: "Metabolism drops up to 40% during restriction"
                      }
                    ].map((problem, index) => (
                      <motion.div
                        key={index}
                        className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-gradient-to-r from-red-50/50 to-transparent border border-red-100 group hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      >
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 md:w-12 md:h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                            <problem.icon className="w-4 h-4 md:w-6 md:h-6 text-red-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{problem.title}</h4>
                          <p className="text-xs md:text-sm text-gray-600 mb-2">{problem.description}</p>
                          <div className="text-xs font-medium text-red-600 bg-red-100 rounded px-2 py-1 inline-block">
                            {problem.stat}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right side - Modern Solutions */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-4">
                    <Zap className="w-4 h-4" />
                    The New Science
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      {
                        icon: Dna,
                        title: "Personalized Metabolic Profiling",
                        description: "CGM data reveals individual glucose response patterns",
                        stat: "70% variation in glucose response to identical foods"
                      },
                      {
                        icon: LineChart,
                        title: "Glucose-Centric Approach",
                        description: "Focus on metabolic impact rather than caloric content",
                        stat: "Food order can reduce glucose spikes by 40%"
                      },
                      {
                        icon: Heart,
                        title: "Hormonal Optimization",
                        description: "Strategic timing and combinations to optimize insulin sensitivity",
                        stat: "Protein first can lower peak glucose by 30%"
                      },
                      {
                        icon: Brain,
                        title: "Sustainable Patterns",
                        description: "Data-driven habits that work with your natural rhythms",
                        stat: "85% adherence with personalized protocols"
                      }
                    ].map((solution, index) => (
                      <motion.div
                        key={index}
                        className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-gradient-to-r from-green-50/50 to-transparent border border-green-100 group hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      >
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                            <solution.icon className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{solution.title}</h4>
                          <p className="text-xs md:text-sm text-gray-600 mb-2">{solution.description}</p>
                          <div className="text-xs font-medium text-green-600 bg-green-100 rounded px-2 py-1 inline-block">
                            {solution.stat}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Central comparison visual */}
              <motion.div
                className="relative mt-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <BarChart className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="text-sm font-semibold text-red-700">Traditional</div>
                      <div className="text-xs text-red-600">Calories Only</div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <LineChart className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-sm font-semibold text-green-700">Personalized</div>
                      <div className="text-xs text-green-600">Glucose-Centric</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

              {/* Enhanced Scientific Foundation */}
              <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <FlaskConical className="w-4 h-4" />
                    Scientific Foundation
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">The Discovery</span> That Changed Everything
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    From accidental discoveries to precision medicine—how a century of breakthroughs 
                    revealed why your glucose response is as unique as your fingerprint.
                  </p>
                </div>

                {/* Compact Scientific Milestones */}
                <div className="relative mb-12 md:mb-16">
                  {/* Mobile: Ultra-compact timeline */}
                  <div className="md:hidden">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <h3 className="text-lg font-bold mb-4 text-center">Century of Breakthroughs</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { year: "1889", title: "Pancreas Link", icon: "🔬" },
                          { year: "1921", title: "Insulin Isolated", icon: "💉" },
                          { year: "1978", title: "Synthetic Era", icon: "🧬" },
                          { year: "2020s", title: "AI Precision", icon: "🤖" }
                        ].map((milestone, index) => (
                          <div key={index} className="text-center p-2 bg-white/40 rounded-lg">
                            <div className="text-lg mb-1">{milestone.icon}</div>
                            <div className="text-xs font-bold text-primary">{milestone.year}</div>
                            <div className="text-xs font-medium">{milestone.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop: Original timeline design */}
                  <div className="hidden md:block relative bg-gradient-to-r from-background via-muted/20 to-background rounded-2xl p-8 md:p-12 overflow-hidden">
                    {/* Background elements */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <div className="absolute top-4 right-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-8 text-center">Century of Scientific Breakthroughs</h3>
                      
                      {/* Horizontal timeline for larger screens */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-primary/30"></div>
                        <div className="w-3 h-3 bg-primary rounded-full mx-4"></div>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-primary/30"></div>
                        <div className="w-3 h-3 bg-primary rounded-full mx-4"></div>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-primary/30"></div>
                        <div className="w-3 h-3 bg-primary rounded-full mx-4"></div>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-6">
                        {[
                          {
                            year: "1889",
                            title: "Pancreas Link",
                            description: "First proof that pancreas controls blood glucose",
                            impact: "Foundation discovery"
                          },
                          {
                            year: "1921",
                            title: "Insulin Isolated",
                            description: "Toronto team saves Leonard Thompson, age 14",
                            impact: "Medical miracle"
                          },
                          {
                            year: "1978",
                            title: "Synthetic Era",
                            description: "Recombinant DNA creates human insulin",
                            impact: "Precision manufacturing"
                          },
                          {
                            year: "2020s",
                            title: "AI Precision",
                            description: "CGM + AI reveals individual patterns",
                            impact: "Personalized medicine"
                          }
                        ].map((milestone, index) => (
                          <motion.div
                            key={index}
                            className="text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                          >
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all duration-300 border border-white/20 group-hover:shadow-lg">
                              <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {milestone.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                                {milestone.description}
                              </p>
                              <div className="text-xs text-primary/70 font-medium">
                                {milestone.impact}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Individual Metabolic Phenotypes - Modern Design */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                      <Target className="w-4 h-4" />
                      Metabolic Diversity
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Individual <span className="text-gradient bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Metabolic Fingerprints</span>
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Every person responds differently to the same food. Here's why personalization isn't optional—it's essential.
                    </p>
                  </div>
                  
                  {/* Mobile: Detailed compact metabolic fingerprints */}
                  <div className="md:hidden">
                    <div className="space-y-3">
                      {[
                        { 
                          title: "Healthy Adults", 
                          glucose: "70-99 mg/dL", 
                          insulin: "2-10 μU/mL",
                          details: "β-cells produce minimal insulin; muscle/liver respond efficiently. Tight glucose control maintained effortlessly.",
                          population: "~60% of adults",
                          color: "emerald",
                          icon: "💚" 
                        },
                        { 
                          title: "Prediabetes", 
                          glucose: "100-125 mg/dL", 
                          insulin: ">15 μU/mL",
                          details: "β-cells compensate for insulin resistance by producing 2-3x normal insulin. Early warning of metabolic dysfunction.",
                          population: "~35% of adults",
                          color: "amber",
                          icon: "⚠️" 
                        },
                        { 
                          title: "Type 1 Diabetes", 
                          glucose: "Variable", 
                          insulin: "External only",
                          details: "Autoimmune destruction of β-cells. Requires precise exogenous insulin replacement for survival.",
                          population: "~5% of diabetics",
                          color: "red",
                          icon: "💉" 
                        },
                        { 
                          title: "Type 2 Diabetes", 
                          glucose: "≥126 mg/dL", 
                          insulin: "Declining",
                          details: "Progressive β-cell failure combined with severe insulin resistance. Often requires multiple medications.",
                          population: "~95% of diabetics",
                          color: "blue",
                          icon: "📈" 
                        },
                        { 
                          title: "Elite Athletes", 
                          glucose: "65-85 mg/dL", 
                          insulin: "50% lower",
                          details: "Enhanced GLUT4 density and mitochondrial function. Can maintain low glucose with minimal insulin.",
                          population: "Peak performers",
                          color: "purple",
                          icon: "💪" 
                        },
                        { 
                          title: "Pregnancy (2nd/3rd)", 
                          glucose: "60-105 mg/dL", 
                          insulin: "2.5x normal",
                          details: "Placental hormones induce 40-60% insulin resistance to prioritize fetal glucose supply.",
                          population: "Temporary adaptation",
                          color: "pink",
                          icon: "🤱" 
                        }
                      ].map((phenotype, index) => (
                        <div key={index} className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{phenotype.icon}</span>
                              <h4 className="text-sm font-bold">{phenotype.title}</h4>
                            </div>
                            <span className="text-xs text-muted-foreground font-medium px-2 py-1 bg-white/40 rounded-full">{phenotype.population}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="text-xs">
                              <span className="text-muted-foreground block">Glucose Range:</span>
                              <div className="font-medium text-gray-800">{phenotype.glucose}</div>
                            </div>
                            <div className="text-xs">
                              <span className="text-muted-foreground block">Insulin Level:</span>
                              <div className="font-medium text-gray-800">{phenotype.insulin}</div>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{phenotype.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Desktop: Full metabolic fingerprints grid */}
                  <div className="hidden md:block relative">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-8">
                      {[
                        {
                          title: "Healthy Adults",
                          color: "emerald",
                          icon: Heart,
                          glucose: "70-99 mg/dL",
                          insulin: "2-10 μU/mL", 
                          response: "Tight control",
                          population: "~60%"
                        },
                        {
                          title: "Type 1 Diabetic",
                          color: "red",
                          icon: Zap,
                          glucose: "Variable",
                          insulin: "External only",
                          response: "Requires precision",
                          population: "~5% of diabetics"
                        },
                        {
                          title: "Prediabetic",
                          color: "amber",
                          icon: TrendingUp,
                          glucose: "100-125 mg/dL",
                          insulin: ">15 μU/mL",
                          response: "Compensating",
                          population: "~35%"
                        },
                        {
                          title: "Type 2 Diabetic",
                          color: "blue",
                          icon: Activity,
                          glucose: "≥126 mg/dL",
                          insulin: "Declining",
                          response: "Impaired",
                          population: "~95% of diabetics"
                        },
                        {
                          title: "Elite Athletes",
                          color: "purple",
                          icon: Dumbbell,
                          glucose: "Optimized",
                          insulin: "50% lower",
                          response: "Enhanced",
                          population: "Peak performers"
                        },
                        {
                          title: "Growing Youth",
                          color: "indigo",
                          icon: Baby,
                          glucose: "Dynamic",
                          insulin: "Age-dependent",
                          response: "Developing",
                          population: "25% at risk"
                        },
                        {
                          title: "Pregnancy",
                          color: "pink",
                          icon: Heart,
                          glucose: "Maternal priority",
                          insulin: "2.5x production",
                          response: "Adaptive",
                          population: "Temporary state"
                        },
                        {
                          title: "Aging Adults",
                          color: "slate",
                          icon: Clock,
                          glucose: "Gradual rise",
                          insulin: "Decreasing sensitivity",
                          response: "Progressive",
                          population: "Natural changes"
                        }
                      ].map((phenotype, index) => (
                        <motion.div
                          key={index}
                          className="group relative"
                          initial={{ opacity: 0, y: 30 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.8 + index * 0.05, duration: 0.6 }}
                          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className={`w-10 h-10 bg-${phenotype.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                <phenotype.icon className={`w-5 h-5 text-${phenotype.color}-600`} />
                              </div>
                              <div className={`text-xs font-medium text-${phenotype.color}-600 bg-${phenotype.color}/10 rounded-full px-2 py-1`}>
                                {phenotype.population}
                              </div>
                            </div>
                            
                            <h4 className={`text-base md:text-lg font-bold mb-3 text-${phenotype.color}-900 group-hover:text-${phenotype.color}-700 transition-colors`}>
                              {phenotype.title}
                            </h4>
                            
                            {/* Key metrics in compact format */}
                            <div className="space-y-2 mb-4">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Glucose:</span>
                                <span className="font-medium">{phenotype.glucose}</span>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Insulin:</span>
                                <span className="font-medium">{phenotype.insulin}</span>
                              </div>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Response:</span>
                                <span className={`font-medium text-${phenotype.color}-600`}>{phenotype.response}</span>
                              </div>
                            </div>
                            
                            {/* Subtle indicator line */}
                            <div className={`w-full h-1 bg-gradient-to-r from-${phenotype.color}-200 to-${phenotype.color}-400 rounded-full opacity-60`}></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

              {/* Physiological Context - Enhanced from knowledge base */}
              <div className="gradient-card rounded-3xl p-6 md:p-8 mb-12">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                  </div>
                  <span className="hidden md:inline">Physiological Context: How Conditions Modulate Glucose Response</span>
                  <span className="md:hidden">Physiological Context</span>
                </h3>
                
                {/* Mobile: Compact grid */}
                <div className="md:hidden grid grid-cols-2 gap-3">
                  {[
                    { title: "Exercise", icon: "🏃", effect: "Enhanced uptake", color: "green" },
                    { title: "Stress", icon: "😰", effect: "Elevated glucose", color: "red" },
                    { title: "Sleep", icon: "😴", effect: "Circadian rhythm", color: "indigo" },
                    { title: "Fasting", icon: "⏰", effect: "Stable glucose", color: "amber" }
                  ].map((context, index) => (
                    <div key={index} className="text-center p-3 bg-white/40 rounded-lg">
                      <div className="text-lg mb-1">{context.icon}</div>
                      <div className="text-xs font-bold mb-1">{context.title}</div>
                      <div className="text-xs text-muted-foreground">{context.effect}</div>
                    </div>
                  ))}
                </div>
                
                {/* Desktop: Full detailed grid */}
                <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-xl p-4 md:p-6">
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

                    <div className="bg-red-50 rounded-xl p-4 md:p-6">
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
                    <div className="bg-indigo-50 rounded-xl p-4 md:p-6">
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

                    <div className="bg-amber-50 rounded-xl p-4 md:p-6">
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
                
                <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-cyan-700">Continuous Glucose Monitoring</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Real-time glucose data every few minutes reveals individual patterns previously invisible to traditional testing.
                    </p>
                    <div className="text-xs text-cyan-600 bg-cyan-50 rounded p-2">
                      <strong>Key insight:</strong> 10-fold variation in glucose response to identical foods between individuals
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                    <h4 className="font-semibold mb-3 text-emerald-700">Multi-Omics Analysis</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Integration of genomics, microbiomics, metabolomics creates comprehensive metabolic profiles.
                    </p>
                    <div className="text-xs text-emerald-600 bg-emerald-50 rounded p-2">
                      <strong>Future:</strong> Digital twins for personalized nutrition prediction
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
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
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mx-auto mb-3 md:mb-4 border border-gray-200">
                        <img 
                          src={breadAlonePhoto} 
                          alt="Bread alone" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h5 className="font-semibold mb-2 text-sm md:text-base">Bread Alone</h5>
                      <div className="text-lg md:text-2xl font-bold text-red-600 mb-2">Baseline Spike</div>
                      <p className="text-xs md:text-sm text-muted-foreground">Rapid glucose rise, energy crash in 2 hours</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mx-auto mb-3 md:mb-4 border border-gray-200">
                        <img 
                          src={breadAvocadoPhoto} 
                          alt="Bread with avocado" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h5 className="font-semibold mb-2 text-sm md:text-base">Bread + Avocado</h5>
                      <div className="text-lg md:text-2xl font-bold text-yellow-600 mb-2">40% Reduction</div>
                      <p className="text-xs md:text-sm text-muted-foreground">Fats slow glucose absorption</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mx-auto mb-3 md:mb-4 border border-gray-200">
                        <img 
                          src={avocadoBreadSequencePhoto} 
                          alt="Avocado first, then bread sequence" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h5 className="font-semibold mb-2 text-sm md:text-base">Avocado First, Then Bread</h5>
                      <div className="text-lg md:text-2xl font-bold text-green-600 mb-2">70% Reduction</div>
                      <p className="text-xs md:text-sm text-muted-foreground">Optimal sequence for stable glucose</p>
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

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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

                <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                    <BarChart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Multi-Factor Analysis</h3>
                    <p className="text-sm text-muted-foreground">Integrates food composition, sequence, timing, and your unique metabolic profile</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Personalized Predictions</h3>
                    <p className="text-sm text-muted-foreground">Learns your individual patterns across different physiological states</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
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
