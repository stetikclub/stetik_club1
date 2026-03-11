import { useScrollReveal } from "@/hooks/useScrollReveal";

const VsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="sec-border py-24 relative">
      <div className="divline top-0 left-10" />
      <div className="divline top-0 right-10" />
      
      <div ref={ref} className="w-full max-w-[900px] mx-auto px-5 flex flex-col items-center hero-fade-up">
        <div className="text-[10px] tracking-[5px] uppercase text-foreground/40 mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-foreground/20" />
          Seja honesto consigo mesmo
          <span className="w-8 h-px bg-foreground/20" />
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[0.9] text-center mb-6">
          Você — ou <br />
          <em className="italic text-primary">continua assim.</em>
        </h2>
        
        <p className="text-foreground/40 text-[13px] max-w-[500px] text-center mb-12 leading-[1.7]">
          Duas realidades. Você já sabe em qual está. A pergunta é: até quando?
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-px bg-primary/10 border border-primary/10">
          {/* Coluna ESQUERDA */}
          <div className="bg-background p-10 flex flex-col">
            <div className="bg-destructive/10 border border-destructive/20 text-destructive text-[8px] tracking-[2px] uppercase px-3 py-1 inline-flex self-start mb-6 font-bold">
              REALIDADE ATUAL
            </div>
            <h3 className="text-[20px] font-display mb-6 text-foreground/80">Vida CLT</h3>
            <ul className="flex flex-col gap-4">
              {[
                "Acorda no horário que te mandam todo dia",
                "30% do seu salário vai pro governo antes de você ver",
                "Pede permissão pra tirar férias da sua própria vida",
                "Seu chefe decide quanto você vale",
                "Trabalha 30 anos pra se aposentar com R$1.800",
                "Troca saúde e tempo por segurança que não existe"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-destructive/60 text-[12px] mt-0.5">✕</span>
                  <span className="text-foreground/40 text-[12px] leading-[1.7]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna DIREITA */}
          <div className="bg-primary/5 p-10 border-l border-primary/20 flex flex-col">
            <div className="bg-primary/10 border border-primary/20 text-primary text-[8px] tracking-[2px] uppercase px-3 py-1 inline-flex self-start mb-6 font-bold">
              REALIDADE POSSÍVEL
            </div>
            <h3 className="text-[20px] font-display mb-6 text-primary">Dentro do Stetik Club</h3>
            <ul className="flex flex-col gap-4">
              {[
                "Acorda quando quiser. Sem despertador, sem ponto",
                "Constrói renda que entra enquanto você dorme",
                "Trabalha de qualquer lugar do mundo",
                "Você decide quanto vale e cobra por isso",
                "Aposentadoria? Você constrói patrimônio real agora",
                "Tempo com família, saúde e os R$29 mais importantes da sua vida"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary/60 text-[14px] mt-0.5 leading-none">→</span>
                  <span className="text-foreground/70 text-[12px] leading-[1.7]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <p className="italic text-foreground/25 text-[11px] mb-6">
            Qual dessas colunas descreve sua vida hoje?
          </p>
          <a href="#investment" className="inline-flex items-center justify-center bg-primary-mid text-foreground border border-primary font-body font-bold text-[10px] tracking-[4px] uppercase px-10 py-4 no-underline transition-all hover:bg-primary hover:scale-[1.015] active:scale-[0.97]">
            Mudar de coluna — R$29
          </a>
        </div>
      </div>
    </section>
  );
};

export default VsSection;
