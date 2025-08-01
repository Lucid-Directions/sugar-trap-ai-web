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
      title: "Exclusive Early Access",
      description: "Be among the first to use SugarTrap AI when we launch"
    },
    {
      icon: CheckCircle,
      title: "50% Off Launch Discount",
      description: "Lock in half-price on Pro or Max plans for your first year"
    },
    {
      icon: BookOpen,
      title: "Free Educational Content",
      description: "Weekly emails with the latest nutrition science and tips"
    },
    {
      icon: Crown,
      title: "Founding Member Status",
      description: "Shape the app's development with your feedback"
    }
  ];

  const discoveries = [
    "Why your 'healthy' breakfast might be sabotaging your day",
    "The simple food swaps that stabilize energy",
    "How meal timing and order affect your metabolism", 
    "The truth about carbs, fats, and protein combinations"
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
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Be Part of the 
              <span className="text-gradient block">Nutrition Revolution</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The future of food tracking is almost here. Join thousands who are ready to see beyond calories 
              and understand their body's true response to food.
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
              <div className="gradient-card rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                    <span className="text-2xl font-bold">Join 10,000+ Early Adopters</span>
                  </div>
                  <p className="text-muted-foreground">
                    Be the first to experience revolutionary glucose insights
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-14 text-lg rounded-xl border-2 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg magnetic-button shadow-lg hover:shadow-glow"
                  >
                    Secure Your Spot - 50% Off at Launch
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  We respect your privacy. Unsubscribe anytime. No spam, just science.
                </p>
              </div>
            ) : (
              <motion.div
                className="gradient-card rounded-3xl p-8 md:p-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>
                
                <h2 className="text-3xl font-bold mb-4">Welcome to the Future!</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  You're now part of an exclusive group revolutionizing nutrition science.
                </p>
                <p className="text-muted-foreground">
                  Check your email for confirmation and your first dose of glucose insights!
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-gradient">Join the Waitlist?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
            <div className="gradient-card rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                What You'll <span className="text-gradient">Discover</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
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
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2, duration: 0.6 }}
              >
                <p className="text-xl text-muted-foreground">
                  Plus exclusive research, case studies, and early access to our revolutionary AI predictions.
                </p>
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
            <h2 className="text-4xl font-bold mb-12">
              Join Our Growing <span className="text-gradient">Community</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Early Adopters</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Represented</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
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
              className="gradient-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't Miss the <span className="text-gradient">Revolution</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Spots are limited for our launch cohort. Secure your place in nutrition history.
              </p>
              
              <Button
                size="lg"
                className="magnetic-button shadow-lg hover:shadow-glow"
                onClick={() => document.querySelector('input[type="email"]')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Now - Limited Spots Available
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default WaitlistPage;