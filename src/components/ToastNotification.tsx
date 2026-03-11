import { useState, useEffect } from "react";

const entries = [
  { name: "Lucas M.", city: "São Paulo, SP", area: "Tráfego Pago" },
  { name: "Ana C.", city: "Curitiba, PR", area: "Copywriting" },
  { name: "Rafael T.", city: "Florianópolis, SC", area: "E-commerce" },
  { name: "Fernanda S.", city: "Belo Horizonte, MG", area: "Social Media" },
  { name: "Diego L.", city: "Rio de Janeiro, RJ", area: "Branding" },
  { name: "Camila R.", city: "Goiânia, GO", area: "Infoprodutos" },
  { name: "Bruno A.", city: "Recife, PE", area: "Afiliados" },
  { name: "Priscila N.", city: "Porto Alegre, RS", area: "Design" },
  { name: "Thiago F.", city: "Fortaleza, CE", area: "Automação" },
  { name: "Juliana M.", city: "Campinas, SP", area: "Tráfego Pago" },
];

const resultToasts = [
  { name: "Lucas M.", city: "São Paulo, SP", value: "R$347,00", time: "hoje" },
  { name: "Camila R.", city: "Goiânia, GO", value: "R$1.290,00", time: "ontem" },
  { name: "Rafael T.", city: "Florianópolis, SC", value: "R$89,00", time: "hoje" },
  { name: "Diego L.", city: "Rio de Janeiro, RJ", value: "R$2.100,00", time: "essa semana" },
];

const ToastNotification = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<any>({ name: "", city: "", area: "" });
  const [isResult, setIsResult] = useState(false);

  useEffect(() => {
    let idx = 0;
    let resultIdx = 0;
    let counter = 0;

    const show = () => {
      counter++;
      if (counter % 4 === 0) {
        const i = resultIdx % resultToasts.length;
        setCurrent(resultToasts[i]);
        setIsResult(true);
        resultIdx++;
      } else {
        const i = idx % entries.length;
        setCurrent(entries[i]);
        setIsResult(false);
        idx++;
      }
      
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
    };

    const firstTimeout = setTimeout(() => {
      show();
      const interval = setInterval(show, 16000);
      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(firstTimeout);
  }, []);

  return (
    <div
      className={`fixed bottom-7 left-5 z-[9997] flex items-center gap-3 border border-primary/25 p-3.5 pr-10 max-w-[280px] transition-transform duration-[450ms] pointer-events-none ${visible ? "translate-x-0" : "-translate-x-[120%]"}`}
      style={{ background: "#111", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0 font-body"
        style={{ background: "rgba(111,181,53,0.16)", color: "hsl(98 55% 42%)" }}
      >
        {isResult ? "💰" : (current.name ? current.name.charAt(0) : "")}
      </div>
      <div>
        <div className="text-[12px] font-bold text-foreground mb-0.5 font-body">{current.name} · {current.city}</div>
        {isResult ? (
          <div className="text-[10px] text-primary/70 font-body">faturou {current.value} {current.time}</div>
        ) : (
          <div className="text-[10px] text-primary/70 font-body">{current.area} · entrou por R$29</div>
        )}
      </div>
    </div>
  );
};

export default ToastNotification;
