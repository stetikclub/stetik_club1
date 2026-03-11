import FomoBar from "@/components/FomoBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import ForWhoSection from "@/components/ForWhoSection";
import MatrixSection from "@/components/MatrixSection";
import BonusSection from "@/components/BonusSection";
import InvestmentSection from "@/components/InvestmentSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import SiteFooter from "@/components/SiteFooter";
import ThreeBackground from "@/components/ThreeBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ToastNotification from "@/components/ToastNotification";
import TestimonialsSection from "@/components/TestimonialsSection";
import LossCalculator from "@/components/LossCalculator";
import LifeVisionSection from "@/components/LifeVisionSection";
import VsSection from "@/components/VsSection";
import MicroCommitSection from "@/components/MicroCommitSection";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <ThreeBackground />
      <div className="grain-overlay" />
      <div className="vignette-overlay" />
      <FomoBar />
      <HeroSection />
      <MatrixSection />
      <LossCalculator />
      <AboutSection />
      <PillarsSection />
      <ForWhoSection />
      <VsSection />
      <MicroCommitSection />
      <BonusSection />
      <TestimonialsSection />
      <LifeVisionSection />
      <InvestmentSection />
      <GuaranteeSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
      <ToastNotification />
      <ScrollProgress />
    </>
  );
};

export default Index;