import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Activity, AlertTriangle, TrendingUp, Zap, Clock } from 'lucide-react';

interface PancreasState {
  betaCellHealth: number;
  insulinProduction: number;
  glucoseLevel: number;
  stage: 'healthy' | 'compensating' | 'declining' | 'failing';
  yearsProgressed: number;
}

const InteractiveGlucoseVisualization = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pancreasState, setPancreasState] = useState<PancreasState>({
    betaCellHealth: 100,
    insulinProduction: 100,
    glucoseLevel: 85,
    stage: 'healthy',
    yearsProgressed: 0
  });

  const stages = [
    {
      id: 'healthy',
      title: 'Healthy Pancreas',
      description: 'Normal insulin production maintains stable glucose',
      betaCellHealth: 100,
      insulinProduction: 100,
      glucoseLevel: 85,
      yearsProgressed: 0,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 'early-resistance',
      title: 'Early Insulin Resistance',
      description: 'Cells become less responsive, pancreas compensates',
      betaCellHealth: 95,
      insulinProduction: 150,
      glucoseLevel: 90,
      yearsProgressed: 2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 'compensating',
      title: 'Compensatory Hyperinsulinemia',
      description: 'Pancreas working overtime to maintain normal glucose',
      betaCellHealth: 85,
      insulinProduction: 300,
      glucoseLevel: 95,
      yearsProgressed: 8,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 'declining',
      title: 'Beta-Cell Decline',
      description: 'Pancreas begins to fail, glucose starts rising',
      betaCellHealth: 60,
      insulinProduction: 200,
      glucoseLevel: 115,
      yearsProgressed: 12,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      id: 'failing',
      title: 'Type 2 Diabetes',
      description: 'Significant beta-cell failure, medication required',
      betaCellHealth: 30,
      insulinProduction: 80,
      glucoseLevel: 140,
      yearsProgressed: 15,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  useEffect(() => {
    const stage = stages[currentStage];
    setPancreasState({
      betaCellHealth: stage.betaCellHealth,
      insulinProduction: stage.insulinProduction,
      glucoseLevel: stage.glucoseLevel,
      stage: stage.id as any,
      yearsProgressed: stage.yearsProgressed
    });
  }, [currentStage]);

  const nextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const previousStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const playAnimation = async () => {
    setIsAnimating(true);
    
    for (let i = 0; i < stages.length; i++) {
      setCurrentStage(i);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    setIsAnimating(false);
  };

  const currentStageData = stages[currentStage];

  return (
    <div className="space-y-6">
      {/* Stage Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Hyperinsulinemia Progression
          </CardTitle>
          <CardDescription>
            Follow the journey from healthy pancreas to type 2 diabetes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Timeline */}
          <div className="flex justify-between items-center mb-4">
            <Button 
              onClick={previousStage} 
              disabled={currentStage === 0 || isAnimating}
              variant="outline"
              size="sm"
            >
              Previous
            </Button>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">
                Year {pancreasState.yearsProgressed}
              </span>
            </div>
            
            <div className="flex gap-2">
              <Button 
                onClick={playAnimation}
                disabled={isAnimating}
                size="sm"
              >
                <Zap className="w-4 h-4 mr-1" />
                {isAnimating ? 'Playing...' : 'Play Timeline'}
              </Button>
              <Button 
                onClick={nextStage} 
                disabled={currentStage === stages.length - 1 || isAnimating}
                variant="outline"
                size="sm"
              >
                Next
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Disease Progression</span>
              <span>{Math.round((currentStage / (stages.length - 1)) * 100)}%</span>
            </div>
            <Progress value={(currentStage / (stages.length - 1)) * 100} className="h-2" />
          </div>

          {/* Current Stage Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <Badge className={`${currentStageData.bgColor} ${currentStageData.color} border-0`}>
                  Stage {currentStage + 1}
                </Badge>
                <h3 className="text-lg font-semibold">{currentStageData.title}</h3>
              </div>
              <p className="text-muted-foreground">{currentStageData.description}</p>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Pancreas Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Pancreatic Beta-Cell Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beta-Cell Health */}
            <motion.div 
              className="text-center p-4 rounded-lg bg-muted/50"
              animate={{ scale: isAnimating ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.8, repeat: isAnimating ? Infinity : 0 }}
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative">
                <Activity className="w-8 h-8 text-white" />
                {/* Health indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: 
                      pancreasState.betaCellHealth >= 90 ? '#10b981' :
                      pancreasState.betaCellHealth >= 70 ? '#f59e0b' : '#ef4444'
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              <div className="text-2xl font-bold">{pancreasState.betaCellHealth}%</div>
              <div className="text-sm text-muted-foreground">Beta-Cell Health</div>
              <Progress 
                value={pancreasState.betaCellHealth} 
                className="mt-2 h-2"
              />
            </motion.div>

            {/* Insulin Production */}
            <motion.div 
              className="text-center p-4 rounded-lg bg-muted/50"
              animate={{ scale: isAnimating ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.8, delay: 0.2, repeat: isAnimating ? Infinity : 0 }}
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center relative">
                <TrendingUp className="w-8 h-8 text-white" />
                {pancreasState.insulinProduction > 200 && (
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </motion.div>
                )}
              </div>
              <div className="text-2xl font-bold">{pancreasState.insulinProduction}%</div>
              <div className="text-sm text-muted-foreground">Insulin Production</div>
              <Progress 
                value={Math.min(pancreasState.insulinProduction, 100)} 
                className="mt-2 h-2"
              />
              {pancreasState.insulinProduction > 100 && (
                <div className="text-xs text-orange-600 mt-1 font-medium">
                  Overproducing ({pancreasState.insulinProduction - 100}% above normal)
                </div>
              )}
            </motion.div>

            {/* Glucose Level */}
            <motion.div 
              className="text-center p-4 rounded-lg bg-muted/50"
              animate={{ scale: isAnimating ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.8, delay: 0.4, repeat: isAnimating ? Infinity : 0 }}
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <div className="text-white text-xs font-bold">GL</div>
              </div>
              <div className="text-2xl font-bold">{pancreasState.glucoseLevel}</div>
              <div className="text-sm text-muted-foreground">Glucose (mg/dL)</div>
              <Progress 
                value={(pancreasState.glucoseLevel / 200) * 100} 
                className="mt-2 h-2"
              />
              <div className="text-xs mt-1">
                {pancreasState.glucoseLevel < 100 && (
                  <span className="text-green-600">Normal</span>
                )}
                {pancreasState.glucoseLevel >= 100 && pancreasState.glucoseLevel < 126 && (
                  <span className="text-yellow-600">Prediabetic</span>
                )}
                {pancreasState.glucoseLevel >= 126 && (
                  <span className="text-red-600">Diabetic</span>
                )}
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Stage Insights */}
      <Card>
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h4 className="font-semibold flex items-center gap-2">
                Stage {currentStage + 1} Insights
                {currentStage >= 2 && <AlertTriangle className="w-4 h-4 text-yellow-600" />}
              </h4>
              
              <div className="space-y-2 text-sm">
                {currentStage === 0 && (
                  <div className="space-y-1">
                    <p>• Beta-cells produce optimal insulin amounts</p>
                    <p>• Glucose levels remain stable throughout the day</p>
                    <p>• No signs of metabolic stress</p>
                  </div>
                )}
                {currentStage === 1 && (
                  <div className="space-y-1">
                    <p>• Cells begin showing reduced insulin sensitivity</p>
                    <p>• Pancreas increases insulin production by 50% to compensate</p>
                    <p>• Glucose levels remain normal due to compensation</p>
                  </div>
                )}
                {currentStage === 2 && (
                  <div className="space-y-1">
                    <p>• Pancreas now produces 3x normal insulin levels</p>
                    <p>• Beta-cells under significant metabolic stress</p>
                    <p>• Still maintaining normal glucose - the calm before the storm</p>
                  </div>
                )}
                {currentStage === 3 && (
                  <div className="space-y-1">
                    <p>• Beta-cells beginning to fail from overwork</p>
                    <p>• Insulin production declining despite continued demand</p>
                    <p>• Glucose levels rising - prediabetes range</p>
                  </div>
                )}
                {currentStage === 4 && (
                  <div className="space-y-1">
                    <p>• Significant beta-cell death has occurred</p>
                    <p>• Remaining cells cannot meet insulin demands</p>
                    <p>• Type 2 diabetes diagnosed - medication required</p>
                  </div>
                )}
              </div>
              
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Key Insight:</strong> The transition from stage 2 to 3 is critical. 
                  During hyperinsulinemia (stage 2), glucose appears normal but the pancreas 
                  is already under severe stress. This is why early detection through fasting 
                  insulin tests is crucial.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveGlucoseVisualization;