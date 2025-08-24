import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import GlucoseCurveDemo from '@/components/GlucoseCurveDemo';
import HowItWorksSection from '@/components/HowItWorksSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <GlucoseCurveDemo />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Index;