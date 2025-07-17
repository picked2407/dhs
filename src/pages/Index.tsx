import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import { WhatsAppContactDialog } from "@/components/WhatsAppContactDialog";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);

  useEffect(() => {
    const submitted = searchParams.get('submitted');
    if (submitted === 'true') {
      setShowWhatsAppDialog(true);
      // Clean up URL parameter
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValuePropositions />
      <LifestyleSection />
      <StatsSection />
      <WhyFansLinkSection />
      <PromiseSection />
      <FeaturesSection />
      <ExclusiveBenefitsSection />
      <HowItWorksSection />
      <FoundersSection />
      <Footer />
      
      <WhatsAppContactDialog 
        open={showWhatsAppDialog} 
        onOpenChange={setShowWhatsAppDialog} 
      />
    </div>
  );
};

export default Index;
