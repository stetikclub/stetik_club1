import FomoBar from "@/components/FomoBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import DynamicSection from "@/components/DynamicSection";
import ForWhoSection from "@/components/ForWhoSection";
import MatrixSection from "@/components/MatrixSection";
import BonusSection from "@/components/BonusSection";
import InvestmentSection from "@/components/InvestmentSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import QuoteSection from "@/components/QuoteSection";
import CtaSection from "@/components/CtaSection";
import SiteFooter from "@/components/SiteFooter";
import ThreeBackground from "@/components/ThreeBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ToastNotification from "@/components/ToastNotification";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <ThreeBackground />
      <div className="grain-overlay" />
      <div className="vignette-overlay" />
      <FomoBar />
      <HeroSection />
      <QuoteSection />
      <AboutSection />
      <PillarsSection />
      <DynamicSection />
      <MatrixSection />
      <ForWhoSection />
      <BonusSection />
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