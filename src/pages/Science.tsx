import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TrendingUp, Brain, Microscope, Activity, Clock, Zap, Users, Dna, Heart, Moon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import InteractiveScienceModule from '@/components/InteractiveScienceModule';
import ScienceTopicExplorer from '@/components/ScienceTopicExplorer';
import QuickFactsTicker from '@/components/QuickFactsTicker';
import glucoseResponseIllustration from '@/assets/glucose-response-illustration.jpg';
import medicalDataChart from '@/assets/medical-data-chart.jpg';
import diverseWellnessGroup from '@/assets/diverse-wellness-group.jpg';
import peacefulSleep from '@/assets/peaceful-sleep.jpg';
import laboratoryEquipment from '@/assets/laboratory-equipment.jpg';

const SciencePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedModules, setExpandedModules] = useState<string[]>([]);

  // Science module data with enhanced content
  const scienceModules = [
    {
      id: 'insulin-sensitivity',
      title: 'Optimal Insulin Sensitivity',
      icon: TrendingUp,
      summary: 'Understanding how your body efficiently manages blood sugar with minimal hormonal intervention.',
      category: 'Metabolism',
      complexity: 'Beginner' as const,
      readTime: '5 min read',
      image: glucoseResponseIllustration,
      content: {
        overview: 'Healthy pancreatic β-cells produce minimal insulin to maintain glucose 70-100 mg/dL. Muscle and liver tissues respond efficiently, clearing glucose rapidly post-meal.',
        keyFindings: [
          'Optimal insulin sensitivity requires 2-10x less insulin than insulin-resistant states',
          'Stable glucose levels correlate with 25% improvement in cognitive function',
          'Muscle glucose uptake can improve by 30-50% with proper conditioning'
        ],
        methodology: 'Research based on hyperinsulinemic-euglycemic clamp studies and continuous glucose monitoring data.',
        implications: [
          'Prioritize post-meal movement to enhance glucose clearance',
          'Focus on food combinations that minimize glucose spikes',
          'Monitor glucose response to identify your optimal foods'
        ],
        relatedTopics: ['Exercise Physiology', 'Muscle Metabolism', 'Glucose Monitoring']
      }
    },
    {
      id: 'hyperinsulinemia',
      title: 'Compensatory Hyperinsulinemia',
      icon: Activity,
      summary: 'When your pancreas works overtime to overcome cellular resistance - the hidden precursor to diabetes.',
      category: 'Pathophysiology',
      complexity: 'Intermediate' as const,
      readTime: '8 min read',
      image: medicalDataChart,
      content: {
        overview: 'Pancreas overproduces insulin (2-10x normal) to overcome cellular resistance. Eventually β-cells exhaust, leading to type 2 diabetes progression.',
        keyFindings: [
          'Compensatory hyperinsulinemia can persist for 10-15 years before diabetes onset',
          'Beta-cell function declines by 4-5% annually once hyperinsulinemia begins',
          'Early intervention can reverse insulin resistance in 60-80% of cases'
        ],
        methodology: 'Analysis of longitudinal diabetes prevention studies and beta-cell function assessments.',
        implications: [
          'Regular fasting insulin testing for early detection',
          'Implement lifestyle interventions before glucose elevation',
          'Focus on reducing insulin demand through dietary modifications'
        ],
        relatedTopics: ['Insulin Resistance', 'Beta-cell Function', 'Diabetes Prevention']
      }
    },
    {
      id: 'physiological-adaptations',
      title: 'Physiological Adaptations',
      icon: Users,
      summary: 'How different life stages naturally modify insulin sensitivity for optimal health outcomes.',
      category: 'Life Stages',
      complexity: 'Intermediate' as const,
      readTime: '6 min read',
      image: diverseWellnessGroup,
      content: {
        overview: 'Puberty causes 25-50% insulin resistance to support growth. Pregnancy develops 40-60% resistance for fetal glucose supply.',
        keyFindings: [
          'Pubertal insulin resistance peaks at Tanner stage 3-4, then normalizes',
          'Pregnancy insulin resistance increases 3-fold by third trimester',
          'Athletic training can improve insulin sensitivity by 85% in 12 weeks'
        ],
        methodology: 'Cross-sectional studies across age groups and longitudinal tracking through puberty and pregnancy.',
        implications: [
          'Expect and accommodate natural insulin resistance during growth phases',
          'Implement targeted nutrition strategies during pregnancy',
          'Leverage exercise as the most potent insulin sensitizer'
        ],
        relatedTopics: ['Puberty Metabolism', 'Pregnancy Nutrition', 'Exercise Science']
      }
    },
    {
      id: 'environmental-modulation',
      title: 'Environmental Modulation',
      icon: Moon,
      summary: 'The profound impact of sleep, stress, and daily rhythms on metabolic health.',
      category: 'Lifestyle',
      complexity: 'Advanced' as const,
      readTime: '10 min read',
      image: peacefulSleep,
      content: {
        overview: 'Sleep, stress, and circadian rhythms profoundly impact insulin sensitivity. One night of poor sleep can reduce sensitivity by 30%.',
        keyFindings: [
          'Sleep deprivation for one night reduces insulin sensitivity by 25-30%',
          'Chronic stress increases visceral fat accumulation by 45%',
          'Social jet lag affects 69% of population, impairing glucose tolerance'
        ],
        methodology: 'Sleep deprivation studies using clamp techniques and circadian rhythm disruption protocols.',
        implications: [
          'Prioritize 7-9 hours of quality sleep for optimal metabolic health',
          'Implement stress management techniques to reduce cortisol burden',
          'Align meal timing with circadian rhythms for better glucose control'
        ],
        relatedTopics: ['Sleep Science', 'Stress Physiology', 'Circadian Biology']
      }
    },
    {
      id: 'fat-metabolism',
      title: 'Fat Metabolism Myths',
      icon: Heart,
      summary: 'Debunking decades of fat phobia with modern evidence-based nutritional science.',
      category: 'Nutrition',
      complexity: 'Beginner' as const,
      readTime: '12 min read',
      image: laboratoryEquipment,
      content: {
        overview: 'Modern research from 2023-2025 shows saturated fats are not cardiovascular villains once believed. Quality matters more than quantity.',
        keyFindings: [
          'No significant association between saturated fat and cardiovascular disease in 78 studies (650,000 people)',
          'Higher omega-6 intake linked to 12% lower cardiovascular mortality',
          'Only 15% of blood cholesterol comes from diet, 85% produced by liver'
        ],
        methodology: 'Systematic reviews and meta-analyses from 2023-2025, reanalysis of historical studies.',
        implications: [
          'Focus on fat quality rather than total fat restriction',
          'Include healthy fats from whole food sources',
          'Avoid processed foods with trans fats and oxidized oils'
        ],
        relatedTopics: ['Cardiovascular Health', 'Hormone Production', 'Brain Health']
      }
    }
  ];

  const studies = [
    {
      icon: TrendingUp,
      title: "The Glucose Paradox",
      journal: "Frontiers in Cardiovascular Medicine, 2020",
      finding: "27% increased CVD risk from glucose spikes, even in non-diabetics",
      color: "text-red-600"
    },
    {
      icon: Dna,
      title: "Gut Microbiome Carbohydrate Metabolism", 
      journal: "Nature, 2023",
      finding: "Microbiome contributes up to 10% of host energy extraction",
      color: "text-emerald-600"
    },
    {
      icon: Clock,
      title: "Circadian Metabolic Disruption",
      journal: "Diabetologia, 2020", 
      finding: "69% of population experiences social jet lag affecting metabolism",
      color: "text-blue-600"
    }
  ];

  const handleModuleClick = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleTopicSelect = (topicId: string) => {
    const moduleExists = scienceModules.find(m => m.id === topicId);
    if (moduleExists) {
      handleModuleClick(topicId);
      document.getElementById('science-modules')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.primary/8),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.secondary/10),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8
              }}
            />
          ))}
        </div>
        
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
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
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

            {/* Quick Facts Ticker */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <QuickFactsTicker />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white">
                <Microscope className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Interactive Science
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/waitlist">
                  Join Research Community
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Science Modules */}
      <section id="science-modules" className="py-16 lg:py-24 bg-gradient-to-b from-background via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Interactive Science{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Modules
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive deep into the science with interactive visualizations, real-time demonstrations, 
              and progressive learning modules that adapt to your curiosity.
            </p>
          </motion.div>

          {/* Core Science Modules */}
          <div className="space-y-8">
            {scienceModules.map((module) => (
              <InteractiveScienceModule
                key={module.id}
                module={module}
                onModuleClick={handleModuleClick}
                isExpanded={expandedModules.includes(module.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Science Topic Explorer */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Explore All{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Science Topics
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From fundamental metabolism to cutting-edge research, discover the complete science behind 
              personalized nutrition with our comprehensive topic explorer.
            </p>
          </motion.div>

          <ScienceTopicExplorer 
            onTopicSelect={handleTopicSelect}
            expandedTopics={expandedModules}
          />
        </div>
      </section>

      {/* Latest Research Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Latest{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Research Findings
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Breakthrough studies that are reshaping our understanding of metabolism and nutrition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <motion.div
                  key={study.title}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-full p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className={`w-6 h-6 ${study.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3 font-medium">
                          {study.journal}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.finding}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-xs text-primary font-medium group-hover:gap-2 transition-all">
                        Read Full Study
                        <motion.div
                          className="ml-1"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;