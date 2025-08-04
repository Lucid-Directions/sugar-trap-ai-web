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

              <TabsContent value="overview" className="space-y-8">
                <div className="space-y-8">
                  <Card className="p-8">
                    <h3 className="text-3xl font-bold mb-6 text-foreground">The Discovery of Insulin: A Century-Long Journey</h3>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p className="text-lg">
                        The discovery of insulin was not a singular event but an evolutionary process, built upon decades of foundational research by scientists across the globe. The ultimate success of the Toronto team lay not in the initial concept, but in their ability to translate a crude pancreatic extract into a purified, life-saving therapeutic that transformed diabetes from a fatal disease into a manageable condition.
                      </p>
                      
                      <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border border-border/50">
                        <h4 className="text-xl font-semibold text-foreground mb-4">The Toronto Breakthrough: October 31, 1920</h4>
                        <p>
                          The critical insight came to Frederick Banting on the night of October 31, 1920, while preparing a lecture on the pancreas. He reviewed an article describing how pancreatic stones could obstruct the pancreatic duct, leading to degeneration of enzyme-producing cells while leaving the insulin-producing islet cells intact. Banting scribbled his now-famous note: <em>"Ligate pancreatic ducts of dog. Keep dogs alive till acini degenerate leaving islets. Try to isolate the internal secretion of these to relieve glycosurea"</em>.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-4">The Toronto Team</h4>
                          <div className="space-y-4">
                            <div className="border-l-4 border-primary pl-4">
                              <h5 className="font-semibold text-foreground">Frederick Banting & Charles Best</h5>
                              <p className="text-sm">Conceived and executed the duct-ligation experiment, successfully isolating an extract that lowered blood sugar in diabetic dogs in May 1921.</p>
                            </div>
                            <div className="border-l-4 border-accent pl-4">
                              <h5 className="font-semibold text-foreground">James Bertram Collip</h5>
                              <p className="text-sm">Made the pivotal discovery that the active principle could be precipitated using high alcohol concentration, removing toxic protein contaminants and making insulin safe for human use.</p>
                            </div>
                            <div className="border-l-4 border-secondary pl-4">
                              <h5 className="font-semibold text-foreground">J.J.R. Macleod</h5>
                              <p className="text-sm">Provided laboratory space, resources, and expert supervision. Co-recipient of the 1923 Nobel Prize, which he shared with Collip.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-4">Forgotten Pioneers</h4>
                          <div className="space-y-4">
                            <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                              <h5 className="font-semibold text-foreground">Nicolae Constantin Paulescu (Romanian)</h5>
                              <p className="text-sm">Published detailed experiments with "pancrein" in summer 1921—months before Toronto's publications. His work was largely ignored due to language barriers and location outside dominant scientific centers.</p>
                            </div>
                            <div className="bg-warning/5 p-4 rounded-lg border border-warning/20">
                              <h5 className="font-semibold text-foreground">Georg Ludwig Zuelzer (German)</h5>
                              <p className="text-sm">Administered bovine pancreatic extracts to diabetic patients as early as 1906. Granted U.S. patent for "acomatol" in 1912, which initially blocked Toronto's patent application.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-accent/5 to-secondary/5 p-6 rounded-lg border border-border/50">
                        <h4 className="text-xl font-semibold text-foreground mb-4">First Human Success: Leonard Thompson</h4>
                        <p>
                          On January 11, 1922, 14-year-old Leonard Thompson, dying from type 1 diabetes, received the first injection. It failed—his blood sugar showed modest drop but he developed a sterile abscess. On January 23, 1922, he received Collip's purified extract. The results were dramatic and immediate: his blood sugar plummeted to near-normal levels, his condition improved remarkably, with no significant side effects. For the first time in history, type 1 diabetes was no longer an absolute death sentence.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8">
                    <h3 className="text-3xl font-bold mb-6 text-foreground">The Physiology of Euglycemia: A Hormonal Symphony</h3>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p className="text-lg">
                        The maintenance of blood glucose within a narrow, healthy range—euglycemia—is a masterpiece of physiological regulation. It is not a simple reactive system but a proactive, multi-organ network coordinated by a symphony of hormones ensuring that the body's cells, particularly the brain which relies almost exclusively on glucose, have a constant and stable supply of energy.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                          <h4 className="text-lg font-semibold text-foreground mb-3">The Pancreatic Islet</h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <span className="font-semibold text-foreground">β-cells (65-80%):</span> Produce insulin, the body's primary glucose-lowering hormone
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">α-cells (15-20%):</span> Produce glucagon, the main counter-regulatory hormone that raises blood glucose
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">δ-cells:</span> Secrete somatostatin, inhibiting both insulin and glucagon release
                            </div>
                          </div>
                        </div>

                        <div className="bg-accent/5 p-6 rounded-lg border border-accent/20">
                          <h4 className="text-lg font-semibold text-foreground mb-3">The Incretin Effect</h4>
                          <div className="space-y-3 text-sm">
                            <p>Responsible for <span className="font-semibold text-foreground">50-70% of total insulin</span> secreted after a meal</p>
                            <div>
                              <span className="font-semibold text-foreground">GIP:</span> 45% of incretin-mediated insulin response
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">GLP-1:</span> 29% of incretin-mediated insulin response
                            </div>
                            <p className="text-xs italic">Released within minutes of eating, before blood glucose peaks</p>
                          </div>
                        </div>

                        <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20">
                          <h4 className="text-lg font-semibold text-foreground mb-3">Multi-Organ Network</h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <span className="font-semibold text-foreground">Liver:</span> Central glucose buffer, switches between production and storage
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">Muscle & Fat:</span> 70-80% of insulin-stimulated glucose disposal
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">Brain:</span> Glucose-sensing neurons monitor and regulate via autonomic nervous system
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border border-border/50">
                        <h4 className="text-xl font-semibold text-foreground mb-4">Intra-Islet Communication: The Key to Precision</h4>
                        <p>
                          The physical architecture of pancreatic islets is crucial for glucose control. β-cells form a central core, surrounded by α-cells on the periphery. When β-cells release insulin into the islet's capillary network, adjacent α-cells are exposed to very high local insulin concentrations. This creates a powerful paracrine signal—insulin directly suppresses glucagon secretion, ensuring that as insulin rises to handle incoming glucose, the opposing action of glucagon is simultaneously switched off. The breakdown of this elegant micro-anatomical control system is a key contributor to diabetes pathophysiology.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8">
                    <h3 className="text-3xl font-bold mb-6 text-foreground">Pathophysiology: When Systems Break Down</h3>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-4">Insulin Resistance: The Molecular Breakdown</h4>
                          <p className="mb-4">
                            Insulin resistance represents a fundamental breakdown in cellular communication, where the message sent by insulin is no longer properly received by target tissues. This post-receptor failure is driven by nutrient excess and inflammation.
                          </p>
                          <div className="space-y-3">
                            <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                              <h5 className="font-semibold text-foreground text-sm mb-2">Lipotoxicity</h5>
                              <p className="text-sm">Excess free fatty acids accumulate as toxic lipid intermediates (diacylglycerols and ceramides), activating stress kinases that block insulin signaling pathways.</p>
                            </div>
                            <div className="bg-warning/5 p-4 rounded-lg border border-warning/20">
                              <h5 className="font-semibold text-foreground text-sm mb-2">Chronic Inflammation</h5>
                              <p className="text-sm">Visceral fat infiltrated with immune cells secretes inflammatory cytokines (TNF-α, IL-6) that directly impair insulin sensitivity.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-4">The Dual Defect of Type 2 Diabetes</h4>
                          <p className="mb-4">
                            Type 2 diabetes results from the collision of progressive insulin resistance with an intrinsic inability of pancreatic β-cells to sustain compensatory insulin secretion, creating a vicious cycle of metabolic dysfunction.
                          </p>
                          <div className="space-y-3">
                            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                              <h5 className="font-semibold text-foreground text-sm mb-2">β-Cell Exhaustion</h5>
                              <p className="text-sm">Relentless demand for high insulin output places immense strain on β-cells, leading to functional exhaustion and gradual decline in secretory capacity.</p>
                            </div>
                            <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                              <h5 className="font-semibold text-foreground text-sm mb-2">Glucolipotoxicity</h5>
                              <p className="text-sm">Chronic exposure to high glucose and free fatty acids is directly toxic to β-cells, inducing cellular stress and triggering apoptosis.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-lg border border-border/50">
                        <h4 className="text-xl font-semibold text-foreground mb-4">Metabolic Memory: The Legacy Effect</h4>
                        <p>
                          A critical concept in diabetes is "metabolic memory"—the phenomenon where damaging effects of poor glycemic control persist even after blood glucose is subsequently normalized. This has profound treatment implications, suggesting early aggressive intervention is paramount. The mechanisms include formation of Advanced Glycation End-products (AGEs), epigenetic modifications that "imprint" inflammatory states, and self-perpetuating oxidative stress pathways.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="interactive" className="space-y-6">
                <InteractiveScienceDemo />
              </TabsContent>

              <TabsContent value="research" className="space-y-8">
                <Card className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-foreground">Emerging Frontiers in Metabolic Science</h3>
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-accent/5 to-secondary/5 p-6 rounded-lg border border-border/50">
                      <h4 className="text-2xl font-semibold text-foreground mb-4">The Gut Microbiome: A New Endocrine Organ</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        For decades, the gut was viewed primarily as an organ of digestion and absorption. It is now recognized as a bustling, metabolically active ecosystem, home to trillions of microorganisms that function almost as an independent endocrine organ, playing a fundamental role in host nutrition, immunity, and metabolism.
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                          <h5 className="font-semibold text-foreground mb-2">SCFA Production</h5>
                          <p className="text-sm">Bacterial fermentation of dietary fiber produces short-chain fatty acids (butyrate, propionate, acetate) that bind to intestinal L-cells, stimulating GLP-1 release and enhancing glucose tolerance.</p>
                        </div>
                        <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                          <h5 className="font-semibold text-foreground mb-2">Gut Barrier Integrity</h5>
                          <p className="text-sm">Dysbiosis leads to "leaky gut," allowing bacterial lipopolysaccharide (LPS) to enter bloodstream, triggering metabolic endotoxemia and systemic insulin resistance.</p>
                        </div>
                        <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
                          <h5 className="font-semibold text-foreground mb-2">Bile Acid Metabolism</h5>
                          <p className="text-sm">Gut bacteria modify primary bile acids into secondary bile acids, which bind to FXR and TGR5 receptors, influencing glucose and lipid metabolism in liver and other tissues.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4">Athletes: The Paradox of High Muscle Fat</h4>
                        <p className="mb-4 text-muted-foreground">
                          Highly trained endurance athletes present a fascinating metabolic paradox. Studies measuring intramyocellular triglycerides (IMTG) found that athletes often have levels as high as sedentary, insulin-resistant individuals—yet maintain exceptional insulin sensitivity.
                        </p>
                        <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                          <h5 className="font-semibold text-foreground text-sm mb-2">The Resolution</h5>
                          <p className="text-sm">It's not total fat quantity but quality and metabolic context. Athletes' high mitochondrial density and oxidative capacity allow efficient fat oxidation, preventing accumulation of toxic ceramides and diacylglycerols that cause insulin resistance in sedentary individuals.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4">Pregnancy: Adaptive Insulin Resistance</h4>
                        <p className="mb-4 text-muted-foreground">
                          Pregnancy represents a unique metabolic challenge requiring the maternal system to support fetal growth. A key adaptation is the development of physiological insulin resistance beginning around weeks 20-24, driven by placental hormones.
                        </p>
                        <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                          <h5 className="font-semibold text-foreground text-sm mb-2">Purposeful Adaptation</h5>
                          <p className="text-sm">Hormones like human placental lactogen (hPL) and progesterone reduce maternal glucose utilization, raising her blood glucose to facilitate transport across the placenta to the glucose-dependent fetus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-foreground">The Technological Revolution in Diabetes Management</h3>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      The last two decades have witnessed a technological revolution in diabetes management, transforming the paradigm from reactive to proactive, predictive control. These innovations have dramatically improved safety and enabled previously unattainable levels of glycemic control.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4">Continuous Glucose Monitoring (CGM)</h4>
                        <div className="space-y-4">
                          <div className="border-l-4 border-primary pl-4">
                            <h5 className="font-semibold text-foreground">Real-Time Data Stream</h5>
                            <p className="text-sm">Modern CGM systems measure glucose in interstitial fluid every few minutes, 24/7, providing dynamic glucose trends with directional arrows, not just static snapshots.</p>
                          </div>
                          <div className="border-l-4 border-accent pl-4">
                            <h5 className="font-semibold text-foreground">Proactive Alerts</h5>
                            <p className="text-sm">Customizable alarms warn of impending high or low glucose levels, allowing intervention before dangerous excursions occur. Modern devices like Dexcom G7 and Abbott Freestyle Libre 3 are highly accurate with low MARD (Mean Absolute Relative Difference).</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4">Automated Insulin Delivery (AID)</h4>
                        <div className="space-y-4">
                          <div className="border-l-4 border-secondary pl-4">
                            <h5 className="font-semibold text-foreground">Hybrid Closed-Loop Systems</h5>
                            <p className="text-sm">AID systems connect CGM and insulin pumps through sophisticated control algorithms, automatically adjusting basal insulin delivery to maintain glucose within target range with minimal user input.</p>
                          </div>
                          <div className="border-l-4 border-warning pl-4">
                            <h5 className="font-semibold text-foreground">Clinical Outcomes</h5>
                            <p className="text-sm">Studies consistently show superior glycemic outcomes—higher Time in Range (70-180 mg/dL) and lower HbA1c—while reducing hypoglycemia frequency and severity compared to conventional therapy.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border border-border/50">
                      <h4 className="text-xl font-semibold text-foreground mb-4">From "Thick Brown Muck" to Precision Medicine</h4>
                      <p>
                        The century following insulin's discovery has been marked by continuous innovation. From the initial "thick brown muck" described by Banting and Best, to animal-derived insulin, to recombinant human insulin produced by genetically engineered E. coli bacteria (1982), to modern insulin analogues with tailored pharmacokinetic profiles, and now to automated delivery systems. This evolution represents the journey from a life-saving but crude treatment to precision medicine tailored to individual metabolic patterns.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <h3 className="text-3xl font-bold mb-6 text-foreground">Latest Research Findings (2020-2025)</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-500 pl-6">
                      <h4 className="font-semibold text-lg mb-2">The Glucose Paradox</h4>
                      <p className="text-sm text-muted-foreground mb-2">Frontiers in Cardiovascular Medicine, 2020</p>
                      <p className="text-sm mb-3">27% increased cardiovascular disease risk from glucose spikes, even in non-diabetics</p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-xs text-red-700"><strong>Clinical Significance:</strong> Post-meal glucose spikes above 140 mg/dL increase cardiovascular risk regardless of HbA1c levels, suggesting that glucose variability may be more important than average glucose control for long-term health outcomes.</p>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-emerald-500 pl-6">
                      <h4 className="font-semibold text-lg mb-2">Gut Microbiome and Personalized Nutrition</h4>
                      <p className="text-sm text-muted-foreground mb-2">Nature, 2023</p>
                      <p className="text-sm mb-3">Microbiome contributes up to 10% of host energy extraction and significantly influences glucose homeostasis</p>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-xs text-green-700"><strong>Key Finding:</strong> Short-chain fatty acids produced by fiber-fermenting bacteria directly stimulate GLP-1 release, explaining why identical foods can produce different glucose responses in different individuals. This provides biological basis for personalized nutrition approaches.</p>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-lg mb-2">Circadian Metabolic Disruption</h4>
                      <p className="text-sm text-muted-foreground mb-2">Diabetologia, 2020</p>
                      <p className="text-sm mb-3">69% of population experiences social jet lag affecting metabolism</p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-blue-700"><strong>Research Impact:</strong> Meal timing misaligned with circadian rhythms can reduce glucose tolerance by up to 30%, providing scientific basis for time-restricted eating protocols and chronotherapy approaches to diabetes management.</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="font-semibold text-lg mb-2">Sleep Deprivation & Metabolic Health</h4>
                      <p className="text-sm text-muted-foreground mb-2">Sleep Medicine Reviews, 2023</p>
                      <p className="text-sm mb-3">One night of sleep deprivation reduces insulin sensitivity by 25-30%</p>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-xs text-purple-700"><strong>Mechanism:</strong> Sleep loss disrupts cortisol patterns and sympathetic nervous activity, creating a state resembling pre-diabetes after just 4 hours of sleep. This highlights sleep as a critical pillar of metabolic health alongside diet and exercise.</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-6">
                      <h4 className="font-semibold text-lg mb-2">Puberty and Insulin Resistance</h4>
                      <p className="text-sm text-muted-foreground mb-2">Journal of Clinical Endocrinology & Metabolism, 2022</p>
                      <p className="text-sm mb-3">Insulin sensitivity decreases by 25-50% during puberty, creating a natural "stress test" for metabolic health</p>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-orange-700"><strong>Clinical Implications:</strong> The combination of physiological pubertal insulin resistance with obesity-related resistance creates a "double hit" that can overwhelm pancreatic β-cell capacity, explaining the spike in youth-onset Type 2 diabetes during adolescence.</p>
                      </div>
                    </div>
                  </div>
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