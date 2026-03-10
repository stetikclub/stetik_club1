import { useScrollReveal } from "@/hooks/useScrollReveal";

const GuaranteeSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative z-10 sec-border py-[100px] px-5">
      <div className="divline" />
      <div ref={ref} className="fade-in max-w-[680px] mx-auto text-center">
        <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Garantia incondicional</p>
        <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
          7 dias para decidir.<br /><em className="italic text-primary">Risco zero.</em>
        </h2>
        <div className="border border-foreground/10 p-8 mx-auto max-w-[520px]" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="w-14 h-14 mx-auto mb-5 border border-primary/30 flex items-center justify-center">
            <span className="font-display text-primary text-[24px] font-light">7d</span>
          </div>
          <p className="font-body text-[13px] text-foreground/60 leading-[1.8] mb-5">
            Entre no Stetik Club, acesse tudo — encontros ao vivo, comunidade, estratégias. 
            Se em <b className="text-foreground/90">7 dias</b> decidir que não é pra você, devolvemos <b className="text-foreground/90">100% do valor</b>.
          </p>
          <div className="flex items-center justify-center gap-6">
            <span className="font-body text-[9px] tracking-[2px] uppercase text-foreground/30 flex items-center gap-1.5">
              <span className="text-primary font-bold">✓</span> Sem perguntas
            </span>
            <span className="font-body text-[9px] tracking-[2px] uppercase text-foreground/30 flex items-center gap-1.5">
              <span className="text-primary font-bold">✓</span> Reembolso imediato
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;