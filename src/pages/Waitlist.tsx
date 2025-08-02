import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, CheckCircle, Users, Gift, BookOpen, Crown, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';

const WaitlistPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      icon: Gift,
      title: "Pioneer Access",
      description: "First to experience AI-powered metabolic insights before anyone else"
    },
    {
      icon: CheckCircle,
      title: "50% Launch Savings",
      description: "Lock in founding member pricing on all premium features"
    },
    {
      icon: BookOpen,
      title: "Metabolic Mastery",
      description: "Weekly science-backed insights to optimize your energy and health"
    },
    {
      icon: Crown,
      title: "Shape the Future",
      description: "Your feedback helps create the ultimate metabolic optimization tool"
    }
  ];

  const discoveries = [
    "Why your glucose response is as unique as your fingerprint and what that means for your health",
    "How food sequence can reduce glucose spikes by 70% using the same ingredients",
    "The hidden metabolic cost of stress, sleep, and exercise on your daily energy",
    "Why stable blood sugar is the key to sustained energy, better mood, and long-term wellness"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Body's Hidden Language
              <span className="text-gradient block">Is About to Be Revealed</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Every meal you eat sends a unique signal through your bloodstream, a metabolic fingerprint as individual as you are. 
              For the first time in history, AI can decode this hidden language and show you exactly how to optimize your energy, 
              mood, and long-term health. The future of personalized nutrition isn't coming, it's here.
            </p>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {!isSubmitted ? (
              <div className="gradient-card rounded-3xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-lg md:text-xl font-bold">Join 12,000+ Metabolic Pioneers</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Be among the first to unlock your personal glucose code
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 text-base rounded-xl border-2 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 text-base magnetic-button shadow-lg hover:shadow-glow"
                  >
                    Unlock Your Metabolic Code - 50% Off
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  We respect your privacy. Unsubscribe anytime. No spam, just science.
                </p>
              </div>
            ) : (
              <motion.div
                className="gradient-card rounded-3xl p-6 md:p-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </motion.div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Welcome to Your Metabolic Future!</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  You're now part of an exclusive group pioneering personalized nutrition science.
                </p>
                <p className="text-sm text-muted-foreground">
                  Check your email for confirmation and your first metabolic insights!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Your <span className="text-gradient">Metabolic Health</span> Matters
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Stable glucose isn't just for diabetics, it's the foundation of sustained energy, clear thinking, 
              mood stability, and long-term wellness for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="gradient-card rounded-2xl p-6 text-center hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <benefit.icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Discover */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="gradient-card rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                The Science You'll <span className="text-gradient">Master</span>
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                Beyond calories lies a hidden world of metabolic optimization. Discover the science that elite athletes, 
                biohackers, and longevity researchers have been using, now accessible to everyone.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {discoveries.map((discovery, index) => (
                  <motion.div
                    key={discovery}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 1.4, duration: 0.6 }}
                  >
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-lg">{discovery}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2, duration: 0.6 }}
              >
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 md:p-6">
                  <p className="text-base md:text-lg font-medium text-foreground mb-2">
                    The Future of Metabolic Health
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Join the pioneers transforming how we understand food, energy, and optimal human performance. 
                    Your metabolic journey starts with your first meal.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Join the <span className="text-gradient">Metabolic Revolution</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12,000+</div>
                <div className="text-sm md:text-base text-muted-foreground">Health Optimizers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">70%</div>
                <div className="text-sm md:text-base text-muted-foreground">Report Better Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm md:text-base text-muted-foreground">Countries Represented</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-6">
              <p className="text-muted-foreground">Follow our journey:</p>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover-scale"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white hover-scale"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white hover-scale"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      {!isSubmitted && (
        <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              className="gradient-card rounded-3xl p-6 md:p-8 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Your Metabolic <span className="text-gradient">Awakening</span> Awaits
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Every day you wait is another day your body's signals go unheard. Join the pioneers who are 
                rewriting the rules of nutrition and unlocking their metabolic potential.
              </p>
              
              <Button
                size="lg"
                className="magnetic-button shadow-lg hover:shadow-glow text-sm md:text-base px-6 py-3"
                onClick={() => document.querySelector('input[type="email"]')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Transformation - Join Now
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default WaitlistPage;