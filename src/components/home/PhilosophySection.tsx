import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let ctx = gsap.context(() => {
      gsap.fromTo('.word',
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );
    }, containerRef.current);
    return () => ctx.revert();
  }, []);

  const statement = "We do not make cars for everyone. We make cars for those who understand that the journey is not a metaphor — it is the only truth.";

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-velox-carbon relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/seed/velox1/1920/1080')] bg-cover bg-center bg-no-repeat mix-blend-overlay filter grayscale" />
      
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <span className="absolute -top-16 left-1/2 -translate-x-1/2 font-display text-[200px] text-velox-gold opacity-10 leading-none">
          "
        </span>
        
        <h2 ref={textRef} className="text-h2 md:text-5xl font-display font-light leading-snug md:leading-tight text-velox-white mb-12 flex flex-wrap justify-center gap-x-3 gap-y-1">
          {statement.split(' ').map((word, i) => (
            <span key={i} className="word">{word}</span>
          ))}
        </h2>
        
        <p className="text-sm font-mono text-velox-gold tracking-widest uppercase">
          &mdash; Marcus Alves, Founder &amp; Chief Engineer, VELOX
        </p>
        
        <div className="mt-16 w-[60px] h-px bg-velox-gold mx-auto" />
      </div>
    </section>
  );
}
