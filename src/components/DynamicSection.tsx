import { useScrollReveal } from "@/hooks/useScrollReveal";
import membersImg from "@/assets/members-area.jpeg";

const items = [
  { num: "01", title: "Encontros ao vivo", desc: "Chamadas semanais com estratégia, análises e direcionamento real." },
  { num: "02", title: "Comunidade ativa", desc: "Um ambiente em movimento todos os dias — sem silêncio, sem enrolação." },
  { num: "03", title: "Troca constante", desc: "Networking com pessoas no mesmo campo de batalha que você." },
  { num: "04", title: "Conteúdo atualizado", desc: "O que funciona hoje no digital, não o que funcionou em 2020." },
];

const DynamicSection = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section id="dynamic" className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div ref={ref1} className="fade-in">
          <div className="relative overflow-hidden border border-foreground/10" style={{ aspectRatio: "1" }}>
            <img src={membersImg} alt="Área de membros" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 50%, rgba(5,5,5,0.25) 100%)" }} />
          </div>
        </div>
        <div ref={ref2} className="fade-in fade-delay-2">
          <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Como funciona</p>
          <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Movimento<br /><em className="italic text-primary">real. Todo dia.</em>
          </h2>
          <div className="flex flex-col gap-0 mt-10">
            {items.map((item, i) => (
              <div key={item.num} className={`flex gap-5 py-7 ${i < items.length - 1 ? "border-b border-foreground/5" : ""}`}>
                <span className="font-mono text-[9px] text-foreground/15 mt-0.5 shrink-0">{item.num}</span>
                <div>
                  <div className="text-[12px] font-bold text-foreground/90 tracking-[0.5px] mb-1">{item.title}</div>
                  <p className="text-[12px] text-foreground/50 leading-[1.6] font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicSection;
