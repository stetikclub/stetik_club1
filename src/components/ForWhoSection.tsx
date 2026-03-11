import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

const yesItems = [
  "Tem raiva suficiente pra parar de ser escravo do despertador",
  "Quer viver de verdade, não de migalhas que o chefe joga",
  "Está disposto a executar mesmo com medo",
  "Quer se cercar de quem já está ganhando dinheiro real",
];

const noItems = [
  "Ainda aceita ser tratado como número",
  "Prefere sonhar do que agir",
  "Quer motivação barata em vez de resultado",
  "Tem medo de perder mais R$29 do que já perdeu em salário",
];

const ForWhoSection = () => {
  const ref = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="forwho" className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div ref={ref} className="fade-in max-w-[1000px] mx-auto text-center">
        <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Seja honesto</p>
        <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Isso é para<br /><em className="italic text-primary">poucos.</em>
        </h2>
      </div>
      <div ref={gridRef} className="fade-in max-w-[1000px] mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "rgba(111,181,53,0.12)" }}>
        <div className="bg-background p-10 md:p-12">
          <div className="flex items-center gap-2.5 mb-9">
            <div className="w-2 h-2 rounded-full bg-primary/70" />
            <span className="text-[10px] tracking-[3px] uppercase text-foreground/40 font-semibold">É para você se...</span>
          </div>
          <div className="flex flex-col gap-5">
            {yesItems.map((item, i) => (
              <div key={i} className="flex gap-3.5 items-start">
                <Check size={14} className="text-primary/70 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[13px] text-foreground/70 leading-[1.6] font-normal">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-10 md:p-12" style={{ background: "#0a0a0a" }}>
          <div className="flex items-center gap-2.5 mb-9">
            <div className="w-2 h-2 rounded-full bg-foreground/15" />
            <span className="text-[10px] tracking-[3px] uppercase text-foreground/20 font-semibold">Não é para você se...</span>
          </div>
          <div className="flex flex-col gap-5">
            {noItems.map((item, i) => (
              <div key={i} className="flex gap-3.5 items-start">
                <X size={14} className="text-foreground/20 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[13px] text-foreground/35 leading-[1.6] font-normal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
