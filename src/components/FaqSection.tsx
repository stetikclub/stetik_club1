import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "R$29 é mensalidade?", a: "NÃO. É um pagamento único. Você paga R$29 UMA VEZ e tem acesso vitalício ao Stetik Club e a todos os bônus. Sem pegadinha, sem cobrança surpresa no mês que vem." },
  { q: "Eu sou CLT e não tenho tempo. Serve pra mim?", a: "Se você não tem tempo pra mudar de vida, vai ser CLT pra sempre. O Clube foi desenhado pra quem tem 1h por dia pra executar. Direto ao ponto, sem enrolação." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Entra, olha tudo. Se achar que é mais do mesmo, aperta um botão e eu devolvo seus R$29. Risco zero." },
  { q: "Como eu acesso?", a: "Assim que o pagamento for aprovado, você recebe o acesso imediato no seu e-mail. Pagamentos via PIX ou Cartão liberam na hora." },
  { q: "Por que tão barato?", a: "Porque eu quero criar a maior comunidade de execução do Brasil. R$29 é só um filtro pra tirar os curiosos e deixar só quem realmente quer fazer acontecer." },
];

const FaqSection = () => {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 sec-border py-[120px] px-5">
      <div className="divline" />
      <div ref={ref} className="fade-in max-w-[720px] mx-auto">
        <p className="text-[10px] tracking-[5px] uppercase text-primary/70 mb-4 font-body">Dúvidas frequentes</p>
        <h2 className="font-display font-light leading-[0.9] tracking-tight text-foreground mb-12" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Ainda tem<br /><em className="italic text-primary">desculpas?</em>
        </h2>

        <div className="border-t border-foreground/5">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-foreground/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-[22px] bg-transparent border-none cursor-pointer text-left"
              >
                <span className="font-body text-[13px] font-bold text-foreground/80 leading-[1.4]">{faq.q}</span>
                <span className={`text-[20px] text-primary/70 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="font-body text-[12px] text-foreground/50 leading-[1.85] pb-[22px]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-body text-[11px] text-foreground/20 mb-5">A maior dúvida é ficar parado enquanto outros avançam.</p>
          <a href="#investment" className="inline-flex items-center gap-2 border border-primary/30 px-8 py-3 font-body text-[10px] tracking-[4px] uppercase text-primary no-underline transition-colors hover:border-primary hover:text-foreground">
            Ver condições de entrada
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
