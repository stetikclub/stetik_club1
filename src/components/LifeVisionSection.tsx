import { useScrollReveal } from "@/hooks/useScrollReveal";

const LifeVisionSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="sec-border py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: "radial-gradient(circle at 50% 50%, rgba(111,181,53,0.03) 0%, transparent 70%)"
      }} />
      <div className="divline top-0 left-10" />
      <div className="divline top-0 right-10" />
      
      <div ref={ref} className="relative z-10 w-full max-w-[1000px] mx-auto px-5 flex flex-col items-center hero-fade-up">
        <div className="text-[10px] tracking-[5px] uppercase text-primary/50 mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-primary/30" />
          O outro lado
          <span className="w-8 h-px bg-primary/30" />
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[0.9] text-center mb-6">
          A vida que você <br />
          <em className="italic text-primary">merece ter.</em>
        </h2>
        
        <p className="text-foreground/40 text-[13px] max-w-[480px] text-center mb-16 leading-[1.7]">
          Isso não é motivação barata. É o destino real de quem executa. Fellipe saiu do interior de SP e chegou aqui. Você pode chegar também.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary/10 mb-12 border border-primary/10">
          {/* Card 1 */}
          <div className="group bg-background p-10 hover:bg-primary/5 transition-colors duration-500 relative overflow-hidden flex flex-col items-center text-center">
            <div className="font-display text-primary opacity-20 group-hover:opacity-60 transition-opacity duration-500 mb-4 leading-none" style={{ fontSize: "6rem" }}>
              ∞
            </div>
            <h3 className="text-[16px] font-bold mb-3">Acorda quando quiser</h3>
            <p className="text-foreground/40 text-[12px] leading-[1.7]">
              Sem despertador. Sem ponto. Sem pedir licença pra ver seu filho crescer. O seu tempo volta a ser seu.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="group bg-background p-10 hover:bg-primary/5 transition-colors duration-500 relative overflow-hidden flex flex-col items-center text-center border-t-2 border-primary">
            <div className="font-display text-primary opacity-20 group-hover:opacity-60 transition-opacity duration-500 mb-4 leading-none" style={{ fontSize: "4rem" }}>
              R$29k+
            </div>
            <h3 className="text-[16px] font-bold mb-3">Por mês. Todo mês.</h3>
            <p className="text-foreground/40 text-[12px] leading-[1.7]">
              Renda que entra enquanto você dorme, viaja, ou simplesmente vive. Sem chefe decidindo quanto você vale.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="group bg-background p-10 hover:bg-primary/5 transition-colors duration-500 relative overflow-hidden flex flex-col items-center text-center">
            <div className="font-display text-primary opacity-20 group-hover:opacity-60 transition-opacity duration-500 mb-4 leading-none" style={{ fontSize: "5rem" }}>
              🌍
            </div>
            <h3 className="text-[16px] font-bold mb-3">De qualquer lugar</h3>
            <p className="text-foreground/40 text-[12px] leading-[1.7]">
              Balneário Camboriú, Maldivas, ou da sua própria casa. O notebook abre e o dinheiro entra. Simples assim.
            </p>
          </div>
        </div>

        <div className="text-center w-full">
          <p className="italic text-foreground/30 text-[12px] max-w-[500px] mx-auto">
            "Fellipe The Kid saiu do CLT no interior de SP em 2016. Hoje mora em Balneário Camboriú com Ferrari na garagem."
          </p>
          <div className="w-12 h-px bg-primary/20 mx-auto mt-6 mb-8" />
          <a href="#investment" className="inline-flex items-center justify-center bg-primary-mid text-foreground border border-primary font-body font-bold text-[10px] tracking-[4px] uppercase px-10 py-4 no-underline transition-all hover:bg-primary hover:scale-[1.015] active:scale-[0.97]">
            Quero essa vida — R$29
          </a>
        </div>
      </div>
    </section>
  );
};

export default LifeVisionSection;
