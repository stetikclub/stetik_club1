import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    const move = (e: MouseEvent) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", move);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div ref={curRef} className="custom-cursor hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  );
};

export default CustomCursor;
