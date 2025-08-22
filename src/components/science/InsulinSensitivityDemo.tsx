import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Minus, Info, Zap } from 'lucide-react';

interface InsulinState {
  sensitivity: number;
  glucoseLevel: number;
  insulinRequired: number;
  energyLevel: number;
  cognitiveFunction: number;
}

const InsulinSensitivityDemo = () => {
  const [sensitivity, setSensitivity] = useState([75]); // Start at good sensitivity
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentState, setCurrentState] = useState<InsulinState>({
    sensitivity: 75,
    glucoseLevel: 85,
    insulinRequired: 25,
    energyLevel: 80,
    cognitiveFunction: 85
  });

  // Calculate derived values based on insulin sensitivity
  useEffect(() => {
    const sens = sensitivity[0];
    
    // More sensitive = lower glucose, less insulin needed, better function
    const glucoseLevel = Math.max(70, Math.min(140, 110 - (sens - 50) * 0.8));
    const insulinRequired = Math.max(10, Math.min(100, 100 - sens));
    const energyLevel = Math.max(30, Math.min(100, sens + 10));
    const cognitiveFunction = Math.max(40, Math.min(100, sens + 15));

    setCurrentState({
      sensitivity: sens,
      glucoseLevel: Math.round(glucoseLevel),
      insulinRequired: Math.round(insulinRequired),
      energyLevel: Math.round(energyLevel),
      cognitiveFunction: Math.round(cognitiveFunction)
    });
  }, [sensitivity]);

  const getSensitivityStatus = () => {
    if (currentState.sensitivity >= 80) return { label: 'Optimal', color: 'text-green-600', bg: 'bg-green-100' };
    if (currentState.sensitivity >= 60) return { label: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (currentState.sensitivity >= 40) return { label: 'Reduced', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { label: 'Poor', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const getGlucoseStatus = () => {
    if (currentState.glucoseLevel <= 99) return { label: 'Normal', color: 'text-green-600' };
    if (currentState.glucoseLevel <= 125) return { label: 'Elevated', color: 'text-yellow-600' };
    return { label: 'High', color: 'text-red-600' };
  };

  const getTrendIcon = (value: number, threshold: number) => {
    if (value > threshold) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (value < threshold) return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <Minus className="w-4 h-4 text-yellow-600" />;
  };

  const animateSequence = async () => {
    setIsPlaying(true);
    
    // Start from poor sensitivity
    setSensitivity([30]);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Gradually improve
    setSensitivity([50]);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSensitivity([70]);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reach optimal
    setSensitivity([90]);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsPlaying(false);
  };

  const status = getSensitivityStatus();
  const glucoseStatus = getGlucoseStatus();

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Insulin Sensitivity Simulator
          </CardTitle>
          <CardDescription>
            Adjust insulin sensitivity to see real-time effects on glucose, energy, and cognitive function
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Insulin Sensitivity</label>
              <div className="flex items-center gap-2">
                <Badge className={`${status.bg} ${status.color} border-0`}>
                  {status.label}
                </Badge>
                <Button 
                  size="sm" 
                  onClick={animateSequence} 
                  disabled={isPlaying}
                  className="h-8"
                >
                  <Zap className="w-4 h-4 mr-1" />
                  {isPlaying ? 'Playing...' : 'Demo'}
                </Button>
              </div>
            </div>
            
            <Slider
              value={sensitivity}
              onValueChange={setSensitivity}
              min={20}
              max={100}
              step={5}
              className="w-full"
              disabled={isPlaying}
            />
            
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Insulin Resistant</span>
              <span>Highly Sensitive</span>
            </div>
          </div>

          {/* Real-time Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              className="text-center p-3 rounded-lg bg-muted/50"
              animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
            >
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                {currentState.glucoseLevel}
                {getTrendIcon(currentState.glucoseLevel, 90)}
              </div>
              <div className="text-xs text-muted-foreground">Glucose (mg/dL)</div>
              <Badge variant="outline" className={`text-xs mt-1 ${glucoseStatus.color}`}>
                {glucoseStatus.label}
              </Badge>
            </motion.div>

            <motion.div 
              className="text-center p-3 rounded-lg bg-muted/50"
              animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.5, delay: 0.1, repeat: isPlaying ? Infinity : 0 }}
            >
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                {currentState.insulinRequired}
                {getTrendIcon(100 - currentState.insulinRequired, 50)}
              </div>
              <div className="text-xs text-muted-foreground">Insulin Required (%)</div>
            </motion.div>

            <motion.div 
              className="text-center p-3 rounded-lg bg-muted/50"
              animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.5, delay: 0.2, repeat: isPlaying ? Infinity : 0 }}
            >
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                {currentState.energyLevel}
                {getTrendIcon(currentState.energyLevel, 70)}
              </div>
              <div className="text-xs text-muted-foreground">Energy Level (%)</div>
            </motion.div>

            <motion.div 
              className="text-center p-3 rounded-lg bg-muted/50"
              animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.5, delay: 0.3, repeat: isPlaying ? Infinity : 0 }}
            >
              <div className="text-2xl font-bold flex items-center justify-center gap-1">
                {currentState.cognitiveFunction}
                {getTrendIcon(currentState.cognitiveFunction, 75)}
              </div>
              <div className="text-xs text-muted-foreground">Cognitive Function (%)</div>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Glucose Curve */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Glucose Response Visualisation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-32 relative bg-muted/20 rounded-lg overflow-hidden">
            <svg viewBox="0 0 400 120" className="w-full h-full">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
                </pattern>
              </defs>
              <rect width="400" height="120" fill="url(#grid)" />
              
              {/* Glucose curve based on sensitivity */}
              <motion.path
                d={
                  currentState.sensitivity >= 80
                    ? "M 20,80 Q 120,70 200,75 Q 280,78 380,80"  // Optimal - very stable
                    : currentState.sensitivity >= 60
                    ? "M 20,85 Q 120,60 200,70 Q 280,75 380,85"  // Good - mild spike
                    : currentState.sensitivity >= 40
                    ? "M 20,90 Q 120,40 200,60 Q 280,70 380,90"  // Reduced - notable spike
                    : "M 20,95 Q 120,25 200,50 Q 280,65 380,95"  // Poor - large spike
                }
                fill="none"
                stroke={
                  currentState.sensitivity >= 80 ? "#10b981" :
                  currentState.sensitivity >= 60 ? "#3b82f6" :
                  currentState.sensitivity >= 40 ? "#f59e0b" : "#ef4444"
                }
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Peak indicator for poor sensitivity */}
              <AnimatePresence>
                {currentState.sensitivity < 60 && (
                  <motion.circle
                    cx="120"
                    cy={currentState.sensitivity >= 40 ? "40" : "25"}
                    r="4"
                    fill="#ef4444"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ delay: 0.8 }}
                  />
                )}
              </AnimatePresence>
              
              {/* Labels */}
              <text x="20" y="110" className="text-xs fill-muted-foreground">Meal</text>
              <text x="380" y="110" className="text-xs fill-muted-foreground" textAnchor="end">2h</text>
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="space-y-2">
              <h4 className="font-semibold">Current State Insights</h4>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentState.sensitivity}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-muted-foreground space-y-1"
                >
                  {currentState.sensitivity >= 80 && (
                    <>
                      <p>• Your cells respond efficiently to insulin - excellent metabolic health</p>
                      <p>• Stable energy throughout the day with minimal glucose spikes</p>
                      <p>• Cognitive function optimised with steady brain fuel supply</p>
                    </>
                  )}
                  {currentState.sensitivity >= 60 && currentState.sensitivity < 80 && (
                    <>
                      <p>• Good insulin response with room for improvement</p>
                      <p>• Mild glucose fluctuations may cause occasional energy dips</p>
                      <p>• Consider optimising meal timing and composition</p>
                    </>
                  )}
                  {currentState.sensitivity >= 40 && currentState.sensitivity < 60 && (
                    <>
                      <p>• Reduced insulin sensitivity - early warning signs present</p>
                      <p>• Noticeable glucose spikes leading to energy crashes</p>
                      <p>• Lifestyle interventions can still reverse this trajectory</p>
                    </>
                  )}
                  {currentState.sensitivity < 40 && (
                    <>
                      <p>• Significant insulin resistance - high diabetes risk</p>
                      <p>• Large glucose spikes cause energy crashes and brain fog</p>
                      <p>• Medical consultation and aggressive lifestyle changes needed</p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsulinSensitivityDemo;