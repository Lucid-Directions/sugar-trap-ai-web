import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Heart, 
  Activity, 
  Users, 
  Clock, 
  Dna, 
  Microscope,
  TrendingUp,
  Moon,
  Zap,
  ChevronRight,
  BookOpen,
  Play,
  Star,
  Filter,
  Search
} from 'lucide-react';
import InteractiveGlucoseVisualization from './InteractiveGlucoseVisualization';
import InsulinSensitivityDemo from './InsulinSensitivityDemo';
import CircadianRhythmClock from './CircadianRhythmClock';
import FatMetabolismExplorer from './FatMetabolismExplorer';

interface ScienceTopic {
  id: string;
  title: string;
  category: 'metabolism' | 'pathophysiology' | 'lifestyle' | 'nutrition' | 'research';
  complexity: 'beginner' | 'intermediate' | 'advanced';
  readTime: string;
  icon: any;
  description: string;
  keyFindings: string[];
  interactiveDemo?: boolean;
  featured?: boolean;
}

const scienceTopics: ScienceTopic[] = [
  {
    id: 'optimal-insulin-sensitivity',
    title: 'Optimal Insulin Sensitivity',
    category: 'metabolism',
    complexity: 'beginner',
    readTime: '5 min',
    icon: TrendingUp,
    description: 'Understanding how your body efficiently manages blood sugar with minimal hormonal intervention.',
    keyFindings: [
      'Optimal insulin sensitivity requires 2-10x less insulin than insulin-resistant states',
      'Stable glucose levels correlate with 25% improvement in cognitive function',
      'Muscle glucose uptake can improve by 30-50% with proper conditioning'
    ],
    interactiveDemo: true,
    featured: true
  },
  {
    id: 'compensatory-hyperinsulinemia',
    title: 'Compensatory Hyperinsulinemia',
    category: 'pathophysiology',
    complexity: 'intermediate',
    readTime: '8 min',
    icon: Activity,
    description: 'When your pancreas works overtime to overcome cellular resistance - the hidden precursor to diabetes.',
    keyFindings: [
      'Compensatory hyperinsulinemia can persist for 10-15 years before diabetes onset',
      'Beta-cell function declines by 4-5% annually once hyperinsulinemia begins',
      'Early intervention can reverse insulin resistance in 60-80% of cases'
    ],
    interactiveDemo: true,
    featured: true
  },
  {
    id: 'circadian-metabolism',
    title: 'Circadian Metabolism',
    category: 'lifestyle',
    complexity: 'intermediate',
    readTime: '6 min',
    icon: Clock,
    description: 'How your internal clock orchestrates metabolism and why meal timing matters as much as meal content.',
    keyFindings: [
      'Glucose tolerance varies by 30% throughout the day',
      'Late-night eating disrupts circadian insulin sensitivity',
      '69% of population experiences social jet lag affecting metabolism'
    ],
    interactiveDemo: true,
    featured: true
  },
  {
    id: 'fat-metabolism-truth',
    title: 'Fat Metabolism: Debunking Decades of Myths',
    category: 'nutrition',
    complexity: 'beginner',
    readTime: '12 min',
    icon: Heart,
    description: 'Modern research reveals why saturated fats aren\'t the cardiovascular villains once believed.',
    keyFindings: [
      'No significant association between saturated fat and cardiovascular disease in 78 studies (650,000 people)',
      'Higher omega-6 intake linked to 12% lower cardiovascular mortality',
      'Only 15% of blood cholesterol comes from diet, 85% produced by liver'
    ],
    interactiveDemo: true,
    featured: true
  },
  {
    id: 'gut-microbiome',
    title: 'Gut Microbiome & Glucose Control',
    category: 'research',
    complexity: 'advanced',
    readTime: '10 min',
    icon: Dna,
    description: 'How trillions of microorganisms in your gut influence blood sugar and metabolic health.',
    keyFindings: [
      'Microbiome contributes up to 10% of host energy extraction',
      'SCFA production from fiber directly stimulates GLP-1 release',
      'Fecal microbiota transplant can improve insulin sensitivity by 20%'
    ]
  },
  {
    id: 'sleep-metabolism',
    title: 'Sleep & Metabolic Health',
    category: 'lifestyle',
    complexity: 'intermediate',
    readTime: '7 min',
    icon: Moon,
    description: 'Why one night of poor sleep can make you temporarily pre-diabetic.',
    keyFindings: [
      'One night of sleep deprivation reduces insulin sensitivity by 25-30%',
      'Sleep debt accumulates metabolic dysfunction over time',
      'Deep sleep stages are critical for glucose homeostasis'
    ]
  },
  {
    id: 'exercise-physiology',
    title: 'Exercise & Glucose Dynamics',
    category: 'lifestyle',
    complexity: 'intermediate',
    readTime: '9 min',
    icon: Zap,
    description: 'How different types of exercise create distinct glucose responses and long-term adaptations.',
    keyFindings: [
      'High-intensity exercise can improve insulin sensitivity for 48+ hours',
      'Resistance training builds glucose-disposing muscle mass',
      'Exercise timing relative to meals dramatically affects glucose clearance'
    ]
  },
  {
    id: 'stress-hormones',
    title: 'Stress Hormones & Blood Sugar',
    category: 'pathophysiology',
    complexity: 'intermediate',
    readTime: '8 min',
    icon: Brain,
    description: 'How chronic stress creates a perfect storm for insulin resistance and metabolic dysfunction.',
    keyFindings: [
      'Chronic stress increases visceral fat accumulation by 45%',
      'Cortisol directly impairs insulin signaling pathways',
      'Stress management can improve HbA1c by 0.5-1.0%'
    ]
  }
];

