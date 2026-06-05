import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { name: 'Models', path: '/models' },
    { name: 'Performance', path: '/performance' },
    { name: 'Technology', path: '/technology' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          scrolled ? 'bg-velox-void/80 backdrop-blur-xl border-b border-velox-white/5 py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="relative z-50">
            <svg viewBox="0 0 200 40" className="h-8 w-auto">
              <text x="0" y="32" fontFamily="var(--font-heading)" fontSize="40" letterSpacing="8" fill="var(--color-velox-gold)">VELOX</text>
            </svg>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "nav-link text-sm tracking-widest uppercase",
                  location.pathname === link.path ? 'text-velox-gold' : 'text-velox-chrome hover:text-velox-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/configurator" className="btn-primary py-2 px-6 text-xs border-velox-gold/50 hover:border-velox-gold">
              Configure Yours
            </Link>
          </div>

          <button 
            className="lg:hidden relative z-50 text-velox-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-velox-void flex flex-col justify-center px-8"
          >
            <div className="flex flex-col space-y-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.6, ease: 'easeOut' }}
                >
                  <Link 
                    to={link.path}
                    className="text-h2 font-heading tracking-wider hover:text-velox-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * links.length + 0.3, duration: 0.6, ease: 'easeOut' }}
                className="pt-8 mt-8 border-t border-velox-white/10"
              >
                <Link to="/configurator" className="text-xl font-body text-velox-gold tracking-widest uppercase">
                  Configure Yours &rarr;
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
