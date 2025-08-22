import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Brain, 
  Heart, 
  Activity, 
  Clock, 
  Microscope, 
  Zap, 
  Target,
  Users,
  Moon,
  Coffee,
  Dumbbell,
  Baby,
  FlaskConical,
  BarChart
} from 'lucide-react';

interface TopicFilter {
  id: string;
  label: string;
  color: string;
  count: number;
}

interface ScienceTopic {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  category: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  preview: string;
  isNew?: boolean;
  isPremium?: boolean;
}

const filters: TopicFilter[] = [
  { id: 'all', label: 'All Topics', color: 'bg-gray-100 text-gray-800', count: 24 },
  { id: 'metabolism', label: 'Metabolism', color: 'bg-green-100 text-green-800', count: 8 },
  { id: 'hormones', label: 'Hormones', color: 'bg-blue-100 text-blue-800', count: 6 },
  { id: 'lifestyle', label: 'Lifestyle', color: 'bg-purple-100 text-purple-800', count: 5 },
  { id: 'nutrition', label: 'Nutrition', color: 'bg-orange-100 text-orange-800', count: 5 }
];

const allTopics: ScienceTopic[] = [
  // Core topics (always visible)
  {
    id: 'insulin-sensitivity',
    title: 'Optimal Insulin Sensitivity',
    icon: TrendingUp,
    category: 'metabolism',
    complexity: 'Beginner',
    tags: ['glucose', 'insulin', 'health'],
    preview: 'Understanding how your body efficiently manages blood sugar with minimal hormonal intervention.'
  },
  {
    id: 'hyperinsulinemia',
    title: 'Compensatory Hyperinsulinemia',
    icon: Activity,
    category: 'metabolism',
    complexity: 'Intermediate',
    tags: ['insulin', 'resistance', 'diabetes'],
    preview: 'When your pancreas works overtime to overcome cellular resistance - the hidden precursor to diabetes.'
  },
  {
    id: 'physiological-adaptations',
    title: 'Physiological Adaptations',
    icon: Users,
    category: 'lifestyle',
    complexity: 'Intermediate',
    tags: ['puberty', 'pregnancy', 'athletes'],
    preview: 'How different life stages naturally modify insulin sensitivity for optimal health outcomes.'
  },
  {
    id: 'environmental-modulation',
    title: 'Environmental Modulation',
    icon: Moon,
    category: 'lifestyle',
    complexity: 'Advanced',
    tags: ['sleep', 'stress', 'circadian'],
    preview: 'The profound impact of sleep, stress, and daily rhythms on metabolic health.'
  },
  // Additional expandable topics
  {
    id: 'fat-metabolism',
    title: 'Fat Metabolism Myths',
    icon: Heart,
    category: 'nutrition',
    complexity: 'Beginner',
    tags: ['fats', 'cholesterol', 'cardiovascular'],
    preview: 'Debunking decades of fat phobia with modern evidence-based nutritional science.',
    isNew: true
  },
  {
    id: 'microbiome-glucose',
    title: 'Gut Microbiome & Glucose',
    icon: Microscope,
    category: 'metabolism',
    complexity: 'Advanced',
    tags: ['microbiome', 'fermentation', 'SCFAs'],
    preview: 'How your gut bacteria significantly influence glucose metabolism and insulin sensitivity.'
  },
  {
    id: 'circadian-metabolism',
    title: 'Circadian Metabolic Rhythms',
    icon: Clock,
    category: 'lifestyle',
    complexity: 'Intermediate',
    tags: ['circadian', 'timing', 'hormones'],
    preview: 'Why when you eat may be as important as what you eat for optimal metabolic health.'
  },
  {
    id: 'exercise-physiology',
    title: 'Exercise & Insulin Action',
    icon: Dumbbell,
    category: 'lifestyle',
    complexity: 'Intermediate',
    tags: ['exercise', 'muscle', 'adaptation'],
    preview: 'The remarkable muscle adaptations that make athletes metabolically superior.',
    isPremium: true
  },
  {
    id: 'stress-metabolism',
    title: 'Stress & Metabolic Health',
    icon: Brain,
    category: 'hormones',
    complexity: 'Beginner',
    tags: ['cortisol', 'HPA-axis', 'inflammation'],
    preview: 'How chronic stress rewires your metabolism and promotes insulin resistance.'
  },
  {
    id: 'pregnancy-metabolism',
    title: 'Pregnancy Metabolic Changes',
    icon: Baby,
    category: 'hormones',
    complexity: 'Advanced',
    tags: ['pregnancy', 'gestational', 'hormones'],
    preview: 'The sophisticated metabolic adaptations that support new life while protecting maternal health.'
  },
  {
    id: 'personalized-nutrition',
    title: 'Personalized Nutrition Science',
    icon: Target,
    category: 'nutrition',
    complexity: 'Advanced',
    tags: ['genetics', 'biomarkers', 'precision'],
    preview: 'Why one-size-fits-all diets fail and how precision nutrition is revolutionising health.',
    isNew: true
  },
  {
    id: 'metabolic-flexibility',
    title: 'Metabolic Flexibility',
    icon: Zap,
    category: 'metabolism',
    complexity: 'Intermediate',
    tags: ['flexibility', 'fuel', 'adaptation'],
    preview: 'Your body\'s ability to seamlessly switch between glucose and fat as fuel sources.'
  },
  {
    id: 'inflammatory-pathways',
    title: 'Inflammatory Pathways',
    icon: FlaskConical,
    category: 'metabolism',
    complexity: 'Advanced',
    tags: ['inflammation', 'cytokines', 'immune'],
    preview: 'How chronic low-grade inflammation disrupts insulin signaling and metabolic health.'
  },
  {
    id: 'hormonal-interactions',
    title: 'Hormonal Interactions',
    icon: BarChart,
    category: 'hormones',
    complexity: 'Advanced',
    tags: ['hormones', 'thyroid', 'growth-hormone'],
    preview: 'The complex interplay between insulin and other key metabolic hormones.'
  }
];

