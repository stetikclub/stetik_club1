import { useScrollReveal } from "@/hooks/useScrollReveal";

const QuoteSection = () => {
  const ref = useScrollReveal();

  const testimonials = [
    { name: "Patrick Fav", result: "R$11.268,83 em 14 dias", quote: "A copy da VSL e da página nova explodiu minha mente." },
    { name: "Aluno", result: "R$1.817,77 em 30 dias", quote: "de 1k para 1817 em um mês" },
    { name: "Aluno Luan", result: "R$90,63 em 7 dias", quote: "Mentoria foda! Muito obrigado parceiro!" },
    { name: "Isaque Bertoncello", result: "", quote: "A máquina não paraaa — só não ganha quem não quer." },
    { name: "Adriano", result: "", quote: "Obrigado por ter me apresentado essa estratégia. Agora só crescer mais." },
  ];

  return (
    <section className="relative z-10 sec-border py-[120px] px-5 bg-background">
      <div className="divline" />
      <div ref={ref} className="fade-in max-w-[800px] mx-auto text-center">
        <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Eles eram como você</p>
        <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Enquanto você ganha pouco,<br />olha o que <em className="italic text-primary">já aconteceu.</em>
        </h2>
        <p className="font-body text-[13px] text-foreground/70 leading-[1.8] mb-12 max-w-[600px] mx-auto">
          Eles eram exatamente como você: CLT sem experiência, com medo de investir errado. Enquanto você ganha pouco, olha o que já aconteceu com quem decidiu entrar (prints reais do grupo WhatsApp e Discord):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-foreground/10 p-6" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="flex justify-between items-start mb-3">
                <span className="font-body text-[12px] font-bold text-foreground/90">{t.name}</span>
                {t.result && <span className="font-body text-[10px] text-primary font-semibold bg-primary/10 px-2 py-1">{t.result}</span>}
              </div>
              <p className="font-body text-[13px] text-foreground/60 italic leading-[1.6]">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
