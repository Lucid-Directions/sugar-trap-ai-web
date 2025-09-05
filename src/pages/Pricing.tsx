import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Check, Star, Zap, BarChart3, Brain, Heart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PricingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = "Pricing - Affordable Glucose Monitoring | SugarTrap AI";
  }, []);

  const handlePlanClick = (planName: string) => {
    setSelectedPlan(planName);
  };

  const plans = [
    {
      name: "7-Day Trial",
      price: "Free",
      period: "7 days",
      description: "Experience all Pro features risk-free",
      icon: BarChart3,
      color: "from-emerald-500 to-emerald-600",
      popular: false,
      features: [
        "Full Pro access for 7 days",
        "Unlimited meal logging",
        "AI Glucose Predictions for every meal",
        "Personalised meal optimisation tips",
        "Weekly trends and patterns",
        "Detailed progress tracking",
        "Export your data",
        "Priority support",
        "Auto-upgrades to Pro after trial"
      ],
      limitations: [],
      cta: "Start 7-Day Trial",
      ctaVariant: "outline" as const
    },
    {
      name: "Pro",
      price: "£9.99",
      period: "/month",
      description: "Most Popular - Unlock the Power of Glucose Insights",
      icon: Zap,
      color: "from-primary to-primary-glow",
      popular: true,
      features: [
        "Unlimited meal logging",
        "AI Glucose Predictions for every meal",
        "Personalised meal optimisation tips",
        "Weekly trends and patterns",
        "Detailed progress tracking",
        "Export your data",
        "Priority support"
      ],
      limitations: [],
      cta: "Start 7-Day Free Trial",
      ctaVariant: "default" as const
    },
    {
      name: "Max",
      price: "£18.99", 
      period: "/month",
      description: "For the ultimate optimisation",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      popular: false,
      features: [
        "Everything in Pro, plus:",
        "CGM Integration (connect your own device)",
        "Compare predictions to actual glucose data",
        "Advanced analytics dashboard",
        "Healthcare provider reports",
        "Meal timing recommendations",
        "1-on-1 onboarding session",
        "White-glove support"
      ],
      limitations: [],
      cta: "Start 7-Day Free Trial",
      ctaVariant: "outline" as const
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Better Health Outcomes",
      description: "Understand your body's response to optimise long-term wellness"
    },
    {
      icon: TrendingUp,
      title: "Sustainable Results", 
      description: "No more crash diets or unsustainable restrictions"
    },
    {
      icon: Brain,
      title: "Enhanced Performance",
      description: "Stable energy levels and improved cognitive function"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Simple, Transparent 
              <span className="text-gradient block">Pricing</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Start with familiar tracking, then unlock revolutionary glucose insights when you're ready.
              <strong className="text-foreground"> Every journey begins somewhere.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                ref={ref}
                className={`relative rounded-3xl p-4 md:p-6 lg:p-8 cursor-pointer h-full flex flex-col transition-all duration-300 ${
                  selectedPlan === plan.name 
                    ? 'bg-primary/10 border-4 border-primary transform scale-105 shadow-xl' 
                    : 'gradient-card hover:scale-102'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                onClick={() => handlePlanClick(plan.name)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="bg-gradient-to-r from-primary to-primary-glow text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Star className="w-4 h-4 inline mr-2" />
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6 md:mb-8">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4`}
                    animate={selectedPlan === plan.name ? {
                      rotate: [0, -10, 10, -10, 10, 0],
                      scale: [1, 1.1, 1.2, 1.1, 1]
                    } : {}}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm md:text-base">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base">{plan.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className={`text-sm ${feature.includes('Everything in') ? 'font-semibold' : ''}`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.ctaVariant}
                  size="lg"
                  className={`w-full ${plan.popular ? 'magnetic-button shadow-lg hover:shadow-glow' : ''}`}
                  asChild
                >
                  <Link to="/waitlist">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Invest in <span className="text-gradient">Your Health?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding your glucose response isn't just about nutrition, it's about 
              optimising every aspect of your health and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="gradient-card rounded-2xl p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently <span className="text-gradient">Asked Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "How accurate are the glucose predictions?",
                  answer: "Our AI model is trained on thousands of meal-glucose response pairs and achieves 85-90% accuracy for most users. Accuracy improves over time as the system learns your individual patterns."
                },
                {
                  question: "Do I need a continuous glucose monitor?",
                  answer: "No! The 7-Day Trial and Pro plans work entirely through photo-based food logging. Only the Max plan offers optional CGM integration for users who already have devices."
                },
                {
                  question: "Can I cancel anytime?",
                  answer: "Absolutely. All paid plans can be cancelled at any time with no cancellation fees. You can cancel your trial before it ends to avoid being charged for Pro."
                },
                {
                  question: "How is this different from other nutrition apps?",
                  answer: "Most apps only track calories and macros. SugarTrap AI is the first to predict your personal glucose response, giving you insights into how food actually affects your energy and health."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  className="gradient-card rounded-xl p-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 1.6, duration: 0.6 }}
                >
                  <h3 className="font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="gradient-card rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Nutrition?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands who are revolutionising their health with science-backed glucose insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="magnetic-button shadow-lg hover:shadow-glow" asChild>
                <Link to="/waitlist">Join the Waitlist - 50% Off at Launch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/science">Learn the Science</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              No commitment required. Join the waitlist to secure early access and exclusive pricing.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricingPage;