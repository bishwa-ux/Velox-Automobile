import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function Counter({ from = 0, to, duration = 1.5, suffix = '' }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // easeOut cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, to, from, duration]);

  // Special decimal handling if necessary or just render
  const formattedCount = to % 1 !== 0 && count === to ? to.toFixed(1) : count.toLocaleString();

  return <span ref={ref}>{formattedCount}{suffix}</span>;
}

export default function PerformanceStats() {
  return (
    <section className="py-24 bg-velox-void border-t border-velox-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="flex flex-col border-t border-velox-gold/30 pt-6 group">
            <span className="text-velox-white text-5xl md:text-7xl font-heading mb-2">
              <Counter to={1500} />
            </span>
            <span className="text-mono text-velox-gold text-[10px] md:text-xs uppercase tracking-widest transition-colors group-hover:text-velox-white">
              Horsepower
            </span>
          </div>

          <div className="flex flex-col border-t border-velox-gold/30 pt-6 group">
            <span className="text-velox-white text-5xl md:text-7xl font-heading mb-2">
              <Counter to={2.1} suffix="s" />
            </span>
            <span className="text-mono text-velox-gold text-[10px] md:text-xs uppercase tracking-widest transition-colors group-hover:text-velox-white">
              0&ndash;100 km/h
            </span>
          </div>

          <div className="flex flex-col border-t border-velox-gold/30 pt-6 group">
            <span className="text-velox-white text-5xl md:text-7xl font-heading mb-2">
              <Counter to={487} />
            </span>
            <span className="text-mono text-velox-gold text-[10px] md:text-xs uppercase tracking-widest transition-colors group-hover:text-velox-white">
              Top Speed (km/h)
            </span>
          </div>

          <div className="flex flex-col border-t border-velox-gold/30 pt-6 group">
            <span className="text-velox-white text-5xl md:text-7xl font-heading mb-2">
              <Counter to={47} />
            </span>
            <span className="text-mono text-velox-gold text-[10px] md:text-xs uppercase tracking-widest transition-colors group-hover:text-velox-white">
              Built Per Year
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
