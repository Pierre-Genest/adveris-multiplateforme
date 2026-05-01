import { useEffect, useRef, useState } from "react";
import Description from "./Description";

type Props = {
  numeric: number;
  text: string;
  duration: number;
};

export default function NumericKey({ numeric, text, duration }: Props) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * numeric));
          if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [numeric, duration]);

  return (
    <div ref={containerRef} className="flex flex-col items-center max-w-[15.5rem]">
      <div className="font-grotesque text-center text-[8rem] font-medium leading-[8rem]">
        {display}
      </div>
      <Description text={text} />
    </div>
  );
}
