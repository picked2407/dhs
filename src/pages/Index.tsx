import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValuePropositions from "@/components/ValuePropositions";
import LifestyleSection from "@/components/LifestyleSection";
import WhyFansLinkSection from "@/components/WhyFansLinkSection";
import PromiseSection from "@/components/PromiseSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExclusiveBenefitsSection from "@/components/ExclusiveBenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValuePropositions />
      <LifestyleSection />
      <WhyFansLinkSection />
      <PromiseSection />
      <FeaturesSection />
      <ExclusiveBenefitsSection />
      <HowItWorksSection />
      <FoundersSection />
      <Footer />
    </div>
  );
};

export default Index;
