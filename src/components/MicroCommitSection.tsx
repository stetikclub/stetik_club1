import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MicroCommitSection = () => {
  const ref = useScrollReveal();
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleAnswer = (ans: string) => {
    setAnswer(ans);
    setAnswered(true);
  };

  return (
    <section className="sec-border py-24 relative bg-background">
      <div className="divline top-0 left-10" />
      <div className="divline top-0 right-10" />
      
      <div ref={ref} className="w-full max-w-[680px] mx-auto px-5 flex flex-col items-center text-center hero-fade-up">
        {!answered ? (
          <>
            <div className="text-[10px] tracking-[5px] uppercase text-foreground/40 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-foreground/20" />
              Uma pergunta honesta
              <span className="w-8 h-px bg-foreground/20" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[0.9] text-center mb-4">
              Você quer <br />
              <em className="italic text-primary">continuar assim?</em>
            </h2>
            
            <p className="text-foreground/40 text-[13px] max-w-[420px] mx-auto mb-10 leading-[1.7]">
              Antes de continuar, preciso que você seja honesto com você mesmo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <button 
                onClick={() => handleAnswer("sim")}
                className="border border-destructive/40 bg-destructive/5 text-destructive hover:bg-destructive/10 font-body font-bold text-[11px] tracking-[3px] uppercase px-12 py-5 transition-all"
              >
                SIM, ESTOU BEM ASSIM
              </button>
              <button 
                onClick={() => handleAnswer("nao")}
                className="border border-primary bg-primary/10 text-primary hover:bg-primary/20 font-body font-bold text-[11px] tracking-[3px] uppercase px-12 py-5 transition-all"
              >
                NÃO, QUERO MUDAR
              </button>
            </div>
          </>
        ) : answer === "sim" ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="text-6xl mb-6">🔒</div>
            <h2 className="font-display text-destructive leading-none mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
              Então essa página não é pra você.
            </h2>
            <p className="text-foreground/40 text-[13px] max-w-[400px] mx-auto mb-8 leading-[1.8]">
              Tudo bem. Nem todo mundo está pronto. Mas se você mudar de ideia, o botão abaixo ainda vai estar aqui.
            </p>
            <button 
              onClick={() => setAnswered(false)}
              className="border border-primary/30 text-primary hover:bg-primary/5 text-[10px] tracking-[2px] uppercase px-8 py-3 transition-colors"
            >
              Espera — quero mudar
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="text-6xl mb-6">🔥</div>
            <h2 className="font-display text-primary leading-none mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
              Essa é a decisão certa.
            </h2>
            <p className="text-foreground/60 text-[13px] max-w-[400px] mx-auto mb-8 leading-[1.8]">
              Você acabou de tomar a decisão mais importante. Agora o próximo passo é simples: garantir sua vaga antes que alguém tome.
            </p>
            <a 
              href="#investment" 
              className="inline-flex items-center justify-center bg-primary-mid text-foreground border border-primary font-body font-bold text-[10px] tracking-[4px] uppercase px-10 py-4 no-underline transition-all hover:bg-primary hover:scale-[1.015] active:scale-[0.97]"
            >
              Garantir minha vaga — R$29
            </a>
            <p className="text-foreground/25 text-[10px] tracking-[1px] mt-4 uppercase">
              7 dias de garantia total. Risco zero.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MicroCommitSection;
