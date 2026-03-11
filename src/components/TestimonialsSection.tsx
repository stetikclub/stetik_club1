import { useScrollReveal } from "@/hooks/useScrollReveal";

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  const gridRef = useScrollReveal();

  const testimonials = [
    {
      name: "Patrick Fav",
      before: "CLT em empresa de logística, R$2.800/mês, sem perspectiva",
      result: "R$11.268,83 em 14 dias",
      text: "A copy da VSL e da página nova explodiu minha mente.",
      highlight: true,
    },
    {
      name: "Aluno",
      before: "Assistente administrativo, achava que digital era papo de coach",
      result: "R$1.817,77 em 30 dias",
      text: "de 1k para 1817 em um mês",
      highlight: false,
    },
    {
      name: "Aluno Luan",
      before: "Nunca tinha vendido nada online na vida",
      result: "R$90,63 em 7 dias",
      text: "Mentoria foda! Muito obrigado parceiro!",
      highlight: false,
    },
    {
      name: "Isaque Bertoncello",
      before: "Desacreditado, achava que era tarde demais pra começar",
      result: "Resultado constante",
      text: "A máquina não paraaa — só não ganha quem não quer.",
      highlight: false,
    },
    {
      name: "Adriano",
      before: "CLT há 6 anos, sem tempo pra família",
      result: "Crescimento contínuo",
      text: "Obrigado por ter me apresentado essa estratégia. Agora só crescer mais.",
      highlight: false,
    },
  ];

  return (
    <section id="testimonials" className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className="fade-in text-center">
          <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Prova social real</p>
          <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Eles estavam <br /><em className="italic text-primary">exatamente onde você está.</em>
          </h2>
          <p className="font-body text-[13px] text-foreground/40 leading-[1.8] max-w-[500px] mx-auto mt-5">
            Mesma situação. Mesma dúvida. Mesma desculpa. Até o dia em que pararam de hesitar. Quanto tempo você ainda vai esperar?
          </p>
          <p className="font-body text-[9px] tracking-[2px] uppercase text-foreground/25 mt-3">
            (prints reais do grupo WhatsApp e Discord)
          </p>
        </div>

        <div ref={gridRef} className="fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-12" style={{ background: "rgba(111,181,53,0.10)" }}>
          {testimonials.map((t, i) => (
            <div key={i} className={`bg-background p-8 transition-colors hover:bg-primary/5 group ${t.highlight ? "border-l-2 border-primary" : ""}`}>
              <div className="mb-2">
                <span className="text-[8px] tracking-[3px] uppercase text-destructive/50 mr-2">ANTES:</span>
                <span className="font-body text-[10px] text-foreground/25 italic tracking-[0.5px]">{t.before}</span>
              </div>
              <div className={`font-display font-light mb-3 ${t.highlight ? "text-primary" : "text-foreground/80"}`} style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
                {t.result}
              </div>
              <p className="font-body text-[13px] text-foreground/50 leading-[1.7] mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-primary text-[10px] font-bold" style={{ background: "rgba(111,181,53,0.16)" }}>
                  {t.name.charAt(0)}
                </div>
                <span className="font-body text-[10px] tracking-[1px] text-foreground/40 uppercase">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="max-w-[1000px] mx-auto mt-8 text-center font-body text-[11px] text-foreground/25 tracking-[1px]">
          Enquanto você lê isso, alguém já está construindo o resultado que você quer.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
