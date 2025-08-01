import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, BarChart3, Brain, Lightbulb, Zap, Smartphone } from 'lucide-react';

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    {
      icon: Camera,
      title: "Snap Any Meal",
      description: "Take a photo or scan a barcode. Our AI instantly identifies ingredients and portions with remarkable accuracy.",
      features: ["Photo recognition", "Barcode scanning", "Portion estimation"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Get Full Analysis",
      description: "Receive complete nutritional breakdown including calories, macros, and micronutrients for traditional tracking.",
      features: ["Calorie counting", "Macro tracking", "Micronutrient analysis"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "AI Glucose Prediction",
      description: "See your predicted blood sugar response curve and understand exactly how this meal will affect your energy.",
      features: ["Glucose prediction", "Energy forecasting", "Personalized insights"],
      color: "from-purple-500 to-purple-600",
      premium: true
    },
    {
      icon: Lightbulb,
      title: "Optimize & Learn",
      description: "Get science-backed suggestions to optimize any meal for stable, lasting energy and better health outcomes.",
      features: ["Meal optimization", "Personalized tips", "Long-term patterns"],
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Complete 
            <span className="text-gradient"> Nutrition Companion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Start with familiar calorie tracking, then unlock revolutionary glucose insights 
            when you're ready to optimize your health.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="gradient-card rounded-3xl p-8 hover-lift">
                {/* Step Number */}
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <step.icon className="w-8 h-8" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    {step.premium && (
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                        PRO
                      </div>
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent lg:hidden"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Phone Mockup Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="gradient-card rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  One App,
                  <span className="text-gradient block">Every Health Journey</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">For Calorie Counters</h4>
                      <p className="text-muted-foreground text-sm">Everything you already track, plus insights you've never seen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">For Athletes</h4>
                      <p className="text-muted-foreground text-sm">Optimize energy without the crash</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">For Parents</h4>
                      <p className="text-muted-foreground text-sm">Understand what breakfast really does to your kids' focus</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative">
                <motion.div
                  className="relative mx-auto w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="p-6 space-y-4">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-600">SugarTrap AI</div>
                      </div>
                      
                      {/* Mock Food Item */}
                      <div className="bg-green-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            🥑
                          </div>
                          <div>
                            <div className="font-semibold">Avocado Toast</div>
                            <div className="text-sm text-gray-500">2 slices</div>
                          </div>
                        </div>
                        
                        {/* Glucose Prediction */}
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-2">Predicted Glucose Response</div>
                          <svg viewBox="0 0 100 30" className="w-full h-8">
                            <motion.path
                              d="M 5,25 Q 25,15 50,18 Q 75,20 95,22"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                          </svg>
                          <div className="text-xs text-green-600 font-medium mt-1">Stable Energy Profile</div>
                        </div>
                      </div>

                      {/* Mock Stats */}
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold">340</div>
                          <div className="text-xs text-gray-500">Calories</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-green-600">+15</div>
                          <div className="text-xs text-gray-500">Peak (mg/dL)</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold">4h</div>
                          <div className="text-xs text-gray-500">Sustained</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-40"
                  animate={{ scale: [1, 1.3, 1], y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;