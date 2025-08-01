import { motion } from 'framer-motion';
import { ArrowDown, Zap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const titleWords = [
    "See Beyond Calories.",
    "Understand Your Body's",
    "True Response to Food."
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-32 w-6 h-6 bg-primary/10 rounded-full"
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-3 h-3 bg-primary/30 rounded-full"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Main Content */}
      <div className="text-center px-4 max-w-6xl mx-auto">
        {/* Animated Title */}
        <motion.div className="mb-8">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            See Beyond <span className="text-gradient">Calories</span>
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Understand Your Body's True Response to Food
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          The revolutionary app that shows you what's really happening when you eat.
          <br />
          <span className="text-gradient font-semibold">
            Track calories, predict glucose, optimize energy.
          </span>
        </motion.p>

        {/* Feature Highlights */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Complete Nutrition Tracking</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">AI Glucose Predictions</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        >
          <Button
            size="lg"
            className="magnetic-button group relative px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-glow transform transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/waitlist">
              <span className="relative z-10">Join the Waitlist</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 rounded-lg"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5 hover:border-primary transition-all duration-300"
            onClick={() => {
              document.getElementById('how-it-works-section')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            See How It Works
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Join 10,000+ early adopters revolutionizing their nutrition
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-xs">🧬 Science-Backed</div>
            <div className="text-xs">📱 iOS & Android</div>
            <div className="text-xs">🔒 Privacy First</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          document.getElementById('problem-section')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm">Discover More</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;