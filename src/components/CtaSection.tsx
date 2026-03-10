import { useScrollReveal } from "@/hooks/useScrollReveal";

const CtaSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="cta-sec" className="relative z-10 sec-border py-[160px] px-5 text-center">
      <div className="divline" />
      <div ref={ref} className="fade-in max-w-[700px] mx-auto relative z-[1]">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-4 py-1.5 mb-8 text-[10px] tracking-[2px] uppercase text-primary font-body">
          <span className="pulse-dot" style={{ width: 6, height: 6 }} />
          Apenas <b className="text-foreground">7 vagas</b> restantes
        </div>

        <h2 className="font-display font-light leading-[0.88] text-foreground" style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)", letterSpacing: "-2px" }}>
          <span className="block text-foreground/25 mb-1">A porta está aberta.</span>
          <em className="block italic text-primary mb-8">Mas não por muito tempo.</em>
        </h2>

        <p className="font-body text-[12px] text-foreground/40 max-w-[400px] mx-auto mb-10 leading-[1.85]">
          Cada semana que passa sem executar é uma semana que você entrega de vantagem para quem já está dentro.
        </p>

        <a href="#investment" className="inline-flex items-center justify-center gap-3.5 bg-primary-mid text-foreground border border-primary font-body font-bold text-[11px] tracking-[5px] uppercase px-14 py-5 no-underline transition-all hover:bg-primary hover:scale-[1.015] active:scale-[0.97]">
          Entrar no Stetik Club
        </a>

        {/* Trust badges */}
        <div className="mt-7 flex items-center justify-center gap-4 flex-wrap">
          {["Sem fidelidade", "Acesso imediato", "Vagas limitadas"].map((item) => (
            <span key={item} className="font-body text-[9px] tracking-[2px] uppercase text-foreground/20 flex items-center gap-1.5">
              <span className="text-primary">✓</span>{item}
            </span>
          ))}
        </div>

        {/* Estratégia · Execução · Resultado */}
        <div className="mt-[60px] flex items-center justify-center gap-5 font-body text-[9px] tracking-[4px] uppercase text-foreground/10">
          <span>Estratégia</span>
          <span className="w-1 h-1 rounded-full bg-primary/25" />
          <span>Execução</span>
          <span className="w-1 h-1 rounded-full bg-primary/25" />
          <span>Resultado</span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
