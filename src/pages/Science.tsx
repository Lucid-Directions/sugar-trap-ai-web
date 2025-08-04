import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Microscope, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import QuickFactsTicker from '@/components/QuickFactsTicker';

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

      {/* Science Hub - Main Interactive Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 h-12">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="interactive">Interactive</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="myths">Myths vs Facts</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Science Topics</CardTitle>
                    <CardDescription>Explore the latest research in metabolism and nutrition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 border rounded-lg">
                        <h3 className="font-semibold mb-2">Optimal Insulin Sensitivity</h3>
                        <p className="text-sm text-muted-foreground mb-4">Understanding how your body efficiently manages blood sugar with minimal hormonal intervention.</p>
                        <Badge>Beginner</Badge>
                      </div>
                      <div className="p-6 border rounded-lg">
                        <h3 className="font-semibold mb-2">Fat Metabolism Truth</h3>
                        <p className="text-sm text-muted-foreground mb-4">Debunking decades of fat phobia with modern evidence-based nutritional science.</p>
                        <Badge>Intermediate</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interactive" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Demos</CardTitle>
                    <CardDescription>Coming soon - Interactive visualizations and simulations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                      Interactive content will be available here
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="research" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Research</CardTitle>
                    <CardDescription>Breakthrough studies reshaping our understanding</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold">No significant association between saturated fat and cardiovascular disease</h4>
                        <p className="text-sm text-muted-foreground">Meta-analysis of 78 studies involving 650,000 people</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold">Higher omega-6 intake linked to 12% lower cardiovascular mortality</h4>
                        <p className="text-sm text-muted-foreground">Global meta-analysis, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="myths" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Myths vs Facts</CardTitle>
                    <CardDescription>Debunking nutritional misinformation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-semibold text-red-700">❌ Myth</h4>
                          <p className="text-sm">All saturated fats cause heart disease</p>
                        </div>
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-semibold text-green-700">✅ Fact</h4>
                          <p className="text-sm">78 studies involving 650,000 people found no significant association between saturated fat and cardiovascular disease</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SciencePage;