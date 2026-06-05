import { Link } from 'react-router-dom';

const TechPreview = () => {
  return (
    <section className="py-32 bg-velox-graphite relative">
      <div className="absolute inset-0 bg-gradient-to-b from-velox-void to-velox-graphite pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-h2 font-heading text-velox-white mb-16 tracking-wider text-center md:text-left">
          <span className="text-velox-gold block text-sm font-mono tracking-widest mb-4">Innovation</span>
          Engineering Emotion
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-velox-void border border-velox-white/5 p-10 hover:-translate-y-2 hover:border-velox-gold transition-all duration-500 relative overflow-hidden flex flex-col items-start min-h-[400px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-velox-gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <path d="M22 12V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6" />
              <path d="M12 2v2" />
              <path d="M20 18l4-4-4-4" />
              <path d="M16 14v6" />
              <path d="M8 14h12" />
            </svg>
            <h3 className="text-h3 font-heading text-velox-white mb-4">Air, Mastered.</h3>
            <p className="text-velox-silver font-light text-sm mb-auto line-clamp-3">
              Active aerodynamics that react in milliseconds to ensure optimal downforce and minimal drag.
            </p>
            <Link to="/technology/aerodynamics" className="mt-8 text-velox-gold font-mono text-xs uppercase tracking-widest group-hover:text-velox-white transition-colors flex items-center gap-2">
              Discover <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="group bg-velox-void border border-velox-white/5 p-10 hover:-translate-y-2 hover:border-velox-gold transition-all duration-500 relative overflow-hidden flex flex-col items-start min-h-[400px]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-velox-chrome)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-8 group-hover:stroke-velox-gold group-hover:-translate-y-1 transition-all duration-500">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" x2="4" y1="22" y2="15" />
            </svg>
            <h3 className="text-h3 font-heading text-velox-white mb-4">Two Souls, One Machine.</h3>
            <p className="text-velox-silver font-light text-sm mb-auto line-clamp-3">
              A hybrid powertrain combining the visceral scream of a naturally aspirated V12 with the instant torque of electrification.
            </p>
            <Link to="/technology/powertrain" className="mt-8 text-velox-gold font-mono text-xs uppercase tracking-widest group-hover:text-velox-white transition-colors flex items-center gap-2">
              Discover <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="group bg-velox-void border border-velox-white/5 p-10 hover:-translate-y-2 hover:border-velox-gold transition-all duration-500 relative overflow-hidden flex flex-col items-start min-h-[400px]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-velox-chrome)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-8 group-hover:stroke-velox-gold group-hover:scale-105 transition-all duration-500">
              <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
              <path d="M12 6v6l4 2" />
            </svg>
            <h3 className="text-h3 font-heading text-velox-white mb-4">It Knows Before You Do.</h3>
            <p className="text-velox-silver font-light text-sm mb-auto line-clamp-3">
              Adaptive intelligence systems scanning the road ahead to adjust suspension, torque vectoring, and stability perfectly.
            </p>
            <Link to="/technology/connectivity" className="mt-8 text-velox-gold font-mono text-xs uppercase tracking-widest group-hover:text-velox-white transition-colors flex items-center gap-2">
              Discover <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechPreview;