interface ScienceTopicExplorerProps {
  onTopicSelect: (topicId: string) => void;
  expandedTopics: string[];
}

export const ScienceTopicExplorer: React.FC<ScienceTopicExplorerProps> = ({
  onTopicSelect,
  expandedTopics
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllTopics, setShowAllTopics] = useState(false);

  const filteredTopics = allTopics.filter(topic => {
    const matchesFilter = activeFilter === 'all' || topic.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      topic.preview.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const coreTopics = filteredTopics.slice(0, 4);
  const additionalTopics = filteredTopics.slice(4);
  const displayedTopics = showAllTopics ? filteredTopics : coreTopics;

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search topics, tags, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <motion.div
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant={activeFilter === filter.id ? "default" : "secondary"}
                className={`cursor-pointer transition-all duration-200 ${
                  activeFilter === filter.id 
                    ? 'bg-primary text-primary-foreground' 
                    : filter.color
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <Filter className="w-3 h-3 mr-1" />
                {filter.label} ({filter.count})
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Search Results Summary */}
      {searchQuery && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-sm text-muted-foreground"
        >
          Found {filteredTopics.length} topics matching "{searchQuery}"
        </motion.div>
      )}

      {/* Topic Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence mode="popLayout">
          {displayedTopics.map((topic, index) => {
            const IconComponent = topic.icon;
            const isExpanded = expandedTopics.includes(topic.id);
            
            return (
              <motion.div
                key={topic.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group cursor-pointer ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
                onClick={() => onTopicSelect(topic.id)}
              >
                <div className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 ${
                  isExpanded ? 'shadow-lg border-primary/30' : ''
                }`}>
                  {/* Status Badges */}
                  <div className="absolute top-3 right-3 z-10 flex gap-1">
                    {topic.isNew && (
                      <Badge className="bg-green-500 text-white text-xs">
                        New
                      </Badge>
                    )}
                    {topic.isPremium && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                        Premium
                      </Badge>
                    )}
                  </div>

                  {/* Header */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getComplexityColor(topic.complexity)}`}
                      >
                        {topic.complexity}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topic.preview}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {topic.tags.slice(0, 3).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {topic.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          +{topic.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Expand Indicator */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-muted-foreground capitalize">
                        {topic.category}
                      </div>
                      <div className="flex items-center text-xs text-primary font-medium group-hover:gap-2 transition-all">
                        {isExpanded ? 'Collapse' : 'Explore'}
                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Search className="w-3 h-3 ml-1" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Expand/Collapse Button */}
      {!searchQuery && additionalTopics.length > 0 && (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAllTopics(!showAllTopics)}
            className="group"
          >
            <motion.div
              animate={{ rotate: showAllTopics ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="mr-2"
            >
              <Search className="w-4 h-4" />
            </motion.div>
            {showAllTopics 
              ? `Show Core Topics Only` 
              : `Explore ${additionalTopics.length} More Science Topics`
            }
          </Button>
          
          {!showAllTopics && (
            <motion.p 
              className="text-sm text-muted-foreground mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Advanced topics in nutrition, metabolism, and personalized health
            </motion.p>
          )}
        </motion.div>
      )}

      {/* No Results */}
      {filteredTopics.length === 0 && searchQuery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Search className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-medium mb-2">No topics found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or exploring different categories
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
          >
            Clear Search
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ScienceTopicExplorer;