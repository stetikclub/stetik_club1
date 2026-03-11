import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref1 = useScrollReveal();
  const ref3 = useScrollReveal();

  const stats = [
    { value: "+200", label: "membros ativos" },
    { value: "8", label: "pilares de crescimento" },
    { value: "52+", label: "encontros ao vivo/ano" },
  ];

  const recentMembers = [
    { time: "Hoje, 04:12", name: "Camila R.", city: "São Paulo, SP", area: "Social Media" },
    { time: "Hoje, 03:45", name: "Lucas M.", city: "Curitiba, PR", area: "Tráfego Pago" },
    { time: "Hoje, 02:30", name: "Rafael S.", city: "Rio de Janeiro, RJ", area: "Branding" },
    { time: "Hoje, 01:15", name: "Juliana P.", city: "Belo Horizonte, MG", area: "Copywriting" },
    { time: "Ontem, 23:50", name: "Thiago A.", city: "Florianópolis, SC", area: "E-commerce" },
  ];

  return (
    <section id="about" className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div className="max-w-[680px] mx-auto">
        {/* Header */}
        <div ref={ref1} className="fade-in">
          <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Quem está te guiando</p>
          <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Fellipe Fuzaro
          </h2>
          <p className="mb-8">
            <span className="text-foreground/35 tracking-[4px] uppercase text-[10px]">conhecido como </span>
            <span className="text-primary/80 font-bold text-[10px]">Fellipe The Kid</span>
          </p>
          <p className="font-body text-[13px] text-foreground/60 leading-[1.9] max-w-[560px] mb-6">
            Comecei como você: CLT no interior de SP, sem grana, sem contato, sem nome. Em 2016 entrei em uma comunidade séria e tudo mudou. Saí do emprego, conquistei liberdade financeira e hoje moro em Balneário Camboriú com tatuagem no pescoço e Ferrari na garagem.
          </p>
          <p className="font-body text-[13px] text-foreground/60 leading-[1.9] max-w-[560px] mb-10">
            Criei o Stetik Club para você não precisar passar sozinho pelo que eu passei. Aqui não tem enrolação — tem execução real e suporte direto de quem já viveu isso.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {stats.map((s) => (
              <div key={s.label} className="border border-foreground/10 p-5 text-center" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="font-display font-light text-primary leading-none mb-1.5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
                  {s.value}
                </div>
                <span className="font-body text-[9px] tracking-[2px] uppercase text-foreground/35">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Members */}
        <div ref={ref3} className="fade-in mt-20">
          <div className="flex items-center justify-between mb-6">
            <p className="text-[10px] tracking-[5px] uppercase text-primary/70 font-body">Membros recentes</p>
            <span className="font-body text-[8px] tracking-[2px] uppercase text-foreground/25 flex items-center gap-1.5">
              <span className="pulse-dot inline-block" style={{ width: 5, height: 5 }} />
              Atualizado agora
            </span>
          </div>
          <div className="border border-foreground/10 overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
            {/* Table header */}
            <div className="grid grid-cols-4 gap-2 px-4 py-2.5 border-b border-foreground/10">
              {["entrada", "nome", "cidade", "área"].map((h) => (
                <span key={h} className="font-body text-[8px] tracking-[3px] uppercase text-foreground/25">{h}</span>
              ))}
            </div>
            {/* Table rows */}
            {recentMembers.map((m, i) => (
              <div
                key={i}
                className="grid grid-cols-4 gap-2 px-4 py-3 border-b border-foreground/5 last:border-b-0 transition-colors hover:bg-foreground/[0.02]"
              >
                <span className="font-body text-[10px] text-foreground/30">{m.time}</span>
                <span className="font-body text-[10px] text-foreground/70 font-semibold">{m.name}</span>
                <span className="font-body text-[10px] text-foreground/30">{m.city}</span>
                <span className="font-body text-[10px] text-primary/60">{m.area}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-[9px] text-foreground/20 mt-3 text-center tracking-[1px]">
            Ninguém solta a mão de ninguém.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;