import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const LossCalculator = () => {
  const ref = useScrollReveal();
  const [anos, setAnos] = useState<number>(3);
  const [salario, setSalario] = useState<number>(3000);

  const totalPerdido = anos * salario * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <section className="sec-border py-24 relative">
      <div className="divline top-0 left-10" />
      <div className="divline top-0 right-10" />
      
      <div ref={ref} className="w-full max-w-[680px] mx-auto px-5 flex flex-col items-center hero-fade-up">
        <div className="text-[10px] tracking-[5px] uppercase text-destructive/70 mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-destructive/30" />
          Calculadora da Perda
          <span className="w-8 h-px bg-destructive/30" />
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[0.9] text-center mb-6">
          Quanto você já <br />
          <em className="italic text-primary">jogou fora.</em>
        </h2>
        
        <p className="text-foreground/40 text-[13px] max-w-[480px] text-center mb-12 leading-[1.7]">
          Cada ano que você fica parado é dinheiro real que você nunca vai recuperar.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[2px] uppercase text-foreground/50 ml-1">Anos de CLT</label>
            <input 
              type="number" 
              min={1} 
              max={40} 
              value={anos} 
              onChange={(e) => setAnos(Number(e.target.value))}
              className="border border-foreground/15 bg-black/50 text-foreground font-body text-[22px] font-bold text-center p-4 w-full outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] tracking-[2px] uppercase text-foreground/50 ml-1">Salário atual (R$)</label>
            <input 
              type="number" 
              min={500} 
              max={50000} 
              step={100} 
              value={salario} 
              onChange={(e) => setSalario(Number(e.target.value))}
              className="border border-foreground/15 bg-black/50 text-foreground font-body text-[22px] font-bold text-center p-4 w-full outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

        <div className="w-full border border-destructive/30 bg-destructive/5 p-8 text-center mb-10">
          <div className="font-display text-destructive leading-none" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
            {formatCurrency(totalPerdido)}
          </div>
          <div className="text-foreground/40 text-[11px] tracking-[2px] uppercase mt-4">
            jogados fora em impostos, horas extras não pagas e oportunidade perdida
          </div>
          
          <div className="w-12 h-px bg-destructive/30 mx-auto my-6" />
          
          <p className="font-body text-[13px] text-foreground/60 leading-[1.8] max-w-[400px] mx-auto">
            Esse dinheiro já foi. Mas os próximos anos ainda são seus.
          </p>
          <p className="text-destructive text-[11px] tracking-[1px] font-bold mt-3 uppercase">
            Cada dia que você espera, esse número cresce.
          </p>
        </div>

        <a href="#investment" className="inline-flex items-center justify-center bg-primary-mid text-foreground border border-primary font-body font-bold text-[10px] tracking-[4px] uppercase px-10 py-4 no-underline transition-all hover:bg-primary hover:scale-[1.015] active:scale-[0.97]">
          Parar de Perder Agora — R$29
        </a>
      </div>
    </section>
  );
};

export default LossCalculator;
