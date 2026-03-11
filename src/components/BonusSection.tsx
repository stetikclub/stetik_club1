import { useScrollReveal } from "@/hooks/useScrollReveal";

const BonusSection = () => {
  const ref = useScrollReveal();

  const bonuses = [
    {
      tag: "Bônus 01",
      value: "R$197 grátis",
      title: "Mentoria 1:1 comigo",
      desc: "30 min personalizada pra sua situação — some com a última vaga.",
    },
    {
      tag: "Bônus 02",
      value: "R$97 grátis",
      title: "Primeira Venda em 7 Dias",
      desc: "Método simples pra quem nunca vendeu nada na vida.",
    },
    {
      tag: "Bônus 03",
      value: "R$67 grátis",
      title: "Mapa da Virada",
      desc: "Meu caminho real do zero — sem enfeite, sem mentira.",
    },
    {
      tag: "Bônus 04",
      value: "R$47 grátis",
      title: "Biblioteca de mensagens e anúncios prontos",
      desc: "Copia, adapta e usa. Sem precisar criar do zero.",
    },
    {
      tag: "Bônus 05",
      value: "R$47 grátis",
      title: "Onboarding ao Vivo exclusivo comigo",
      desc: "Primeira call com o Fellipe pra você sair do zero rápido.",
    },
    {
      tag: "Bônus 06",
      value: "R$97 grátis",
      title: "Acesso vitalício às gravações de todas as calls",
      desc: "Perdeu uma sessão? Tudo gravado e organizado pra sempre.",
    },
  ];

  return (
    <section className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div ref={ref} className="fade-in max-w-[680px] mx-auto">
        <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Inclusos na sua vaga</p>
        <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Antes de revelar o valor,<br /><em className="italic text-primary">eu quero te dar algo.</em>
        </h2>
        <p className="font-body text-[13px] text-foreground/45 leading-[1.8] mb-4">
          Eu sei como é estar no seu lugar, então criei esses bônus exclusivos pra te dar uma vantagem real.
        </p>

        <div className="border border-primary/20 px-6 py-4 mb-10 flex items-center justify-between" style={{ background: "rgba(111,181,53,0.05)" }}>
          <div>
            <div className="text-[9px] tracking-[1px] uppercase text-foreground/35 mb-1">Valor real do clube + bônus</div>
            <div className="font-display text-foreground/50 line-through" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>R$997+</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] tracking-[1px] uppercase text-primary/70 mb-1">Você leva hoje por</div>
            <div className="font-display text-primary leading-none mb-1" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>R$29</div>
            <div className="font-body text-[9px] text-foreground/35 tracking-[1px]">uma única vez · sem mensalidade</div>
          </div>
        </div>

        <p className="font-body text-[9px] tracking-[3px] uppercase text-destructive/80 mb-5">⚠️ Bônus do Lote 1 — só quem entra agora leva:</p>

        <div className="flex flex-col gap-4">
          {bonuses.map((b) => (
            <div
              key={b.tag}
              className="border border-foreground/10 p-6 transition-colors hover:border-primary/20 group flex flex-col"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-[8px] tracking-[4px] uppercase text-primary/50">{b.tag}</span>
                <span className="text-primary font-bold text-[9px]">{b.value}</span>
              </div>
              <h3 className="font-display font-light text-foreground/90 text-[18px] mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
              <p className="font-body text-[12px] text-foreground/40 leading-[1.7]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;