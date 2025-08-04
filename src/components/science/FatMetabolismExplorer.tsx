import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Heart, Brain, Zap, AlertTriangle, CheckCircle, XCircle, Info, TrendingUp, TrendingDown } from 'lucide-react';

interface FatProfile {
  type: string;
  name: string;
  healthScore: number;
  cardiovascularRisk: 'low' | 'neutral' | 'high';
  brainHealth: 'beneficial' | 'neutral' | 'harmful';
  inflammationLevel: 'low' | 'moderate' | 'high';
  keyBenefits: string[];
  considerations: string[];
  foodSources: string[];
  recommendedIntake: string;
}

const FatMetabolismExplorer = () => {
  const [selectedFat, setSelectedFat] = useState('omega-3');
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedFats, setSelectedFats] = useState<string[]>(['omega-3']);

  const fatProfiles: Record<string, FatProfile> = {
    'omega-3': {
      type: 'Polyunsaturated',
      name: 'Omega-3 Fatty Acids',
      healthScore: 95,
      cardiovascularRisk: 'low',
      brainHealth: 'beneficial',
      inflammationLevel: 'low',
      keyBenefits: [
        '12% lower cardiovascular mortality',
        'Improved brain structure and cognition',
        'Reduced inflammation (anti-inflammatory)',
        'Better membrane function'
      ],
      considerations: [
        'Requires adequate intake (1-2g EPA+DHA daily)',
        'Quality matters - choose cold-water fish sources',
        'Balance with omega-6 intake'
      ],
      foodSources: ['Salmon', 'Mackerel', 'Sardines', 'Walnuts', 'Flaxseeds', 'Chia seeds'],
      recommendedIntake: '250mg EPA+DHA daily (minimum)'
    },
    'omega-6': {
      type: 'Polyunsaturated',
      name: 'Omega-6 Fatty Acids',
      healthScore: 70,
      cardiovascularRisk: 'neutral',
      brainHealth: 'neutral',
      inflammationLevel: 'moderate',
      keyBenefits: [
        'Essential for hormone production',
        'Cell membrane structure',
        'Wound healing and immune response',
        'Energy production'
      ],
      considerations: [
        'Modern diets often contain excess amounts',
        'High ratios vs omega-3 may promote inflammation',
        'Aim for 2-5:1 ratio with omega-3'
      ],
      foodSources: ['Sunflower oil', 'Corn oil', 'Soybean oil', 'Nuts', 'Seeds'],
      recommendedIntake: '5-10% of total calories'
    },
    'monounsaturated': {
      type: 'Monounsaturated',
      name: 'Monounsaturated Fats',
      healthScore: 85,
      cardiovascularRisk: 'low',
      brainHealth: 'beneficial',
      inflammationLevel: 'low',
      keyBenefits: [
        'Heart protective (Mediterranean diet)',
        'Stable at cooking temperatures',
        'Supports healthy cholesterol levels',
        'Anti-inflammatory properties'
      ],
      considerations: [
        'Heat-stable for cooking',
        'Choose extra virgin olive oil when possible',
        'Balance with other healthy fats'
      ],
      foodSources: ['Olive oil', 'Avocados', 'Almonds', 'Hazelnuts', 'Rapeseed oil'],
      recommendedIntake: '13-20% of total calories'
    },
    'saturated': {
      type: 'Saturated',
      name: 'Saturated Fats',
      healthScore: 60,
      cardiovascularRisk: 'neutral',
      brainHealth: 'neutral',
      inflammationLevel: 'low',
      keyBenefits: [
        'Stable for high-heat cooking',
        'Required for hormone production',
        'No significant association with heart disease (recent research)',
        'Supports fat-soluble vitamin absorption'
      ],
      considerations: [
        'Quality matters - whole food sources preferred',
        'Avoid processed sources',
        'Individual response varies'
      ],
      foodSources: ['Coconut oil', 'Grass-fed butter', 'Grass-fed beef', 'Full-fat dairy'],
      recommendedIntake: '<10% of calories (current guidelines)'
    },
    'trans': {
      type: 'Trans',
      name: 'Trans Fats',
      healthScore: 5,
      cardiovascularRisk: 'high',
      brainHealth: 'harmful',
      inflammationLevel: 'high',
      keyBenefits: [
        'Extended shelf life (industrial benefit only)'
      ],
      considerations: [
        'Avoid completely - no safe level',
        'Check labels for "partially hydrogenated oils"',
        'Even small amounts harmful'
      ],
      foodSources: ['Margarine', 'Shortening', 'Processed baked goods', 'Fried foods'],
      recommendedIntake: '0g - avoid completely'
    }
  };

  const mythsAndFacts = [
    {
      myth: "All saturated fats cause heart disease",
      fact: "78 studies involving 650,000 people found no significant association between saturated fat and cardiovascular disease",
      evidence: "Meta-analysis by Chowdhury et al., 2014"
    },
    {
      myth: "Dietary cholesterol directly raises blood cholesterol",
      fact: "Only 15% of blood cholesterol comes from diet; 85% is produced by the liver",
      evidence: "US Dietary Guidelines removed cholesterol limits in 2015"
    },
    {
      myth: "Low-fat diets are always healthier",
      fact: "Mediterranean diet high in healthy fats shows superior health outcomes compared to low-fat diets",
      evidence: "Multiple RCTs including PREDIMED study"
    },
    {
      myth: "Omega-6 fats are always inflammatory",
      fact: "Higher omega-6 intake linked to 12% lower cardiovascular mortality in recent studies",
      evidence: "Global meta-analysis, Sadeghi et al., 2025"
    }
  ];

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-700';
      case 'neutral': return 'bg-blue-100 text-blue-700';
      case 'high': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getInflammationColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600';
      case 'moderate': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const currentFat = fatProfiles[selectedFat];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="explorer" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="explorer">Fat Explorer</TabsTrigger>
          <TabsTrigger value="comparison">Compare Fats</TabsTrigger>
          <TabsTrigger value="myths">Myths vs Facts</TabsTrigger>
        </TabsList>

        <TabsContent value="explorer" className="space-y-6">
          {/* Fat Type Selector */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Fat Type Explorer
              </CardTitle>
              <CardDescription>
                Explore the latest research on different types of dietary fats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {Object.entries(fatProfiles).map(([key, fat]) => (
                  <Button
                    key={key}
                    variant={selectedFat === key ? "default" : "outline"}
                    onClick={() => setSelectedFat(key)}
                    className="h-auto p-3 flex flex-col items-center gap-2"
                  >
                    <div className={`text-2xl font-bold ${getHealthScoreColor(fat.healthScore)}`}>
                      {fat.healthScore}
                    </div>
                    <div className="text-xs text-center">{fat.name}</div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Selected Fat Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Health Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{currentFat.name}</span>
                    <Badge variant="outline">{currentFat.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Health Score */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Overall Health Score</span>
                      <span className={`text-2xl font-bold ${getHealthScoreColor(currentFat.healthScore)}`}>
                        {currentFat.healthScore}/100
                      </span>
                    </div>
                    <Progress value={currentFat.healthScore} className="h-3" />
                  </div>

                  {/* Risk Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" />
                      <div className="text-sm font-medium">Cardiovascular Risk</div>
                      <Badge className={`mt-1 ${getRiskBadgeColor(currentFat.cardiovascularRisk)}`}>
                        {currentFat.cardiovascularRisk}
                      </Badge>
                    </div>

                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <Brain className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                      <div className="text-sm font-medium">Brain Health</div>
                      <Badge className={`mt-1 ${getRiskBadgeColor(currentFat.brainHealth)}`}>
                        {currentFat.brainHealth}
                      </Badge>
                    </div>

                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <Zap className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                      <div className="text-sm font-medium">Inflammation</div>
                      <div className={`text-sm font-medium ${getInflammationColor(currentFat.inflammationLevel)}`}>
                        {currentFat.inflammationLevel}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits and Considerations */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      Key Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {currentFat.keyBenefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-600">
                      <Info className="w-5 h-5" />
                      Considerations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {currentFat.considerations.map((consideration, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          {consideration}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Food Sources and Intake */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Best Food Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {currentFat.foodSources.map((source, index) => (
                        <Badge key={index} variant="secondary">
                          {source}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Intake</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold text-primary">
                      {currentFat.recommendedIntake}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compare Fat Types</CardTitle>
              <CardDescription>
                Select multiple fats to compare their health profiles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {Object.entries(fatProfiles).map(([key, fat]) => (
                    <Button
                      key={key}
                      variant={selectedFats.includes(key) ? "default" : "outline"}
                      onClick={() => {
                        if (selectedFats.includes(key)) {
                          setSelectedFats(selectedFats.filter(f => f !== key));
                        } else if (selectedFats.length < 3) {
                          setSelectedFats([...selectedFats, key]);
                        }
                      }}
                      className="h-auto p-3 flex flex-col items-center gap-2"
                      disabled={!selectedFats.includes(key) && selectedFats.length >= 3}
                    >
                      <div className={`text-xl font-bold ${getHealthScoreColor(fat.healthScore)}`}>
                        {fat.healthScore}
                      </div>
                      <div className="text-xs text-center">{fat.name}</div>
                    </Button>
                  ))}
                </div>

                {selectedFats.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-3 text-left">Fat Type</th>
                          <th className="border border-border p-3 text-center">Health Score</th>
                          <th className="border border-border p-3 text-center">CV Risk</th>
                          <th className="border border-border p-3 text-center">Brain Health</th>
                          <th className="border border-border p-3 text-center">Inflammation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedFats.map(fatKey => {
                          const fat = fatProfiles[fatKey];
                          return (
                            <tr key={fatKey}>
                              <td className="border border-border p-3 font-medium">{fat.name}</td>
                              <td className={`border border-border p-3 text-center font-bold ${getHealthScoreColor(fat.healthScore)}`}>
                                {fat.healthScore}
                              </td>
                              <td className="border border-border p-3 text-center">
                                <Badge className={getRiskBadgeColor(fat.cardiovascularRisk)}>
                                  {fat.cardiovascularRisk}
                                </Badge>
                              </td>
                              <td className="border border-border p-3 text-center">
                                <Badge className={getRiskBadgeColor(fat.brainHealth)}>
                                  {fat.brainHealth}
                                </Badge>
                              </td>
                              <td className={`border border-border p-3 text-center font-medium ${getInflammationColor(fat.inflammationLevel)}`}>
                                {fat.inflammationLevel}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
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
                Debunking decades of nutritional misinformation with modern evidence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mythsAndFacts.map((item, index) => (
                  <motion.div
                    key={index}
                    className="border rounded-lg p-4 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-600 mb-1">Myth:</h4>
                        <p className="text-sm">{item.myth}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-600 mb-1">Scientific Fact:</h4>
                        <p className="text-sm">{item.fact}</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3">
                      <div className="text-xs text-blue-700 dark:text-blue-300">
                        <strong>Evidence:</strong> {item.evidence}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FatMetabolismExplorer;