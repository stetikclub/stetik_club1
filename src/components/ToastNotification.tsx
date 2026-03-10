import { useState, useEffect } from "react";

const names = ["Lucas M.", "Ana C.", "Rafael T.", "Fernanda S.", "Diego L.", "Camila R.", "Bruno A.", "Priscila N.", "Thiago F.", "Juliana M."];
const actions = ["acabou de entrar no clube", "garantiu sua vaga agora", "assegurou acesso ao Stetik Club", "parou de hesitar e entrou"];

const ToastNotification = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState({ name: "", action: "", initial: "" });

  useEffect(() => {
    let idx = 0;
    const show = () => {
      const i = idx % names.length;
      setCurrent({
        name: names[i],
        action: actions[i % actions.length],
        initial: names[i].charAt(0),
      });
      setVisible(true);
      idx++;
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
        {current.initial}
      </div>
      <div>
        <div className="text-[12px] font-bold text-foreground mb-0.5 font-body">{current.name}</div>
        <div className="text-[11px] text-foreground/55 font-body">{current.action}</div>
      </div>
    </div>
  );
};

export default ToastNotification;
