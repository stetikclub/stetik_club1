import { useScrollReveal } from "@/hooks/useScrollReveal";

const BonusSection = () => {
  const ref = useScrollReveal();

  const bonuses = [
    {
      tag: "Bônus 01",
      title: "Acesso ao Discord exclusivo",
      desc: "Canais organizados por tema — tráfego, copy, design, branding. Troca em tempo real com quem está no jogo.",
    },
    {
      tag: "Bônus 02",
      title: "Gravações de todos os encontros",
      desc: "Perdeu uma call ao vivo? Todas ficam gravadas e organizadas para você assistir quando quiser.",
    },
    {
      tag: "Bônus 03",
      title: "Grupo VIP no WhatsApp",
      desc: "Networking direto. Compartilhamento de estratégias, oportunidades e resultados em tempo real.",
    },
    {
      tag: "Bônus 04",
      title: "Templates & frameworks",
      desc: "Modelos prontos de funis, copies, estruturas de anúncios e checklists de lançamento.",
    },
  ];

  return (
    <section className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div ref={ref} className="fade-in max-w-[680px] mx-auto">
        <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Inclusos na sua vaga</p>
        <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground mb-12" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Além dos 8 pilares,<br />você leva <em className="italic text-primary">tudo isso.</em>
        </h2>

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