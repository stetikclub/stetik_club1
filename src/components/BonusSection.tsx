import { useScrollReveal } from "@/hooks/useScrollReveal";

const BonusSection = () => {
  const ref = useScrollReveal();

  const bonuses = [
    {
      tag: "Bônus 01",
      title: "Mentoria 1:1 comigo",
      desc: "30 min personalizada pra sua situação — R$197 grátis (some com a última vaga)",
    },
    {
      tag: "Bônus 02",
      title: "Primeira Venda em 7 Dias",
      desc: "Método simples pra quem nunca vendeu — R$97 grátis",
    },
    {
      tag: "Bônus 03",
      title: "Mapa da Virada",
      desc: "Meu caminho real do zero — R$67 grátis",
    },
    {
      tag: "Bônus 04",
      title: "Biblioteca de mensagens e anúncios prontos",
      desc: "R$47 grátis",
    },
    {
      tag: "Bônus 05",
      title: "Onboarding ao Vivo exclusivo comigo",
      desc: "R$47 grátis",
    },
    {
      tag: "Bônus 06",
      title: "Acesso vitalício às gravações de todas as calls",
      desc: "R$97 grátis",
    },
  ];

  return (
    <section className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div ref={ref} className="fade-in max-w-[680px] mx-auto">
        <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Inclusos na sua vaga</p>
        <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Antes de revelar o valor,<br />eu quero te dar <em className="italic text-primary">algo.</em>
        </h2>
        <p className="font-body text-[13px] text-foreground/70 leading-[1.8] mb-10">
          Eu sei como é estar no seu lugar, então criei esses bônus exclusivos pra te dar uma vantagem real.
          <br /><br />
          Valor real do clube + bônus: <span className="line-through text-foreground/40">R$997+</span>
          <br />
          <strong className="text-primary">Você leva hoje por apenas R$29 uma única vez (sem mensalidade).</strong>
        </p>

        <p className="text-[10px] tracking-[3px] uppercase text-foreground/50 mb-6 font-body">Bônus do Lote 1 (só quem entra agora leva):</p>

        <div className="flex flex-col gap-4">
          {bonuses.map((b) => (
            <div
              key={b.tag}
              className="border border-foreground/10 p-6 transition-colors hover:border-primary/20 group"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <span className="font-body text-[8px] tracking-[4px] uppercase text-primary/50 mb-2 block">{b.tag}</span>
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