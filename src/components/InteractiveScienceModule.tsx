import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChevronRight, 
  Zap, 
  TrendingUp, 
  Activity, 
  Brain,
  Heart,
  Clock,
  Microscope,
  Target,
  ArrowRight,
  PlayCircle,
  Pause,
  RotateCcw
} from 'lucide-react';

interface ScienceModule {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  summary: string;
  category: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  image: string;
  interactiveDemo?: React.ComponentType<any>;
  content: {
    overview: string;
    keyFindings: string[];
    methodology: string;
    implications: string[];
    relatedTopics: string[];
  };
  visualizations?: {
    type: 'chart' | 'animation' | 'interactive';
    component: React.ComponentType<any>;
  }[];
}

interface InteractiveScienceModuleProps {
  module: ScienceModule;
  onModuleClick: (moduleId: string) => void;
  isExpanded: boolean;
}

// Glucose Response Animation Component
const GlucoseResponseDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  
  const glucoseData = [
    { time: 0, glucose: 85, label: "Fasting" },
    { time: 30, glucose: 140, label: "30min post-meal" },
    { time: 60, glucose: 120, label: "1hr" },
    { time: 90, glucose: 100, label: "1.5hr" },
    { time: 120, glucose: 85, label: "2hr - Back to baseline" }
  ];

  const play = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentTime(prev => {
        if (prev >= 120) {
          setIsPlaying(false);
          clearInterval(interval);
          return 120;
        }
        return prev + 10;
      });
    }, 500);
  };

  const reset = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const currentGlucose = glucoseData.find(d => d.time <= currentTime)?.glucose || 85;
  
  return (
    <div className="p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl">
      <h4 className="font-semibold text-sm mb-3">Real-Time Glucose Response</h4>
      
      {/* Glucose Level Display */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{currentGlucose}</div>
          <div className="text-xs text-muted-foreground">mg/dL</div>
        </div>
        
        {/* Visual Glucose Curve */}
        <div className="flex-1 mx-4 h-16 relative">
          <svg className="w-full h-full" viewBox="0 0 120 60">
            <path
              d="M0,45 Q30,15 60,30 Q90,40 120,45"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              className="opacity-30"
            />
            <path
              d={`M0,45 ${currentTime > 0 ? `Q${Math.min(currentTime * 0.25, 30)},${60 - currentGlucose * 0.3}` : ''} ${currentTime > 30 ? `${currentTime * 0.5},${60 - currentGlucose * 0.3}` : ''}`}
              stroke="#3b82f6"
              strokeWidth="3"
              fill="none"
            />
            <motion.circle
              cx={currentTime}
              cy={60 - currentGlucose * 0.3}
              r="4"
              fill="#3b82f6"
              animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
              transition={{ repeat: isPlaying ? Infinity : 0, duration: 1 }}
            />
          </svg>
        </div>
        
        <div className="text-xs text-center">
          <div className="font-medium">{currentTime}min</div>
          <div className="text-muted-foreground">Time</div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex gap-2 justify-center">
        <Button 
          size="sm" 
          variant="outline" 
          onClick={isPlaying ? () => setIsPlaying(false) : play}
          disabled={currentTime >= 120}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <PlayCircle className="w-3 h-3" />}
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button size="sm" variant="outline" onClick={reset}>
          <RotateCcw className="w-3 h-3" />
          Reset
        </Button>
      </div>
      
      <div className="mt-3 text-xs text-center text-muted-foreground">
        Watch how glucose rises and returns to baseline in a healthy response
      </div>
    </div>
  );
};

