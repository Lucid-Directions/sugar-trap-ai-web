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
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Insulin Sensitivity Simulator</CardTitle>
                      <CardDescription>See how insulin sensitivity affects glucose curves in real-time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-sm font-medium">Insulin Sensitivity Level</div>
                        <Slider defaultValue={[75]} max={100} step={5} className="w-full" />
                        <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                          <div className="text-center text-muted-foreground">
                            <Microscope className="w-8 h-8 mx-auto mb-2" />
                            Interactive glucose curve demo
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Circadian Metabolism Clock</CardTitle>
                      <CardDescription>Explore how metabolism changes throughout a 24-hour cycle</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-sm font-medium">Time of Day</div>
                        <Slider defaultValue={[8]} max={24} step={1} className="w-full" />
                        <div className="h-32 bg-muted/20 rounded-lg flex items-center justify-center">
                          <div className="text-center text-muted-foreground">
                            <Badge className="w-8 h-8 mx-auto mb-2" />
                            24-hour metabolism visualization
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="research" className="space-y-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Latest Research Findings</CardTitle>
                      <CardDescription>Breakthrough studies reshaping our understanding of metabolism and nutrition</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="border-l-4 border-red-500 pl-6">
                          <h4 className="font-semibold text-lg mb-2">The Glucose Paradox</h4>
                          <p className="text-sm text-muted-foreground mb-2">Frontiers in Cardiovascular Medicine, 2020</p>
                          <p className="text-sm">27% increased CVD risk from glucose spikes, even in non-diabetics</p>
                        </div>
                        
                        <div className="border-l-4 border-emerald-500 pl-6">
                          <h4 className="font-semibold text-lg mb-2">Gut Microbiome Carbohydrate Metabolism</h4>
                          <p className="text-sm text-muted-foreground mb-2">Nature, 2023</p>
                          <p className="text-sm">Microbiome contributes up to 10% of host energy extraction</p>
                        </div>
                        
                        <div className="border-l-4 border-blue-500 pl-6">
                          <h4 className="font-semibold text-lg mb-2">Circadian Metabolic Disruption</h4>
                          <p className="text-sm text-muted-foreground mb-2">Diabetologia, 2020</p>
                          <p className="text-sm">69% of population experiences social jet lag affecting metabolism</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="myths" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fat Myths vs Scientific Facts</CardTitle>
                    <CardDescription>Debunking decades of nutritional misinformation with modern evidence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">❌ Myth</h4>
                          <p className="text-sm">All saturated fats cause heart disease</p>
                        </div>
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2">✅ Scientific Fact</h4>
                          <p className="text-sm">78 studies involving 650,000 people found no significant association between saturated fat and cardiovascular disease</p>
                          <p className="text-xs text-green-600 mt-2"><strong>Evidence:</strong> Meta-analysis by Chowdhury et al., 2014</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">❌ Myth</h4>
                          <p className="text-sm">Dietary cholesterol directly raises blood cholesterol</p>
                        </div>
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2">✅ Scientific Fact</h4>
                          <p className="text-sm">Only 15% of blood cholesterol comes from diet; 85% is produced by the liver</p>
                          <p className="text-xs text-green-600 mt-2"><strong>Evidence:</strong> US Dietary Guidelines removed cholesterol limits in 2015</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">❌ Myth</h4>
                          <p className="text-sm">Omega-6 fats are always inflammatory</p>
                        </div>
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2">✅ Scientific Fact</h4>
                          <p className="text-sm">Higher omega-6 intake linked to 12% lower cardiovascular mortality in recent studies</p>
                          <p className="text-xs text-green-600 mt-2"><strong>Evidence:</strong> Global meta-analysis, Sadeghi et al., 2025</p>
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