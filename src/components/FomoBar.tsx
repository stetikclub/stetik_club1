import { useState, useEffect } from "react";

const FomoBar = () => {
  const [vagas, setVagas] = useState(7);
  const [timer, setTimer] = useState("10:00");

  useEffect(() => {
    const TKEY = "stetik_timer_v3";
    const DURATION = 10 * 60 * 1000;
    const getEnd = () => {
      const s = localStorage.getItem(TKEY);
      const now = Date.now();
      if (s) { const e = parseInt(s); if (e > now) return e; }
      const e = now + DURATION;
      try { localStorage.setItem(TKEY, String(e)); } catch (err) { console.warn(err); }
      return e;
    };
    let tEnd = getEnd();

    const tickTimer = () => {
      const ms = tEnd - Date.now();
      const r = Math.max(0, Math.floor(ms / 1000));
      if (r === 0) {
        tEnd = Date.now() + DURATION;
        try { localStorage.setItem(TKEY, String(tEnd)); } catch (err) { console.warn(err); }
      }
      const m = String(Math.floor(r / 60)).padStart(2, "0");
      const s = String(r % 60).padStart(2, "0");
      setTimer(`${m}:${s}`);
    };
    tickTimer();
    const timerInterval = setInterval(tickTimer, 1000);

    const vagasInterval = setInterval(() => {
      if (Math.random() < 0.15) {
        setVagas(v => Math.max(3, v - 1));
      }
    }, 60000 + Math.random() * 30000);

    return () => {
      clearInterval(timerInterval);
      clearInterval(vagasInterval);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-10 flex items-center justify-center gap-2.5 font-body uppercase backdrop-blur-[14px]"
      style={{
        background: "rgba(4,4,10,0.95)",
        borderBottom: "1px solid hsl(var(--primary) / 0.18)",
        fontSize: "10px",
        letterSpacing: "2.5px",
        color: "rgba(255,255,255,0.5)",
      }}
    >
      <span className="pulse-dot" style={{ width: 6, height: 6 }} />
      <span>
        <b className="text-primary">{vagas}</b> vagas disponíveis &nbsp;·&nbsp; Oferta encerra em{" "}
        <b className="text-primary">{timer}</b>
      </span>
    </div>
  );
};

export default FomoBar;
