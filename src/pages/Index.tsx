import FomoBar from "@/components/FomoBar";
import HeroSection from "@/components/HeroSection";
import MatrixSection from "@/components/MatrixSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import ForWhoSection from "@/components/ForWhoSection";
import BonusSection from "@/components/BonusSection";
import QuoteSection from "@/components/QuoteSection";
import InvestmentSection from "@/components/InvestmentSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
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
      <MatrixSection />
      <AboutSection />
      <PillarsSection />
      <ForWhoSection />
      <BonusSection />
      <QuoteSection />
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