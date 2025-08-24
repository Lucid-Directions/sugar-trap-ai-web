import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Microscope, Sparkles, ArrowRight, TrendingUp, Activity, Users, Heart, Clock, Moon, Brain, Dna, Play, Star, Filter, Search, ChevronRight, BookOpen, Zap, AlertTriangle, Info, CheckCircle, Target, BarChart3, Lightbulb, Shield, Gauge, ChevronDown, X } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import QuickFactsTicker from '@/components/QuickFactsTicker';

// Interactive Science Demo Component
const InteractiveScienceDemo = () => {
  const [selectedDemo, setSelectedDemo] = useState('insulin-sensitivity');
  const [sensitivityLevel, setSensitivityLevel] = useState([75]);
  const [timeOfDay, setTimeOfDay] = useState([8]);

  const demos = {
    'insulin-sensitivity': {
      title: 'Insulin Sensitivity Simulator',
      description: 'See how insulin sensitivity affects glucose curves in real-time',
      explanation: 'Insulin sensitivity determines how effectively your cells respond to insulin. Higher sensitivity means better glucose control and stable energy levels. This simulation shows how different sensitivity levels affect your glucose response to the same meal.',
      component: (
        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <h5 className="font-semibold text-blue-900 mb-2">What This Shows</h5>
            <p className="text-sm text-blue-800">
              Move the slider to see how insulin sensitivity affects glucose curves. Higher sensitivity (80%+) shows stable glucose with minimal spikes. 
              Lower sensitivity creates larger spikes that take longer to resolve, leading to energy crashes and increased hunger.
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Insulin Sensitivity: {sensitivityLevel[0]}%</span>
            <Badge className={
              sensitivityLevel[0] >= 80 ? 'bg-green-100 text-green-700 border-green-300' :
              sensitivityLevel[0] >= 60 ? 'bg-blue-100 text-blue-700 border-blue-300' :
              sensitivityLevel[0] >= 40 ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
              'bg-red-100 text-red-700 border-red-300'
            }>
              {sensitivityLevel[0] >= 80 ? 'Optimal' :
               sensitivityLevel[0] >= 60 ? 'Good' :
               sensitivityLevel[0] >= 40 ? 'Reduced' : 'Poor'}
            </Badge>
          </div>
          
          <Slider
            value={sensitivityLevel}
            onValueChange={setSensitivityLevel}
            min={20}
            max={100}
            step={5}
            className="w-full"
          />
          
          {/* Interactive Glucose Curve */}
          <div className="h-48 bg-gradient-to-b from-gray-50 to-white rounded-lg p-4 border">
            <svg viewBox="0 0 400 160" className="w-full h-full">
              <defs>
                <linearGradient id="glucoseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={sensitivityLevel[0] >= 80 ? "#10b981" : sensitivityLevel[0] >= 60 ? "#3b82f6" : sensitivityLevel[0] >= 40 ? "#f59e0b" : "#ef4444"} stopOpacity="0.3"/>
                  <stop offset="100%" stopColor={sensitivityLevel[0] >= 80 ? "#10b981" : sensitivityLevel[0] >= 60 ? "#3b82f6" : sensitivityLevel[0] >= 40 ? "#f59e0b" : "#ef4444"} stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              
              {/* Grid */}
              <defs>
                <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="400" height="160" fill="url(#grid)" />
              
              {/* Axes */}
              <line x1="40" y1="20" x2="40" y2="140" stroke="#e2e8f0" strokeWidth="2"/>
              <line x1="40" y1="140" x2="360" y2="140" stroke="#e2e8f0" strokeWidth="2"/>
              
              {/* Dynamic glucose curve based on sensitivity */}
              <motion.path
                d={
                  sensitivityLevel[0] >= 80
                    ? "M 40,120 Q 120,110 200,115 Q 280,118 360,120"  // Optimal - very stable
                    : sensitivityLevel[0] >= 60
                    ? "M 40,125 Q 120,100 200,110 Q 280,115 360,125"  // Good - mild spike
                    : sensitivityLevel[0] >= 40
                    ? "M 40,130 Q 120,80 200,100 Q 280,110 360,130"   // Reduced - notable spike
                    : "M 40,135 Q 120,60 200,90 Q 280,105 360,135"    // Poor - large spike
                }
                fill="url(#glucoseGradient)"
                stroke={sensitivityLevel[0] >= 80 ? "#10b981" : sensitivityLevel[0] >= 60 ? "#3b82f6" : sensitivityLevel[0] >= 40 ? "#f59e0b" : "#ef4444"}
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Labels */}
              <text x="40" y="155" className="text-xs fill-muted-foreground">Meal</text>
              <text x="360" y="155" className="text-xs fill-muted-foreground" textAnchor="end">2h</text>
              <text x="25" y="25" className="text-xs fill-muted-foreground" textAnchor="end">High</text>
              <text x="25" y="145" className="text-xs fill-muted-foreground" textAnchor="end">Normal</text>
            </svg>
          </div>
          
          {/* Real-time metrics */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
            <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border">
              <div className="text-base md:text-lg font-bold">{Math.max(70, Math.min(140, 110 - (sensitivityLevel[0] - 50) * 0.8)).toFixed(0)}</div>
              <div className="text-xs text-muted-foreground">Glucose (mg/dL)</div>
            </div>
            <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border">
              <div className="text-base md:text-lg font-bold">{Math.max(10, Math.min(100, 100 - sensitivityLevel[0])).toFixed(0)}%</div>
              <div className="text-xs text-muted-foreground">Insulin Needed</div>
            </div>
            <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border">
              <div className="text-base md:text-lg font-bold">{Math.max(30, Math.min(100, sensitivityLevel[0] + 10)).toFixed(0)}%</div>
              <div className="text-xs text-muted-foreground">Energy Level</div>
            </div>
          </div>
        </div>
      )
    },
    'circadian-rhythm': {
      title: 'Circadian Metabolism Clock',
      description: 'Explore how metabolism changes throughout a 24-hour cycle',
      explanation: 'Your body follows natural circadian rhythms that affect insulin sensitivity, glucose tolerance, and metabolism. Morning typically shows highest insulin sensitivity, declining through the day. This is why timing meals matters for metabolic health.',
      component: (
        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <h5 className="font-semibold text-purple-900 mb-2">Why Time Matters</h5>
            <p className="text-sm text-purple-800">
              Your insulin sensitivity naturally peaks in the morning (6-10 AM) and declines throughout the day. 
              Late evening meals can cause 50% higher glucose responses compared to identical morning meals.
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Time: {Math.floor(timeOfDay[0])}:00 {timeOfDay[0] >= 12 ? 'PM' : 'AM'}</span>
            <Badge className={
              timeOfDay[0] >= 6 && timeOfDay[0] <= 10 ? 'bg-green-100 text-green-700 border-green-300' :
              timeOfDay[0] >= 10 && timeOfDay[0] <= 18 ? 'bg-blue-100 text-blue-700 border-blue-300' :
              'bg-red-100 text-red-700 border-red-300'
            }>
              {timeOfDay[0] >= 6 && timeOfDay[0] <= 10 ? 'Optimal Window' :
               timeOfDay[0] >= 10 && timeOfDay[0] <= 18 ? 'Good Window' : 'Poor Window'}
            </Badge>
          </div>
          
          <Slider
            value={timeOfDay}
            onValueChange={setTimeOfDay}
            min={0}
            max={24}
            step={1}
            className="w-full"
          />
          
          {/* 24-hour visualization */}
          <div className="h-48 bg-gradient-to-b from-gray-50 to-white rounded-lg p-4 border">
            <svg viewBox="0 0 400 160" className="w-full h-full">
              {/* Clock face background */}
              <circle cx="200" cy="80" r="60" fill="none" stroke="#e2e8f0" strokeWidth="2"/>
              <circle cx="200" cy="80" r="50" fill="rgba(248, 250, 252, 0.5)"/>
              
              {/* Hour markers */}
              {Array.from({ length: 12 }, (_, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const x1 = 200 + 50 * Math.cos(angle);
                const y1 = 80 + 50 * Math.sin(angle);
                const x2 = 200 + 55 * Math.cos(angle);
                const y2 = 80 + 55 * Math.sin(angle);
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94a3b8" strokeWidth="2"/>
                );
              })}
              
              {/* Current time indicator */}
              <motion.line
                x1="200"
                y1="80"
                x2={200 + 45 * Math.cos((timeOfDay[0] * 15 - 90) * (Math.PI / 180))}
                y2={80 + 45 * Math.sin((timeOfDay[0] * 15 - 90) * (Math.PI / 180))}
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
                animate={{ 
                  x2: 200 + 45 * Math.cos((timeOfDay[0] * 15 - 90) * (Math.PI / 180)),
                  y2: 80 + 45 * Math.sin((timeOfDay[0] * 15 - 90) * (Math.PI / 180))
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Center dot */}
              <circle cx="200" cy="80" r="4" fill="#ef4444"/>
              
              {/* Time labels */}
              <text x="200" y="35" className="text-xs fill-muted-foreground" textAnchor="middle">12</text>
              <text x="245" y="85" className="text-xs fill-muted-foreground" textAnchor="middle">3</text>
              <text x="200" y="130" className="text-xs fill-muted-foreground" textAnchor="middle">6</text>
              <text x="155" y="85" className="text-xs fill-muted-foreground" textAnchor="middle">9</text>
            </svg>
          </div>
          
          {/* Metabolism metrics based on time */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 text-center">
            <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border">
              <div className="text-base md:text-lg font-bold">
                {timeOfDay[0] >= 6 && timeOfDay[0] <= 10 ? '90%' :
                 timeOfDay[0] >= 10 && timeOfDay[0] <= 18 ? '75%' : '45%'}
              </div>
              <div className="text-xs text-muted-foreground">Glucose Tolerance</div>
            </div>
            <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border">
              <div className="text-base md:text-lg font-bold">
                {timeOfDay[0] >= 6 && timeOfDay[0] <= 10 ? '85%' :
                 timeOfDay[0] >= 10 && timeOfDay[0] <= 18 ? '70%' : '40%'}
              </div>
              <div className="text-xs text-muted-foreground">Insulin Sensitivity</div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
      {/* Demo Selection */}
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold">Interactive Science Demos</h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Experience the science through real-time simulations based on actual research data.
        </p>
        
        <div className="space-y-2 md:space-y-3">
          {Object.entries(demos).map(([key, demo]) => (
            <Button
              key={key}
              variant={selectedDemo === key ? "default" : "outline"}
              className="w-full justify-start h-auto p-3 md:p-4"
              onClick={() => setSelectedDemo(key)}
            >
              <div className="text-left">
                <div className="text-sm md:text-base font-semibold">{demo.title}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{demo.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
      
      {/* Demo Display */}
      <div className="lg:sticky lg:top-4">
        <Card className="border-2 border-primary/20">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Play className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              {demos[selectedDemo].title}
            </CardTitle>
            <CardDescription className="text-sm md:text-base">{demos[selectedDemo].explanation}</CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {demos[selectedDemo].component}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const SciencePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    document.title = "The Science - How AI Predicts Your Glucose Response | SugarTrap AI";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8 md:pt-20 md:pb-0">
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
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8 px-4">
              The Science of{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent block lg:inline">
                Personal Nutrition
              </span>
            </h1>
            
            <motion.p 
              className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Everyone's glucose response is as unique as their fingerprint. Modern research reveals why traditional one-size-fits-all approaches fail, and how personalised nutrition science is revolutionising health.
            </motion.p>

            {/* Quick Facts Ticker */}
            <motion.div
              className="mb-8 md:mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <QuickFactsTicker />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white"
                onClick={() => {
                  const element = document.getElementById('interactive-science');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Microscope className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Interactive Science
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/waitlist">
                  Join Research Community
                </Link>
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>✓ Bank-level data security</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                <span>✓ 90% more affordable than CGM devices</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>✓ No hardware needed</span>
              </div>
            </motion.div>
            
            {/* Global Availability */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-16 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span className="flex items-center gap-1">
                <span>🌍</span> Available on iOS worldwide
              </span>
              <span className="flex items-center gap-1">
                <span>🇬🇧</span> Designed in the UK
              </span>
              <span className="flex items-center gap-1">
                <span>💳</span> Multiple currency support
              </span>
            </motion.div>

            {/* Core Science Foundation Cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Dna className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-900">Individual Variability</h3>
                    <p className="text-xs text-emerald-700">Why we're all different</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-emerald-800">
                  <p><strong>10-fold difference</strong> in glucose response to identical meals</p>
                  <p><strong>1,100+ participants</strong> in PREDICT study showed unique metabolic fingerprints</p>
                  <p><strong>Your genes, microbiome, and lifestyle</strong> create your personal response</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">Hidden Sugar Spikes</h3>
                    <p className="text-xs text-blue-700">What you can't feel</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-blue-800">
                  <p><strong>70% of spikes</strong> happen without symptoms</p>
                  <p><strong>2-4 hour damage window</strong> after "healthy" meals</p>
                  <p><strong>AI prediction accuracy:</strong> 90% for your personal patterns</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900">Metabolic Memory</h3>
                    <p className="text-xs text-purple-700">Long-term impact</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-purple-800">
                  <p><strong>Poor control today</strong> affects you for decades</p>
                  <p><strong>Epigenetic changes</strong> persist even after improvement</p>
                  <p><strong>Early intervention</strong> prevents irreversible damage</p>
                </div>
              </Card>
            </motion.div>

            {/* Key Research Insights Section */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-3">Why Sugar Trap AI Works: The Science</h2>
                <p className="text-muted-foreground">Peer-reviewed research backing our personalized approach</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <Card className="p-6 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <h4 className="font-semibold text-lg mb-2">Continuous Glucose Insights</h4>
                          <p className="text-sm text-muted-foreground">Real-time metabolic feedback revolutionizes nutrition</p>
                        </div>
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="mt-2 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>Revolutionary Discovery:</strong> Continuous glucose monitoring in non-diabetics reveals hidden spikes in 70% of "healthy" individuals eating conventional diets.
                        </div>
                        <div>
                          <strong>Research Evidence:</strong> Studies show real-time glucose feedback changes food choices by 85%, leading to average 23% reduction in glucose variability within 2 weeks.
                        </div>
                        <div>
                          <strong>Sugar Trap AI Advantage:</strong> Our AI learns your patterns without requiring expensive CGM devices, providing the same insights through predictive modeling.
                        </div>
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <Card className="p-6 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <h4 className="font-semibold text-lg mb-2">Incretin Hormone Response</h4>
                          <p className="text-sm text-muted-foreground">Why meal sequence and timing matter</p>
                        </div>
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="mt-2 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>The Incretin Effect:</strong> GLP-1 and GIP hormones from your gut provide 50-70% of insulin response after meals, explaining why oral glucose hits differently than IV glucose.
                        </div>
                        <div>
                          <strong>Personal Variation:</strong> Incretin response varies 5-fold between individuals, with some people's systems barely responding to natural signals.
                        </div>
                        <div>
                          <strong>Optimisation Strategy:</strong> Sugar Trap AI identifies foods that maximise your incretin response, naturally stabilising glucose without drugs.
                        </div>
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <Card className="p-6 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <h4 className="font-semibold text-lg mb-2">Circadian Metabolism</h4>
                          <p className="text-sm text-muted-foreground">When you eat affects how you metabolize</p>
                        </div>
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="mt-2 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>Time-Dependent Sensitivity:</strong> Insulin sensitivity follows a 24-hour rhythm, being 40% higher in the morning than evening for most people.
                        </div>
                        <div>
                          <strong>Disruption Impact:</strong> Night shift workers show 40% higher diabetes risk due to eating during low-sensitivity hours.
                        </div>
                        <div>
                          <strong>Personalized Timing:</strong> Sugar Trap AI learns your unique circadian patterns to recommend optimal meal timing for stable glucose.
                        </div>
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <Card className="p-6 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <h4 className="font-semibold text-lg mb-2">Microbiome Influence</h4>
                          <p className="text-sm text-muted-foreground">Your gut bacteria control glucose response</p>
                        </div>
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="mt-2 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>Bacterial Metabolism:</strong> Gut bacteria produce short-chain fatty acids that trigger GLP-1 release, affecting 30-50% of glucose control.
                        </div>
                        <div>
                          <strong>Individual Ecosystem:</strong> Your unique bacterial profile explains why identical foods affect people differently - some bacteria thrive on fibers others can't process.
                        </div>
                        <div>
                          <strong>Targeted Nutrition:</strong> Sugar Trap AI identifies foods that feed your beneficial bacteria while starving problematic strains.
                        </div>
                      </div>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Science Topics Section */}
      <section id="interactive-science" className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Interactive Science{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Explorer
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive deep into the science with interactive visualisations, real-time demonstrations, 
              and comprehensive research that adapts to your curiosity level.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 h-12">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="interactive" className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Interactive
                </TabsTrigger>
                <TabsTrigger value="research" className="flex items-center gap-2">
                  <Microscope className="w-4 h-4" />
                  Research
                </TabsTrigger>
                <TabsTrigger value="myths" className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Myths vs Facts
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab - Completely New Content */}
              <TabsContent value="overview" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4">How Modern Science Powers Sugar Trap AI</h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Breakthrough research reveals why personalized nutrition beats one-size-fits-all approaches
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6 border-2 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">The Individual Response Discovery</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Modern research reveals that glucose responses to identical foods vary by up to 5-fold between people. 
                          This isn't just about diabetes - it affects energy, weight, and long-term health for everyone.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                          <h5 className="font-semibold text-green-800 mb-1">Personalized Nutrition 2.0</h5>
                          <p className="text-sm text-green-700">
                            Sugar Trap AI uses continuous glucose monitoring data to identify your unique metabolic patterns, 
                            moving beyond generic "healthy foods" to foods that are healthy *for you*.
                          </p>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                          <h5 className="font-semibold text-blue-800 mb-1">Real-Time Insights</h5>
                          <p className="text-sm text-blue-700">
                            Instead of waiting weeks for lab results, you get immediate feedback on how foods 
                            affect your energy, focus, and metabolic health through glucose pattern analysis.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-2 border-secondary/10 hover:border-secondary/20 transition-all duration-300 hover:shadow-lg">
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-4">
                          <Brain className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Beyond Calorie Counting</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          The outdated "calories in, calories out" model ignores how different foods trigger completely 
                          different hormonal and metabolic responses in your body.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200">
                          <h5 className="font-semibold text-purple-800 mb-1">Hormonal Response Mapping</h5>
                          <p className="text-sm text-purple-700">
                            Sugar Trap AI analyzes how foods affect your insulin sensitivity, stress hormones, 
                            and circadian rhythm - factors that determine whether you store fat or burn it.
                          </p>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200">
                          <h5 className="font-semibold text-orange-800 mb-1">Hidden Sugar Detection</h5>
                          <p className="text-sm text-orange-700">
                            Modern processed foods contain 60+ names for sugar. Our AI identifies refined carbs 
                            and their metabolic impact, even when they're disguised in "healthy" products.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Scientific Foundation */}
                  <Card className="p-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-2 border-primary/10">
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Microscope className="w-4 h-4 text-white" />
                      </div>
                      The Science That Makes It Possible
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white">78</span>
                        </div>
                        <h5 className="font-semibold mb-2">Studies Analyzed</h5>
                        <p className="text-sm text-muted-foreground">
                          Meta-analysis of 78 studies covering 650,000+ people reveals individual glucose response patterns
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white">5x</span>
                        </div>
                        <h5 className="font-semibold mb-2">Response Variation</h5>
                        <p className="text-sm text-muted-foreground">
                          Identical foods can cause 5-fold different glucose responses between individuals
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white">24h</span>
                        </div>
                        <h5 className="font-semibold mb-2">Continuous Monitoring</h5>
                        <p className="text-sm text-muted-foreground">
                          AI analyzes your metabolic patterns across meals, exercise, sleep, and stress cycles
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                      <h5 className="font-semibold mb-3 text-lg">Why Sugar Trap AI Works When Diets Fail</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-primary">• Genetic Factors:</span> Your DNA affects how you process carbohydrates, fats, and caffeine
                        </div>
                        <div>
                          <span className="font-medium text-primary">• Microbiome:</span> Gut bacteria influence glucose metabolism and food cravings
                        </div>
                        <div>
                          <span className="font-medium text-primary">• Circadian Biology:</span> Timing of meals affects insulin sensitivity by up to 50%
                        </div>
                        <div>
                          <span className="font-medium text-primary">• Stress Response:</span> Cortisol patterns determine how your body handles sugar
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Interactive Tab */}
              <TabsContent value="interactive" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <InteractiveScienceDemo />
                </motion.div>
              </TabsContent>

              {/* Research Tab */}
              <TabsContent value="research" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Latest Research Evidence</h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Cutting-edge studies revealing individual differences in metabolism across diverse populations
                    </p>
                  </div>

                  {/* Research Categories */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-primary" />
                        Normal Population
                      </h4>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Glucose Variability:</span> 5-fold difference in response to identical foods
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Age Factor:</span> Insulin sensitivity declines 1-2% per year after 30
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Gender Differences:</span> Women show 15% higher variability during hormonal cycles
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        Athletes
                      </h4>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Paradox Finding:</span> High muscle fat but excellent insulin sensitivity
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Metabolic Flexibility:</span> Superior fat oxidation prevents toxic lipid accumulation
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Recovery Patterns:</span> 2x faster glucose clearance after training
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        Pregnancy
                      </h4>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Hormonal Changes:</span> Placental hormones reduce insulin sensitivity by 50%
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Adaptive Purpose:</span> Directs glucose to growing fetus
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Risk Factor:</span> 30% develop gestational diabetes without intervention
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Children
                      </h4>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Pubertal Changes:</span> 25-50% decrease in insulin sensitivity during adolescence
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Growth Hormones:</span> Natural resistance supports rapid development
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Recovery:</span> Sensitivity typically returns post-puberty in healthy individuals
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-purple-500" />
                        Shift Workers
                      </h4>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Circadian Disruption:</span> 40% higher diabetes risk in night shift workers
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Sleep Debt:</span> Each hour of sleep loss = 9% decrease in insulin sensitivity
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Meal Timing:</span> Eating at night amplifies glucose responses by 20%
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Moon className="w-5 h-5 text-indigo-500" />
                        Older Adults
                      </h4>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Age-Related Decline:</span> Progressive β-cell dysfunction and insulin resistance
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Medication Impact:</span> Common drugs affect glucose metabolism
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Intervention Success:</span> Exercise can restore 30% of lost sensitivity
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Key Research Findings */}
                  <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
                    <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <Microscope className="w-5 h-5 text-primary" />
                      Breakthrough Research Supporting Personalized Nutrition
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-semibold mb-3 text-primary">The PREDICT Study (2019-2023)</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          The world's largest nutrition study tracking 1,100+ people found that genetic, 
                          microbiome, and metabolic factors create unique nutritional profiles. Participants 
                          showed dramatic differences in how they responded to identical meals.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div>• <span className="font-medium">Sample Size:</span> 1,100+ participants, 100,000+ meals analyzed</div>
                          <div>• <span className="font-medium">Key Finding:</span> Personal response variation greater than food type variation</div>
                          <div>• <span className="font-medium">Clinical Impact:</span> Personalized advice 2x more effective than generic guidelines</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3 text-secondary">Continuous Glucose Monitoring Revolution</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          2023 studies show CGM in non-diabetic populations reveals hidden metabolic 
                          dysfunction. 40% of "healthy" individuals show glucose patterns indicating 
                          prediabetes risk, undetectable by standard testing.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div>• <span className="font-medium">Hidden Prediabetes:</span> 40% of normal HbA1c individuals show concerning patterns</div>
                          <div>• <span className="font-medium">Early Detection:</span> CGM identifies risk 3-5 years before blood tests</div>
                          <div>• <span className="font-medium">Lifestyle Impact:</span> Real-time feedback improves adherence by 85%</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Myths vs Facts Tab - Redesigned */}
              <TabsContent value="myths" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Nutrition Myths vs. Scientific Facts</h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Separating evidence-based nutrition from outdated beliefs and marketing myths
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="relative overflow-hidden border-2 border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
                      <div className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 rounded-full bg-destructive/10">
                            <X className="h-5 w-5 text-destructive" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-destructive mb-1">Outdated Belief</h4>
                            <p className="text-lg font-medium">"All calories are equal"</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">The oversimplified "calories in, calories out" model ignores complex hormonal and metabolic effects.</p>
                        
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="h-4 w-4 text-accent" />
                              <span className="font-medium text-accent">Proven Science</span>
                            </div>
                            <p className="text-sm">100 calories from sugar trigger vastly different hormonal responses than 100 calories from protein, affecting satiety, metabolism, and fat storage.</p>
                          </div>
                          
                          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <span className="font-medium text-primary">Sugar Trap AI Solution</span>
                            </div>
                            <p className="text-sm">Track real-time glucose responses to reveal how your body actually processes different calorie sources beyond simple math.</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="relative overflow-hidden border-2 border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
                      <div className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 rounded-full bg-destructive/10">
                            <X className="h-5 w-5 text-destructive" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-destructive mb-1">Outdated Belief</h4>
                            <p className="text-lg font-medium">"Fat makes you fat"</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">The low-fat diet craze led to increased refined carb consumption, worsening metabolic health.</p>
                        
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="h-4 w-4 text-accent" />
                              <span className="font-medium text-accent">Proven Science</span>
                            </div>
                            <p className="text-sm">Healthy fats improve satiety, slow glucose absorption, and don't trigger insulin spikes. Higher fat intake can improve metabolic health when refined carbs are reduced.</p>
                          </div>
                          
                          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <span className="font-medium text-primary">Sugar Trap AI Solution</span>
                            </div>
                            <p className="text-sm">Monitor how adding healthy fats to meals affects your glucose stability and satiety levels.</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="relative overflow-hidden border-2 border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
                      <div className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 rounded-full bg-destructive/10">
                            <X className="h-5 w-5 text-destructive" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-destructive mb-1">Outdated Belief</h4>
                            <p className="text-lg font-medium">"Natural sugars are always healthy"</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Many believe sugars from fruits, honey, or agave are inherently healthier than processed sugars.</p>
                        
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="h-4 w-4 text-accent" />
                              <span className="font-medium text-accent">Proven Science</span>
                            </div>
                            <p className="text-sm">While whole fruits provide fiber and nutrients, extracted fruit sugars behave similarly to table sugar in your bloodstream. Context matters more than source.</p>
                          </div>
                          
                          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <span className="font-medium text-primary">Sugar Trap AI Solution</span>
                            </div>
                            <p className="text-sm">Compare glucose responses to different "natural" sugar sources and discover which forms your body handles best.</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="relative overflow-hidden border-2 border-destructive/20 bg-gradient-to-br from-background to-destructive/5">
                      <div className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 rounded-full bg-destructive/10">
                            <X className="h-5 w-5 text-destructive" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-destructive mb-1">Outdated Belief</h4>
                            <p className="text-lg font-medium">"Eating frequently boosts metabolism"</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">The idea that frequent small meals "stoke the metabolic fire" has been widely promoted but lacks support.</p>
                        
                        <div className="space-y-3">
                          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="h-4 w-4 text-accent" />
                              <span className="font-medium text-accent">Proven Science</span>
                            </div>
                            <p className="text-sm">Meal frequency doesn't significantly affect 24-hour energy expenditure. Constant eating can lead to insulin resistance and impaired metabolic flexibility.</p>
                          </div>
                          
                          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <span className="font-medium text-primary">Sugar Trap AI Solution</span>
                            </div>
                            <p className="text-sm">Experiment with different eating patterns and observe how meal timing affects your glucose stability and energy levels.</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Call to Action */}
                  <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 text-center">
                    <h4 className="text-2xl font-bold mb-4">Ready to Discover Your Personal Nutrition Science?</h4>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Stop guessing what's healthy for you. Use real-time glucose data to build a nutrition plan 
                      based on your unique biology, not outdated one-size-fits-all guidelines.
                    </p>
                    <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white" asChild>
                      <Link to="/waitlist">
                        <Gauge className="w-5 h-5 mr-2" />
                        Join Sugar Trap AI Beta
                      </Link>
                    </Button>
                  </Card>
                  
                  {/* SEO Footer Content */}
                  <div className="mt-12 pt-8 border-t border-border/50 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      SugarTrap AI - Predicting glucose response for a healthier world
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Join thousands worldwide who've discovered their personal glucose patterns
                    </p>
                  </div>
                  
                  {/* Hidden SEO Content */}
                  <div className="sr-only" style={{position: 'absolute', left: '-10000px'}}>
                    <h2>AI-Powered Glucose Monitoring App</h2>
                    <p>Metabolic health tracking, diabetes prevention, blood sugar prediction app available worldwide</p>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SciencePage;