const categories = [
  { id: 'all', label: 'All Topics', icon: BookOpen },
  { id: 'metabolism', label: 'Metabolism', icon: TrendingUp },
  { id: 'pathophysiology', label: 'Disease Mechanisms', icon: Activity },
  { id: 'lifestyle', label: 'Lifestyle Factors', icon: Users },
  { id: 'nutrition', label: 'Nutrition Science', icon: Heart },
  { id: 'research', label: 'Latest Research', icon: Microscope }
];

const complexityColors = {
  beginner: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  advanced: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
};

export default function ScienceHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredTopics = scienceTopics.filter(topic => {
    const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTopics = scienceTopics.filter(topic => topic.featured);

  const renderInteractiveDemo = (topicId: string) => {
    switch (topicId) {
      case 'optimal-insulin-sensitivity':
        return <InsulinSensitivityDemo />;
      case 'compensatory-hyperinsulinemia':
        return <InteractiveGlucoseVisualization />;
      case 'circadian-metabolism':
        return <CircadianRhythmClock />;
      case 'fat-metabolism-truth':
        return <FatMetabolismExplorer />;
      default:
        return null;
    }
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto">
      <Tabs defaultValue="explorer" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 h-12">
          <TabsTrigger value="explorer" className="text-sm font-medium">
            <Microscope className="w-4 h-4 mr-2" />
            Science Explorer
          </TabsTrigger>
          <TabsTrigger value="interactive" className="text-sm font-medium">
            <Play className="w-4 h-4 mr-2" />
            Interactive Demos
          </TabsTrigger>
          <TabsTrigger value="research" className="text-sm font-medium">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Research
          </TabsTrigger>
        </TabsList>

        <TabsContent value="explorer" className="space-y-8">
          {/* Search and Filter Bar */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search science topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="whitespace-nowrap"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </motion.div>

          {/* Featured Topics */}
          {selectedCategory === 'all' && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Featured Interactive Topics</h3>
              </div>
              
              <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                {featuredTopics.map((topic, index) => {
                  const IconComponent = topic.icon;
                  return (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
                        <CardHeader className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex gap-2">
                              {topic.interactiveDemo && (
                                <Badge variant="secondary" className="text-xs">
                                  <Play className="w-3 h-3 mr-1" />
                                  Interactive
                                </Badge>
                              )}
                              <Badge className={`text-xs ${complexityColors[topic.complexity]}`}>
                                {topic.complexity}
                              </Badge>
                            </div>
                          </div>
                          
                          <div>
                            <CardTitle className="group-hover:text-primary transition-colors">
                              {topic.title}
                            </CardTitle>
                            <CardDescription className="mt-2">
                              {topic.description}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h5 className="font-medium text-sm">Key Findings:</h5>
                            <ul className="space-y-1">
                              {topic.keyFindings.slice(0, 2).map((finding, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  {finding}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t">
                            <span className="text-sm text-muted-foreground">{topic.readTime} read</span>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedTopic(topic.id)}
                              className="group-hover:bg-primary group-hover:text-white transition-colors"
                            >
                              Explore
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* All Topics Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">
              {selectedCategory === 'all' ? 'All Topics' : categories.find(c => c.id === selectedCategory)?.label}
            </h3>
            
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTopics.map((topic, index) => {
                const IconComponent = topic.icon;
                return (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                  >
                    <Card className="h-full group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex gap-1">
                            {topic.interactiveDemo && (
                              <Badge variant="secondary" className="text-xs">
                                Interactive
                              </Badge>
                            )}
                            <Badge className={`text-xs ${complexityColors[topic.complexity]}`}>
                              {topic.complexity}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {topic.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {topic.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{topic.readTime}</span>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setSelectedTopic(topic.id)}
                            className="group-hover:bg-primary group-hover:text-white transition-colors"
                          >
                            Read
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="interactive" className="space-y-8">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold">Interactive Science Demos</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the science through interactive visualisations and hands-on demonstrations
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredTopics.filter(t => t.interactiveDemo).map((topic, index) => (
              <motion.div
                key={topic.id}
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <topic.icon className="w-6 h-6 text-primary" />
                      {topic.title}
                    </CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {renderInteractiveDemo(topic.id)}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="research">
          <motion.div
            className="text-center space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold">Latest Research Findings</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Breakthrough studies that are reshaping our understanding of metabolism and nutrition
            </p>
          </motion.div>
          
          {/* Research content will be rendered here */}
          <div className="space-y-6">
            {/* This would be populated with the latest research */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-muted-foreground">
                  Research content coming soon...
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}