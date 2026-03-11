import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  "Acorda no horário que te mandam.",
  "Trabalha pra enriquecer outro.",
  "Pede permissão pra ver seu filho doente.",
  "O governo rouba 30% do seu suor antes de você tocar.",
  "Você troca saúde, tempo e sonhos por migalhas.",
  "Trabalha 30 anos pra se aposentar mal e mal.",
];

const freedomPoints = [
  "Acordar quando quiser",
  "Trabalhar de qualquer lugar do mundo",
  "Ver dinheiro entrar enquanto toma café com a família",
  "Sem chefe, sem ponto, sem pedir licença pra viver",
];

const MatrixSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ref = useScrollReveal(0.05);
  const [visibleItems, setVisibleItems] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ$¥€£∞≠≈";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(111, 181, 53, 0.12)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Sequential reveal of pain points
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let count = 0;
          const timer = setInterval(() => {
            count++;
            setVisibleItems(count);
            if (count >= painPoints.length) clearInterval(timer);
          }, 300);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 sec-border overflow-hidden">
      {/* Matrix rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.07 }}
      />

      {/* Red/green glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 40% at 50% 20%, rgba(220,38,38,0.06) 0%, transparent 70%)"
      }} />

      <div ref={ref} className="fade-in relative z-10 max-w-[800px] mx-auto px-5 py-[100px] md:py-[140px] text-center">
        {/* Warning tag */}
        <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/25 px-4 py-1.5 text-[9px] tracking-[3px] uppercase text-destructive mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
          Atenção: Esta página não é para todo mundo
        </div>

        {/* MATRIX headline with glitch */}
        <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
          Você ainda está preso na
        </h2>
        <div className="relative inline-block mb-8">
          <span
            className="font-display font-semibold text-primary matrix-glitch"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", letterSpacing: "-3px", lineHeight: 1 }}
          >
            MATRIX
          </span>
        </div>

        {/* Pain setup */}
        <div className="max-w-[560px] mx-auto mb-10">
          <p className="text-[12px] leading-[1.8] text-foreground/50 mb-2">
            Acorda todo dia no mesmo horário que te mandaram acordar.
          </p>
          <p className="text-[12px] leading-[1.8] text-foreground/50 mb-2">
            Trabalha para pagar conta de alguém que você nem conhece.
          </p>
          <p className="text-[12px] leading-[1.8] text-foreground/50">
            Pede férias com 30 dias de antecedência para <b className="text-foreground/70">descansar da sua própria vida.</b>
          </p>
        </div>

        {/* Enquanto isso */}
        <p className="text-[10px] tracking-[4px] uppercase text-foreground/25 mb-8">Enquanto isso…</p>

        {/* Pain points - sequential reveal */}
        <div className="max-w-[520px] mx-auto flex flex-col gap-3 mb-12 text-left">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex gap-3 items-start transition-all duration-500"
              style={{
                opacity: visibleItems > i ? 1 : 0,
                transform: visibleItems > i ? "translateX(0)" : "translateX(-12px)",
              }}
            >
              <span className="text-destructive/70 shrink-0 mt-0.5 text-[11px]">✕</span>
              <p className="text-[12px] text-foreground/60 leading-[1.6]">{point}</p>
            </div>
          ))}
        </div>

        {/* Punch line */}
        <p className="text-[13px] text-foreground/80 font-semibold tracking-wide mb-1">
          Isso não é vida.
        </p>
        <p className="text-[11px] text-foreground/40 tracking-[1px] mb-14">
          Isso é escravidão com salário. Quanto mais você espera, mais anos joga fora.
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-primary/30 mx-auto mb-14" />

        {/* Freedom vision */}
        <p className="text-[10px] tracking-[4px] uppercase text-primary/60 mb-6">Existe outro caminho</p>

        <div className="max-w-[480px] mx-auto flex flex-col gap-3 mb-10 text-left">
          {freedomPoints.map((point, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-primary/60 shrink-0 mt-0.5 text-[10px]">→</span>
              <p className="text-[12px] text-foreground/65 leading-[1.6]">{point}</p>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-foreground/40 italic mb-2">
          "Mas isso é para poucos…"
        </p>
        <p className="text-[13px] text-foreground/80 font-semibold mb-12">
          Não. É pra quem <em className="text-primary italic">tem raiva suficiente pra sair dessa prisão.</em>
        </p>

        {/* CTA */}
        <a
          href="#investment"
          className="inline-flex items-center justify-center gap-2.5 bg-primary-mid text-foreground border border-primary font-body font-bold text-[10px] tracking-[4px] uppercase px-10 py-4 no-underline transition-all hover:bg-primary hover:scale-[1.02] active:scale-[0.97] matrix-cta-pulse"
        >
          Quero sair da matrix agora
        </a>
        <p className="text-[9px] text-foreground/30 tracking-[1px] mt-3">
          Mais de <b className="text-primary/70">200 pessoas</b> já tomaram essa decisão
        </p>
      </div>
    </section>
  );
};

export default MatrixSection;
