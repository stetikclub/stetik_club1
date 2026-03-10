import heroImg from "@/assets/hero-fellipe.jpeg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-stretch overflow-hidden pt-10">
      {/* Full-bleed photo */}
      <div className="absolute inset-0 z-[1]">
        <img src={heroImg} alt="Fellipe The Kid" className="w-full h-full object-cover" style={{ filter: "brightness(0.55) saturate(1.15)" }} />
        {/* Overlay left fade */}
        <div className="absolute inset-0 z-[2]" style={{
          background: "linear-gradient(to right, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.7) 45%, rgba(5,5,5,0.1) 100%), linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 40%)"
        }} />
        {/* Green bloom */}
        <div className="absolute inset-0 z-[3]" style={{
          background: "radial-gradient(ellipse 60% 80% at 75% 45%, rgba(111,181,53,0.13) 0%, transparent 70%)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[680px] px-5 md:px-[100px] py-[120px] flex flex-col items-start justify-center">
        {/* Creator tag */}
        <div className="flex items-center gap-2.5 mb-7 text-[10px] tracking-[5px] uppercase text-foreground/35 hero-fade-up">
          <span className="w-9 h-px bg-primary block" />
          Fellipe The Kid &nbsp;·&nbsp; <b className="text-primary/70">Stetik Club©</b>
        </div>

        {/* Headline */}
        <h1 className="font-display text-foreground font-light leading-[0.87] mb-0 hero-fade-up" style={{
          fontSize: "clamp(52px, 8vw, 104px)",
          letterSpacing: "-4px",
          animationDelay: "0.2s"
        }}>
          Comunidade de<br />
          <em className="italic text-primary">execução</em><br />
          <strong className="font-semibold block">digital.</strong>
        </h1>

        {/* Sub */}
        <p className="text-[13px] leading-[1.75] text-foreground/75 max-w-[440px] mt-6 mb-8 tracking-[0.2px] hero-fade-up" style={{ animationDelay: "0.38s" }}>
          Não é sobre <b className="text-foreground/95">assistir.</b> É sobre <b className="text-foreground/95">executar.</b><br />
          Comunidade fechada para quem quer dominar o digital — aquisição, monetização e construção de marca de verdade.
        </p>

        {/* Stats */}
        <div className="flex gap-8 mb-9 hero-fade-up" style={{ animationDelay: "0.52s" }}>
          <div>
            <div className="font-display text-foreground font-light leading-none" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}>
              R$<span className="text-primary">29</span>
            </div>
            <div className="text-[9px] tracking-[3px] uppercase text-foreground/35 mt-1">por mês</div>
          </div>
          <div className="w-px bg-foreground/10" />
          <div>
            <div className="font-display text-foreground font-light leading-none" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}>
              100<span className="text-primary">%</span>
            </div>
            <div className="text-[9px] tracking-[3px] uppercase text-foreground/35 mt-1">digital</div>
          </div>
          <div className="w-px bg-foreground/10" />
          <div>
            <div className="font-display text-foreground font-light leading-none" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}>
              <span className="text-primary">∞</span>
            </div>
            <div className="text-[9px] tracking-[3px] uppercase text-foreground/35 mt-1">crescimento</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-5 hero-fade-up" style={{ animationDelay: "0.62s" }}>
          <a href="#investment" className="inline-flex items-center justify-center gap-2.5 bg-primary-mid text-foreground border border-primary font-body font-bold text-[11px] tracking-[5px] uppercase px-[52px] py-[18px] no-underline transition-all hover:bg-primary hover:scale-[1.015] active:scale-[0.97]">
            Quero fazer parte
          </a>
          <a href="#about" className="inline-flex items-center gap-2 border border-primary/30 px-[34px] py-[13px] text-[10px] tracking-[4px] uppercase text-primary no-underline transition-colors hover:border-primary hover:text-foreground">
            Conhecer mais ↓
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 mt-2 hero-fade-up" style={{ animationDelay: "0.75s" }}>
          <div className="flex">
            {["M", "R", "L", "K", "+"].map((letter, i) => (
              <div key={i} className="w-[26px] h-[26px] rounded-full border-[1.5px] border-background flex items-center justify-center text-[8px] font-bold text-foreground" style={{
                background: "linear-gradient(135deg, #2a5510, #6fb535)",
                marginLeft: i > 0 ? "-7px" : 0,
              }}>
                {letter}
              </div>
            ))}
          </div>
          <span className="text-[10px] text-foreground/40 tracking-[0.5px]">
            <b className="text-primary">+200 membros</b> já construindo dentro
          </span>
        </div>

        {/* Vagas pill */}
        <div className="mt-5 inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-[18px] py-[7px] text-[9px] tracking-[3px] uppercase text-primary hero-fade-up" style={{ animationDelay: "0.85s" }}>
          <span className="pulse-dot" style={{ width: 6, height: 6 }} />
          Apenas <b className="text-foreground">7 vagas</b> restantes
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <div className="w-px h-11 scroll-line-anim" style={{ background: "linear-gradient(to bottom, hsl(98 55% 42%), transparent)" }} />
      </div>
    </section>
  );
};

export default HeroSection;
