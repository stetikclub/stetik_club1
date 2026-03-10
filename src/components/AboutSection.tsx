import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();

  const highlights = [
    { num: "01", title: "Não é um curso", desc: "É um ecossistema de pessoas que constroem projetos digitais reais, com estratégia e direção." },
    { num: "02", title: "É sobre resultados", desc: "Evolução medida em faturamento e marcas construídas — não em horas assistidas." },
    { num: "03", title: "Networking real", desc: "Você cercado de pessoas no mesmo caminho, trocando e crescendo juntas." },
  ];

  const stats = [
    { value: "+500", label: "membros ativos" },
    { value: "8", label: "pilares de crescimento" },
    { value: "52+", label: "encontros ao vivo/ano" },
  ];

  const topicGroups = [
    { cat: "Tráfego & Aquisição", items: ["Tráfego pago", "Tráfego orgânico", "SEO", "Disparo de mensagens", "E-mail marketing", "Meta Ads", "Google Ads", "Estrutura de anúncios"] },
    { cat: "Monetização & Negócio", items: ["Afiliados", "PLR", "Low ticket", "High ticket", "SaaS", "Vibe Code", "Amazon FBA", "E-commerce", "iGaming", "Apostas esportivas", "Mercado de games", "Prestação de serviços", "Infoprodutos", "Packs", "Quiz"] },
    { cat: "Produto & Oferta", items: ["Modelagem de oferta", "Clonagem de estruturas", "Mineração de ofertas", "Funil de vendas", "Site próprio", "Desenvolvimento de páginas", "X1 WhatsApp"] },
    { cat: "Copy & Persuasão", items: ["Copywriting", "Gatilhos mentais", "Storytelling", "Criativos"] },
    { cat: "Criação & Design", items: ["Design", "Edição de vídeo", "Motion"] },
    { cat: "Automação & Tech", items: ["Automação", "Ferramentas de IA", "Ferramentas gratuitas", "Chatbots", "CRM", "N8N", "Rateios"] },
    { cat: "Marca & Posicionamento", items: ["Branding pessoal", "Construção de marca", "Autoridade", "Conteúdo"] },
    { cat: "Mentalidade", items: ["Mindset empreendedor", "Produtividade", "Gestão de tempo", "Autodesenvolvimento"] },
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
          <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Sobre o Clube</p>
          <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Um ambiente para<br /><em className="italic text-primary">quem constrói.</em>
          </h2>
          <p className="font-body text-[13px] text-foreground/50 leading-[1.8] max-w-[520px] mb-10">
            Um clube onde a gente compartilha <b className="text-foreground/80">cada detalhe</b> do que estamos fazendo para crescer no digital. Aqui, ninguém fica sozinho.
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

          {/* Highlights */}
          <div className="flex flex-col gap-9">
            {highlights.map((h) => (
              <div key={h.num} className="flex gap-6">
                <span className="font-mono text-[10px] text-foreground/15 mt-0.5 shrink-0">{h.num}</span>
                <div>
                  <div className="text-[12px] font-bold text-foreground/90 tracking-[0.5px] mb-1.5">{h.title}</div>
                  <p className="text-[13px] text-foreground/50 leading-[1.7] font-normal">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topics by Category */}
        <div ref={ref2} className="fade-in mt-20">
          <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-8 font-body">O que discutimos no clube</p>
          <div className="flex flex-col gap-6">
            {topicGroups.map((g) => (
              <div key={g.cat}>
                <p className="font-body text-[9px] tracking-[3px] uppercase text-foreground/25 mb-2.5">{g.cat}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="font-body text-[9px] tracking-[1px] uppercase text-foreground/45 border border-foreground/8 px-3 py-1.5 transition-colors hover:border-primary/25 hover:text-primary/60"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
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