// Circadian Clock Visualization
const CircadianClockDemo = () => {
  const [currentHour, setCurrentHour] = useState(12);
  
  const getInsulinSensitivity = (hour: number) => {
    // Peak sensitivity in morning, lowest at night
    const normalizedHour = ((hour - 6) % 24 + 24) % 24;
    return 50 + 40 * Math.cos((normalizedHour / 24) * 2 * Math.PI);
  };
  
  const sensitivity = getInsulinSensitivity(currentHour);
  
  return (
    <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
      <h4 className="font-semibold text-sm mb-3">24-Hour Insulin Sensitivity</h4>
      
      <div className="flex items-center justify-center mb-4">
        {/* Clock visualization */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-4 border-purple-200 bg-white"></div>
          {/* Hour markers */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-purple-300"
              style={{
                top: '4px',
                left: '50%',
                transformOrigin: '50% 60px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`
              }}
            />
          ))}
          {/* Hour hand */}
          <div
            className="absolute w-1 h-8 bg-purple-600 rounded-full"
            style={{
              top: '24px',
              left: '50%',
              transformOrigin: '50% 40px',
              transform: `translateX(-50%) rotate(${(currentHour % 12) * 30}deg)`
            }}
          />
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Sensitivity meter */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span>Low Sensitivity</span>
          <span className="font-medium">{Math.round(sensitivity)}%</span>
          <span>High Sensitivity</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"
            style={{ width: `${sensitivity}%` }}
          />
        </div>
      </div>
      
      {/* Time slider */}
      <div className="mt-4">
        <input
          type="range"
          min="0"
          max="23"
          value={currentHour}
          onChange={(e) => setCurrentHour(parseInt(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>12 AM</span>
          <span className="font-medium">{currentHour}:00</span>
          <span>11 PM</span>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-center text-muted-foreground">
        Drag to see how insulin sensitivity changes throughout the day
      </div>
    </div>
  );
};

export const InteractiveScienceModule: React.FC<InteractiveScienceModuleProps> = ({
  module,
  onModuleClick,
  isExpanded
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("overview");

  const IconComponent = module.icon;

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white via-white to-gray-50/50 backdrop-blur-sm">
        {/* Module Header - Always Visible */}
        <div 
          className="relative cursor-pointer"
          onClick={() => onModuleClick(module.id)}
        >
          {/* Background Image with Overlay */}
          <div className="h-48 overflow-hidden relative">
            <motion.img
              src={module.image}
              alt={module.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {Array.from({ length: 6 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-start justify-between mb-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <IconComponent className="w-6 h-6" />
                </div>
                <Badge variant="secondary" className={`${getComplexityColor(module.complexity)} border-0`}>
                  {module.complexity}
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-300 transition-colors">
                {module.title}
              </h3>
              
              <p className="text-sm text-white/90 mb-3 line-clamp-2">
                {module.summary}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {module.readTime}
                  </span>
                  <Badge variant="outline" className="border-white/30 text-white text-xs">
                    {module.category}
                  </Badge>
                </div>
                
                <motion.div
                  className="flex items-center gap-1 text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  Explore <ChevronRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 border-t border-gray-100">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
                    <TabsTrigger value="demo" className="text-xs">Interactive</TabsTrigger>
                    <TabsTrigger value="research" className="text-xs">Research</TabsTrigger>
                    <TabsTrigger value="implications" className="text-xs">Impact</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground leading-relaxed">
                        {module.content.overview}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Key Findings</h5>
                        <ul className="space-y-1">
                          {module.content.keyFindings.map((finding, index) => (
                            <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                              {finding}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Related Topics</h5>
                        <div className="flex flex-wrap gap-1">
                          {module.content.relatedTopics.map((topic, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="space-y-4">
                    {module.id === 'insulin-sensitivity' && <GlucoseResponseDemo />}
                    {module.id === 'circadian-metabolism' && <CircadianClockDemo />}
                    {!['insulin-sensitivity', 'circadian-metabolism'].includes(module.id) && (
                      <div className="text-center py-8 text-muted-foreground">
                        <Microscope className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p className="text-sm">Interactive demo coming soon for this module</p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="research" className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">Research Methodology</h5>
                      <p className="text-xs text-muted-foreground">
                        {module.content.methodology}
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="implications" className="space-y-4">
                    <div className="space-y-3">
                      <h5 className="font-semibold text-sm">Practical Implications</h5>
                      {module.content.implications.map((implication, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <Target className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-green-800">{implication}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4" size="sm">
                      <Heart className="w-4 h-4 mr-2" />
                      See How This Affects You
                    </Button>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default InteractiveScienceModule;