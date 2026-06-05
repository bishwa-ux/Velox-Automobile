import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let ctx = gsap.context(() => {
      // Split text animation manually or use simple stagger
      gsap.fromTo('.char', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: 'power4.out', delay: 2.8 } // Wait for preloader
      );
      
      // Video Ken Burns
      if (videoRef.current) {
        gsap.fromTo(videoRef.current,
          { scale: 1.0 },
          { scale: 1.06, duration: 12, ease: 'none', repeat: -1, yoyo: true }
        );
      }
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] overflow-hidden bg-velox-void">
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover filter brightness-75 contrast-110"
          autoPlay 
          muted 
          loop 
          playsInline
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <div className="absolute inset-0 bg-velox-void/50 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,4,0.8)_100%)] z-10" />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-end px-6 md:px-12 pb-24 max-w-[1440px] mx-auto w-full">
        <div className="mb-4">
          <span className="text-mono text-velox-gold tracking-[0.2em] uppercase text-xs">
            VELOX APEX &mdash; NOW AVAILABLE
          </span>
        </div>
        
        <h1 ref={headlineRef} className="text-hero font-display text-velox-white mb-6 leading-[0.85]">
          <div className="overflow-hidden inline-block"><span className="char inline-block">B</span><span className="char inline-block">e</span><span className="char inline-block">y</span><span className="char inline-block">o</span><span className="char inline-block">n</span><span className="char inline-block">d</span> <span className="char inline-block">T</span><span className="char inline-block">h</span><span className="char inline-block">e</span></div>
          <br />
          <div className="overflow-hidden inline-block md:ml-24 ml-12"><span className="char inline-block">H</span><span className="char inline-block">o</span><span className="char inline-block">r</span><span className="char inline-block">i</span><span className="char inline-block">z</span><span className="char inline-block">o</span><span className="char inline-block">n</span><span className="char inline-block">.</span></div>
        </h1>

        <p className="font-body font-light text-velox-chrome text-lg max-w-lg mb-10 opacity-0 animate-fade-in [animation-delay:4s] [animation-fill-mode:forwards]">
          1,500 horsepower. 0&ndash;100 in 2.1 seconds. 47 made.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-in [animation-delay:4.3s] [animation-fill-mode:forwards]">
          <Link to="/contact" className="btn-primary w-full sm:w-auto">
            Request Private Viewing
          </Link>
          <a href="#models" className="group flex items-center justify-center sm:justify-start gap-3 text-velox-white uppercase tracking-widest text-xs font-medium py-3 px-6 relative overflow-hidden" data-cursor="explore">
            <span className="relative z-10">Explore Models &darr;</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-velox-white transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-luxury" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 z-20 hidden md:block">
        <span className="text-mono text-velox-silver/50 tracking-[0.2em] text-[10px]">
          EST. MMXIX | PORTUGAL
        </span>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 z-20 flex flex-col items-center gap-4 opacity-70">
        <div className="w-[1px] h-16 bg-gradient-to-b from-velox-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}
