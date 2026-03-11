import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, DollarSign, FileText, Edit3, Image, Zap, Navigation, Activity } from "lucide-react";

const pillars = [
  { icon: Target, num: "01", title: "Aquisição & Tráfego", desc: "Atrair gente certa pra sua oferta sem ficar mendigando like" },
  { icon: DollarSign, num: "02", title: "Monetização Digital", desc: "Transformar atenção em dinheiro que entra todo dia" },
  { icon: FileText, num: "03", title: "Modelagem de Ofertas", desc: "Criar ofertas que vendem sozinhas enquanto você dorme" },
  { icon: Edit3, num: "04", title: "Copy & Persuasão", desc: "Escrever textos que fazem as pessoas comprar sem pensar duas vezes" },
  { icon: Image, num: "05", title: "Criação & Design", desc: "Fazer conteúdo que chama atenção e vende" },
  { icon: Zap, num: "06", title: "Automação & Tecnologia", desc: "Automatizar pra trabalhar menos e ganhar mais" },
  { icon: Navigation, num: "07", title: "Marca & Autoridade", desc: "Construir uma presença que passa confiança e dinheiro" },
  { icon: Activity, num: "08", title: "Mentalidade de Construção", desc: "Parar de sonhar e começar a construir de verdade" },
];

const PillarsSection = () => {
  const ref = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="pillars" className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className="fade-in text-center">
          <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body text-center">O que você encontra dentro</p>
          <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground text-center" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Os 8 pilares de<br /><em className="italic text-primary">crescimento digital.</em>
          </h2>
        </div>
        <div ref={gridRef} className="fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-14" style={{ background: "rgba(111,181,53,0.12)" }}>
          {pillars.map((p) => (
            <div key={p.num} className="bg-background p-9 transition-colors duration-300 hover:bg-primary/5 group cursor-default">
              <div className="mb-4 opacity-30 transition-opacity duration-300 group-hover:opacity-80">
                <p.icon size={20} className="text-primary" />
              </div>
              <div className="text-[9px] text-foreground/10 font-mono mb-4">{p.num}</div>
              <div className="text-[12px] font-bold text-foreground/90 tracking-[0.5px] mb-2 leading-snug">{p.title}</div>
              <p className="text-[12px] text-foreground/45 leading-[1.6] font-normal">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
