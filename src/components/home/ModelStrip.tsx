import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { vehicles } from '@/src/lib/models';
import { Link } from 'react-router-dom';

export default function ModelStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Horizontal scroll effect logic or just native scroll-snap as specified.
    // Spec asks for native horizontal scroll on mobile, maybe desktop too?
  }, []);

  return (
    <section id="models" className="py-24 bg-velox-void overflow-hidden border-t border-velox-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-h4 font-heading text-velox-gold tracking-[0.2em] uppercase">The Machines</h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-6 md:px-12 pb-12 w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {vehicles.map((vehicle, index) => (
          <Link 
            key={vehicle.id} 
            to={`/models/${vehicle.slug}`}
            className={`min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] max-w-[800px] aspect-[16/10] relative group snap-center flex-shrink-0 border border-velox-white/5 bg-velox-carbon overflow-hidden transition-all duration-500 hover:border-velox-gold/60 ${!vehicle.available ? 'grayscale opacity-70 cursor-not-allowed' : ''}`}
            data-cursor="explore"
            onClick={(e) => !vehicle.available && e.preventDefault()}
          >
            {/* Media Layer */}
            <div className="absolute inset-0 z-0">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <video 
                src={vehicle.video} 
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-velox-void via-velox-void/40 to-transparent z-10" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
              <div className="flex justify-between items-start">
                <span className="text-mono text-velox-gold uppercase tracking-widest text-[10px]">
                  {vehicle.category}
                </span>
                {!vehicle.available && (
                  <span className="bg-velox-white text-velox-void px-3 py-1 text-xs font-bold font-heading tracking-widest">
                    REVEAL 2025
                  </span>
                )}
              </div>
              
              <div className="flex justify-between items-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-h3 font-heading text-velox-white tracking-wider">{vehicle.name}</h3>
                <span className="text-mono text-velox-chrome">{vehicle.specs.power}</span>
              </div>
            </div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_80px_rgba(201,168,76,0.15)] z-30" />
          </Link>
        ))}
      </div>
    </section>
  );
}
