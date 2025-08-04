import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Microscope, Sparkles, ArrowRight, TrendingUp, Activity, Users, Heart, Clock, Moon, Brain, Dna, Play, Star, Filter, Search, ChevronRight, BookOpen, Zap, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import QuickFactsTicker from '@/components/QuickFactsTicker';

// Interactive Science Demo Component - Similar to your homepage phone demo
const InteractiveScienceDemo = () => {
  const [selectedDemo, setSelectedDemo] = useState('insulin-sensitivity');
  const [sensitivityLevel, setSensitivityLevel] = useState([75]);
  const [timeOfDay, setTimeOfDay] = useState([8]);

  const demos = {
    'insulin-sensitivity': {
      title: 'Insulin Sensitivity Simulator',
      description: 'See how insulin sensitivity affects glucose curves in real-time',
      component: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Insulin Sensitivity: {sensitivityLevel[0]}%</span>
            <Badge className={
              sensitivityLevel[0] >= 80 ? 'bg-green-100 text-green-700' :
              sensitivityLevel[0] >= 60 ? 'bg-blue-100 text-blue-700' :
              sensitivityLevel[0] >= 40 ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
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
          <div className="h-48 bg-gradient-to-b from-gray-50 to-white rounded-lg p-4">
            <svg viewBox="0 0 400 160" className="w-full h-full">
              <defs>
                <linearGradient id="glucoseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={sensitivityLevel[0] >= 80 ? "#10b981" : sensitivityLevel[0] >= 60 ? "#3b82f6" : sensitivityLevel[0] >= 40 ? "#f59e0b" : "#ef4444"} stopOpacity="0.2"/>
                  <stop offset="100%" stopColor={sensitivityLevel[0] >= 80 ? "#10b981" : sensitivityLevel[0] >= 60 ? "#3b82f6" : sensitivityLevel[0] >= 40 ? "#f59e0b" : "#ef4444"} stopOpacity="0.02"/>
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
              <line x1="40" y1="20" x2="40" y2="140" stroke="#e2e8f0" strokeWidth="1"/>
              <line x1="40" y1="140" x2="360" y2="140" stroke="#e2e8f0" strokeWidth="1"/>
              
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
                strokeWidth="2"
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
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-lg bg-muted/50">
              <div className="text-lg font-bold">{Math.max(70, Math.min(140, 110 - (sensitivityLevel[0] - 50) * 0.8)).toFixed(0)}</div>
              <div className="text-xs text-muted-foreground">Glucose (mg/dL)</div>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <div className="text-lg font-bold">{Math.max(10, Math.min(100, 100 - sensitivityLevel[0])).toFixed(0)}%</div>
              <div className="text-xs text-muted-foreground">Insulin Needed</div>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <div className="text-lg font-bold">{Math.max(30, Math.min(100, sensitivityLevel[0] + 10)).toFixed(0)}%</div>
              <div className="text-xs text-muted-foreground">Energy Level</div>
            </div>
          </div>
        </div>
      )
    },
    'circadian-rhythm': {
      title: 'Circadian Metabolism Clock',
      description: 'Explore how metabolism changes throughout a 24-hour cycle',
      component: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Time: {Math.floor(timeOfDay[0])}:00 {timeOfDay[0] >= 12 ? 'PM' : 'AM'}</span>
            <Badge className={
              timeOfDay[0] >= 6 && timeOfDay[0] <= 10 ? 'bg-green-100 text-green-700' :
              timeOfDay[0] >= 10 && timeOfDay[0] <= 18 ? 'bg-blue-100 text-blue-700' :
              'bg-red-100 text-red-700'
            }>
              {timeOfDay[0] >= 6 && timeOfDay[0] <= 10 ? 'Optimal' :
               timeOfDay[0] >= 10 && timeOfDay[0] <= 18 ? 'Good' : 'Poor'}
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
          <div className="h-48 bg-gradient-to-b from-gray-50 to-white rounded-lg p-4">
            <svg viewBox="0 0 400 160" className="w-full h-full">
              {/* Clock face background */}
              <circle cx="200" cy="80" r="60" fill="none" stroke="#e2e8f0" strokeWidth="2"/>
              
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
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-3 rounded-lg bg-muted/50">
              <div className="text-lg font-bold">
                {timeOfDay[0] >= 6 && timeOfDay[0] <= 10 ? '90%' :
                 timeOfDay[0] >= 10 && timeOfDay[0] <= 18 ? '75%' : '45%'}
              </div>
              <div className="text-xs text-muted-foreground">Glucose Tolerance</div>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <div className="text-lg font-bold">
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
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Demo Selection */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Interactive Science Demos</h3>
        <p className="text-muted-foreground">
          Experience the science through real-time simulations based on actual research data.
        </p>
        
        <div className="space-y-3">
          {Object.entries(demos).map(([key, demo]) => (
            <Button
              key={key}
              variant={selectedDemo === key ? "default" : "outline"}
              className="w-full justify-start h-auto p-4"
              onClick={() => setSelectedDemo(key)}
            >
              <div className="text-left">
                <div className="font-semibold">{demo.title}</div>
                <div className="text-sm text-muted-foreground">{demo.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
      
      {/* Demo Display */}
      <div className="sticky top-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="w-5 h-5 text-primary" />
              {demos[selectedDemo].title}
            </CardTitle>
            <CardDescription>{demos[selectedDemo].description}</CardDescription>
          </CardHeader>
          <CardContent>
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

      {/* Science Topics Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/5">
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
              Dive deep into the science with interactive visualizations, real-time demonstrations, 
              and comprehensive research that adapts to your curiosity level.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 h-12">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="interactive">Interactive</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="myths">Myths vs Facts</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                            <Badge className="w-6 h-6 text-primary" />
                          </div>
                          <Badge className="bg-green-100 text-green-700">Beginner</Badge>
                        </div>
                        <CardTitle className="text-lg">Optimal Insulin Sensitivity</CardTitle>
                        <CardDescription>
                          Understanding how your body efficiently manages blood sugar with minimal hormonal intervention.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Key Findings:</h5>
                          <ul className="space-y-1">
                            <li className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              Optimal insulin sensitivity requires 2-10x less insulin than insulin-resistant states
                            </li>
                            <li className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              Stable glucose levels correlate with 25% improvement in cognitive function
                            </li>
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-sm text-muted-foreground">5 min read</span>
                          <Button variant="ghost" size="sm">
                            Explore
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                            <Badge className="w-6 h-6 text-primary" />
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-700">Intermediate</Badge>
                        </div>
                        <CardTitle className="text-lg">Compensatory Hyperinsulinemia</CardTitle>
                        <CardDescription>
                          When your pancreas works overtime to overcome cellular resistance - the hidden precursor to diabetes.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Key Findings:</h5>
                          <ul className="space-y-1">
                            <li className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              Compensatory hyperinsulinemia can persist for 10-15 years before diabetes onset
                            </li>
                            <li className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              Beta-cell function declines by 4-5% annually once hyperinsulinemia begins
                            </li>
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-sm text-muted-foreground">8 min read</span>
                          <Button variant="ghost" size="sm">
                            Explore
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                            <Badge className="w-6 h-6 text-primary" />
                          </div>
                          <Badge className="bg-blue-100 text-blue-700">Beginner</Badge>
                        </div>
                        <CardTitle className="text-lg">Fat Metabolism: Debunking Decades of Myths</CardTitle>
                        <CardDescription>
                          Modern research reveals why saturated fats aren't the cardiovascular villains once believed.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Key Findings:</h5>
                          <ul className="space-y-1">
                            <li className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              No significant association between saturated fat and cardiovascular disease in 78 studies (650,000 people)
                            </li>
                            <li className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              Only 15% of blood cholesterol comes from diet, 85% produced by liver
                            </li>
                          </ul>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-sm text-muted-foreground">12 min read</span>
                          <Button variant="ghost" size="sm">
                            Explore
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="interactive" className="space-y-6">
                <InteractiveScienceDemo />
              </TabsContent>

              <TabsContent value="research" className="space-y-6">
                {/* Historical Context Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      The Discovery of Insulin: A Century of Breakthrough Science
                    </CardTitle>
                    <CardDescription>
                      From Frederick Banting's breakthrough in 1921 to modern precision medicine
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">The Toronto Breakthrough (1921-1922)</h4>
                        <div className="space-y-3 text-sm">
                          <div className="border-l-4 border-blue-500 pl-4">
                            <div className="font-medium">October 31, 1920</div>
                            <div className="text-muted-foreground">Frederick Banting conceives the idea: "Ligate pancreatic ducts of dog. Keep dogs alive till acini degenerate leaving islets."</div>
                          </div>
                          <div className="border-l-4 border-green-500 pl-4">
                            <div className="font-medium">January 23, 1922</div>
                            <div className="text-muted-foreground">Leonard Thompson, age 14, receives purified insulin - first successful human treatment. Blood sugar drops to near-normal levels.</div>
                          </div>
                          <div className="border-l-4 border-purple-500 pl-4">
                            <div className="font-medium">1923</div>
                            <div className="text-muted-foreground">Nobel Prize awarded to Banting and Macleod. Patent sold for $1 each: "Insulin belongs to the world."</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold">Unrecognized Pioneers</h4>
                        <div className="space-y-3 text-sm">
                          <div className="border-l-4 border-yellow-500 pl-4">
                            <div className="font-medium">Nicolae Paulescu (1921)</div>
                            <div className="text-muted-foreground">Published successful pancreatic extract "pancrein" months before Toronto team. Work overlooked due to language barriers.</div>
                          </div>
                          <div className="border-l-4 border-red-500 pl-4">
                            <div className="font-medium">Georg Zuelzer (1906-1912)</div>
                            <div className="text-muted-foreground">First to treat diabetic patients with pancreatic extracts. Held US patent for "acomatol" before Toronto discovery.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Modern Research Findings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Latest Research Findings (2023-2025)
                    </CardTitle>
                    <CardDescription>Breakthrough studies reshaping our understanding of metabolism and nutrition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-4 border-red-500 pl-6">
                        <h4 className="font-semibold text-lg mb-2">The Glucose Paradox</h4>
                        <p className="text-sm text-muted-foreground mb-2">Frontiers in Cardiovascular Medicine, 2020</p>
                        <p className="text-sm mb-3">27% increased cardiovascular disease risk from glucose spikes, even in non-diabetics</p>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="text-xs text-red-700"><strong>Clinical Significance:</strong> Post-meal glucose spikes above 140 mg/dL increase cardiovascular risk regardless of HbA1c levels, suggesting that glucose variability may be more important than average glucose control.</p>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-emerald-500 pl-6">
                        <h4 className="font-semibold text-lg mb-2">Gut Microbiome Carbohydrate Metabolism</h4>
                        <p className="text-sm text-muted-foreground mb-2">Nature, 2023</p>
                        <p className="text-sm mb-3">Microbiome contributes up to 10% of host energy extraction and significantly influences glucose homeostasis</p>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-xs text-green-700"><strong>Key Finding:</strong> Short-chain fatty acids produced by fiber-fermenting bacteria directly stimulate GLP-1 release, explaining why identical foods can produce different glucose responses in different individuals.</p>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-blue-500 pl-6">
                        <h4 className="font-semibold text-lg mb-2">Circadian Metabolic Disruption</h4>
                        <p className="text-sm text-muted-foreground mb-2">Diabetologia, 2020</p>
                        <p className="text-sm mb-3">69% of population experiences social jet lag affecting metabolism</p>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-xs text-blue-700"><strong>Research Impact:</strong> Meal timing misaligned with circadian rhythms can reduce glucose tolerance by up to 30%, providing scientific basis for time-restricted eating protocols.</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-6">
                        <h4 className="font-semibold text-lg mb-2">Sleep Deprivation & Insulin Resistance</h4>
                        <p className="text-sm text-muted-foreground mb-2">Sleep Medicine Reviews, 2023</p>
                        <p className="text-sm mb-3">One night of sleep deprivation reduces insulin sensitivity by 25-30%</p>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-xs text-purple-700"><strong>Mechanism:</strong> Sleep loss disrupts cortisol patterns and sympathetic nervous activity, creating a state resembling pre-diabetes after just 4 hours of sleep.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="myths" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      Fat Myths vs Scientific Facts
                    </CardTitle>
                    <CardDescription>
                      Debunking decades of nutritional misinformation with modern evidence (2023-2025 research)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {/* Historical Context */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-800 mb-3">The Rise and Fall of Fat Phobia</h4>
                        <div className="space-y-3 text-sm text-blue-700">
                          <div><strong>1958:</strong> Ancel Keys launches the Seven Countries Study, selectively choosing countries that supported his hypothesis while excluding France, Switzerland, and Germany.</div>
                          <div><strong>1965:</strong> Sugar Research Foundation pays Harvard researchers equivalent of £39,000 today to shift blame from sugar to fat (Project 226).</div>
                          <div><strong>1977:</strong> US Dietary Goals recommend reducing fat from 40% to 30% of energy intake with no randomized controlled trial evidence.</div>
                          <div><strong>1980s-1990s:</strong> Food industry creates "low-fat" market by removing fat and adding sugar. 76% of Americans bought fat-free foods while obesity rates soared.</div>
                        </div>
                      </div>

                      {/* Myth vs Fact Cards */}
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 rotate-45" />
                              Myth
                            </h4>
                            <p className="text-sm">All saturated fats cause heart disease</p>
                          </div>
                          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Scientific Fact
                            </h4>
                            <p className="text-sm mb-2">78 studies involving 650,000 people found no significant association between saturated fat and cardiovascular disease</p>
                            <p className="text-xs text-green-600"><strong>Evidence:</strong> Yamada et al. (2025), JMA Journal - analysis of 9 RCTs with 13,532 participants found no significant differences in cardiovascular mortality with saturated fat restriction</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 rotate-45" />
                              Myth
                            </h4>
                            <p className="text-sm">Dietary cholesterol directly raises blood cholesterol</p>
                          </div>
                          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Scientific Fact
                            </h4>
                            <p className="text-sm mb-2">Only 15% of blood cholesterol comes from diet; 85% is produced by the liver</p>
                            <p className="text-xs text-green-600"><strong>Evidence:</strong> 2015-2020 US Dietary Guidelines removed the 300mg daily cholesterol limit, stating "cholesterol is not considered a nutrient of concern for overconsumption"</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 rotate-45" />
                              Myth
                            </h4>
                            <p className="text-sm">Omega-6 fats are always inflammatory</p>
                          </div>
                          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Scientific Fact
                            </h4>
                            <p className="text-sm mb-2">Higher omega-6 intake linked to 12% lower cardiovascular mortality in recent studies</p>
                            <p className="text-xs text-green-600"><strong>Evidence:</strong> Sadeghi et al. (2025) global meta-analysis of 150 cohorts and 230 studies found protective effects against cardiovascular disease and all-cause mortality</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 rotate-45" />
                              Myth
                            </h4>
                            <p className="text-sm">Low-fat diets are always healthier</p>
                          </div>
                          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Scientific Fact
                            </h4>
                            <p className="text-sm mb-2">Mediterranean diet high in healthy fats shows superior health outcomes compared to low-fat diets</p>
                            <p className="text-xs text-green-600"><strong>Evidence:</strong> Laffond et al. (2023) systematic review of 24 studies found consistent associations with reduced all-cause mortality in both general populations and cardiovascular disease patients</p>
                          </div>
                        </div>
                      </div>

                      {/* Modern Consensus */}
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Modern Scientific Consensus (2023-2025)</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <div>• <strong>Quality over Quantity:</strong> Focus on fat source and processing rather than total fat restriction</div>
                          <div>• <strong>Essential Nutrients:</strong> Fats are required for hormone production, vitamin absorption, and brain function</div>
                          <div>• <strong>Individual Variation:</strong> Genetic differences affect fat metabolism and optimal dietary composition</div>
                          <div>• <strong>Avoid Trans Fats:</strong> The only fat with consistent evidence of harm (EU regulation limits to 2g per 100g fat)</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;