import { Link } from 'react-router-dom';
import { vehicles } from '@/src/lib/models';
import { motion } from 'motion/react';

export default function Models() {
  return (
    <div className="pt-32 min-h-screen container mx-auto px-6 max-w-[1440px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-16 md:mb-24 text-center"
      >
        <h1 className="text-h1 font-heading text-velox-gold tracking-widest uppercase mb-4">The Machines</h1>
        <p className="text-velox-silver max-w-2xl mx-auto font-light">
          Engineered without compromise. Each VELOX vehicle represents the absolute pinnacle of performance, luxury, and technological sovereignty.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-24">
        {vehicles.map((v, i) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.8 }}
          >
            <Link 
              to={v.available ? `/models/${v.slug}` : '#'}
              className={`group block bg-velox-carbon border border-velox-white/5 relative overflow-hidden transition-all duration-500 hover:border-velox-gold ${!v.available ? 'opacity-70 grayscale cursor-not-allowed' : ''}`}
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={v.image} 
                  alt={v.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velox-void to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-h3 font-heading text-velox-white mb-1 group-hover:text-velox-gold transition-colors">{v.name}</h3>
                    <p className="text-mono text-velox-silver uppercase tracking-widest text-xs">{v.category}</p>
                  </div>
                  {v.available ? (
                    <span className="text-velox-white transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-mono text-sm tracking-widest">
                      Explore &rarr;
                    </span>
                  ) : (
                    <span className="text-velox-void bg-velox-white px-3 py-1 text-xs font-bold font-heading">
                      REVEAL 2025
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

