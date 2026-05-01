import { useEffect, useRef } from "react";
import { trackOnce } from "../../store/analyticsStore";

type Props = {
  goal: string;
  props?: Record<string, string | number | boolean>;
  children: React.ReactNode;
  className?: string;
};

export default function TrackVisible({ goal, props, children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        trackOnce(goal, props);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [goal, props]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
