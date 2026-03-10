import { useScrollReveal } from "@/hooks/useScrollReveal";

const QuoteSection = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="fade-in relative z-10 overflow-hidden py-20 px-5 md:px-20 text-center border-t border-primary/10 border-b border-b-primary/10" style={{ background: "rgba(0,0,0,0.3)" }}>
      <p className="font-display font-light italic text-foreground/70 max-w-[700px] mx-auto mb-3 leading-[1.35]" style={{ fontSize: "clamp(1.4rem, 4vw, 2.4rem)", letterSpacing: "-0.5px" }}>
        "A barreira de entrada não é o <em className="not-italic font-semibold text-primary">preço.</em> É a decisão de agir."
      </p>
      <div className="text-[10px] tracking-[4px] uppercase text-foreground/25">— Stetik Club</div>
    </div>
  );
};

export default QuoteSection;
