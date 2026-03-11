import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const InvestmentSection = () => {
  const ref = useScrollReveal();
  const [countdown, setCountdown] = useState({ m: "10", s: "00" });
  const [slotsWidth, setSlotsWidth] = useState("0%");

  useEffect(() => {
    const TKEY = "stetik_timer_v3";
    const DURATION = 10 * 60 * 1000;
    const getEnd = () => {
      const s = localStorage.getItem(TKEY);
      const now = Date.now();
      if (s) { const e = parseInt(s); if (e > now) return e; }
      const e = now + DURATION;
      try { localStorage.setItem(TKEY, String(e)); } catch (err) { console.warn(err); }
      return e;
    };
    const cdEnd = getEnd();

    const tick = () => {
      const ms = cdEnd - Date.now();
      const r = Math.max(0, Math.floor(ms / 1000));
      setCountdown({
        m: String(Math.floor(r / 60)).padStart(2, "0"),
        s: String(r % 60).padStart(2, "0"),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    setTimeout(() => setSlotsWidth("92%"), 500);
    return () => clearInterval(interval);
  }, []);

  const includes = [
    "Acesso ao Stetik Club e todos os 8 pilares",
    "Todos os bônus exclusivos do Lote 1",
    "Comunidade ativa — sem silêncio, sem enrolação",
    "Encontros ao vivo toda semana com estratégia real",
  ];

  return (
    <section id="investment" className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div ref={ref} className="fade-in max-w-[680px] mx-auto">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 px-4 py-1.5 text-[9px] tracking-[3px] uppercase text-destructive mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
          LOTE 1 QUASE ESGOTADO — 7 VAGAS RESTANTES
        </div>

        <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Sua vaga está reservada</p>
        <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground mb-10" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Você vai entrar<br /><em className="italic text-primary">uma hora ou outra.</em>
        </h2>
        <p className="font-body text-[13px] text-foreground/45 leading-[1.8] mb-10">
          Não é melhor entrar agora que ainda tá R$29?
        </p>

        {/* Card */}
        <div className="relative border border-foreground/15 p-8" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="absolute top-[-1px] left-8 w-16 h-px bg-primary" />
          {/* Corner marks */}
          <div className="absolute top-0 left-0 w-8 h-px bg-foreground/25" />
          <div className="absolute top-0 left-0 w-px h-8 bg-foreground/25" />
          <div className="absolute bottom-0 right-0 w-8 h-px bg-foreground/25" />
          <div className="absolute bottom-0 right-0 w-px h-8 bg-foreground/25" />

          <div className="font-body text-[9px] tracking-[5px] uppercase text-foreground/70 mb-4">
            Pagamento único — Sem mensalidade
          </div>

          <div className="flex items-center gap-3 font-body text-[9px] tracking-[3px] uppercase text-foreground/30 mb-1">
            Valor real do clube + bônus: <span className="text-foreground/40 line-through font-bold">R$997+</span>
          </div>
          <div className="mb-5">
            <span className="font-display font-light text-foreground leading-none" style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}>R$29</span>
            <span className="font-body text-[16px] text-primary/60 font-semibold ml-2">/única vez</span>
          </div>

          <div className="flex flex-col gap-2.5 mb-5">
            {includes.map((item, i) => (
              <p key={i} className="font-display font-light leading-[1.75] text-foreground/90" style={{ fontSize: "clamp(14px, 2.2vw, 18px)" }}>
                ✦ &nbsp;{item}
              </p>
            ))}
            <p className="font-display font-light leading-[1.75] text-foreground/60 text-[13px] mt-2">
              ⚠️ Próximo lote entra com condições diferentes e sem os bônus exclusivos.
            </p>
          </div>
        </div>

        {/* Countdown */}
        <div className="border border-foreground/10 p-5 mt-3.5 text-center" style={{ background: "rgba(255,255,255,0.02)" }}>
          <p className="font-body text-[9px] tracking-[4px] uppercase text-foreground/35 mb-3.5">Oferta disponível por</p>
          <div className="flex items-center justify-center gap-2 mb-2.5">
            {[
              { val: countdown.m, label: "min" },
              { val: countdown.s, label: "seg" },
            ].map((unit, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className="font-body text-[24px] font-bold text-foreground/20 mb-3.5">:</span>}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[52px] h-[52px] flex items-center justify-center font-body text-[22px] font-bold text-primary border border-primary/20" style={{ background: "#0a0a0a" }}>
                    {unit.val}
                  </div>
                  <span className="font-body text-[8px] tracking-[3px] uppercase text-foreground/25">{unit.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-[10px] text-destructive font-semibold">⚠️ Próximo lote sem bônus e preço diferente</p>
        </div>

        {/* Slots */}
        <div className="border border-foreground/10 p-6 mt-3.5" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="flex items-center justify-between mb-3.5">
            <span className="font-body text-[12px] font-bold text-foreground/85">Vagas desta semana</span>
            <span className="font-body text-[9px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 bg-primary text-background badge-pulse">Quase esgotado</span>
          </div>
          <div className="h-1.5 bg-foreground/5 overflow-hidden mb-2">
            <div className="h-full transition-all duration-[1.5s] ease-out" style={{ width: slotsWidth, background: "linear-gradient(90deg, var(--green-dark-hex), var(--green-hex))" }} />
          </div>
          <div className="flex justify-between font-body text-[10px]">
            <span className="text-primary font-semibold">86 pessoas já entraram</span>
            <span className="text-foreground/35">7 vagas restantes</span>
          </div>
        </div>

        {/* Urgency */}
        <div className="bg-primary/5 border border-primary/30 px-4 py-2.5 mt-3.5 font-body text-[10px] tracking-[1px] text-primary text-center">
          ⚠️ &nbsp;<b className="text-foreground">7 pessoas</b> estão nessa tela agora — vagas se esgotam rápido
        </div>

        {/* CTA Button */}
        <a href="#" className="flex items-center justify-center gap-3.5 w-full mt-3.5 bg-primary-mid text-foreground border-2 border-primary font-body font-bold text-[11px] tracking-[5px] uppercase py-5 px-6 no-underline transition-colors hover:bg-primary">
          GARANTIR MINHA VAGA AGORA — R$29
          <span className="w-5 h-px bg-current relative inline-block">
            <span className="absolute right-0 -top-[3px] w-[7px] h-[7px] border-r border-t border-current rotate-45 block" />
          </span>
        </a>

        {/* Trust */}
        <div className="flex gap-4 flex-wrap mt-3.5">
          {["Acesso imediato", "Sem mensalidade", "7 dias risco zero", "Pagamento seguro"].map((item) => (
            <span key={item} className="font-body text-[9px] tracking-[1.5px] uppercase text-foreground/40 flex items-center gap-1.5">
              <span className="text-primary font-bold">✓</span>{item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
