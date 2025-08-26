import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Clock, Sun, Moon, Sunrise, Sunset, Play, Pause } from 'lucide-react';

interface CircadianState {
  time: number; // 0-24 hours
  glucoseTolerance: number; // percentage
  insulinSensitivity: number; // percentage
  cortisolLevel: number; // percentage
  melatoninLevel: number; // percentage
  phase: 'morning' | 'midday' | 'evening' | 'night';
}

const CircadianRhythmClock = () => {
  const [currentTime, setCurrentTime] = useState([8]); // Start at 8 AM
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1);
  const [circadianState, setCircadianState] = useState<CircadianState>({
    time: 8,
    glucoseTolerance: 85,
    insulinSensitivity: 85,
    cortisolLevel: 70,
    melatoninLevel: 10,
    phase: 'morning'
  });

  // Calculate circadian metrics based on time
  useEffect(() => {
    const time = currentTime[0];
    
    // Glucose tolerance (highest in morning, lowest at night)
    let glucoseTolerance;
    if (time >= 6 && time <= 10) {
      glucoseTolerance = 90 - Math.abs(time - 8) * 5; // Peak at 8 AM
    } else if (time >= 10 && time <= 18) {
      glucoseTolerance = 85 - (time - 10) * 2; // Gradual decline
    } else {
      glucoseTolerance = Math.max(40, 70 - Math.abs(time - 22) * 8); // Lowest at night
    }

    // Insulin sensitivity (follows similar pattern to glucose tolerance)
    let insulinSensitivity;
    if (time >= 6 && time <= 12) {
      insulinSensitivity = 85 + Math.sin((time - 6) * Math.PI / 6) * 15;
    } else if (time >= 12 && time <= 20) {
      insulinSensitivity = 80 - (time - 12) * 3;
    } else {
      insulinSensitivity = Math.max(35, 56 - Math.abs(time - 22) * 10);
    }

    // Cortisol (peaks in early morning, lowest at night)
    let cortisolLevel;
    if (time >= 6 && time <= 9) {
      cortisolLevel = 60 + (9 - time) * 10; // Peak at 6 AM
    } else if (time >= 9 && time <= 22) {
      cortisolLevel = Math.max(20, 90 - (time - 9) * 5);
    } else {
      cortisolLevel = 20;
    }

    // Melatonin (lowest during day, peaks at night)
    let melatoninLevel;
    if (time >= 6 && time <= 20) {
      melatoninLevel = Math.max(5, 15 - Math.abs(time - 13) * 1);
    } else {
      melatoninLevel = Math.min(90, 20 + Math.abs(time - 2) * 15);
    }

    // Determine phase
    let phase: CircadianState['phase'];
    if (time >= 6 && time < 12) phase = 'morning';
    else if (time >= 12 && time < 18) phase = 'midday';
    else if (time >= 18 && time < 22) phase = 'evening';
    else phase = 'night';

    setCircadianState({
      time,
      glucoseTolerance: Math.round(glucoseTolerance),
      insulinSensitivity: Math.round(insulinSensitivity),
      cortisolLevel: Math.round(cortisolLevel),
      melatoninLevel: Math.round(melatoninLevel),
      phase
    });
  }, [currentTime]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime(prev => {
        const newTime = (prev[0] + 0.5) % 24;
        return [newTime];
      });
    }, 1000 / playSpeed);

    return () => clearInterval(interval);
  }, [isPlaying, playSpeed]);

  const getPhaseIcon = () => {
    switch (circadianState.phase) {
      case 'morning': return <Sunrise className="w-5 h-5 text-yellow-500" />;
      case 'midday': return <Sun className="w-5 h-5 text-orange-500" />;
      case 'evening': return <Sunset className="w-5 h-5 text-orange-600" />;
      case 'night': return <Moon className="w-5 h-5 text-blue-400" />;
    }
  };

  const getPhaseColor = () => {
    switch (circadianState.phase) {
      case 'morning': return 'from-yellow-400 to-orange-400';
      case 'midday': return 'from-orange-400 to-red-400';
      case 'evening': return 'from-red-400 to-purple-400';
      case 'night': return 'from-blue-400 to-indigo-600';
    }
  };

  const formatTime = (time: number) => {
    // Normalize to 0–24 range
    const t24 = ((time % 24) + 24) % 24;
    let hours24 = Math.floor(t24);
    let minutes = Math.round((t24 - hours24) * 60);

    // Handle 60-minute rounding overflow
    if (minutes === 60) {
      minutes = 0;
      hours24 = (hours24 + 1) % 24;
    }

    const period = hours24 >= 12 ? 'PM' : 'AM';
    const displayHours = hours24 % 12 === 0 ? 12 : hours24 % 12;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  const getOptimalMealTiming = () => {
    if (circadianState.time >= 6 && circadianState.time <= 10) {
      return { message: "Optimal time for largest meal", color: "text-green-600" };
    } else if (circadianState.time >= 10 && circadianState.time <= 14) {
      return { message: "Good time for moderate meal", color: "text-blue-600" };
    } else if (circadianState.time >= 14 && circadianState.time <= 18) {
      return { message: "Light meal recommended", color: "text-yellow-600" };
    } else {
      return { message: "Avoid eating - lowest glucose tolerance", color: "text-red-600" };
    }
  };

  const optimalTiming = getOptimalMealTiming();

  return (
    <div className="space-y-6">
      {/* Clock Control */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Circadian Metabolism Clock
          </CardTitle>
          <CardDescription>
            Explore how your metabolism changes throughout a 24-hour cycle
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Time Controls */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getPhaseColor()} flex items-center justify-center`}>
                  {getPhaseIcon()}
                </div>
                <div>
                  <div className="text-2xl font-bold">{formatTime(circadianState.time)}</div>
                  <div className="text-sm text-muted-foreground capitalize">{circadianState.phase}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <select 
                  value={playSpeed} 
                  onChange={(e) => setPlaySpeed(Number(e.target.value))}
                  className="px-3 py-1 text-sm border rounded"
                  disabled={isPlaying}
                >
                  <option value={0.5}>0.5x</option>
                  <option value={1}>1x</option>
                  <option value={2}>2x</option>
                  <option value={4}>4x</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Time of Day</label>
              <Slider
                value={currentTime}
                onValueChange={setCurrentTime}
                min={0}
                max={24}
                step={0.5}
                className="w-full"
                disabled={isPlaying}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>12 AM</span>
                <span>6 AM</span>
                <span>12 PM</span>
                <span>6 PM</span>
                <span>12 AM</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metabolic Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Real-Time Metabolic State</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              className="text-center p-4 rounded-lg bg-muted/50"
              animate={{ scale: isPlaying ? [1, 1.02, 1] : 1 }}
              transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
            >
              <div className="text-2xl font-bold text-green-600">
                {circadianState.glucoseTolerance}%
              </div>
              <div className="text-xs text-muted-foreground">Glucose Tolerance</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <motion.div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${circadianState.glucoseTolerance}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${circadianState.glucoseTolerance}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="text-center p-4 rounded-lg bg-muted/50"
              animate={{ scale: isPlaying ? [1, 1.02, 1] : 1 }}
              transition={{ duration: 1, delay: 0.1, repeat: isPlaying ? Infinity : 0 }}
            >
              <div className="text-2xl font-bold text-blue-600">
                {circadianState.insulinSensitivity}%
              </div>
              <div className="text-xs text-muted-foreground">Insulin Sensitivity</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${circadianState.insulinSensitivity}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${circadianState.insulinSensitivity}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="text-center p-4 rounded-lg bg-muted/50"
              animate={{ scale: isPlaying ? [1, 1.02, 1] : 1 }}
              transition={{ duration: 1, delay: 0.2, repeat: isPlaying ? Infinity : 0 }}
            >
              <div className="text-2xl font-bold text-orange-600">
                {circadianState.cortisolLevel}%
              </div>
              <div className="text-xs text-muted-foreground">Cortisol Level</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <motion.div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${circadianState.cortisolLevel}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${circadianState.cortisolLevel}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="text-center p-4 rounded-lg bg-muted/50"
              animate={{ scale: isPlaying ? [1, 1.02, 1] : 1 }}
              transition={{ duration: 1, delay: 0.3, repeat: isPlaying ? Infinity : 0 }}
            >
              <div className="text-2xl font-bold text-purple-600">
                {circadianState.melatoninLevel}%
              </div>
              <div className="text-xs text-muted-foreground">Melatonin Level</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <motion.div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${circadianState.melatoninLevel}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${circadianState.melatoninLevel}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Digital Clock Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Digital Clock</CardTitle>
          <CardDescription>Digital clock synced with the time slider</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Analog Clock */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      key={circadianState.time}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-5xl font-extrabold tracking-tight"
                    >
                      {formatTime(currentTime[0])}
                    </motion.div>
                    <div className="mt-2 text-sm text-muted-foreground">Aligned with slider</div>
                    <div className="mt-3">
                      <Badge variant="secondary" className="capitalize">{circadianState.phase}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 24-Hour Glucose Tolerance Curve */}
            <div className="flex-1">
              <h4 className="font-medium mb-3">24-Hour Glucose Tolerance</h4>
              <div className="h-48 relative bg-muted/20 rounded-lg overflow-hidden">
                <svg viewBox="0 0 480 180" className="w-full h-full">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="circadian-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
                    </pattern>
                  </defs>
                  <rect width="480" height="180" fill="url(#circadian-grid)" />
                  
                  {/* Glucose tolerance curve */}
                  <motion.path
                    d="M 20,90 Q 80,60 140,70 Q 200,80 260,100 Q 320,120 380,140 Q 420,150 460,90"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  
                  {/* Current time indicator */}
                  <motion.line
                    x1={20 + (circadianState.time / 24) * 440}
                    y1="20"
                    x2={20 + (circadianState.time / 24) * 440}
                    y2="160"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  
                  {/* Current time marker */}
                  <motion.circle
                    cx={20 + (circadianState.time / 24) * 440}
                    cy={180 - (circadianState.glucoseTolerance / 100) * 140 - 20}
                    r="6"
                    fill="#ef4444"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  
                  {/* Time labels */}
                  <text x="20" y="175" className="text-xs fill-muted-foreground">12 AM</text>
                  <text x="140" y="175" className="text-xs fill-muted-foreground">6 AM</text>
                  <text x="260" y="175" className="text-xs fill-muted-foreground">12 PM</text>
                  <text x="380" y="175" className="text-xs fill-muted-foreground">6 PM</text>
                  <text x="460" y="175" className="text-xs fill-muted-foreground">12 AM</text>
                </svg>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meal Timing Recommendations */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h4 className="font-semibold">Optimal Meal Timing</h4>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={circadianState.phase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <div className={`text-lg font-medium ${optimalTiming.color}`}>
                  {optimalTiming.message}
                </div>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  {circadianState.phase === 'morning' && (
                    <>
                      <p>• Highest glucose tolerance and insulin sensitivity</p>
                      <p>• Cortisol naturally high to handle carbohydrates</p>
                      <p>• Perfect time for your largest meal of the day</p>
                    </>
                  )}
                  {circadianState.phase === 'midday' && (
                    <>
                      <p>• Good metabolic flexibility remains</p>
                      <p>• Moderate glucose tolerance</p>
                      <p>• Suitable for balanced, moderately-sized meals</p>
                    </>
                  )}
                  {circadianState.phase === 'evening' && (
                    <>
                      <p>• Decreasing glucose tolerance</p>
                      <p>• Insulin sensitivity beginning to decline</p>
                      <p>• Focus on lighter, lower-carb options</p>
                    </>
                  )}
                  {circadianState.phase === 'night' && (
                    <>
                      <p>• Lowest glucose tolerance of the day</p>
                      <p>• Poor insulin sensitivity</p>
                      <p>• Eating now can disrupt circadian rhythms</p>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CircadianRhythmClock;