import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "R$29 é mensalidade?", a: "Não. É pagamento único, uma vez só. Sem mensalidade, sem cobrança recorrente, sem pegadinha. Você paga R$29 uma vez e fica dentro." },
  { q: "Eu sou CLT e não tenho tempo. Serve pra mim?", a: "Serve especialmente pra você. O Stetik Club foi criado por alguém que saiu do CLT. A metodologia é pensada pra quem ainda está no emprego e quer construir a saída. Você não precisa de 8 horas por dia — precisa de direção." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia total. Entra, acessa tudo, participa da comunidade, testa. Se achar que não vale, aperta um botão e eu devolvo seus R$29 na hora. Sem te perguntar nada. O risco é 100% meu." },
  { q: "Como eu acesso?", a: "Assim que o pagamento é confirmado, você recebe acesso imediato à comunidade, às gravações de todas as calls e a todos os bônus do Lote 1." },
  { q: "Por que tão barato?", a: "Porque o objetivo é ter volume de pessoas executando — quanto mais gente dentro ganhando resultado, mais forte fica a comunidade. R$29 não é barato. É estratégico." },
  { q: "Quem são as pessoas que estão dentro?", a: "São pessoas que saíram ou querem sair do CLT, que levam a sério a construção de renda digital. Aqui não tem turista — tem gente que executa." },
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
          <p className="font-body text-[11px] text-foreground/20 mb-5">Ainda em dúvida? A maior dúvida é ficar parado enquanto outros avançam.</p>
          <a href="#investment" className="inline-flex items-center gap-2 border border-primary/30 px-8 py-3 font-body text-[10px] tracking-[4px] uppercase text-primary no-underline transition-colors hover:border-primary hover:text-foreground">
            Ver condições de entrada
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
