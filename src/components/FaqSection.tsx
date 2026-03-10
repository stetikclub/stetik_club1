import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "R$29 por mês? O que tem de catch?", a: "Nenhum. O preço é esse porque o objetivo é volume — queremos que mais pessoas executando gerem mais resultado dentro da comunidade. Sem contrato, sem fidelidade. Cancela quando quiser." },
  { q: "Isso é mais um curso que vou comprar e não assistir?", a: "Não é um curso. É uma comunidade ativa. Não tem grade de aulas para zerar. Tem encontros ao vivo, trocas diárias, estratégias em tempo real. Você entra, participa, executa." },
  { q: "Eu sou iniciante. Serve para mim?", a: "Sim — especialmente para você. Começar sozinho é o maior erro que existe no digital. O ambiente certo encurta anos de tentativa e erro. Dentro da Stetik Club você vai ter direção desde o primeiro dia." },
  { q: "Já fatura bem. Ainda faz sentido entrar?", a: "Quem já está no nível sabe: o próximo degrau raramente se sobe sozinho. O networking de bastidor — pessoas que constroem operações reais — é o que a Stetik Club entrega." },
  { q: "Como funciona o acesso? É imediato?", a: "Sim. Assim que o pagamento é confirmado, você recebe acesso imediato à comunidade, aos encontros ao vivo e a todo o conteúdo dos 8 pilares." },
  { q: "Posso cancelar a qualquer momento?", a: "Sim, sem burocracia. Cancela pelo próprio painel, sem precisar falar com ninguém." },
  { q: "Por que o acesso é limitado?", a: "Porque comunidade com qualidade tem limite. Não queremos uma audiência de milhares sem conexão — queremos um grupo seleto onde todo membro agrega de verdade." },
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
          Tudo que você<br /><em className="italic text-primary">queria perguntar.</em>
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
